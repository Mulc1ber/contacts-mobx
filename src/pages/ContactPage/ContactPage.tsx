import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard, Empty, Loader } from "src/components";
import { useGetContactsQuery } from "src/redux/contacts";

export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>();

  const { data: contacts = [], isLoading: contactsLoading } =
    useGetContactsQuery();

  const contact = contacts.find(({ id }) => id === contactId);

  return (
    <Row xxl={3}>
      {contactsLoading ? (
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
};
