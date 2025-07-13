import { observer } from "mobx-react-lite";
import { Col, Row } from "react-bootstrap";
import { ContactCard, Loader } from "src/components";
import { store } from "src/store";

export const FavoritListPage = observer(() => {
  const { favoriteContacts, contactsLoading, favoritesLoading } = store;
  return (
    <Row xxl={4} className="g-4">
      {contactsLoading || favoritesLoading ? (
        <Loader />
      ) : (
        <>
          {favoriteContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
});
