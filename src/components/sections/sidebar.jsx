import React from 'react'
import { Container, LinkWrapper, P } from '../styles/sidebar'
import { Link } from 'react-router-dom'

// img
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FlagIcon from '@mui/icons-material/Flag';


function Sidebar() {
  return (
    <Container>
        <div>
          <h1>LOGO</h1>
        </div>
        <LinkWrapper>
            <Link style={{textDecoration: "none", display: "flex", gap: "10px"}} to={"/"}><BarChartIcon /><P>Statistics</P></Link>
            <Link style={{textDecoration: "none", display: "flex", gap: "10px"}} to={"/users"}><PeopleAltIcon/><P>Users</P></Link>
            <Link style={{textDecoration: "none", display: "flex", gap: "10px"}} to={"/reports"}><FlagIcon/><P>Reports</P></Link>
        </LinkWrapper>
        
    </Container>
  )
}

export default Sidebar
