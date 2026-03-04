import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  margin: 20px auto;
  font-family: 'Inter', sans-serif;
`;

export const Header = styled.div`
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 16px;
  margin-bottom: 24px;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 20px;
  color: #666;
  font-size: 0.95rem;
  margin-top: 8px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 8px;
  transition: transform 0.2s;
  gap: 8px;

  &:hover {
    transform: translateX(4px);
    background: #f1f1f1;
  }
`;

export const Label = styled.span`
  font-size: 0.75rem;
  color: #999;
  text-transform: uppercase;
  display: block;
  margin-bottom: 2px;
`;

export const Value = styled.span`
  font-weight: 500;
  color: #333;
`;

export const TotalSection = styled.div`
  margin-top: 32px;
  padding-top: 20px;
  border-top: 2px dashed #eee;
  text-align: right;
`;

export const FinalPrice = styled.h2`
  font-size: 1.8rem;
  color: #007bff;
  margin: 0;
`;

export const DiscountPrice = styled.h2`
  font-size: 0.9rem;
  color: #28a745;
  margin-top: 4px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 0;
  margin-bottom: 16px;
  transition:
    color 0.2s,
    transform 0.2s;

  &:hover {
    color: #0056b3;
    transform: translateX(-4px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
`;

export const QtyButton = styled.button`
  padding: 4px 10px;
  background: #eee;
  border: none;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const DeleteButton = styled.button`
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
  &:hover {
    background: #ff7875;
  }
`;
