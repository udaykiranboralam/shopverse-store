"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="card">
      <div className="relative aspect-square bg-dark-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <p className="text-xs text-primary-600 font-semibold uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-semibold text-lg text-dark-900 mb-1">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < Math.round(product.rating) ? "text-yellow-400" : "text-dark-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-dark-500 ml-1">{product.rating}</span>
        </div>
        <p className="text-dark-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        {product.price ? (
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-dark-900">{formatPrice(product.price)}</span>
            <button
              onClick={() => addItem(product as Product & { price: number })}
              className="btn-primary text-sm px-4 py-2"
            >
              Add to Cart
            </button>
          </div>
        ) : (
          <a
            href="https://wa.me/918073648872"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-4 py-2 text-center block"
          >
            Contact Us
          </a>
        )}
      </div>
    </div>
  );
}
