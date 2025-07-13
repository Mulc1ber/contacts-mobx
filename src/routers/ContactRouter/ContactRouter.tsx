import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ContactListPage, ContactPage } from "src/pages";

export const ContactRouter: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<ContactListPage />} />
        <Route path=":contactId" element={<ContactPage />} />
      </Routes>
    </>
  );
};
