"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const shipping = total >= 500 ? 0 : 99;
  const grandTotal = total + shipping;

  if (items.length === 0 && !submitted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold text-dark-900 mb-4">Nothing to checkout</h1>
        <p className="text-dark-600 mb-8">Add some items to your cart first.</p>
        <Link href="/products" className="btn-primary">Browse Products</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-dark-900 mb-4">Order Confirmed!</h1>
        <p className="text-dark-600 mb-8">Thank you for your purchase. You&apos;ll receive a confirmation email shortly.</p>
        <Link href="/products" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-dark-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={(e) => { e.preventDefault(); clearCart(); setSubmitted(true); }} className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-dark-200 p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First name" className="input" required />
                <input type="text" placeholder="Last name" className="input" required />
                <input type="email" placeholder="Email address" className="input sm:col-span-2" required />
                <input type="tel" placeholder="Phone number" className="input sm:col-span-2" required />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-dark-200 p-6">
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Street address" className="input" required />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="input" />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <input type="text" placeholder="City" className="input" required />
                  <input type="text" placeholder="State" className="input" required />
                  <input type="text" placeholder="ZIP code" className="input" required />
                </div>
                <input type="text" placeholder="Country" className="input" defaultValue="United States" required />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-dark-200 p-6">
              <h2 className="text-xl font-bold mb-4">Payment Details</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Card number" className="input" required />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM / YY" className="input" required />
                  <input type="text" placeholder="CVV" className="input" required />
                </div>
                <input type="text" placeholder="Name on card" className="input" required />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full text-center text-lg py-4">
              Place Order - ₹{grandTotal.toFixed(2)}
            </button>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-dark-50 rounded-xl p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-dark-600 truncate mr-2">{item.name} x{item.quantity}</span>
                  <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-dark-300 pt-3 space-y-2">
              <div className="flex justify-between text-dark-600">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-dark-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="border-t border-dark-300 pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
