import { FC } from "react";
import RcTable from "rc-table";
import { StyledTable } from "./style";
import { columns } from "./columns";
import { filtredProduct } from "redux/reducer/types";
import { useAppDispatch } from "redux/store/hooks";
import { setQuantityProduct } from "redux/reducer/action";

type table = {
  name: string;
  products: filtredProduct[];
};

const Table: FC<table> = ({ name, products }) => {
  const dispatch = useAppDispatch();

  const onRow = (record: any) => ({
    onChange(e: any) {
      const quantity = Number(e.target.value);
      const productId = record.id;
      dispatch(setQuantityProduct({
          quantity,
          productId
      }))
    },
  });

  return (
    <StyledTable>
      <h1>{name}</h1>
      <RcTable
        rowKey={(obj) => obj.id}
        columns={columns}
        data={products}
        onRow={onRow}
      />
    </StyledTable>
  );
};

export { Table };
