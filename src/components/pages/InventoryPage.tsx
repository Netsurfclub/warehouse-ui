import React from "react";

import Card from "../common/Card";

import { getInventory } from "../../services/fakeInventoryApi";

import sampleImage from "../../images/sample_image.jpg";
import noImage from "../../images/no-image.png";

const InventoryPage: React.FC<PageProps> = () => {
  const inventory: Inventory[] = getInventory();

  return (
    <div className="row">
      {inventory.map((inventory) => (
        <div className="col-sm-12 col-md-12 col-lg-4">
          <Card
            title={inventory.product.name}
            image={inventory.product.photo ? sampleImage : noImage}
            imageAlt={inventory.product.name}
            contents={[]}
          />
        </div>
      ))}
    </div>
  );
};

export default InventoryPage;
