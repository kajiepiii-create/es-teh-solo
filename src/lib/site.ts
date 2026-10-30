export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  short: string;
  tag: string;
  image: string;
  featured?: boolean;
};

export const WA_NUMBER = "6285335103030";
export const WA_DISPLAY = "0853-3510-3030";

export const DEFAULT_WA_MESSAGE =
  "Halo Es Teh Solo, saya mau pesan minuman. Boleh lihat menu dan harga yang tersedia?";

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatRupiah(value: number) {
  return `Rp${value.toLocaleString("id-ID")}`;
}

export const PRODUCTS: Product[] = [
  {
    id: "es-teh",
    name: "Es Teh",
    price: 3000,
    description:
      "Seduhan teh hitam yang mantap, es yang bikin adem, dan manis pas dari gula asli.",
    short: "Segar & klasik",
    tag: "Paling laris",
    image: "/images/menu-es-teh.webp",
    featured: true,
  },
  {
    id: "thai-tea",
    name: "Thai Tea",
    price: 5000,
    description:
      "Teh Thailand yang creamy dengan manis lembut. Pas buat yang suka rasa lebih rich.",
    short: "Manis & creamy",
    tag: "Favorit manis",
    image: "/images/menu-thai-tea.webp",
  },
  {
    id: "less-sugar",
    name: "Es Less Sugar",
    price: 2500,
    description:
      "Rasa teh tetap segar dengan gula yang lebih sedikit. Ringan, tapi nggak hambar.",
    short: "Lebih ringan manisnya",
    tag: "Lebih ringan",
    image: "/images/menu-less-sugar.webp",
  },
  {
    id: "paket-nongkrong",
    name: "Paket Nongkrong",
    price: 10000,
    originalPrice: 11000,
    description:
      "2 Es Teh + 1 Thai Tea. Pas banget buat dibagi bareng teman atau nemenin belajar.",
    short: "2 Es Teh + 1 Thai Tea",
    tag: "Paling hemat",
    image: "/images/bundle-cups.webp",
  },
];

export function productById(id: string) {
  return PRODUCTS.find((product) => product.id === id);
}
