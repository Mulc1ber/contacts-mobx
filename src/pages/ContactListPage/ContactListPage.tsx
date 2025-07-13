import { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  ContactCard,
  FilterForm,
  FilterFormValues,
  Loader,
} from "src/components";
import { ContactDto } from "src/types/dto/ContactDto";
import { useGetContactsQuery, useGetGroupsQuery } from "src/redux/contacts";

export const ContactListPage = memo(() => {
  const { data: contacts = [], isLoading: contactsLoading } =
    useGetContactsQuery();
  const { data: groups = [], isLoading: groupsLoading } = useGetGroupsQuery();

  const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>([]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts = [...contacts];

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(({ name }) =>
        name.toLowerCase().includes(fvName)
      );
    }

    if (fv.groupId) {
      const groupContacts = groups.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        );
      }
    }

    setFilteredContacts(findContacts);
  };

  useEffect(() => {
    console.log("filteredContacts", filteredContacts);
    console.log("contacts", contacts);

    console.log(filteredContacts.length === 0);

    if (filteredContacts.length === 0 && contacts.length > 0) {
      setFilteredContacts(contacts);
    }
  }, [contacts]);

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
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
