"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

const offerLinks = [
  { title: "Fruit Plantations", category: "Fruits", icon: "🥭", desc: "Mango, Anjeer (Dyanna California Fig), Coconut" },
  { title: "Forestry", category: "Forestry", icon: "🌳", desc: "Mahogany, Red Sandalwood, Eco Forest Development" },
  { title: "Farm Ownership", category: "Farm Plots", icon: "🏡", desc: "Managed Farm Plots, Weekend Retreat, Nature Living, Plantation Investment" },
];

const heroSlides = [
  { src: "/mango.png", alt: "Mango Plantation" },
  { src: "/anjeer.png", alt: "Anjeer Plantation" },
  { src: "/mahaghony.png", alt: "Mahogany Plantation" },
  { src: "/redsandal.png", alt: "Red Sandalwood Plantation" },
];

function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#205d23] to-[#163d17]" />
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 ${i === index ? "animate-kenburns" : "opacity-0"}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}
      {/* Soft overlay so text stays readable but image remains clear */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-[650px] bg-black/30 backdrop-blur-[2px] rounded-2xl p-6 md:p-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6">
            Organic Farming <br />
            <span className="text-[#7CFC00]">Natural Living</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            సేంద్రియ వ్యవసాయం, సహజ జీవనం
            <br />
            <br />
            Own a farm. Experience nature.
            <br />
            Invest in sustainable plantations.
          </p>
          <Link href="/products" className="inline-block px-10 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-[#205d23] hover:-translate-y-1 transition-all">
            Explore Offerings
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <HeroSlideshow />

      {/* ABOUT */}
      <FadeSection className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary-600 mb-3">About Prime Agro Farms</h2>
            <p className="text-dark-600 text-lg">Nature Driven Agriculture • Plantation • Lifestyle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Image
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80"
              alt="Prime Agro Farms"
              width={900}
              height={600}
              className="w-full rounded-3xl shadow-2xl"
            />
            <div>
              <h3 className="text-3xl font-bold text-primary-600 mb-6">Growing Nature. Creating Value.</h3>
              <p className="leading-relaxed mb-5 text-dark-700">
                Prime Agro Farms is a nature-driven agricultural and plantation initiative focused on Organic Farming, Fruit Plantations, Forestry Development and Farm Plot Ownership.
              </p>
              <p className="leading-relaxed text-dark-700">
                We combine agriculture, lifestyle and long-term value creation enabling individuals to own and experience natural farm living.
              </p>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* PLANTATION OFFERINGS */}
      <FadeSection className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary-600 mb-3">Our Plantation Offerings</h2>
            <p className="text-dark-600 text-lg">Fruit & Forestry Development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerLinks.map((item) => (
              <Link
                key={item.title}
                href={`/products?category=${encodeURIComponent(item.category)}`}
                className="bg-white p-9 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2.5 transition-transform duration-300"
              >
                <div className="text-[45px]">{item.icon}</div>
                <h3 className="mt-5 mb-2 text-primary-600 text-xl font-bold">{item.title}</h3>
                <ul className="pl-4 leading-8 text-dark-700">
                  {item.desc.split(", ").map((it) => (
                    <li key={it} className="list-disc">{it}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* SPECIAL FOCUS */}
      <FadeSection className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-600 text-white rounded-[25px] text-center p-10 md:p-[70px]">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Special Focus</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              🌿 Developing one of the region's largest Anjeer (Fig) plantations.
              <br />
              <br />
              From Farm-Grown ➜ Naturally Processed ➜ Direct to Market
              <br />
              <br />
              Upcoming Premium Dry Fig (Anjeer) Brand.
            </p>
          </div>
        </div>
      </FadeSection>

      {/* FEATURED */}
      <FadeSection className="bg-[#f0f7f0] px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-primary-600 mb-3">Featured Offerings</h2>
            <p className="text-dark-600 text-lg">Explore our most popular plantation and farm ownership options.</p>
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
      </FadeSection>

      {/* STATS */}
      <FadeSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#205d23] rounded-[25px] p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Prime Agro Farms?</h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-10">Farm-Grown ➜ Naturally Processed ➜ Direct to Market. We combine organic farming with smart investment and natural living.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { num: "5+", label: "Plantation Varieties" },
                { num: "100%", label: "Organic Practices" },
                { num: "500+", label: "Acres Managed" },
                { num: "24/7", label: "Farm Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold mb-1">{stat.num}</div>
                  <div className="text-primary-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeSection>
    </div>
  );
}
