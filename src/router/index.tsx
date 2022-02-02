import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Table } from "components/table";

const AppRouter: FC = () => {

  return (
    <Routes>
      <Route path="/:id" element={<Table />} />
      <Route
        path="*"
        element={<Table />}
      />
    </Routes>
  );
};

export { AppRouter };
