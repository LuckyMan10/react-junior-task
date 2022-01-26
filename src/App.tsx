import { useEffect } from "react";
import { getProducts } from "redux/saga";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { Main } from "pages/main";
import { Route, Routes, Navigate } from "react-router-dom";
import { Table } from "components/table";
import { NavBar } from "components/navbar";
import Styled from "styled-components";

const StyledApp = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

function App() {
  const dispatch = useAppDispatch();
  const { isError, isFetched, categories, categoriesId, products } =
    useAppSelector((state) => state.table);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const isDataReady = !isError && isFetched;

  return (
    <StyledApp>
      <NavBar />
      <Routes>
        {isDataReady &&
          categoriesId.map((categoryId, index) => {
            const currentCategory = categories[categoryId];
            return (
              <Route key={`${categoryId}_${index}`}>
                <Route
                  path={`/${categoryId}`}
                  element={
                    <Table
                      key={currentCategory.name}
                      name={currentCategory.name}
                      productsId={currentCategory.productsId}
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
    </StyledApp>
  );
}

export default App;
