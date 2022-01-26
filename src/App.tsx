import { useEffect } from "react";
import { getProducts } from "redux/saga";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { Main } from "pages/main";
import { Route } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  const { isError, isFetched, currentCategory } = useAppSelector(
    (state) => state.table
  );
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const isDataReady = !isError && isFetched;
  return (
    <div className="App">
      {isDataReady && <Main />}
    </div>
  );
}

export default App;
