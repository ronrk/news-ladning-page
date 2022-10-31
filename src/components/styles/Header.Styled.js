import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;

  & img {
  }
  & ul {
    list-style: none;
    display: flex;
    margin-right: 2rem;
    gap: 1rem;

    & li {
      padding: 0.5rem 2rem;
      & a {
        text-decoration: none;
        color: var(--color-very-dark-blue);
        font-size: 1.2rem;
        &:hover {
          color: var(--color-soft-red);
        }
      }
    }
  }
`;

export default HeaderStyled;
