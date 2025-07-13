import { observer } from "mobx-react-lite";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard, Empty, GroupContactsCard, Loader } from "src/components";
import { store } from "src/store";

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const { getGroupContacts, groupsLoading, contactsLoading, groups } = store;

  if (!groups.length || !groupId) return <Empty />;

  const currentGroup = groups.find(({ id }) => id === groupId);
  const groupContactsList = groupId ? getGroupContacts(groupId) : [];

  return (
    <Row className="g-4">
      {contactsLoading || groupsLoading ? (
        <Loader />
      ) : (
        <>
          {currentGroup ? (
            <>
              <Col xxl={12}>
                <Row xxl={3}>
                  <Col className="mx-auto">
                    <GroupContactsCard groupContacts={currentGroup} />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row xxl={4} className="g-4">
                  {groupContactsList.map((contact) => (
                    <Col key={contact.id}>
                      <ContactCard contact={contact} withLink />
                    </Col>
                  ))}
                </Row>
              </Col>
            </>
          ) : (
            <Empty />
          )}
        </>
      )}
    </Row>
  );
});
