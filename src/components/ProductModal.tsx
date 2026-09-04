"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { useEffect } from "react";

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/50 animate-fadeIn" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-video bg-dark-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <div className="p-6 md:p-8">
          <p className="text-xs text-primary-600 font-semibold uppercase tracking-wider mb-2">
            {product.category}
          </p>
          <h2 className="text-2xl font-bold text-dark-900 mb-3">{product.name}</h2>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < Math.round(product.rating) ? "text-yellow-400" : "text-dark-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-dark-500 ml-1">{product.rating}</span>
          </div>

          <p className="text-dark-600 mb-6 leading-relaxed">{product.description}</p>

          {product.price ? (
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-dark-900">{formatPrice(product.price)}</span>
              <a
                href={`https://wa.me/918073648872?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Please share more details and pricing.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Enquire on WhatsApp
              </a>
            </div>
          ) : (
            <a
              href={`https://wa.me/918073648872?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Please share more details.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center block"
            >
              Enquire on WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
