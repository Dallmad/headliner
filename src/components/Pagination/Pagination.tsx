import * as Styled from './Pagination.styled';

type PaginationPropsType = {
  total?: number;
  limit: number;
  skip: number;
  onPageChange: (newSkip: number) => void;
};

export const Pagination = ({ total, limit, skip, onPageChange }: PaginationPropsType) => {
  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil((total ?? 0) / limit);

  return (
    <Styled.PaginationContainer>
      <Styled.PageButton disabled={currentPage === 1} onClick={() => onPageChange(skip - limit)}>
        Back
      </Styled.PageButton>

      <Styled.PageInfo>
        Page <strong>{currentPage}</strong> from {totalPages}
      </Styled.PageInfo>

      <Styled.PageButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(skip + limit)}
      >
        Forward
      </Styled.PageButton>
    </Styled.PaginationContainer>
  );
};
