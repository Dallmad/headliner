import { routes } from '@/common/enums/routes';
import type { CartDetailType } from '@/common/types/cartsType';
import { Popup } from '@/components/Popup';
import { formatCurrency } from '@/helpers/formatCurrency';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './CartsTable.styled';

type CartsTablePropsType = {
  carts?: CartDetailType[];
};

export const CartsTable = ({ carts }: CartsTablePropsType) => {
  const navigate = useNavigate();

  const [hoveredCartId, setHoveredCartId] = useState<number | null>(null);

  const onRowClick = (cartId: number) => {
    navigate(`${routes.CARTS}/${cartId}`);
  };

  return (
    <Styled.TableContainer>
      <Styled.Table>
        <thead>
          <tr>
            <Styled.Th>Cart ID</Styled.Th>
            <Styled.Th>User ID</Styled.Th>
            <Styled.Th>Items Count</Styled.Th>
            <Styled.Th>Total Amount</Styled.Th>
          </tr>
        </thead>
        <tbody>
          {carts?.map((cart, index) => {
            const isLastItems = index >= carts.length / 2;

            return (
              <Styled.ClickableTr
                key={cart.id}
                onClick={() => onRowClick(cart.id)}
                onMouseEnter={() => setHoveredCartId(cart.id)}
                onMouseLeave={() => setHoveredCartId(null)}
              >
                <Styled.RelativeTd>
                  # {cart.id}{' '}
                  {hoveredCartId === cart.id && cart.products && (
                    <Popup products={cart.products} isLastItems={isLastItems} />
                  )}
                </Styled.RelativeTd>
                <Styled.Td>{cart.userId}</Styled.Td>
                <Styled.Td>{cart.totalProducts} items</Styled.Td>
                <Styled.Td>{formatCurrency(cart.total)}</Styled.Td>
              </Styled.ClickableTr>
            );
          })}
        </tbody>
      </Styled.Table>
    </Styled.TableContainer>
  );
};
