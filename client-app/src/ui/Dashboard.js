import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import Options from './Options';
import ModalWindow from './ModalWindow';
import UpdateUserForm from './UpdateUserForm';

function Dashboard({ users, setUsers }) {
  const [cookies] = useCookies();
  const [renderComponent, setRenderComponent] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateUser, setUpdateUser] = useState('');

  const handleShowUpdateForm = (e) => {
    const currentUser = users.filter(user => user._id === e.target.id);
    setUpdateUser(currentUser);
    setShowUpdateForm(true);
  }
  const handleCloseUpdateForm = () => setShowUpdateForm(false);

  const updateDashboard = data => setUsers([...users, data]);
  

  useEffect(() => {
    (async () => {
      if(cookies['access-token']?.token && renderComponent) {
        const res = await fetch('http://127.0.0.1:5000/users', {
          headers: {
            'Authorization': `Bearer ${cookies['access-token'].token}`
          }
        });
        const data = await res.json();
    
        setUsers(data);
        setRenderComponent(false);
      }
    })()
  }, [cookies, setUsers, renderComponent]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Bithdate</th>
            <th>Country</th>
            <th>City</th>
            <th>Options</th>
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
            <td>
              <Options 
                userId={user._id} 
                renderComponent={setRenderComponent} 
                handleShowModal={handleShowUpdateForm}
              />
            </td>
          </tr>)}
        </tbody>
      </Table>

      <ModalWindow 
        show={showUpdateForm} 
        handleClose={handleCloseUpdateForm} 
        title="Update User" 
        formId="updateForm"
      >
        <UpdateUserForm 
          handleCloseModal={handleCloseUpdateForm} 
          updateDashboard={updateDashboard} 
          currentUser={updateUser} 
        />
      </ModalWindow>
    </>
  );
}

export default Dashboard;