import React from "react";

import Card from "../common/Card";

import sampleImage from "../../images/sample_image.jpg";
import noImage from "../../images/no-image.png";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
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
  );
};

export default ProductCard;
