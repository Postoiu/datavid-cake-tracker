import { Form } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

function UpdateUserForm({ handleCloseModal, updateDashboard, currentUser }) {
    const [cookies] = useCookies();

    async function handleSubmit(e) {
        e.preventDefault();

        updateDashboard();
        handleCloseModal();
    }

  return (
    <Form onSubmit={handleSubmit} id="updateForm">
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" required value={currentUser.firstName} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" required value={currentUser.lastName} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Birth date</Form.Label>
        <Form.Control type="date" required value={currentUser.birthDate} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" required value={currentUser.country} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" required value={currentUser.city} />
      </Form.Group>
    </Form>
  );
}

export default UpdateUserForm;