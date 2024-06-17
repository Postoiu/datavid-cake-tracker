import { Col } from 'react-bootstrap';
import LoginForm from '../ui/LoginForm';

function Login() {
    return(
        <Col className="bg-secondary-subtle rounded my-5 p-5">
            <LoginForm />
        </Col>
    );
}

export default Login;