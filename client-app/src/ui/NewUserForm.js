import { Form } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

function NewUserForm() {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [cookies] = useCookies();

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            birthDate,
            country,
            city
        };

        await fetch('http://127.0.0.1:5000/createUser', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${cookies['access-token'].token}`
            },
            body: JSON.stringify(formData)
        });
    }

  return (
    <Form onSubmit={handleSubmit} id="newUserForm">
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" required value={firstName} onChange={e => setFirstname(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" required value={lastName} onChange={e => setLastName(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Birth date</Form.Label>
        <Form.Control type="date" required value={birthDate} onChange={e => setBirthDate(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" required value={country} onChange={e => setCountry(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" required value={city} onChange={e => setCity(e.target.value)} />
      </Form.Group>
    </Form>
  );
}

export default NewUserForm;