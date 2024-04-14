import React from 'react'
import { Contianer, ReportWrapper, ReportBox, ReportBoxLeft } from './style'
import profileImg from '../../../assets/profile-img.jpg'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { NoEncryption } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '6px',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    display: "flex",
    flexDirection: 'column',
    alignItems: "center"
};

function Reports() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Contianer>
        <h1 style={{fontWeight: "400", fontSize: "40px"}}>Reports</h1>

        <ReportWrapper>
            <ReportBox>
                <ReportBoxLeft>
                    <img src={profileImg} alt="" />
                    <div>
                        <div>
                            <p>Username</p>
                            <div style={{marginLeft: "-100px", marginBottom: "-15px"}}>
                                <QuestionAnswerIcon style={{position: "relative", top: "-23px", right: "-230px", cursor: "pointer"}} onClick={handleOpen}/>
                            </div>
                        </div>
                       
                        <div style={{background: "#E0E0E0", padding: "30px", borderRadius: "20px", borderTopLeftRadius: "0px"}}>
                            Hey admin! please fix this bug
                        </div>
                    </div>
                </ReportBoxLeft>
            </ReportBox>
            <ReportBox>
                <ReportBoxLeft>
                    <img src={profileImg} alt="" />
                    <div>
                        <div>
                            <p>Username</p>
                            <div style={{marginLeft: "-100px", marginBottom: "-15px"}}>
                                <QuestionAnswerIcon style={{position: "relative", top: "-23px", right: "-230px", cursor: "pointer"}} onClick={handleOpen}/>
                            </div>
                        </div>
                       
                        <div style={{background: "#E0E0E0", padding: "30px", borderRadius: "20px", borderTopLeftRadius: "0px"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur nemo illum repudiandae deleniti eveniet deserunt quam nihil debitis aliquam accusantium placeat assumenda ipsa nisi officia dolor tempore iusto, eius quidem ad? Exercitationem cum deleniti corrupti molestias reprehenderit necessitatibus quasi? Deleniti voluptates odit ratione beatae nesciunt, voluptate saepe voluptatem eligendi facere mollitia nam perferendis accusamus dolores, assumenda aut esse quaerat quia reprehenderit? Voluptatum saepe, debitis inventore soluta voluptates porro nemo optio necessitatibus nesciunt accusamus vitae magni enim eius dolore nulla officia natus? At reiciendis ut quis placeat quae suscipit fugiat omnis ipsam, dolorem iusto. Atque numquam quis iste dolores tempora.
                        </div>
                    </div>
                </ReportBoxLeft>
            </ReportBox>
            <ReportBox>
                <ReportBoxLeft>
                    <img src={profileImg} alt="" />
                    <div>
                        <div>
                            <p>Username</p>
                            <div style={{marginLeft: "-100px", marginBottom: "-15px"}}>
                                <QuestionAnswerIcon style={{position: "relative", top: "-23px", right: "-230px", cursor: "pointer"}} onClick={handleOpen}/>
                            </div>
                        </div>
                       
                        <div style={{background: "#E0E0E0", padding: "30px", borderRadius: "20px", borderTopLeftRadius: "0px"}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, amet. Quisquam repudiandae explicabo mollitia voluptas, dolorum eum maiores sunt repellendus enim accusamus. Recusandae fugiat, a assumenda libero veritatis sapiente minima, similique voluptas labore eligendi culpa necessitatibus quae maiores accusamus, et quibusdam. Ipsa excepturi mollitia deserunt suscipit eos expedita explicabo enim.
                            
                        </div>
                    </div>
                </ReportBoxLeft>
            </ReportBox>
        </ReportWrapper>

        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <p style={{fontSize: "20px"}}>Answer to (username)</p>
                <div>
                    <textarea name="" id="" cols="30" rows="5" autoFocus style={{resize: "none", fontSize: "20px", padding: "20px", marginTop: "30px"}}></textarea>
                </div>
                <div>
                    <Button variant="contained" color='success' >Answer</Button>
                </div>
            </Box>
        </Modal>
    </Contianer>
  )
}

export default Reports
