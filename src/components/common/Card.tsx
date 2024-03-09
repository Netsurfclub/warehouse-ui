import React from "react";

const Card: React.FC<CardProps> = ({ title, image, imageAlt, contents }) => {
  return (
    <div className="card mt-3 mb-3">
      <label htmlFor="photo-upload">
        <img
          src={image}
          className="card-img-top"
          style={{
            width: "250px",
            height: "250px",
            display: "block",
            margin: "0 auto",
            objectFit: "contain",
          }}
          alt={imageAlt}
        />
      </label>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {contents.map((content) => (
          <p className="card-text" key={content.key}>
            {content.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
