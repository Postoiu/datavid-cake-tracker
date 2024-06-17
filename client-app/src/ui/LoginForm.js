import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

function LoginForm() {
  const [admin, setAdmin] = useState('');
  const [password, setPassword] = useState('');
  const [ , setCookie, ] = useCookies();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username: admin,
      password
    };

    const res = await fetch('http://127.0.0.1:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if(data.error) {
      return;
    }
    
    setCookie('access-token', data, { maxAge: 3600 });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={admin} onChange={e => setAdmin(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="outline-success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;