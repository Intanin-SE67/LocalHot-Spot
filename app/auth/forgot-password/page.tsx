'use client';
import { Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ForgetPasswordForm() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center p-6 py-20 selection:bg-[#bc13fe] selection:text-white overflow-x-hidden">
      
      {/* Background Decor - แสงฟุ้งสีม่วงและส้ม */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#bc13fe] opacity-10 blur-[120px] rounded-full"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#c2410c] opacity-10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-[700px] flex flex-col items-center gap-12 z-10">
        
        {/* Title: FORGET PASSWORD (ตามรูป) */}
        <div className="relative text-center">
          <h1 className="text-[#bc13fe] text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(188,19,254,0.5)]">
            FORGET PASSWORD
          </h1>
          <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bc13fe] to-transparent"></div>
        </div>

        {/* Description (ตามรูป) */}
        <p className="text-white text-xl md:text-2xl font-medium text-center max-w-[560px] leading-relaxed opacity-90">
          Don&apos;t worry! Just fill in your email and we&apos;ll send you
          <br className="hidden md:block" />
          a link to reset your password.
        </p>

        <form className="w-full flex flex-col gap-12 mt-4">
          
          {/* Email Section (ตามรูป) */}
          <div className="group flex flex-col gap-4">
            <label className="text-white text-3xl font-black uppercase tracking-tight group-focus-within:text-[#bc13fe] transition-colors">
              Email
            </label>
            <div className="relative border-b-2 border-white/20 group-focus-within:border-[#bc13fe] transition-all pb-4 flex items-center">
              <input
                type="email"
                className="w-full bg-transparent text-white text-2xl outline-none placeholder-white/5 font-medium"
                placeholder="enter your email address"
              />
              <Mail className="text-white/40 group-focus-within:text-[#bc13fe] transition-colors" size={28} />
            </div>
          </div>

          {/* Submit Button (ปุ่มส้มยักษ์ตามสไตล์เรา) */}
          <div className="mt-6 flex flex-col items-center gap-10">
            <button
              type="submit"
              className="group relative w-full h-20 bg-[#c2410c] hover:bg-[#ea580c] text-white rounded-3xl text-4xl md:text-5xl font-[1000] uppercase tracking-tighter transition-all active:scale-[0.97] overflow-hidden flex items-center justify-center shadow-[0_20px_50px_rgba(194,65,12,0.3)]"
            >
              <span className="relative z-10">FORGET PASSWORD</span>
              
              {/* แสงวิ่งในปุ่ม */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              {/* Layer สีตอน Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            {/* Back to Login */}
            <Link 
              href="/auth/login"
              className="group flex items-center gap-2 text-white/60 hover:text-white text-xl font-bold transition-all uppercase tracking-widest"
            >
              <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
              Back to login
            </Link>
          </div>
        </form>

      </div>
    </div>
  );
}