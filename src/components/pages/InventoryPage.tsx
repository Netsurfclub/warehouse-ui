import React from "react";

import Card from "../common/Card";

import { getInventory } from "../../services/fakeInventoryApi";

import sampleImage from "../../images/sample_image.jpg";
import noImage from "../../images/no-image.png";

const InventoryPage: React.FC<PageProps> = () => {
  const inventory: Inventory[] = getInventory();

  return (
    <div className="row">
      {inventory.map(({ product }) => (
        <div key={product.id} className="col-sm-12 col-md-12 col-lg-4">
          <Card
            key={product.id}
            title={product.name}
            image={product.photo ? sampleImage : noImage}
            imageAlt={product.name}
            contents={[
              {
                key: "supplierName",
                value: `Beszállító: ${product.supplierName}`,
              },
              { key: "description", value: `Leírás: ${product.description}` },
            ]}
          />
        </div>
      ))}
    </div>
  );
};

export default InventoryPage;
