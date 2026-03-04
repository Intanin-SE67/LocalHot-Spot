'use client';

import { Mail, Key, User } from 'lucide-react';
import Link from 'next/link';

export default function RegisterForm() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center p-6 py-20 selection:bg-[#bc13fe] selection:text-white overflow-x-hidden">
      
      {/* Background Decor - แสงฟุ้งเพิ่มความลึก */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#bc13fe] opacity-10 blur-[120px] rounded-full"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#c2410c] opacity-10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-[600px] flex flex-col items-center gap-14 z-10">
        
        {/* Title: REGISTER */}
        <div className="relative">
          <h1 className="text-[#bc13fe] text-7xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(188,19,254,0.4)]">
            REGISTER
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#bc13fe] to-transparent"></div>
        </div>

        <form className="w-full flex flex-col gap-10">
          
          {/* Email Section */}
          <div className="group flex flex-col gap-3">
            <label className="text-white text-3xl font-black uppercase tracking-tight group-focus-within:text-[#bc13fe] transition-colors">
              Email
            </label>
            <div className="relative border-b-2 border-white/20 group-focus-within:border-[#bc13fe] transition-all pb-4 flex items-center">
              <input
                type="email"
                className="w-full bg-transparent text-white text-2xl outline-none placeholder-white/5 font-medium"
                placeholder="enter your email"
              />
              <Mail className="text-white/40 group-focus-within:text-[#bc13fe] transition-colors" size={24} />
            </div>
          </div>

          {/* Password Section */}
          <div className="group flex flex-col gap-3">
            <label className="text-white text-3xl font-black uppercase tracking-tight group-focus-within:text-[#bc13fe] transition-colors">
              Password
            </label>
            <div className="relative border-b-2 border-white/20 group-focus-within:border-[#bc13fe] transition-all pb-4 flex items-center">
              <input
                type="password"
                className="w-full bg-transparent text-white text-2xl outline-none placeholder-white/5 tracking-[0.3em]"
                placeholder="••••••••"
              />
              <Key className="text-white/40 group-focus-within:text-[#bc13fe] transition-colors" size={24} />
            </div>
          </div>

          {/* Name Section */}
          <div className="group flex flex-col gap-3">
            <label className="text-white text-3xl font-black uppercase tracking-tight group-focus-within:text-[#bc13fe] transition-colors">
              What do you want be called ?
            </label>
            <div className="relative border-b-2 border-white/20 group-focus-within:border-[#bc13fe] transition-all pb-4 flex items-center">
              <input
                type="text"
                className="w-full bg-transparent text-white text-2xl outline-none placeholder-white/5 font-medium"
                placeholder="your nickname"
              />
              <User className="text-white/40 group-focus-within:text-[#bc13fe] transition-colors" size={24} />
            </div>
          </div>

          {/* Submit Button Section - จัดเต็มความสูง h-40 */}
          <div className="mt-8 flex flex-col items-start gap-8">
            <button
              type="submit"
              className="group relative w-full h-20 bg-[#c2410c] hover:bg-[#ea580c] text-white rounded-3xl text-6xl font-[1000] uppercase tracking-tighter transition-all active:scale-[0.97] overflow-hidden flex items-center justify-center shadow-[0_20px_50px_rgba(194,65,12,0.3)] hover:shadow-[0_20px_60px_rgba(234,88,12,0.5)]"
            >
              <span className="relative z-10">SUBMIT</span>
              
              {/* แสงวิ่ง Gradient ภายในปุ่ม */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              {/* Layer มืดด้านล่างเพื่อให้ปุ่มมีมิติ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Footer Text - แก้ไข Syntax Link ให้ถูกต้อง */}
            <p className="text-white/60 text-xl font-medium tracking-tight pl-2">
              Already registered? 
              <Link href="/auth/login" className="text-[#c2410c] hover:text-[#bc13fe] font-bold border-b-2 border-[#c2410c]/30 hover:border-[#bc13fe] transition-all mx-2 italic">
                Login
              </Link> 
              now.
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}