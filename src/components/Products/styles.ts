import styled from "styled-components";


export const Container = styled.section`
    margin-top: 8.8125rem;
    position: relative;
    margin-bottom: 150px;


    h2{
        font-family: 'Sora';
        font-weight: 600;
        font-size: 2rem;
        text-align: center;
        color: #2E2E2E;

        margin-bottom: 4rem;
    }

    .temp1{
        position: absolute;
        top: -7rem;
        left: 35%;
    }
    .temp2{
        position: absolute;
        top: -5rem;
        left: 80%;
    }
    .temp3{
        position: absolute;
        top: -13rem;
        left: 0;
    }
    .temp3{
        position: absolute;
  
    }
    .temp4{
        position: absolute;
        bottom: -7rem;
    }
`;



export const ListProducts = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 1rem;

    @media (max-width: 1087px) {
       display: grid ;
       grid-template-columns: 16rem 16rem;
       grid-gap: 5rem;
       margin: auto;

        div{
            margin-bottom: 8rem;
            margin: 0;
        }

      }

      @media (max-width: 613px) {
        grid-template-columns: 16rem ;

      }


`;