import { FC } from "react";
import { StyledNav } from "./style";
import { useAppSelector } from "redux/store/hooks";
import { Link } from "react-router-dom";

const NavBar: FC = () => {
  const { categoriesNav, isFetched, isError } = useAppSelector(
    (state) => state.table
  );

  const isDataReady = !isError && isFetched;
  return (
    <StyledNav>
      <ul className="list">
        {isDataReady &&
          categoriesNav.map((category, index) => {
            return (
              <li key={`${category.id}_${index}`} className={`list__item`}>
                <Link to={`/${category.id}`}>{category.name}</Link>
              </li>
            );
          })}
      </ul>
    </StyledNav>
  );
};

export { NavBar };
