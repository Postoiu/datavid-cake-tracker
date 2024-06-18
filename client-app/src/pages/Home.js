import { Col } from 'react-bootstrap';
import Dashboard from "../ui/Dashboard";

function Home({ users, setUsers }) {
    return(
        <Col className="bg-secondary-subtle rounded mb-5 p-5" xs={10}>
            <Dashboard users={users} setUsers={setUsers}/>
        </Col>
    )
}

export default Home;