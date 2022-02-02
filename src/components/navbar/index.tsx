import { FC, useEffect, useState } from "react";
import { StyledNav } from "./style";
import { useAppSelector } from "redux/store/hooks";
import { Link } from "react-router-dom";
import { selectCategoriesNav } from "redux/selectors";

const NavBar: FC = () => {
  const categoriesNav = useAppSelector(selectCategoriesNav);
  const [categories, setCategories] = useState<
    Array<{ name: string; id: string }>
  >([]);
  const { isError, isFetched } = useAppSelector((state) => state.table);
  useEffect(() => {
    setCategories(categoriesNav);
  }, [isError, isFetched]);
  const isDataReady = !isError && isFetched;

  return (
    <StyledNav>
      <ul className="list">
        {isDataReady &&
          categories.map((category, index) => {
            return (
              <li key={category.id} className={`list__item`}>
                <Link to={`/${category.id}`}>{category.name}</Link>
              </li>
            );
          })}
      </ul>
    </StyledNav>
  );
};

export { NavBar };
