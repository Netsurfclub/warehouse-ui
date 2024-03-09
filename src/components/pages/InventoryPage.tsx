import React from "react";

import ProductCard from "../custom/ProductCard";

import { getInventory } from "../../services/fakeInventoryApi";

const InventoryPage: React.FC<PageProps> = () => {
  const inventory: Product[] = getInventory();

  return (
    <div className="row">
      {inventory.map((product) => (
        <div key={product.id} className="col-sm-12 col-md-6 col-lg-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default InventoryPage;
