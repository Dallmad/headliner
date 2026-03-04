import type { ProductType } from '@/common/types/cartsType';
import { formatCurrency } from '@/helpers/formatCurrency';

import * as Styled from './Popup.styled';

type PopupProps = {
  products: ProductType[];
  isLastItems: boolean;
};

export const Popup = ({ products, isLastItems }: PopupProps) => {
  return (
    <Styled.Popup isLast={isLastItems}>
      <Styled.PopupHeader>
        <span>Item</span>
        <span>Price</span>
        <span>Qty</span>
        <span>Total</span>
      </Styled.PopupHeader>

      {products.map((product) => (
        <Styled.PopupRow key={product.id}>
          <Styled.PopupItemTitle title={product.title}>{product.title}</Styled.PopupItemTitle>
          <span>{formatCurrency(product.price)}</span>
          <span>x{product.quantity}</span>
          <span>{formatCurrency(product.total)}</span>
        </Styled.PopupRow>
      ))}
    </Styled.Popup>
  );
};
