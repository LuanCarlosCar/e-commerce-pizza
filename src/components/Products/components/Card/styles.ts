import styled from "styled-components";

export const Container = styled.div`
  max-width: 16rem;
  height: 17.1875rem;
  padding: 0 2.375rem;

  background-color: #fef6f4;
  border-radius: 25px;

  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  margin-right: 2rem;

  img {
    position: relative;
    top: -2.5rem;
  }

  h3 {
    position: relative;
    top: -2rem;

    font-family: "Sora";

    font-weight: 600;
    font-size: 1.125rem;

    color: #2e2e2e;
  }

  p {
    position: relative;
    top: -1rem;

    font-family: "Sora";

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 20px;

    color: #616161;
  }

  span {
    font-family: "Sora";
    font-weight: 600;
    font-size: 2rem;
    color: #2e2e2e;
  }

  button {
    position: relative;
    bottom: -1rem;
    padding: 0.5rem 2rem;
    width: 157px;
    height: 31px;
    border: none;

    background: #ffa200;
    border-radius: 25px;

    font-family: "Sora";
    font-weight: 600;
    font-size: 0.75rem;
    color: #2e2e2e;
    cursor: pointer;
  }

  button:hover {
    color: #ffa200;
    box-sizing: border-box;
    border: 1px solid #ffa200;
    background-color: transparent;
  }
`;
