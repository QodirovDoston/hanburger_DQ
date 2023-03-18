import React from 'react'
import { Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import logo from '../img/logo.png'

const NavbarAdd = () => {



  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Container style={{ textDecoration: 'none' }}>
        <Nav style={{ marginTop: '20px' }}>
          <Link to={"https://www.youtube.com/watch?v=IPnmNq5BEzo"}>
            <img style={{marginTop:'-10px', borderRadius:'50%', border:'none' ,width:'114px', height:'80px'}} src={logo} alt="" />
          </Link>

          <Link to='/table' style={{ color: 'black', textDecoration: 'none', paddingRight: '20px' }}>
            <li onClick={handleToggle} style={{ marginTop: '9px' }}>Lavash</li>
          </Link>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
            >
            <CircularProgress color="inherit" />
          </Backdrop>

          <Link to='/form' style={{ color: 'black', textDecoration: 'none', paddingRight: '20px' }}>
            <li onClick={handleToggle} style={{ marginTop: '9px' }}>Pizza</li>
          </Link>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
            >
            <CircularProgress color="inherit" />
          </Backdrop>

          <Link to='/about' style={{ color: 'black', textDecoration: 'none', paddingRight: '20px' }}>
            <li onClick={handleToggle} style={{ marginTop: '9px' }}>
              About
            </li>
          </Link>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
            >
            <CircularProgress color="inherit" />
          </Backdrop>

        
          <LunchDiningIcon
            style={{ marginTop: '10px', marginLeft: '650px', fontSize: "50px" }}
            color='warning'
            sx={{ flexGrow: 1 }}
            />
            {/* </Row> */}
        </Nav>
      </Container>

    </>
  )
}

export default NavbarAdd
