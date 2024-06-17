import { Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import sortByDate from "../util/sortByDate";
import NewUserForm from "./NewUserForm";

function Controls({ users, setUsers }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function sortUsers() {
        console.log('Start sorting');
        const sortedUsers = sortByDate(users);

        setUsers([...sortedUsers]);
    }

    return (
        <>
            <Button variant="primary" className="mx-4" onClick={handleShow}>Add User</Button>
            <Button variant="primary" className="mx-4" onClick={sortUsers}>Sort</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewUserForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" form="newUserForm" type="submit">Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Controls;