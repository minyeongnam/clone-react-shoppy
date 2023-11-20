import mainVisual01 from "../assets/images/img_mainvisual_01.jpg";
import Products from "../components/Products";

export default function Main() {
  return (
    <div className="page-main">
      <div className="mainvisual">
        <div className="mainvisual__image">
          <img src={mainVisual01} alt="메인 비주얼" />
        </div>
        <h2 className="mainvisual__title">Shop With US</h2>
        <p className="mainvisual__subtitle">Best Products, High Quality</p>
      </div>
      <Products />
    </div>
  );
}
