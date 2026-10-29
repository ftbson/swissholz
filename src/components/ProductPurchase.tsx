"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export default function ProductPurchase({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const addProductToCart = () => {
    for (let index = 0; index < quantity; index += 1) {
      addToCart({
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        oldPrice: product.oldPrice,
        image: product.image,
      });
    }
  };

  return (
    <>
      <div className="product-detail-prices" aria-live="polite">
        {product.oldPrice && (
          <span className="product-detail-old-price">
            CHF {(product.oldPrice * quantity).toFixed(2)}
          </span>
        )}
        <span className="product-detail-price">
          CHF {(product.price * quantity).toFixed(2)}
        </span>
        {quantity > 1 && (
          <span className="product-unit-price">
            CHF {product.price.toFixed(2)} / Stück
          </span>
        )}
        <span className="product-shipping">+ Gratis Versand</span>
      </div>
      <div className="product-purchase">
        <div className="product-quantity" aria-label="Menge">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            aria-label="Menge verringern"
          >
            −
          </button>
          <span aria-live="polite">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
            aria-label="Menge erhöhen"
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="product-add-cart"
          onClick={addProductToCart}
        >
          <i className="fa-solid fa-cart-shopping" aria-hidden="true" />
          In den Warenkorb
        </button>
      </div>
    </>
  );
}
