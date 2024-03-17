import React, { useEffect, useState } from "react";
import { DocumentNode, gql, useQuery } from "@apollo/client";

import ProductCard from "../custom/ProductCard";

const InventoryPage: React.FC<PageProps> = () => {
  const [inventory, setInventory] = useState<Product[]>([]);

  // TODO: Move GraphQL query to separate file.
  const GET_PRODUCTS: DocumentNode = gql`
    query {
      getProducts {
        id
        name
        supplier {
          name
        }
        price
        unit
        photo
        onStock
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (!loading && !error) {
      setInventory(data.getProducts);
    }
  }, [loading, error, data]);

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
