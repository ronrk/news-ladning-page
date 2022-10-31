import styled from "styled-components";

const HeroStyled = styled.section`
  width: 65%;
  /* display: flex; */

  img {
    display: block;
    width: 95%;
  }
  .title {
    width: 30%;
    display: inline-block;
    h1 {
      font-size: 4.5rem;
      margin: 0;
      margin-top: 1rem;
    }
  }
  .content {
    display: inline-block;
    width: 49%;
    padding: 2rem 4rem;

    p {
      margin: 0;
      padding: 0;
      font-size: 1.5rem;
      margin: 3rem;
    }
    button {
      padding: 1.5rem 2rem;
      width: 45%;
      display: block;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 5px;
      border: 0;
      background-color: var(--color-very-dark-blue);
      color: var(--color-off-white);
      margin-left: 3rem;
      border-radius: 3px;

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 9px rgba(0, 0, 0, 0.6);
      }
    }
  }

  @media (max-width: 960px) {
    width: 100%;
    img {
      width: 50%;
      margin: 0 auto;
    }
    .title {
      width: 100%;
      text-align: center;
      h1 {
        font-size: 3.5rem;
      }
    }
    .content {
      width: 100%;

      p {
        padding: 0;
        padding-right: 2rem;
      }
      button {
        width: 30%;
        margin-left: 7.5rem;
        background-color: var(--color-soft-red);
        padding: 1rem;
      }
    }
  }
`;

export default HeroStyled;
