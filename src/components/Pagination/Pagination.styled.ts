import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${(props) => (props.active ? '#3b82f6' : '#e2e8f0')};
  background: ${(props) => (props.active ? '#3b82f6' : 'white')};
  color: ${(props) => (props.active ? 'white' : '#1e293b')};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${(props) => (props.active ? '#2563eb' : '#f1f5f9')};
  }
`;

export const PageInfo = styled.span`
  font-size: 0.9rem;
  color: #64748b;
`;
