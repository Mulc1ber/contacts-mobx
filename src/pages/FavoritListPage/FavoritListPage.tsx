import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard, Loader } from "src/components";
import { useGetContactsQuery, useGetFavoritesQuery } from "src/redux/contacts";

export const FavoritListPage = memo(() => {
  const { data: contacts = [], isLoading: contactsLoading } =
    useGetContactsQuery();
  const { data: favorites = [], isLoading: favoritesLoading } =
    useGetFavoritesQuery();

  const favoriteContacts = contacts.filter((contact) =>
    favorites.includes(contact.id)
  );

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
