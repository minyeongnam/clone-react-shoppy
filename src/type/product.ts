export interface Product {
  name: string;
  price: string;
  category: string;
  description: string;
  options: string;
}

export interface requestProduct extends Product {
  url: string;
}

export interface responseProduct extends Product {
  ProductId: string;
  url: string;
}
