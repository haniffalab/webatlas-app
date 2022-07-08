import { useRef, useLayoutEffect, useState } from "react";
import { Vitessce } from "vitessce/dist/umd/production/index.min.js";
import "vitessce/dist/umd/production/static/css/index.css";
import { ButtonGroup, Button, Navbar, Nav, NavDropdown, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.png';

export default function Viewer(props) {
  const {
    config
  } = props;
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);

  return (
    <div className="App">
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
              vitessce-app
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="me-auto">
                <Nav.Link href="https://github.com/haniffalab/vitessce-app">About</Nav.Link>
                <NavDropdown title="Samples" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#">
                    Hindlimb &middot; Visium
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Hindlimb &middot; ISS
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Hindlimb &middot; Single cell
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Mouse brain &middot; ISS
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <OverlayTrigger
                delay={{ hide: 450, show: 0 }}
                overlay={(props) => (
                  <Tooltip {...props}>
                    This app, and the data it visualises, is in development and has not yet been published.
                  </Tooltip>
                )}
                placement="bottom"
              >
                <Navbar.Text className="d-none d-lg-block me-2">
                  This app is in active development
                </Navbar.Text>
              </OverlayTrigger>
              <ButtonGroup aria-label="Version">
                <Button variant="secondary" size="sm" disabled>Version</Button>
                <Button size="sm" href="https://github.com/haniffalab/vitessce-app/releases/tag/v0.1.0">0.1.0</Button>
              </ButtonGroup>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div ref={targetRef} style={{ height: 'calc(100vh - 56px)' }}>
        <Vitessce config={config} height={dimensions.height} theme="dark" />
      </div>
    </div>
  );
}
