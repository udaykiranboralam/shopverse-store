import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShopVerse</h3>
            <p className="text-dark-400">Your one-stop destination for quality products at amazing prices.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-dark-400 hover:text-white transition-colors">Home</Link>
              <Link href="/products" className="text-dark-400 hover:text-white transition-colors">Products</Link>
              <Link href="/cart" className="text-dark-400 hover:text-white transition-colors">Cart</Link>
              <Link href="/contact" className="text-dark-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-2 text-dark-400">
              <p>123 Commerce Street</p>
              <p>New York, NY 10001</p>
              <p>support@shopverse.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="border-t border-dark-700 mt-8 pt-8 text-center text-dark-500 text-sm">
          &copy; {new Date().getFullYear()} ShopVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
