import { FC } from "react";
import { StyledMain } from "./style";
import { NavBar } from "components/navbar";
import { useAppSelector } from "redux/store/hooks";
import { Table } from "components/table";

const Main: FC = () => {
  const { currentCategoryName, currentProducts } =
    useAppSelector((state) => state.table);
  return (
    <StyledMain>
      <NavBar />
      <div className="table-wrapper">
      <Table
            key={`${currentCategoryName}`}
            name={currentCategoryName}
            products={currentProducts}
          />
      </div>
    </StyledMain>
  );
};

export { Main };
