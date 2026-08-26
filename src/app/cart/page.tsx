"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-dark-300 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
        <h1 className="text-3xl font-bold text-dark-900 mb-4">Your cart is empty</h1>
        <p className="text-dark-600 mb-8">Looks like you haven&apos;t added anything yet.</p>
        <Link href="/products" className="btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-dark-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-dark-200">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-dark-100">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-dark-900 truncate">{item.name}</h3>
                <p className="text-primary-600 font-bold">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-lg bg-dark-100 flex items-center justify-center hover:bg-dark-200 transition-colors font-bold"
                  >
                    -
                  </button>
                  <span className="font-medium w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-dark-100 flex items-center justify-center hover:bg-dark-200 transition-colors font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-dark-400 hover:text-red-500 transition-colors p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <span className="font-bold text-dark-900">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-dark-50 rounded-xl p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-dark-600">
                <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-dark-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">{total >= 50 ? "Free" : "$4.99"}</span>
              </div>
              <div className="border-t border-dark-300 pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${(total + (total >= 50 ? 0 : 4.99)).toFixed(2)}</span>
              </div>
            </div>
            <Link href="/checkout" className="btn-primary w-full text-center block">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
