import { useEffect } from "react";
import { getProducts } from "redux/saga";
import { useAppDispatch } from "redux/store/hooks";
import { NavBar } from "components/navbar";
import Styled from "styled-components";
import {AppRouter} from 'router';
import {Purchase} from 'components/purchase';

const StyledApp = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <StyledApp>
      <NavBar />
      <AppRouter />
      <Purchase resultPrice={23123} resultQuantity={1120}/>
    </StyledApp>
  );
}

export default App;
