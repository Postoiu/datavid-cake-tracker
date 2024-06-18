import { Container, Row, Col } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

import Header from './ui/Header';
import Footer from './ui/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Controls from './ui/Controls';



function App() {
  const [isAuth, toggleIsAuth] = useState(false);
  const [users, setUsers] = useState([]);
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
      {
        isAuth &&
        <Row>
          <Col></Col>
          <Col className="bg-secondary rounded mt-5 mb-2 p-2 d-flex justify-content-between" xs={10}>
              <Controls users={users} setUsers={setUsers}  />
          </Col>
          <Col></Col>
        </Row>
      }
      <Row>
        <Col></Col>
        {isAuth ? <Home users={users} setUsers={setUsers} /> : <Login />}
        <Col></Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
