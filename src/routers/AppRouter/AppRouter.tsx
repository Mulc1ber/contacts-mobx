import { Route, Routes } from "react-router-dom";
import { MainLayout } from "src/layout";
import { ContactListPage, FavoritListPage, NotFound } from "src/pages";
import { ContactRouter } from "../ContactRouter/ContactRouter";
import { GroupRouter } from "../GroupRouter/GroupRouter";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ContactListPage />} />
        <Route path="/contact/*" element={<ContactRouter />} />
        <Route path="/groups/*" element={<GroupRouter />} />
        <Route path="/favorit" element={<FavoritListPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
