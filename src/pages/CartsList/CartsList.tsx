import { cartsApi } from '@/api/cartsApi';
import { Pagination } from '@/components/Pagination';
import { useAppStore } from '@/store/hooks/useAppStore';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import * as Styled from './CartsList.styled';
import { CartsTable } from './components/CartsTable';

export const CartsList = () => {
  const { skip, limit, setSkip } = useAppStore();

  const { data } = useQuery({
    queryKey: ['carts', 10, skip],
    queryFn: () => cartsApi.getCartsList(limit, skip),
    placeholderData: keepPreviousData,
  });

  return (
    <Styled.ListContainer>
      <CartsTable carts={data?.carts} />

      <Pagination total={data?.total} limit={limit} skip={skip} onPageChange={setSkip} />
    </Styled.ListContainer>
  );
};
