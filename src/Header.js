import { ButtonGroup, Button, Navbar, Container } from 'react-bootstrap';
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
            <ButtonGroup aria-label="Version" className="pe-2">
              <Button variant="secondary" size="sm" disabled>vitessce-app</Button>
              <Button variant="primary" size="sm" href={"https://github.com/haniffalab/vitessce-app/releases/tag/v" + process.env.REACT_APP_SEMANTIC_VERSION}>{process.env.REACT_APP_SEMANTIC_VERSION}</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Support">
              <Button variant="secondary" size="sm" href="https://github.com/haniffalab/vitessce-app">Docs</Button>
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