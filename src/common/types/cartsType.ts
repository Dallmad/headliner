export type ProductType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
};

export type CartDetailType = {
  id: number;
  products: ProductType[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type CartsResponseType = {
  carts: CartDetailType[];
  total: number;
  skip: number;
  limit: number;
};
