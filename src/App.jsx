import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-green-600 text-white grid place-items-center font-bold">L</div>
            <span className="text-sm text-gray-600">© {new Date().getFullYear()} Laundri. All rights reserved.</span>
          </div>
          <div className="text-sm text-gray-500">
            Fresh clothes, fair prices.
          </div>
        </div>
      </footer>
    </div>
  );
}
