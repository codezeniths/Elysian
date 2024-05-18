// Imports
import { Product } from "../../../types/types";
import { Star, Plus } from "@phosphor-icons/react";

const Card = ({ image, category, name, rating, price, stock }: Product) => (
  <div className="card">
    <div className="img">
      <img src={image} alt={name} />
    </div>
    <div className="content">
      <p className="category">{category}</p>
      <h3 className="name">{name}</h3>
      <div className="rating">
        {Array.from({ length: rating }, (_, i) => (
          <Star size={18} color="#ffd700" weight="fill" key={i} />
        ))}
      </div>
      <div className="bottom">
        <div className="info">
          <p className="price">${price}</p>
          <p className="stock">In Stock: {stock}</p>
        </div>
        <button className="btn">
          <Plus size={18} color="#ffffff" weight="bold" />
        </button>
      </div>
    </div>
  </div>
);

export default Card;
