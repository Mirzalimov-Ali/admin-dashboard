import React, {useState} from 'react'
import { Container, Functions, Td, UsersContainer } from './style'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import Simple from './simple';
import Editing from './editing';


function Users() {
  const [edit, setEdit] = useState(false);

  function editingStart() {
    setEdit(true)
    console.log("start")
  }

  function editingFinish() {
    setEdit(false)
    console.log("end")
  }
  return (
    <Container>
        <div>
            <h1 style={{fontWeight: "400", fontSize: "40px"}}>Users</h1>
        </div>
        <Functions>
            <TextField id="outlined-basic" label="Search users..." variant="outlined" sx={{width: "300px", borderRadius: "20px"}}/>
            <div>
                <Button variant="outlined" color="error" sx={{width: "100px", fontSize: "1.2rem", marginRight: "10px", height: "40px"}} onClick={editingStart}>Edit</Button>
                <Button variant="outlined" color="success" sx={{width: "100px", fontSize: "1.2rem", height: "40px"}} onClick={editingFinish}>Finish</Button>
            </div>
        </Functions>
        <div style={{display: "flex", justifyContent: "space-between", borderBottom: "1px solid black", paddingBottom: "20px", marginTop: "50px"}}>
            <p>Photo</p>
            <p style={{marginRight: "10px"}}>Name</p>
            <p style={{marginRight: "60px"}}>Age</p>
            <p>Email</p>
            <p>Status</p>
            <p style={{marginRight: "30px"}}>Paid</p>
            <p style={{marginRight: "30px"}}>info</p>
        </div>

        {edit ? <Editing/> : <Simple/>}
    </Container>
  )
}

export default Users
