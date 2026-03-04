'use client';

import { Key, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ResetPasswordForm() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center p-6 py-20 selection:bg-[#bc13fe] selection:text-white overflow-x-hidden">
      
      {/* Background Decor - แสงฟุ้งม่วง-ส้ม อันเป็นเอกลักษณ์ */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#bc13fe] opacity-10 blur-[120px] rounded-full"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#c2410c] opacity-10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-[600px] flex flex-col items-center gap-12 z-10">
        
        {/* Title: RESET PASSWORD (Neon Purple) */}
        <div className="relative">
          <h1 className="text-[#bc13fe] text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(188,19,254,0.5)] text-center">
            RESET PASSWORD
          </h1>
          <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bc13fe] to-transparent"></div>
        </div>

        <form className="w-full flex flex-col gap-10 mt-8">
          
          {/* New Password Section */}
          <div className="group flex flex-col gap-3">
            <label className="text-white text-3xl font-black uppercase tracking-tight group-focus-within:text-[#bc13fe] transition-colors">
              New Password
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

          {/* Confirm Password Section */}
          <div className="group flex flex-col gap-3">
            <label className="text-white text-3xl font-black uppercase tracking-tight group-focus-within:text-[#bc13fe] transition-colors">
              Confirm Password
            </label>
            <div className="relative border-b-2 border-white/20 group-focus-within:border-[#bc13fe] transition-all pb-4 flex items-center">
              <input
                type="password"
                className="w-full bg-transparent text-white text-2xl outline-none placeholder-white/5 tracking-[0.3em]"
                placeholder="••••••••"
              />
              <ShieldCheck className="text-white/40 group-focus-within:text-[#bc13fe] transition-colors" size={24} />
            </div>
          </div>

          {/* Submit Button Section - ปุ่มแดงส้มขนาดมหึมา h-40 */}
          <div className="mt-8 flex flex-col items-start gap-8">
            <button
              type="submit"
              className="group relative w-full h-20 bg-[#c2410c] hover:bg-[#ea580c] text-white rounded-3xl text-5xl font-[1000] uppercase tracking-tighter transition-all active:scale-[0.97] overflow-hidden flex items-center justify-center shadow-[0_20px_50px_rgba(194,65,12,0.3)]"
            >
              <div className="relative z-10 flex items-center gap-4">
                <span>RESET PASSWORD</span>
                <ArrowRight size={48} className="group-hover:translate-x-3 transition-transform duration-300" />
              </div>
              
              {/* แสงวิ่งในปุ่ม */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              {/* Layer สีตอน Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            {/* Link กลับไปหน้า Login */}
            <p className="text-white/60 text-xl font-medium tracking-tight">
              Remember your password? 
              <Link href="/auth/login" className="text-[#c2410c] hover:text-[#bc13fe] font-bold border-b border-[#c2410c] hover:border-[#bc13fe] transition-all mx-2">
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