import { observer } from "mobx-react-lite";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard, Loader } from "src/components";
import { store } from "src/store";

export const GroupListPage = observer(() => {
  const { groups, groupsLoading, error } = store;

  if (groupsLoading) return <div>Загрузка групп...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!groups.length) return <div>Нет доступных групп</div>;

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
