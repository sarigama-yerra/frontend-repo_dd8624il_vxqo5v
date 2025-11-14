import { Shield, CreditCard, Zap, Globe, LineChart, Wallet } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Bank-grade security', desc: 'End-to-end encryption, tokenized cards, and risk-based authentication.' },
  { icon: CreditCard, title: '3D secure cards', desc: 'Instantly issue virtual and physical cards with dynamic spend controls.' },
  { icon: Zap, title: 'Real-time payouts', desc: 'Send funds globally in seconds with transparent fees and FX.' },
  { icon: Globe, title: 'Global coverage', desc: 'Scale to 180+ countries with local rails and compliant onboarding.' },
  { icon: LineChart, title: 'Advanced analytics', desc: 'Track authorization rates, disputes, and ROI in real time.' },
  { icon: Wallet, title: 'Multi-wallets', desc: 'Segment balances and automate treasury across products.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to move money</h2>
          <p className="mt-3 text-slate-600">Build, launch, and scale with building blocks that fit your product and your roadmap.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="rounded-2xl border bg-white shadow-sm p-6">
              <div className="size-10 grid place-content-center rounded-xl bg-slate-900 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
