import { Container, Row, Col, Navbar, Image } from 'react-bootstrap';

function Header() {
  return (
  <Row>
    <Col>
      <Navbar expand="lg" className="bg-success-subtle">
        <Container className="justify-content-center">
            <Navbar.Brand href="#" className="text-center">
            <Image src="birthday-icon.png" alt="logo" fluid width="80px"/>
            <div>Cake Tracker</div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Col>
  </Row>
    
  );
}

export default Header;