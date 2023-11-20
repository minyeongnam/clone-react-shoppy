import { Link } from "react-router-dom";
import { ResponseProduct } from "../type/product";

interface ProductItemProps {
  product: ResponseProduct;
}

export default function ProductItem({
  product: { url, name, price, category },
}: ProductItemProps) {
  return (
    <li className="products__item">
      <Link to="#">
        <div className="item__image">
          <img src={url} alt={`${name} 썸네일 이미지`} />
        </div>
        <div className="item__info">
          <div className="item__title">{name}</div>
          <div className="item__price">{price}</div>
          <div className="item__cate">{category}</div>
        </div>
      </Link>
    </li>
  );
}
