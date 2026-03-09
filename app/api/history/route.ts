import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth"
import { auth } from "@/lib/auth"

export async function POST(req: Request) {
    const session = await auth.api.getSession({         //header ที่ browser ส่งมาเช่น cookie(เก็บsession token โดยbetter auth จะใช้cookie เช็คว่าuser login อยู่ไหม) ,authrization ,user-agent
        headers: req.headers
    });
    if(!session) {                                      //ถ้าไม่login api ตอบกลับ "not login"
        return Response.json({error:"not login"})
    }
    const body = await req.json().catch(()=>null)       //อ่านbody จาก request เช่น แปลง {"createId":5,...} ---> {createId:5,...}  ,,ส่วน.catch..  ถ้าbodyไม่ใช่json body = null คือจะไม่crash
    if (!body) {
        return Response.json({ error: "no body"});
    }
    const { createId, winnerId } = body                 //ดึงข้อมูลจากbody จาก {createId:5,...}   --->  createId:5,...
    const history = await prisma.history.upsert({       //upsert คือ update +insert
        where:{
            userId_createId:{
                userId: session.user.id,
                createId
            }
        },
        update:{
            winnerId
        },
        create: {
            userId: session.user.id,
            createId,
            winnerId
        }
    });
    return Response.json(history);
}