import React from 'react'
import { Td, UsersContainer } from './style'
import profileImg from '../../../assets/profile-img.jpg'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import WarningIcon from '@mui/icons-material/Warning';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BlockIcon from '@mui/icons-material/Block';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function Editing() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <UsersContainer>
        <table>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>ACTIVE</small></Td>
                <Td>80$</Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>ACTIVE</small></Td>
                <Td>80$</Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>BLOCKED</small></Td>
                <Td>80$</Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>ACTIVE</small></Td>
                <Td>80$</Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>ACTIVE</small></Td>
                <Td>80$</Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>BLOCKED</small></Td>
                <Td>80$</Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>ACTIVE</small></Td>
                <Td>80$</Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>ACTIVE</small></Td>
                <Td>80$</Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>ACTIVE</small></Td>
                <Td>80$</Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>ACTIVE</small></Td>
                <Td>80$</Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td>beCoderTeamA@gmail.com</Td>
                <Td style={{display: "flex", alignItems: "center", gap: "10px"}}><Button variant="contained" color='error' onClick={handleOpen} sx={{minWidth: "100px"}}>Change</Button>-<small>ACTIVE</small></Td>
                <Td>80$</Td>
            </tr>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{display: "flex", justifyContent: "center", gap: "10px", color: "red"}}>
                        <WarningIcon/><p style={{textAlign: "center", fontSize: "20px"}}>Change status of this user</p><WarningIcon/>
                    </div>
                    <div style={{marginTop: "50px", display: "flex", justifyContent: "space-between"}}>
                        <div>
                            <Switch {...label} defaultChecked color='warning'/>
                            <p>Block</p>
                        </div>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Time</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                    autoFocus
                        >
                            <MenuItem value={10}>1h</MenuItem>
                            <MenuItem value={20}>5h</MenuItem>
                            <MenuItem value={30}>10h</MenuItem>
                            <MenuItem value={40}>1d</MenuItem>
                            <MenuItem value={50}>3d</MenuItem>
                            <MenuItem value={60}>1w</MenuItem>
                            <MenuItem value={70}>1mon</MenuItem>
                            <MenuItem value={80}>Forever</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </div>
                    <div style={{marginTop: "50px", display: "flex", flexDirection: 'column', alignItems: "center", gap: "10px"}}>
                        <p style={{textAlign: "center"}}>Cause of blocking</p>
                        <div>
                            <textarea name="" id="" cols="30" rows="5" style={{resize: "none", padding: '10px', fontSize: "20px"}}></textarea>
                        </div>
                        <Button variant="outlined" startIcon={<BlockIcon />} color='error' sx={{}}>Block</Button>
                    </div>

                </Box>
            </Modal>
        </table>
    </UsersContainer>
  )
}

export default Editing
