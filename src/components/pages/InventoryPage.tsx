import React from "react";

import ProductCard from "../custom/ProductCard";

import { getInventory } from "../../services/fakeInventoryApi";

const InventoryPage: React.FC<PageProps> = () => {
  const inventory: Product[] = getInventory();

  return (
    <section className="row">
      {inventory.map((product) => (
        <article key={product.id} className="col-sm-12 col-md-6 col-lg-4">
          <ProductCard product={product} />
        </article>
      ))}
    </section>
  );
};

export default InventoryPage;
