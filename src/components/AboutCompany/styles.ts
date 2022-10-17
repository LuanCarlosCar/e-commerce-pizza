import styled from "styled-components";
import local from "../../assets/imgs/company/local.svg";

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fcfcfc;
  padding: 3.125rem 0;

  .temp1 {
    position: absolute;
    top: -5rem;
    left: 80%;
  }
  .temp2 {
    position: absolute;
    bottom: 0;
    right: 10%;
  }

  h2 {
    font-family: "Sora";
    font-weight: 600;
    font-size: 2rem;
    line-height: 45px;

    color: #2e2e2e;
    margin-bottom: 24px;

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
  p {
    font-family: "Sora";
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
    color: #2e2e2e;
  }
  button {
    position: relative;
    bottom: -1rem;
    padding: 0.5rem 2rem;
    width: 157px;
    height: 31px;
    border: none;
    cursor: pointer;

    background: #ffa200;
    border-radius: 25px;

    font-family: "Sora";
    font-weight: 600;
    font-size: 0.75rem;
    color: #2e2e2e;
    transition: 0.5s;
  }

  button:hover {
    color: #ffa200;
    box-sizing: border-box;
    border: 1px solid #ffa200;
    background-color: transparent;
  }

  @media (max-width: 1017px) {
    .temp2 {
      display: none;
    }
  }

  @media (max-width: 746px) {
    .temp1 {
      left: 70%;
    }
  }

  @media (max-width: 494px) {
    .temp1 {
      display: none;
    }
  }
`;

export const ContainerImg = styled.div`
  background-image: url(${local.src});
  width: 28rem;
  height: 31.25rem;
  margin-right: 6rem;
  border-radius: 6px;

  img {
    position: relative;
    top: 2rem;
    left: -5rem;
  }
  @media (max-width: 1171px) {
    display: none;
  }
`;

export const ContainerInfo = styled.div`
  width: 28.625rem;
  @media (max-width: 494px) {
    padding: 10px;
    text-align: center;
  }
`;
