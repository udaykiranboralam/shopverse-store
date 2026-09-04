"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(
    categories.includes(initialCategory) ? initialCategory : "All"
  );

  const allCategories = ["All", ...categories];

  const filtered = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dark-900 mb-4">Our Offerings</h1>
        <p className="text-dark-600 max-w-2xl mx-auto">Explore our range of plantation investments, farm plots, and organic produce.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-primary-600 text-white shadow-md"
                : "bg-dark-100 text-dark-600 hover:bg-dark-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-dark-500">
          <p className="text-xl">No offerings found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-dark-500">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
