import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductPurchase from "@/components/ProductPurchase";
import {
  allProductsData,
  getProductBySlug,
  getProductSlug,
} from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produkt nicht gefunden" };
  }

  return {
    title: product.title,
    description: `${product.title} – jetzt bei Swiss Holz entdecken.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = allProductsData
    .filter(
      (candidate) =>
        candidate.id !== product.id && candidate.category === product.category,
    )
    .slice(0, 3);
  const recommendations =
    relatedProducts.length > 0
      ? relatedProducts
      : allProductsData.filter((candidate) => candidate.id !== product.id).slice(0, 3);

  return (
    <main className="product-page">
      <div className="product-page-container">
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Startseite</Link>
          <span aria-hidden="true">/</span>
          <Link href="/boutique">Shop</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.title}</span>
        </nav>

        <section className="product-detail">
          <div className="product-detail-image">
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            {product.discount && (
              <span className="badge-discount">{product.discount}</span>
            )}
          </div>

          <div className="product-detail-info">
            <span className="product-detail-category">
              {product.category}
            </span>
            <h1>{product.title}</h1>

            {product.rating !== undefined && (
              <div className="product-detail-rating">
                <span className="product-detail-stars" aria-label={`${product.rating} von 5 Sternen`}>
                  {"★".repeat(Math.floor(product.rating))}
                  {product.rating % 1 > 0 ? "½" : ""}
                </span>
                <span>
                  {product.reviewsCount
                    ? `${product.reviewsCount} Bewertungen`
                    : "Kundenbewertungen"}
                </span>
              </div>
            )}

            <ProductPurchase product={product} />

            <div className="product-detail-divider" />
            <p className="product-detail-meta">
              <strong>Kategorie:</strong> {product.category}
            </p>
            <p className="product-stock">
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              Auf Lager und versandbereit
            </p>
          </div>
        </section>

        <section className="related-products" aria-labelledby="related-products-title">
          <h2 id="related-products-title">Ähnliche Produkte</h2>
          <div className="related-products-grid">
            {recommendations.map((relatedProduct) => (
              <article className="related-product-card" key={relatedProduct.id}>
                <Link
                  href={`/produkt/${getProductSlug(relatedProduct)}`}
                  className="related-product-image"
                  aria-label={`Details für ${relatedProduct.title}`}
                >
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    fill
                    sizes="(max-width: 640px) 45vw, 180px"
                  />
                  {relatedProduct.discount && (
                    <span className="badge-discount">
                      {relatedProduct.discount}
                    </span>
                  )}
                </Link>
                <span className="product-category">{relatedProduct.category}</span>
                <h3>
                  <Link href={`/produkt/${getProductSlug(relatedProduct)}`}>
                    {relatedProduct.title}
                  </Link>
                </h3>
                <div className="related-product-prices">
                  {relatedProduct.oldPrice && (
                    <span className="product-detail-old-price">
                      CHF {relatedProduct.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <strong>CHF {relatedProduct.price.toFixed(2)}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
