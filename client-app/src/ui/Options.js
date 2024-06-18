import { useCookies } from "react-cookie";

const { Container, Button } = require("react-bootstrap");

function Options({ userId, renderComponent, handleShowModal }) {
    const [cookies] = useCookies();

    const handleDelete = async (e) => {
        e.preventDefault();
        
        await fetch(`http://127.0.0.1:5000/deleteUser/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${cookies['access-token'].token}`
            }
        });

        renderComponent(true);
    }

    return (
        <Container className="d-flex justify-content-around flex-wrap">
            <Button id={userId} className="mb-2" onClick={handleShowModal}>Edit</Button>
            <Button 
                variant="danger" 
                className="mb-2" 
                onClick={handleDelete}
            >
                Delete
            </Button>
        </Container>
    )
}

export default Options;