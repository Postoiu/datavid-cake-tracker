import { Container, Row, Col } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

import Header from './ui/Header';
import Footer from './ui/Footer';
import Home from './pages/Home';
import Login from './pages/Login';



function App() {
  const [isAuth, toggleIsAuth] = useState(false);
  const [cookies,, removeCookie] = useCookies();

  useEffect(() => {
    if(cookies['access-token']) {
      toggleIsAuth(true);
    } else {
      toggleIsAuth(false);
    }
  },[cookies])

  return (
    <Container>
      <Header />
      <Row>
        <Col></Col>
        {isAuth ? <Home /> : <Login />}
        <Col></Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
