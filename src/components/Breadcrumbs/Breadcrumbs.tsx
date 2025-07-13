import React, { memo } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = memo(() => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);

  return (
    <Row>
      <Col className={"mb-4"}>
        <ListGroup horizontal>
          <ListGroup.Item>
            <Link to={"/"}>Home</Link>
          </ListGroup.Item>
          {pathNames.map((name, index) => {
            const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;

            // Определяем, является ли текущий элемент последним в списке
            const isLast = index === pathNames.length - 1;

            return (
              <ListGroup.Item key={routeTo}>
                {isLast ? (
                  <span className={"active"}>{name}</span>
                ) : (
                  <Link to={routeTo} className={"link active"}>
                    {name}
                  </Link>
                )}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
    </Row>
  );
});
