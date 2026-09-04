export interface Product {
  id: string;
  name: string;
  price?: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mango Plantation Plot",
    description: "Own a piece of lush mango orchard. Premium mango trees planted and maintained with organic practices.",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Anjeer (Fig) Plantation Plot",
    price: 4999,
    description: "Premium Dyanna California Fig variety. Large-scale anjeer plantation for dry fig production.",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&h=400&fit=crop",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Coconut Plantation Plot",
    description: "Tropical coconut plantation with high-yield hybrid varieties. Long-term investment with steady returns.",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=400&h=400&fit=crop",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Mahogany Plantation Plot",
    description: "Premium mahogany forestry plantation. High-value timber trees with excellent long-term appreciation.",
    category: "Forestry",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
    rating: 4.8,
  },
  {
    id: "5",
    name: "Red Sandalwood Plantation",
    description: "Exclusive red sandalwood plantation. Rare and highly valuable timber with exceptional investment potential.",
    category: "Forestry",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400&h=400&fit=crop",
    rating: 4.9,
  },
  {
    id: "6",
    name: "Weekend Farm Retreat",
    description: "Experience natural farm living on weekends. Stay at our farm, enjoy fresh produce, and connect with nature.",
    category: "Farm Retreat",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop",
    rating: 4.6,
  },
  {
    id: "7",
    name: "Farm Plot - Small",
    description: "Own your own farm plot. Small managed ownership model with organic farming on your land.",
    category: "Farm Plots",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop",
    rating: 4.7,
  },
  {
    id: "8",
    name: "Farm Plot - Premium",
    description: "Premium farm plot with full management support. Includes plantation setup and organic certification.",
    category: "Farm Plots",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop",
    rating: 4.9,
  },
  {
    id: "9",
    name: "Organic Anjeer (Dry Fig) Box",
    price: 899,
    description: "Farm-grown, naturally processed dry figs. Premium quality Anjeer direct from our plantations.",
    category: "Farm Produce",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=400&h=400&fit=crop",
    rating: 4.8,
  },
];

export const categories = ["Fruits", "Forestry", "Farm Plots", "Farm Retreat", "Farm Produce"];
