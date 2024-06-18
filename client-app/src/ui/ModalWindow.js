import { Modal, Button } from 'react-bootstrap';

function ModalWindow({ show, handleClose, title, children, formId }) {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" form={formId} type="submit">Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow;