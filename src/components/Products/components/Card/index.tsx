import { Container } from "./styles";
import pizza1 from "../../../../assets/imgs/products/pizza1.svg";

export default function Card() {
  return (
    <Container>
      <img src={pizza1.src} alt="Pizza1" />
      <h3>La Cuma</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <span>R$ 23</span>
      <button>Comprar</button>
    </Container>
  );
}
