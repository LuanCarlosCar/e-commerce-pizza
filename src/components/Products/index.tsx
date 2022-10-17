import Card from "./components/Card";
import { Container, ListProducts } from "./styles";
import tempero1 from "../../assets/imgs/products/tempero1.svg";
import tempero2 from "../../assets/imgs/products/tempero2.svg";
import tempero3 from "../../assets/imgs/products/tempero3.svg";
import tempero4 from "../../assets/imgs/products/tempero4.svg";

export default function Products() {
  return (
    <Container>
      <img className="temp1" src={tempero1.src} />
      <img className="temp2" src={tempero2.src} />
      <img className="temp3" src={tempero3.src} />
      <img className="temp4" src={tempero4.src} />
      <h2>Mais Vendidas</h2>

      <ListProducts>
        <Card />
        <Card />
        <Card />
        <Card />
      </ListProducts>
    </Container>
  );
}
