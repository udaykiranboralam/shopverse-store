import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const offerLinks = [
  { title: "Fruit Plantations", category: "Fruit Plantations", desc: "Mango, Anjeer (Fig), Coconut — premium varieties with organic care.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { title: "Forestry Development", category: "Forestry", desc: "Mahogany and Red Sandalwood plantations — high-value timber investments.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { title: "Farm Plots & Retreats", category: "Farm Plots", desc: "Own your farm, experience natural living, weekend retreats in nature.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
];

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex items-center justify-center gap-12">
            <div className="max-w-3xl">
              <p className="text-primary-200 text-sm font-semibold uppercase tracking-wider mb-4">Organic Farming, Natural Living</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Grow With Nature. Invest In Life.
              </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-4">
              Prime Agro Farms offers organic farming, fruit plantations, forestry development, and farm plot ownership near Zaheerabad.
            </p>
            <p className="text-primary-200 text-base mb-8">
              సేంద్రియ వ్యవసాయం, సహజ జీవనం &middot; ಸೇಂದ್ರಿಯ ಕೃషి, ಸಹಜ జీవనం
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors">
                Explore Offerings
              </Link>
              <Link href="/contact" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Prime Agro Farms Logo"
                width={360}
                height={360}
                className="rounded-full border-8 border-white/30 shadow-2xl"
                style={{ marginRight: "-2rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-900 mb-4">What We Offer</h2>
          <p className="text-dark-600 max-w-2xl mx-auto">Combining agriculture, lifestyle, and long-term value creation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerLinks.map((item) => (
            <Link
              key={item.title}
              href={`/products?category=${encodeURIComponent(item.category)}`}
              className="p-8 bg-white rounded-xl shadow-md border border-dark-100 text-center hover:shadow-xl hover:border-primary-300 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-700 transition-colors">{item.title}</h3>
              <p className="text-dark-600">{item.desc}</p>
              <span className="inline-block mt-3 text-primary-600 font-semibold text-sm group-hover:underline">
                View Offerings &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Featured Offerings</h2>
            <p className="text-dark-600 max-w-2xl mx-auto">Explore our most popular plantation and farm ownership options.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Offerings
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-700 rounded-2xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Why Prime Agro Farms?</h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-10">Farm-Grown &rarr; Naturally Processed &rarr; Direct to Market. We combine organic farming with smart investment and natural living.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { num: "5+", label: "Plantation Varieties" },
                { num: "100%", label: "Organic Practices" },
                { num: "500+", label: "Acres Managed" },
                { num: "24/7", label: "Farm Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold mb-1">{stat.num}</div>
                  <div className="text-primary-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
