import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">inicío</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/fundamentos"></Nav.Link>
            <Nav.Link href="/clientes"></Nav.Link>
            <Nav.Link href="/objetos"></Nav.Link>
            <Nav.Link href="/array"></Nav.Link>
            <Nav.Link href="/nomes"></Nav.Link>
            <Nav.Link href="/numeros"></Nav.Link>
            <Nav.Link href="/disney"></Nav.Link>
            <NavDropdown title="" id="disney">
              <NavDropdown.Item href="/disney/carrossel"></NavDropdown.Item>
              <NavDropdown.Item href="/disney/cards">
                
              </NavDropdown.Item>
              <NavDropdown.Item href="/disney/tabela"></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>


          </Nav>
        </Container>
      </Navbar>

      <div className="bg-secondary text-white text-center p-3">
        <h1 className="page-title">{props.titulo}</h1>
      </div>

      <Container>{props.children}</Container>
    </>
  );
}
