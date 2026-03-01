
import React from 'react';
import { Mail, Key, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center p-6 py-20 selection:bg-[#bc13fe] selection:text-white">
      
      {/* Background Decor - แสงฟุ้งๆ ด้านหลัง */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#bc13fe] opacity-10 blur-[120px] rounded-full"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#c2410c] opacity-10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-[600px] flex flex-col items-center gap-16 z-10">
        
        {/* Title: LOGIN (Neon Glow) */}
        <div className="relative">
          <h1 className="text-[#bc13fe] text-8xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(188,19,254,0.5)]">
            LOGIN
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#bc13fe] to-transparent"></div>
        </div>

        <form className="w-full flex flex-col gap-12">
          
          {/* Email Section */}
          <div className="group flex flex-col gap-4">
            <label className="text-gray-400 text-xl font-bold uppercase tracking-widest group-focus-within:text-[#bc13fe] transition-colors">
              Email Address
            </label>
            <div className="relative border-b-2 border-white/10 group-focus-within:border-[#bc13fe] transition-all pb-4 flex items-center">
              <input
                type="email"
                className="w-full bg-transparent text-white text-3xl outline-none placeholder-white/10 font-medium"
                placeholder="NAME@EXAMPLE.COM"
              />
              <Mail className="text-white/20 group-focus-within:text-[#bc13fe] transition-colors" size={28} />
            </div>
          </div>

          {/* Password Section */}
          <div className="group flex flex-col gap-4">
            <label className="text-gray-400 text-xl font-bold uppercase tracking-widest group-focus-within:text-[#bc13fe] transition-colors">
              Password
            </label>
            <div className="relative border-b-2 border-white/10 group-focus-within:border-[#bc13fe] transition-all pb-4 flex items-center">
              <input
                type="password"
                className="w-full bg-transparent text-white text-3xl outline-none placeholder-white/10 tracking-[0.2em]"
                placeholder="••••••••"
              />
              <Key className="text-white/20 group-focus-within:text-[#bc13fe] transition-colors" size={28} />
            </div>
          </div>

          {/* Login Button: ปรับให้ใหญ่ขึ้นมหาศาล (Huge!) */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="group relative w-full h-20 bg-[#c2410c] hover:bg-[#ea580c] text-white rounded-3xl text-4xl font-black uppercase tracking-tighter transition-all active:scale-[0.98] overflow-hidden flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(194,65,12,0.5)] hover:shadow-[0_0_50px_rgba(234,88,12,0.7)]"
            >
              <div className="relative z-10 flex items-center justify-center gap-4">
                Enter System
                <ArrowRight size={40} className="group-hover:translate-x-3 transition-transform duration-300" />
              </div>
              
              {/* แสงวิ่งในปุ่มตอน hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              
              {/* เติมพื้นหลังไล่ระดับสีตอน Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#ea580c] to-[#c2410c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </form>

        {/* Footer: Clean & Modern */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-6 text-white/40 text-xl font-medium uppercase tracking-wider">
          <Link href="/auth/register" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit">
            Register
          </Link>
          <Link href="/auth/forgot-password" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit">
            Forgot access?
          </Link>
        </div>

      </div>
    </div>
  );
}