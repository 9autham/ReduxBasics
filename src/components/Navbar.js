import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'
function TextLinkExample() {
    let counter =useSelector(state=>state.counter);
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Counter: {counter.initialvalue}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <NavLink to="/about" className="container">About</NavLink>
          </Navbar.Text>
          <Navbar.Text>
            <NavLink to="/contact" className="container">Contact</NavLink>
          </Navbar.Text>
          <Navbar.Text>
            <NavLink to="/home" className="container">Home</NavLink>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;