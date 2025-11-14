import { Menu, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 grid place-content-center text-white shadow-md">
              <Sparkles size={16} />
            </div>
            <span className="font-semibold tracking-tight">BluePay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 transition inline-flex items-center gap-1">Resources <ChevronDown size={16} /></a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-lg text-slate-700 hover:text-slate-900">Sign in</a>
            <a href="#" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm">Get started</a>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2 text-sm text-slate-700">
            <a href="#features" className="px-3 py-2 rounded-lg hover:bg-slate-100">Features</a>
            <a href="#pricing" className="px-3 py-2 rounded-lg hover:bg-slate-100">Pricing</a>
            <a href="#faq" className="px-3 py-2 rounded-lg hover:bg-slate-100">Resources</a>
            <div className="mt-2 flex gap-2">
              <a href="#" className="flex-1 px-4 py-2 rounded-lg text-center border border-slate-200">Sign in</a>
              <a href="#" className="flex-1 px-4 py-2 rounded-lg text-center bg-slate-900 text-white">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
