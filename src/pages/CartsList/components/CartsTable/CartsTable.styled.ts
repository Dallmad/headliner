import styled from '@emotion/styled';

export const TableContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  background: white;
  margin-top: 20px;
  overflow: visible;
  position: relative;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: sans-serif;
`;

export const Th = styled.th`
  background-color: #f8fafc;
  padding: 12px 16px;
  color: #64748b;
  font-weight: 600;
  border-bottom: 2px solid #e2e8f0;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

export const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
  color: #1e293b;
  vertical-align: middle;
`;

export const RelativeTd = styled.td`
  position: relative;
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
`;

export const ClickableTr = styled.tr`
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
  &:hover {
    background-color: #f1f5f9;
  }
`;
