export interface Product {
  id: string;
  discount?: string;
  category: string;
  title: string;
  rating?: number;
  reviewsCount?: number;
  oldPrice?: number;
  price: number;
  image: string;
}

export const productsData: Product[] = [
   { id: "prod-1", discount: "-25 %", category: "Esche – Brennholz", title: "Palette Gespaltenes und Kammertrockenes Eschenbrennholz, 25 cm", rating: 5, reviewsCount: 214, oldPrice: 410.00, price: 307.30, image: "/img/prod/hele-pallet-essenhout-schuin-transparant-light-2-2-1.jpg" },
  { id: "prod-2", discount: "-29 %", category: "Eiche – Brennholz", title: "Palette Gespaltenes und Kammertrockenes Eichenbrennholz, 25 cm", rating: 5, reviewsCount: 431, oldPrice: 429.00, price: 305.90, image: "/img/prod/hele-pallet-eikenhout-schuin-transparant-light-1.jpg" },
  { id: "prod-3", category: "Esche – Brennholz", title: "Halbpalette Gespaltenes Brennholz (Birke & Esche)", rating: 4.5, reviewsCount: 279, price: 195.30, image: "/img/prod/halve-pallet-berken-essen-mix-schuin-transparant-light.jpg" },
  { id: "prod-4", discount: "-30 %", category: "Hainbuche – Brennholz", title: "Palette Gespaltenes und Kammertrockenes Hainbuchenbrennholz, 25 cm", rating: 4, reviewsCount: 58, oldPrice: 449.00, price: 314.30, image: "/img/prod/hele-pallet-haagbeuk-schuin-transparant-light_2-1.jpg" },
  { id: "prod-5", category: "Brennholz", title: "100% Natürliche Holzwolle-Kaminanzünder (50 Stück)", rating: 4, reviewsCount: 58, price: 5.60, image: "/img/prod/allume-feu-100-naturel-en-laine-de-bois-50-pcs-2-430x430.webp" },
  { id: "prod-6", discount: "-30 %", category: "Brennholz", title: "120 kg Trockenes Buchenholz, Brennholz, Anfeuerholz, Hartholz", rating: 4, reviewsCount: 58, oldPrice: 84.00, price: 58.80, image: "/img/prod/7c66e9cf-d354-4e2f-9af7-8e6ccf87c873-400x300.avif" },
  { id: "prod-7", discount: "-30 %", category: "Birke – Brennholz", title: "88 Säcke Gespaltenes und Kammertrockenes Birkenbrennholz, 25 cm", rating: 4, reviewsCount: 58, oldPrice: 409.00, price: 286.30, image: "/img/prod/80-zakken-haardhout_2-430x430.png" },
  { id: "prod-8", discount: "-30 %", category: "Holzpellets", title: "Bioenergie-Pellets – Palette mit 66 Säcken à 15 kg", rating: 4, reviewsCount: 58, oldPrice: 380.00, price: 265.90, image: "/img/prod/74-large_default-1-430x430.webp" },
  { id: "prod-9", category: "Brennholz", title: "Brennholz – 25 cm – Bündel auf Palette (1,3 m³) – Extra Trocken", rating: 4, reviewsCount: 58, price: 301.00, image: "/img/prod/bois25-extrasec-brz-430x430.webp" },
  { id: "prod-10", discount: "-31 %", category: "Brennholz", title: "Brennholz – 33 cm – Bündel auf Palette (1,7 m³)", rating: 4, reviewsCount: 58, oldPrice: 310.00, price: 215.00, image: "/img/prod/buches-de-bois-sec-40cm-3-1-430x430.webp" },
  { id: "prod-11", category: "Brennholz", title: "Brennholz Lose, Geschnitten auf 50 cm, 100 % Hartholz", rating: 4, reviewsCount: 58, price: 46.50, image: "/img/prod/Bois-Vrac-arrivage-scaled-2-430x410.webp" },
  { id: "prod-12", discount: "-30 %", category: "Holzpellets", title: "Butagaz Holzpellets, Palette mit 66 Säcken à 15 kg", rating: 4, reviewsCount: 58, oldPrice: 400.00, price: 280.00, image: "/img/prod/image-3-1-430x385.webp" },
  { id: "prod-13", discount: "-8 %", category: "Holzbriketts", title: "Pollmeier Premium Plus Buchenholzbriketts, 960 kg", rating: 4, reviewsCount: 58, oldPrice: 310.00, price: 286.30, image: "/img/prod/Pollmeier10Palette-Photoroom-430x430.jpg" },
  { id: "prod-14", discount: "-30 %", category: "Holzpellets", title: "ECOBIO Holzpellets, Palette mit 66 Säcken à 15 kg", rating: 4, reviewsCount: 58, oldPrice: 426.00, price: 297.00, image: "/img/prod/ECOBIO-1-PALETTE-600x658-1-1-430x472.webp" },
  { id: "prod-15", discount: "-26 %", category: "Holzpellets", title: "Helios Holzpellets – Palette mit 65 Säcken à 15 kg", rating: 4, reviewsCount: 58, oldPrice: 360.00, price: 266.00, image: "/img/prod/20-large_default-1-1-430x430.webp" },
  { id: "prod-16", discount: "-30 %", category: "Holzbriketts", title: "Uckermark Holzbriketts, 960 kg", rating: 4, reviewsCount: 58, oldPrice: 329.00, price: 230.30, image: "/img/prod/holzbriketts-uckermark-palettenware-960kg-informationen-430x430.jpg" },
  { id: "prod-17", discount: "-26 %", category: "Holzpellets", title: "Green Energy Pellets – Palette mit 65 Säcken à 15 kg", rating: 4, reviewsCount: 58, oldPrice: 360.00, price: 266.00, image: "/img/prod/3-Pellet-Green-Energy-Palette-de-65-sacs-de-15-kg-1-430x430.webp" },
  { id: "prod-18", discount: "-30 %", category: "Kaminofen", title: "TORON 50 8 kW – Kaminofen von DEVILLE", rating: 5, reviewsCount: 214, oldPrice: 1342.00, price: 939.60, image: "/img/prod/poele-bois-deville-toron-50-8-1-2-300x300.webp" },
  { id: "prod-19", discount: "-30 %", category: "Kaminofen", title: "Kaminofen SARA 12 kW – INTERSTOVES", rating: 5, reviewsCount: 431, oldPrice: 577.00, price: 403.10, image: "/img/prod/poele-bois-interstoves-sara-12-300x300.webp" },
  { id: "prod-20", discount: "-30 %", category: "Kaminofen", title: "Kaminofen SANDY 8 kW – LAB – DEVILLE", rating: 4.5, reviewsCount: 1142, oldPrice: 1142.00, price: 799.40, image: "/img/prod/poele-bois-deville-sandy-8-300x300.webp" },
  { id: "prod-21", discount: "-30 %", category: "Kaminofen", title: "Kaminofen LYA 12 kW – INTERSTOVES", rating: 4, reviewsCount: 58, oldPrice: 489.00, price: 342.30, image: "/img/prod/poele-bois-interstoves-lya-12-300x300.webp" },
  { id: "prod-22", discount: "-30 %", category: "Kaminofen", title: "ALESSIA 14 kW – Kaminofen von INTERSTOVES", rating: 4, reviewsCount: 58, oldPrice: 577.00, price: 403.10, image: "/img/prod/poele-bois-interstoves-alessia-14-2-300x300.webp" },
  { id: "prod-23", discount: "-30 %", category: "Kaminofen", title: "Raumluftunabhängiger Kaminofen EGUZKI 6 kW – DEVILLE", rating: 4, reviewsCount: 58, oldPrice: 2600.00, price: 1820.00, image: "/img/prod/poele-bois-deville-eguzki-6-300x300.webp" },

  // Doublons conservés avec les données corrigées (autres images)
  { id: "prod-24", category: "Brennholz", title: "100% Natürliche Holzwolle-Kaminanzünder (50 Stück)", rating: 4, reviewsCount: 58, price: 5.60, image: "/img/prod/allume-feu-100-naturel-en-laine-de-bois-50-pcs-2-430x430-2.webp" },
  { id: "prod-25", discount: "-29 %", category: "Eiche – Brennholz", title: "Palette Gespaltenes und Kammertrockenes Eichenbrennholz, 25 cm", rating: 4, reviewsCount: 58, oldPrice: 429.00, price: 305.90, image: "/img/prod/hele-pallet-eikenhout-schuin-transparant-light-1-1.webp" },
  { id: "prod-26", discount: "-30 %", category: "Birke – Brennholz", title: "88 Säcke Gespaltenes und Kammertrockenes Birkenbrennholz, 25 cm", rating: 4, reviewsCount: 58, oldPrice: 409.00, price: 286.30, image: "/img/prod/80-zakken-haardhout_2-430x430-2.webp" },
  { id: "prod-27", discount: "-30 %", category: "Holzpellets", title: "Bioenergie-Pellets – Palette mit 66 Säcken à 15 kg", rating: 4, reviewsCount: 58, oldPrice: 380.00, price: 265.90, image: "/img/prod/74-large_default-1-430x430-2.webp" },

];

