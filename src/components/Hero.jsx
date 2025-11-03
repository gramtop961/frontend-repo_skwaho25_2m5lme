export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-green-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-100 blur-3xl opacity-70" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-20 sm:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Clean clothes, low prices
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Affordable, professional laundry made easy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We pick up, wash with care, and deliver fresh to your door. Transparent pricing, fast turnaround, and eco‑friendly care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/20 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Book a Pickup
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-600/20 bg-white hover:bg-green-50"
              >
                See how it works
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { label: '24h avg', sub: 'turnaround' },
                { label: '4.9/5', sub: 'customer rating' },
                { label: 'Eco+', sub: 'detergents' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-gray-100 bg-white p-4 text-center">
                  <div className="text-xl font-bold text-gray-900">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-green-50 via-emerald-50 to-white grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-xl bg-green-600 text-white grid place-items-center text-2xl font-bold">
                    L
                  </div>
                  <p className="text-gray-600">Your clothes deserve better care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
