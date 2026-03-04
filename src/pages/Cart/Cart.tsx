import { cartsApi } from '@/api/cartsApi';
import { BackIcon, DeleteIcon } from '@/assets/icons';
import { routes } from '@/common/enums/routes';
import type { ProductType } from '@/common/types/cartsType';
import { formatCurrency } from '@/helpers/formatCurrency';
import { useAppStore } from '@/store/hooks/useAppStore';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { useNavigate, useParams } from 'react-router-dom';

import * as Styled from './Cart.styled';

export const Cart = () => {
  const { cartId } = useParams<{ cartId: string }>();
  const queryClient = useQueryClient();
  const { setNotification } = useAppStore();

  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ['cart', cartId],
    queryFn: () => cartsApi.getCartById(cartId),
    enabled: !!cartId,
  });

  const onBackClick = () => {
    navigate(routes.CARTS);
  };

  const updateCartMutation = useMutation({
    mutationFn: (updatedProducts: ProductType[]) => cartsApi.updateCart(cartId!, updatedProducts),
    onSuccess: (updatedData) => {
      setNotification({
        message: 'Successfully updated cart',
        type: 'success',
      });
      queryClient.setQueryData(['cart', cartId], updatedData);
    },
  });

  const handleUpdateQuantity = (productId: number, newQty: number) => {
    if (!data) {
      return;
    }

    const updatedProducts = data.products.map((p: ProductType) =>
      p.id === productId ? { ...p, quantity: newQty } : p,
    );
    updateCartMutation.mutate(updatedProducts);
  };

  const handleDeleteProduct = (productId: number) => {
    if (!data) {
      return;
    }

    const updatedProducts = data.products.filter((p: ProductType) => p.id !== productId);
    updateCartMutation.mutate(updatedProducts);
  };

  return (
    <Styled.Container>
      <Styled.BackButton onClick={onBackClick}>
        <BackIcon />
        Back to List
      </Styled.BackButton>

      <Styled.Header>
        <h2>Cart Details</h2>
        <Styled.InfoRow>
          <span>
            <Styled.Label>Cart ID</Styled.Label> <Styled.Value># {data?.id}</Styled.Value>
          </span>
          <span>
            <Styled.Label>User ID</Styled.Label> <Styled.Value>{data?.userId}</Styled.Value>
          </span>
        </Styled.InfoRow>
      </Styled.Header>

      <Styled.ProductList>
        {data?.products?.map((product: any) => (
          <Styled.ProductItem key={product.id}>
            <div>
              <Styled.Label>Product</Styled.Label>
              <Styled.Value>{product.title}</Styled.Value>
            </div>
            <div>
              <Styled.Label>Price</Styled.Label>
              <Styled.Value>{formatCurrency(product?.price)}</Styled.Value>
            </div>
            <Styled.ActionGroup>
              <Styled.QuantityControls>
                <Styled.QtyButton
                  onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}
                  disabled={product.quantity <= 1 || updateCartMutation.isPending}
                >
                  -
                </Styled.QtyButton>
                <span style={{ padding: '0 10px' }}>{product.quantity}</span>
                <Styled.QtyButton
                  onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}
                  disabled={updateCartMutation.isPending}
                >
                  +
                </Styled.QtyButton>
              </Styled.QuantityControls>

              <Styled.DeleteButton
                onClick={() => handleDeleteProduct(product.id)}
                disabled={updateCartMutation.isPending}
              >
                <DeleteIcon />
              </Styled.DeleteButton>
            </Styled.ActionGroup>
            <div style={{ textAlign: 'right' }}>
              <Styled.Label>Subtotal</Styled.Label>
              <Styled.Value>{formatCurrency(product?.total)}</Styled.Value>
            </div>
          </Styled.ProductItem>
        ))}
      </Styled.ProductList>

      <Styled.TotalSection>
        <Styled.Label>Total Amount</Styled.Label>
        <Styled.FinalPrice>{formatCurrency(data?.total)}</Styled.FinalPrice>
        {(data?.discountedTotal ?? 0) < (data?.total ?? 0) && (
          <Styled.DiscountPrice>
            Discounted price: {formatCurrency(data?.discountedTotal)}
          </Styled.DiscountPrice>
        )}
      </Styled.TotalSection>
    </Styled.Container>
  );
};