export const featuredProductsData: Product[] = [
  {
    id: "bestseller-esche-25cm",
    discount: "-24 %",
    category: "Esche – Brennholz",
    title: "Palette gespaltenes und kammgetrocknetes Eschenbrennholz, 25 cm",
    rating: 5,
    reviewsCount: 214,
    oldPrice: 439,
    price: 307.3,
    image: "/img/prod/hele-pallet-essenhout-schuin-transparant-light-2-2-1.jpg",
  },
  {
    id: "bestseller-eiche-25cm",
    discount: "-21 %",
    category: "Eiche – Brennholz",
    title: "Palette gespaltenes und kammgetrocknetes Eichenbrennholz, 25 cm",
    rating: 5,
    reviewsCount: 431,
    oldPrice: 429,
    price: 300.3,
    image: "/img/prod/hele-pallet-eikenhout-schuin-transparant-light-1.jpg",
  },
  {
    id: "bestseller-esche-halb",
    category: "Esche – Brennholz",
    title: "Halbe Palette gespaltenes Brennholz",
    rating: 4.5,
    reviewsCount: 279,
    price: 195.3,
    image: "/img/prod/halve-pallet-berken-essen-mix-schuin-transparant-light.jpg",
  },
  {
    id: "bestseller-haagbuche-25cm",
    discount: "-22 %",
    category: "Hainbuche – Brennholz",
    title: "Palette gespaltenes und kammgetrocknetes Brennholz, 25 cm",
    rating: 4,
    reviewsCount: 58,
    oldPrice: 449,
    price: 314.3,
    image: "/img/prod/hele-pallet-haagbeuk-schuin-transparant-light_2-1.jpg",
  },
  {
    id: "bestseller-buche-25cm",
    discount: "-18 %",
    category: "Buche – Brennholz",
    title: "Palette gespaltenes und kammgetrocknetes Buchenbrennholz, 25 cm",
    rating: 5,
    reviewsCount: 312,
    oldPrice: 459,
    price: 376.38,
    image: "/img/prod/hele-pallet-essenhout-schuin-transparant-light-2-2-1.jpg",
  },
  {
    id: "bestseller-holzpellets-15kg",
    discount: "-15 %",
    category: "Holzpellets",
    title: "ENplus A1 Premium Holzpellets – 66 Säcke à 15kg (990kg)",
    rating: 5,
    reviewsCount: 189,
    oldPrice: 499,
    price: 424.15,
    image: "/img/prod/hele-pallet-eikenhout-schuin-transparant-light-1.jpg",
  },
  {
    id: "bestseller-holzbriketts-ruf",
    discount: "-20 %",
    category: "Holzbriketts",
    title: "RUF Holzbriketts Hartholz – Palette 960 kg",
    rating: 4.5,
    reviewsCount: 145,
    oldPrice: 420,
    price: 336,
    image: "/img/prod/halve-pallet-berken-essen-mix-schuin-transparant-light.jpg",
  },
  {
    id: "bestseller-birke-30cm",
    discount: "-25 %",
    category: "Birke – Brennholz",
    title: "Palette gespaltenes Birkenbrennholz, 30 cm",
    rating: 4.5,
    reviewsCount: 98,
    oldPrice: 399,
    price: 299.25,
    image: "/img/prod/hele-pallet-haagbeuk-schuin-transparant-light_2-1.jpg",
  },
  {
    id: "bestseller-pini-kay-briketts",
    discount: "-12 %",
    category: "Holzbriketts",
    title: "Pini-Kay Hartholzbriketts mit Zugloch – Palette 960 kg",
    rating: 5,
    reviewsCount: 87,
    oldPrice: 460,
    price: 404.8,
    image: "/img/prod/hele-pallet-essenhout-schuin-transparant-light-2-2-1.jpg",
  },
  {
    id: "bestseller-mischholz-25cm",
    category: "Mischholz",
    title: "Palette Laubholz-Mix kammgetrocknet, 25 cm",
    rating: 4,
    reviewsCount: 164,
    price: 285,
    image: "/img/prod/hele-pallet-eikenhout-schuin-transparant-light-1.jpg",
  },
];

