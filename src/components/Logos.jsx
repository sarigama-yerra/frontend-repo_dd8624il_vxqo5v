export default function Logos() {
  const logos = [
    'https://dummyimage.com/100x28/111827/ffffff&text=Slate',
    'https://dummyimage.com/100x28/111827/ffffff&text=Byte',
    'https://dummyimage.com/100x28/111827/ffffff&text=Nova',
    'https://dummyimage.com/100x28/111827/ffffff&text=Pulse',
    'https://dummyimage.com/100x28/111827/ffffff&text=Arc',
    'https://dummyimage.com/100x28/111827/ffffff&text=Peak'
  ];
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-slate-500">Trusted by product-led teams</p>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-x-8 gap-y-6 items-center opacity-70">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="logo" className="mx-auto h-7 w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}
