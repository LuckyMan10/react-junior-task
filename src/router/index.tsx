import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "redux/store/hooks";
import { Table } from "components/table";

const AppRouter: FC = () => {
  const { isError, isFetched, categories, categoriesId } = useAppSelector(
    (state) => state.table
  );

  const isDataReady = !isError && isFetched;

  return (
    <Routes>
      {isDataReady &&
        categoriesId.map((categoryId, index) => {
          const currentCategory = categories[categoryId];
          const currentProducts = Object.keys(currentCategory.products).map(
            (id) => currentCategory.products[id]
          );
          return (
            <Route key={`${categoryId}_${index}`}>
              <Route
                path={`/${categoryId}`}
                element={
                  <Table
                    key={currentCategory.name}
                    categoryId={currentCategory.id}
                    name={currentCategory.name}
                    products={currentProducts}
                  />
                }
              />
              <Route
                path="*"
                element={<Navigate to={`/${categoriesId[0]}`} replace />}
              />
            </Route>
          );
        })}
    </Routes>
  );
};

export { AppRouter };