export const stoveProductsData: Product[] = [
  {
    id: "poele-toron-50",
    discount: "-38 %",
    category: "Kaminofen",
    title: "TORON 50 8 kW – Poêle à bois DEVILLE",
    rating: 5,
    reviewsCount: 214,
    oldPrice: 1342,
    price: 939.4,
    image: "/img/prod/poele-bois-deville-toron-50-8-1-2-300x300.webp",
  },
  {
    id: "poele-sara-12",
    discount: "-44 %",
    category: "Kaminofen",
    title: "Poêle à bois SARA 12 kW – INTERSTOVES",
    rating: 5,
    reviewsCount: 431,
    oldPrice: 577,
    price: 403.9,
    image: "/img/prod/poele-bois-interstoves-sara-12-300x300.webp",
  },
  {
    id: "poele-sandy-8",
    discount: "-20 %",
    category: "Kaminofen",
    title: "Poêle à bois SANDY 8 kW – LAB – DEVILLE",
    rating: 4.5,
    reviewsCount: 1142,
    price: 799.4,
    image: "/img/prod/poele-bois-deville-sandy-8-300x300.webp",
  },
  {
    id: "poele-lya-12",
    discount: "-22 %",
    category: "Kaminofen",
    title: "Poêle à bois LYA 12 kW – INTERSTOVES",
    rating: 4,
    reviewsCount: 58,
    oldPrice: 489,
    price: 342.3,
    image: "/img/prod/poele-bois-interstoves-lya-12-300x300.webp",
  },
  {
    id: "poele-alessia-14",
    discount: "-45 %",
    category: "Kaminofen",
    title: "ALESSIA 14 kW – Poêle à bois d'INTERSTOVES",
    rating: 4,
    reviewsCount: 58,
    oldPrice: 577,
    price: 403.9,
    image: "/img/prod/poele-bois-interstoves-alessia-14-2-300x300.webp",
  },
  {
    id: "poele-eguzki-6",
    discount: "-37 %",
    category: "Kaminofen",
    title: "Poêle à bois étanche EGUZKI 6 kW – DEVILLE",
    rating: 4,
    reviewsCount: 58,
    oldPrice: 2600,
    price: 1820,
    image: "/img/prod/poele-bois-deville-eguzki-6-300x300.webp",
  },
];

export const allProductsData = [
  ...productsData,
  ...featuredProductsData,
  ...stoveProductsData,
];

function slugifyProductTitle(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/&/g, " und ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getProductSlug(product: Product): string {
  const baseSlug = slugifyProductTitle(product.title);
  const matchingProducts = allProductsData.filter(
    (candidate) => slugifyProductTitle(candidate.title) === baseSlug,
  );
  const duplicateIndex = matchingProducts.findIndex(
    (candidate) => candidate.id === product.id,
  );

  return duplicateIndex > 0 ? `${baseSlug}-${duplicateIndex + 1}` : baseSlug;
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProductsData.find((product) => getProductSlug(product) === slug);
}