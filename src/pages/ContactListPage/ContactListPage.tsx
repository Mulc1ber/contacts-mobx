import { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Col, Row } from "react-bootstrap";
import {
  ContactCard,
  FilterForm,
  FilterFormValues,
  Loader,
} from "src/components";
import { store } from "src/store";

export const ContactListPage = observer(() => {
  const { filteredContacts, contactsLoading, groupsLoading, setFilterParams } =
    store;

  const handleSubmit = useCallback(
    (fv: Partial<FilterFormValues>) => {
      setFilterParams(fv);
    },
    [setFilterParams]
  );

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={handleSubmit} />
      </Col>
      <Col>
        {contactsLoading || groupsLoading ? (
          <Loader />
        ) : (
          <>
            <Row xxl={4} className="g-4">
              {filteredContacts.length > 0 &&
                filteredContacts.map((contact) => (
                  <Col key={contact.id}>
                    <ContactCard contact={contact} withLink />
                  </Col>
                ))}
            </Row>
          </>
        )}
      </Col>
    </Row>
  );
});
