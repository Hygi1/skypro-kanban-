import styled from "styled-components";

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
`;

export const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: #94a6be;
`;

export const ErrorMessage = styled.div`
  color: #ff6d00;
  background-color: rgba(255, 109, 0, 0.1);
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.4;
  border-left: 4px solid #ff6d00;
`;
export const EmptyMessage = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: #94a6be;
`;
