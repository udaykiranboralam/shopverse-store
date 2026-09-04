import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Prime Agro Farms</h3>
            <p className="text-dark-400 mb-2">Organic Farming, Natural Living</p>
            <p className="text-dark-500 text-sm">సేంద్రియ వ్యవసాయం, సహజ జీవనం</p>
            <p className="text-dark-500 text-sm">ಸೇಂದ್ರಿಯ ಕೃಷಿ, ಸಹಜ ಜೀವನ</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-dark-400 hover:text-white transition-colors">Home</Link>
              <Link href="/products" className="text-dark-400 hover:text-white transition-colors">Offerings</Link>
              <Link href="/cart" className="text-dark-400 hover:text-white transition-colors">Cart</Link>
              <Link href="/contact" className="text-dark-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-2 text-dark-400">
              <p>Sy No 165/3 &amp; 4, Kodambal</p>
              <p>Chitguppa, Karnataka - 585412</p>
              <p>Near Zaheerabad (Telangana Border)</p>
              <p className="mt-2 font-medium text-white">Phone / WhatsApp: 8073648872</p>
            </div>
          </div>
        </div>
        <div className="border-t border-dark-700 mt-8 pt-8 text-center text-dark-500 text-sm">
          &copy; {new Date().getFullYear()} Prime Agro Farms. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
