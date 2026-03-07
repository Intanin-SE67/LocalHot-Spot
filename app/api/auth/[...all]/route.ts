import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth); //better auth สร้าง apiอัตโนมัติ ,รองรับ Http method , เชื่อมauth กับ API