import type { CartDetailType, CartsResponseType, ProductType } from '@/common/types/cartsType';

import { client } from './client';

export const cartsApi = {
  getCartsList: (limit = 10, skip = 0): Promise<CartsResponseType> =>
    client.get('/carts', { params: { limit, skip } }),

  getCartById: (cartId?: string): Promise<CartDetailType> => client.get(`/carts/${cartId}`),

  updateCart: (cartId: string | number, products: ProductType[]): Promise<CartDetailType> =>
    client.put(`/carts/${cartId}`, {
      merge: false,
      products,
    }),
};
