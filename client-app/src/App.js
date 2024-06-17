import { Container, Row, Col } from 'react-bootstrap';

import Header from './ui/Header';
import Footer from './ui/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

const isAuth = true;

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col></Col>
        <Col className="bg-secondary-subtle rounded my-5 p-5">
          {isAuth ? <Home /> : <Login />}
        </Col>
        <Col></Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
