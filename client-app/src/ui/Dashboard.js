import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useCookies } from 'react-cookie';

function Dashboard({ users, setUsers }) {
  const [cookies] = useCookies();
  

  useEffect(() => {
    (async () => {
      if(cookies['access-token']?.token) {
        const res = await fetch('http://127.0.0.1:5000/users', {
          headers: {
            'Authorization': `Bearer ${cookies['access-token'].token}`
          }
        });
        const data = await res.json();
    
        setUsers(data);
      }
    })()
  }, [cookies, setUsers]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Bithdate</th>
          <th>Country</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => <tr>
          <td>{i + 1}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{new Date(user.birthDate).toLocaleDateString()}</td>
          <td>{user.country}</td>
          <td>{user.city}</td>
        </tr>)}
      </tbody>
    </Table>
  );
}

export default Dashboard;