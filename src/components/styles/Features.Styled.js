import styled from "styled-components";

const FeaturesStyled = styled.section`
  width: 100%;
  display: flex;

  justify-content: space-between;
  margin-top: 4rem;

  .feature {
    display: flex;
    gap: 2rem;
    height: 150px;
    .content {
      h4 {
        font-size: 2.7rem;
        letter-spacing: 2px;
        color: var(--color-grayish-blue);
        margin: 0;
        padding: 0;
      }
      h5 {
        margin: 0;
        padding: 0;
        font-size: 1.3rem;
        margin-top: 0.5rem;

        &:hover {
          cursor: pointer;
          color: var(--color-soft-red);
        }
      }
      p {
        padding-right: 6rem;
        color: var(--color-dark-grayish-blue);
      }
    }
    img {
      display: block;
      height: 100%;
    }
  }

  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

export default FeaturesStyled;
