import { auth } from "./auth";
import { headers } from "next/headers"; //ใช้สำหรับดึง http request ของ request เช่น cookie authorization user-agent คือ better auth ต้องใช้ cookie ดูว่า user login อยู่ไหม

export async function getSession() {
    //auth.api.getSession() อ่าน cookie ,หาsessionใน db ,และคืนข้อมูลuser
    return await auth.api.getSession({ 
        headers: await headers() //ส่งheaders ไปให้ better Auth เพื่อให้ better auth ดูว่า session ของ user คืออะไร
    })
}