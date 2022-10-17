import { Container, ContainerImg, ContainerInfo } from "./styles";
import pizza from "../../assets/imgs/company/pizza.svg";
import temp1 from "../../assets/imgs/company/temp1.svg";
import temp2 from "../../assets/imgs/company/temp2.svg";

export default function AboutCompany() {
  return (
    <Container>
      <img className="temp1" src={temp1.src} />
      <img className="temp2" src={temp2.src} />
      <ContainerImg>
        <img src={pizza.src} alt="pizza" />
      </ContainerImg>
      <ContainerInfo>
        <h2>
          Sobre a La P<span className="yellow">i</span>
          <span className="red">z</span>
          <span className="green">z</span>a
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor
          tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor
          purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam
          pharetra lectus in pharetra. Nullam viverra elementum neque quis
          fermentum.{" "}
        </p>

        <button>Ler mais</button>
      </ContainerInfo>
    </Container>
  );
}
