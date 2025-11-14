export default function CTA(){
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border bg-slate-900 text-white p-10 sm:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.35),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(129,140,248,0.25),transparent_35%)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Start building with BluePay today</h3>
            <p className="mt-2 text-slate-200/90 max-w-2xl">Issue cards, move funds, and manage risk — all with clean APIs and delightful UX.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100">Create account</a>
              <a href="#" className="px-5 py-3 rounded-xl bg-white/10 ring-1 ring-inset ring-white/20 hover:bg-white/15">Read the docs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
