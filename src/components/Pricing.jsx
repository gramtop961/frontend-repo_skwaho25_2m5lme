import { Check } from 'lucide-react';

function PriceItem({ title, price, subtitle, features, highlight = false }) {
  return (
    <div className={`relative rounded-2xl border ${highlight ? 'border-green-200 ring-2 ring-green-600/20' : 'border-gray-100'} bg-white p-6 shadow-sm`}> 
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-2.5 py-0.5 text-xs font-semibold text-white shadow">Best value</span>
      )}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-gray-900">{price}</span>
        <span className="text-sm text-gray-500">{subtitle}</span>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <Check className="mt-0.5 h-4 w-4 text-green-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${highlight ? 'bg-green-600 text-white hover:bg-green-700 focus-visible:outline-green-600' : 'bg-gray-900 text-white hover:bg-black focus-visible:outline-gray-900'}`}
      >
        Book Pickup
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, honest pricing</h2>
          <p className="mt-3 text-gray-600">Pay only for what you need. No hidden fees.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PriceItem
            title="Per Kg"
            price="$1.99"
            subtitle="/ kg"
            features={[
              'Doorstep pickup & delivery',
              'Eco-friendly wash & dry',
              'Crisp fold & pack',
            ]}
          />

          <PriceItem
            title="Per Item"
            price="$0.99"
            subtitle="/ item (wash & fold)"
            highlight
            features={[
              'Same great care per piece',
              'Perfect for light loads',
              'No minimum order',
            ]}
          />

          <PriceItem
            title="Dry Cleaning"
            price="From $4.99"
            subtitle="/ item"
            features={[
              'Gentle solvent cleaning',
              'Hand finish options',
              'Premium garment care',
            ]}
          />
        </div>

        <p id="contact" className="mt-10 text-center text-sm text-gray-500">
          Prefer phone? Call us at <a className="font-semibold text-green-700 hover:underline" href="tel:+10000000000">+1 (000) 000‑0000</a> or email <a className="font-semibold text-green-700 hover:underline" href="mailto:hello@laundri.example">hello@laundri.example</a>
        </p>
      </div>
    </section>
  );
}
