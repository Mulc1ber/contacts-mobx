import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumbs, MainMenu } from "src/components";

export const MainLayout = () => {
  return (
    <Container>
      <Row>
        <Col xxl={12}>
          <MainMenu />
        </Col>
        <Col xxl={12}>
          <Breadcrumbs />
        </Col>
        <Col xxl={12}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};
