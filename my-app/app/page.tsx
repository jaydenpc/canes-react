"use client";

import { Container, Image, Navbar, Nav, Button, Row, Col} from "react-bootstrap";
import "./style.css";

function TopMenu() {
  return (
    <Navbar expand="lg" id="top" className="py-3">
      <Container>

        <Navbar.Brand href="#">
          <Image
            alt="canes-logo"
            width={100}
            src="https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          <Nav className="mx-auto gap-4 fw-bold">
            <Nav.Link>Our Menu</Nav.Link>
            <Nav.Link>Locations</Nav.Link>
            <Nav.Link>Careers</Nav.Link>
            <Nav.Link>Who We Are</Nav.Link>
            <Nav.Link>Community Partnerships</Nav.Link>
            <Nav.Link>Gift Cards & Gear</Nav.Link>
          </Nav>


          <Nav>
            <Button
              style={{
                backgroundColor: "red",
                border: "none",
                fontWeight: "bold",
                padding: "10px 20px"
              }}
            >
              Order Now
            </Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function CenterMenu() {
  return (
    <Container fluid className="px-4 my-4 position-relative">

      <Image
        src="https://townsquare.media/site/396/files/2024/01/attachment-Raising-Canes-2.jpg"
        fluid
        rounded
        height = "4000px"
        width = "4000px"
        alt="main-img"
      />

      <Row className="position-absolute top-50 start-0 translate-middle-y w-100">
        <Col xs="auto" className="ms-5">
          <Button variant="danger" size="lg">
            Order Now
          </Button>
        </Col>
      </Row>

    </Container>
  );
}

export default function Home() {
  return (
    <main>
      <TopMenu />
      <CenterMenu />
    </main>
  );
}