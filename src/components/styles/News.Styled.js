import styled from "styled-components";

const NewsStyled = styled.section`
  width: 300px;
  margin-left: 0 auto;
  background-color: var(--color-very-dark-blue);
  color: var(--color-off-white);
  padding: 1.4rem 3rem;
  border-radius: 3px;
  flex: 0 1 25%;
  height: 100%;
  .title {
    color: var(--color-soft-orange);

    h3 {
      font-size: 3rem;
      margin: 0;
      padding: 0;
    }
  }
  .new {
    color: var(--color-grayish-blue);
    padding: 2rem 1rem;
    padding-right: 2rem;
    border-bottom: 2px dashed var(--color-dark-grayish-blue);
    span {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 1.1px;
      padding: 1rem 0;
      color: var(--color-off-white);

      &:hover {
        color: var(--color-soft-orange);
        cursor: pointer;
      }
    }
  }
  .new:last-of-type {
    border-bottom: 0;
  }
  @media (max-width: 960px) {
    flex: 1;
  }
`;

export default NewsStyled;
