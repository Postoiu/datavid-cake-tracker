import { Col } from 'react-bootstrap';
import Dashboard from "../ui/Dashboard";

function Home() {
    return(
        <Col className="bg-secondary-subtle rounded my-5 p-5" xs={10}>
            <Dashboard />
        </Col>
    )
}

export default Home;