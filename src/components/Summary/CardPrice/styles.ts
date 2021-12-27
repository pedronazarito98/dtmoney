import styled from "styled-components";

export const Card = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  margin: 10px;
  border-radius: 0.25rem;
  color: var(--text-title);
  width: 30%;
  min-width: 160px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }

  &.highlight-background {
    background: var(--green);
    color: #fff;
  }
`;
