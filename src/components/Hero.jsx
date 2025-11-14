import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 text-white text-xs shadow-sm">
            <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
            Now with real-time fraud detection
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            The modern way to move money
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            BluePay is a developer-first payments platform with 3D-secure cards, instant payouts, and built-in compliance. All wrapped in a glassmorphic, minimalist design.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a href="#" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow-sm">Start for free</a>
            <a href="#features" className="px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-slate-200 hover:bg-white">See features</a>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-600">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/64?img=${i+5}`} alt="avatar" className="w-8 h-8 rounded-full ring-2 ring-white" />
              ))}
            </div>
            <span>Trusted by 10,000+ teams</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="lg:justify-self-end">
          <div className="w-full max-w-md mx-auto lg:mx-0 bg-white/60 backdrop-blur rounded-2xl border border-white/50 shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm">Savings balance</p>
                <p className="text-3xl font-semibold text-slate-900">$24,830.19</p>
              </div>
              <div className="text-emerald-600 text-sm">+3.4%</div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-white/70 border">Apple •••• 4219</div>
              <div className="p-3 rounded-xl bg-white/70 border">Visa •••• 9931</div>
              <div className="p-3 rounded-xl bg-white/70 border">Mastercard •••• 1180</div>
            </div>
            <button className="mt-6 w-full px-4 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Generate virtual card</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
