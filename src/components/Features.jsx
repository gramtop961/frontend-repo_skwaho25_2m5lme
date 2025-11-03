import { Clock, Shield, Truck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Doorstep pickup',
    desc: 'Schedule in seconds. We come to you, so you save time.'
  },
  {
    icon: Clock,
    title: 'Fast turnaround',
    desc: 'Fresh laundry delivered in as little as 24 hours.'
  },
  {
    icon: Shield,
    title: 'Gentle care',
    desc: 'Professionally handled with fabric-safe, eco-friendly detergents.'
  },
  {
    icon: Sparkles,
    title: 'Spotless finish',
    desc: 'Crisp folds and a clean scent—every single time.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need, for less</h2>
          <p className="mt-3 text-gray-600">A simple service built around convenience, care, and savings.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
