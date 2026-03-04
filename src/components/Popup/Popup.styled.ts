import styled from '@emotion/styled';

export const Popup = styled.div<{ isLast?: boolean }>`
  position: absolute;
  ${({ isLast }) => (isLast ? 'bottom: 100%;' : 'top: 100%;')}
  left: 10px;
  z-index: 9999;
  width: 350px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  visibility: visible;
  display: block;
`;

export const PopupHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  font-weight: bold;
  font-size: 0.75rem;
  color: #888;
  gap: 8px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const PopupRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  gap: 8px;
  font-size: 0.85rem;
  margin-bottom: 6px;
  align-items: center;

  span:last-child {
    font-weight: 600;
    text-align: right;
  }
`;

export const PopupItemTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
