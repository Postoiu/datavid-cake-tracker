import { Button } from "react-bootstrap";
import { useState } from 'react';
import sortByDate from "../util/sortByDate";
import NewUserForm from "./NewUserForm";
import ModalWindow from "./ModalWindow";

function Controls({ users, setUsers }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const updateDashboard = data => setUsers([...users, data]);

    function sortUsers() {
        console.log('Start sorting');
        const sortedUsers = sortByDate(users);

        setUsers([...sortedUsers]);
    }

    return (
        <>
            <Button variant="primary" className="mx-4" onClick={handleShow}>Add User</Button>
            <Button variant="primary" className="mx-4" onClick={sortUsers}>Sort</Button>

            <ModalWindow show={show} handleClose={handleClose} title="Create User" formId="newUserForm">
                <NewUserForm handleClose={handleClose} updateDashboard={updateDashboard} />
            </ModalWindow>
        </>
    )
}

export default Controls;