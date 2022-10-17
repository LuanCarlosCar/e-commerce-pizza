import styled from "styled-components";
import pizza from "../../assets/imgs/header/backPizza.svg";

export const Container = styled.header`
  position: relative;
  background-image: url(${pizza.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  max-width: 100vw;
  height: 31.25rem;

  display: flex;
  justify-content: center;
  padding-top: 11.75rem;

  h1 {
    font-family: "Sora";
    font-weight: 600;
    font-size: 96px;
    color: #ffffff;

    .yellow {
      color: #ffa200;
    }
    .red {
      color: #cf3031;
    }
    .green {
      color: #5c913b;
    }
  }
`;
