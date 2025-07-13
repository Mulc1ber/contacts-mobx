import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard, Empty, Loader } from "src/components";
import { store } from "src/store";

export const ContactPage: FC = observer(() => {
  const { contactId } = useParams<{ contactId: string }>();
  const contact = store.contacts.find(({ id }) => id === contactId);

  return (
    <Row xxl={3}>
      {store.contactsLoading ? (
        <Loader />
      ) : (
        <>
          <Col className={"mx-auto"}>
            {contact ? <ContactCard contact={contact} /> : <Empty />}
          </Col>
        </>
      )}
    </Row>
  );
});
