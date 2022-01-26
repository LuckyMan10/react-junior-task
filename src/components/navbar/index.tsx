import { FC, MouseEvent } from "react";
import { StyledNav } from "./style";
import { useAppSelector, useAppDispatch } from "redux/store/hooks";
import {setCategory} from "redux/reducer/action";

const NavBar: FC = () => {
  const dispatch = useAppDispatch();
  const { categoriesNav, currentCategory, isFetched, isError } = useAppSelector(
    (state) => state.table
  );

  const navClickHandler = (e: MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;
    if(id) {
      dispatch(setCategory(id))
    }
  };

  const isDataReady = !isError && isFetched;
  return (
    <StyledNav>
      <ul onClick={navClickHandler} className="list">
        {isDataReady &&
          categoriesNav.map((category, index) => {
            return (
              <li
                key={`${category.id}_${index}`}
                id={category.id}
                className={`list__item ${
                  category.id === currentCategory ? "item-active" : ""
                }`}
              >
                <button id={category.id} className="list__button">
                  {category.name}
                </button>
              </li>
            );
          })}
      </ul>
    </StyledNav>
  );
};

export { NavBar };
