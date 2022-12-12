import styles from "./App.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className={styles.app}>
      <h1>PHONE BOOK</h1>

      <Container>
        <Row>
          <Col sm="6">
            <ContactForm />
          </Col>
          <Col sm="6">
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
