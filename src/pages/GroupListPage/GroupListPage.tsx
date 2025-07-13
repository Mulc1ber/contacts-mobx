import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard, Loader } from "src/components";
import { useGetGroupsQuery } from "src/redux/contacts";

export const GroupListPage = memo(() => {
  const { data: groups = [], isLoading: groupsLoading } = useGetGroupsQuery();

  return (
    <Row xxl={4}>
      {groupsLoading ? (
        <Loader />
      ) : (
        <>
          {groups.map((groupContacts) => (
            <Col key={groupContacts.id}>
              <GroupContactsCard groupContacts={groupContacts} withLink />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
});
