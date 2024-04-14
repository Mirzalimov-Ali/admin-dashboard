import React from 'react'
import { Td, UsersContainer } from './style'
import profileImg from '../../../assets/profile-img.jpg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px"
};

function Simple() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(1);
  return (
    <UsersContainer>
        <table>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td style={{marginRight: "70px"}}>beCoderTeamA@gmail.com</Td>
                <Td style={{marginRight: "25px", marginLeft: "-20px"}}>ACTIVE</Td>
                <Td style={{marginRight: "-30px"}}>80$</Td>
                <Td><Button onClick={handleOpen} variant='contained'>All info</Button></Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td style={{marginRight: "70px"}}>beCoderTeamA@gmail.com</Td>
                <Td style={{marginRight: "25px", marginLeft: "-20px"}}>ACTIVE</Td>
                <Td style={{marginRight: "-30px"}}>80$</Td>
                <Td><Button onClick={handleOpen} variant='contained'>All info</Button></Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td style={{marginRight: "70px"}}>beCoderTeamA@gmail.com</Td>
                <Td style={{marginRight: "25px", marginLeft: "-20px"}}>ACTIVE</Td>
                <Td style={{marginRight: "-30px"}}>80$</Td>
                <Td><Button onClick={handleOpen} variant='contained'>All info</Button></Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td style={{marginRight: "70px"}}>beCoderTeamA@gmail.com</Td>
                <Td style={{marginRight: "25px", marginLeft: "-20px"}}>ACTIVE</Td>
                <Td style={{marginRight: "-30px"}}>80$</Td>
                <Td><Button onClick={handleOpen} variant='contained'>All info</Button></Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td style={{marginRight: "70px"}}>beCoderTeamA@gmail.com</Td>
                <Td style={{marginRight: "25px", marginLeft: "-20px"}}>ACTIVE</Td>
                <Td style={{marginRight: "-30px"}}>80$</Td>
                <Td><Button onClick={handleOpen} variant='contained'>All info</Button></Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td style={{marginRight: "70px"}}>beCoderTeamA@gmail.com</Td>
                <Td style={{marginRight: "25px", marginLeft: "-20px"}}>ACTIVE</Td>
                <Td style={{marginRight: "-30px"}}>80$</Td>
                <Td><Button onClick={handleOpen} variant='contained'>All info</Button></Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td style={{marginRight: "70px"}}>beCoderTeamA@gmail.com</Td>
                <Td style={{marginRight: "25px", marginLeft: "-20px"}}>ACTIVE</Td>
                <Td style={{marginRight: "-30px"}}>80$</Td>
                <Td><Button onClick={handleOpen} variant='contained'>All info</Button></Td>
            </tr>
            <tr>
                <Td><img src={profileImg}/></Td>
                <Td>Ali</Td>
                <Td>14</Td>
                <Td style={{marginRight: "70px"}}>beCoderTeamA@gmail.com</Td>
                <Td style={{marginRight: "25px", marginLeft: "-20px"}}>ACTIVE</Td>
                <Td style={{marginRight: "-30px"}}>80$</Td>
                <Td><Button onClick={handleOpen} variant='contained'>All info</Button></Td>
            </tr>
            
        </table>

        <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <div style={{position: 'absolute', top: "10px", right: "10px"}}>
                    <CloseIcon onClick={handleClose} style={{cursor: "pointer"}}/>
                </div>
                
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={profileImg} alt="" width={"90px"}/>
                    <h1 style={{fontWeight: "400", fontSize: "24px", textAlign: 'center'}}>@Username</h1>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "25px"}}>
                        <p>Name</p>
                        <p style={{opacity: "0.56"}}>Ali</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "25px"}}>
                        <p>Date of birth</p>
                        <p style={{opacity: "0.56"}}>2009.12.10</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "25px"}}>
                        <p>Country</p>
                        <p style={{opacity: "0.56"}}>S.Korea</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "25px"}}>
                        <p>Rating</p>
                        <p style={{opacity: "0.56"}}>7.4</p>
                    </div>
                </div>
                <div style={{display: "flex", alignItems: "center", marginTop: '20px', flexDirection: "column"}}>
                    <p style={{fontSize: "24px", opacity: "0.8"}}>Rating of this user</p>
                    <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue)}} sx={{fontSize: '2.3rem'}}/>
                </div>
            </Box>
        </Modal>
    </UsersContainer>
  )
}

export default Simple
