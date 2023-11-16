import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import { useEffect } from "react";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: () => getProducts() });

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="products">
      {isLoading && <p>isLoading</p>}
      {error && <p>error</p>}
      <ul className="products__list">
        {/* {products?.map((product: responseProduct) => (
          <ProductItem product={product} />
        ))} */}
      </ul>
    </div>
  );
}
