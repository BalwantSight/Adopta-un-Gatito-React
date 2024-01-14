import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Adopta un Gatito" />

      <Container>
        <Row>
          <Col lg={3} md={6}>
            <MyCard
              nombre="Panti"
              info="Joven y muy regalona. Se define como una gran artista de los juegos con lana."
              img="/src/assets/img/Panti.jpg"
              color="primary"
              race="Savannah"
              button="Adopta"
            />
          </Col>
          <Col lg={3} md={6}>
            <MyCard
              nombre="Manitos"
              info="No le gusta estar solo. Se define como un gato elegante y muy cercano a su familia."
              img="/src/assets/img/Manitos.jpg"
              color="secondary"
              race="Siamés"
              button="Adopta"
            />
          </Col>
          <Col lg={3} md={6}>
            <MyCard
              nombre="Simba"
              info="Elegante y distinguido. Le gusta el cariño, proteger a su familia y cuidar de todos."
              img="/src/assets/img/Simba.jpg"
              color="success"
              race="Maine"
              button="Adopta"
            />
          </Col>
          <Col lg={3} md={6}>
            <MyCard
              nombre="Compi"
              info="Reatrido y cariñoso. Sólo quiere que lo jugar, comer bien y que lo acaricien."
              img="/src/assets/img/Compi.jpg"
              color="danger"
              race="Bengalí"
              button="Adopta"
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default App;
