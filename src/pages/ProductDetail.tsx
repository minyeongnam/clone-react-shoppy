import { useLocation } from "react-router-dom";
import { formatComma } from "../util/util";
import { ChangeEvent, useState } from "react";
import Button from "../components/ui/Button";
import { addOrUpdateToCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function ProductDetail() {
  const {
    state: { url, name, price, category, description, options, productId },
  } = useLocation();
  const { uid } = useAuthContext();
  const [selectedOption, setSelectedOption] = useState(options && options[0]);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedOption(e.target.value);

  const handleClickCart = () => {
    if (uid === null) {
      return alert("로그인이 필요합니다.");
    }
    const product = {
      productId,
      url,
      name,
      price,
      option: selectedOption,
      quantity: 1,
    };
    addOrUpdateToCart(uid, product)
      .then(() => alert("성공"))
      .catch(() => alert("실패"));
  };
  return (
    <div className="page-contents">
      <section className="products__detail">
        <div className="item__image">
          <img src={url} alt={`${name} 썸네일 이미지`} />
        </div>
        <div className="item__info">
          <div className="info__cate">{category}</div>
          <h2 className="info__title">{name}</h2>
          <p>{description}</p>
          <div className="selectbox">
            <label htmlFor="optionSelect">옵션</label>
            <select
              id="optionSelect"
              className="select"
              onChange={handleSelect}
              value={selectedOption}
            >
              {options.map((option: string) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <span className="info__price">{formatComma(Number(price))}원</span>
          <div className="btnset">
            <Button
              type="button"
              className="btn btn--primary btn--cart"
              onClick={handleClickCart}
            >
              장바구니 추가
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
