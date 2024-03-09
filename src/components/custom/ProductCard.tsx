import React from "react";

import Card from "../common/Card";

import sampleImage from "../../images/sample_image.jpg";
import noImage from "../../images/no-image.png";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, supplierName, unit, photo, onStock } = product;

  return (
    <Card
      key={id}
      title={name}
      image={photo ? sampleImage : noImage}
      imageAlt={name}
      contents={[
        {
          key: "supplierName",
          value: `Beszállító: ${supplierName}`,
        },
        { key: "onStock", value: `Raktáron: ${onStock} ${unit}` },
      ]}
    />
  );
};

export default ProductCard;
