import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { GroupListPage, GroupPage } from "src/pages";

export const GroupRouter: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<GroupListPage />} />
        <Route path=":groupId" element={<GroupPage />} />
      </Routes>
    </>
  );
};
