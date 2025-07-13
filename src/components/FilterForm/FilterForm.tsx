import { Formik } from "formik";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { memo } from "react";
import { FormikConfig } from "formik/dist/types";
import { store } from "src/store";

export interface FilterFormValues {
  name: string;
  groupId: string;
}

export const FilterForm = memo<FormikConfig<Partial<FilterFormValues>>>(
  ({ onSubmit, initialValues = {} }) => {
    const { groups, groupsLoading } = store;

    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} onChange={handleSubmit}>
            <Row xxl={4} className="g-4">
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    id={"name"}
                    name={"name"}
                    onChange={handleChange}
                    placeholder="name"
                    aria-label="name"
                    disabled={groupsLoading}
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Select
                  id={"groupId"}
                  name={"groupId"}
                  aria-label="Поиск по группе"
                  onChange={handleChange}
                  disabled={groupsLoading}
                >
                  <option>Open this select menu</option>
                  {groups.map((groupContacts) => (
                    <option value={groupContacts.id} key={groupContacts.id}>
                      {groupContacts.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    );
  }
);
