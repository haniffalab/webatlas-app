import { ButtonGroup, Button, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.png';

export default function Header(props) {
  const {
    title,
    message
  } = props;
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            {!!title && title}
          </Navbar.Brand>
          {!!message &&
            <ButtonGroup aria-label="Version">
              <Button variant="secondary" size="sm" disabled>{message}</Button>
            </ButtonGroup>    
          }            
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">                   
            <ButtonGroup aria-label="Version">
              <Button variant="secondary" size="sm" disabled>vitessce-app</Button>
              <Button size="sm" href="https://github.com/haniffalab/vitessce-app/releases/tag/v0.1.0">0.1.0</Button>
            </ButtonGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

Header.defaultProps = {
  title: "",
}