import { useState, useEffect, ChangeEvent } from "react";
import { Table } from "./components/table";
import { getProducts } from "redux/saga";
import { useAppSelector, useAppDispatch } from "redux/store/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { categories, products, isError, isFetched } = useAppSelector(
    (state) => state.table
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const isDataReady = !isError && isFetched;
  return (
    <div className="App">
      {isDataReady &&
        Object.keys(categories).map((categoryId, index) => {
          const category = categories[categoryId];
          const currentProducts = category.productsId.map((id) => products[id]);
          return (
            <Table
              key={`${category.id}_${index}`}
              name={category.name}
              products={currentProducts}
            />
          );
        })}
    </div>
  );
}

export default App;
