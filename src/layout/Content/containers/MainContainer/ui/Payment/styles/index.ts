import styled from "styled-components";

export const SWrapper = styled.div`
  background: #fff;
  border: 1px solid #d3e2f9;
  padding: 16px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 20px 0;

  @media (max-width: 700px) {
    border: none;
  }
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  & > :first-child {
    grid-column: 1 / span 2;
    grid-row: 1 / 2;
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    grid-column: auto;
    grid-row: 2 / 3;
  }
`;