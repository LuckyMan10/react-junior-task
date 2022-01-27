import { FC, ChangeEvent } from "react";
import RcTable from "rc-table";
import { StyledTable } from "./style";
import { columns } from "./columns";
import { useAppDispatch } from "redux/store/hooks";
import { setQuantityProduct } from "redux/reducer/table/action";
import { updateCart } from "redux/reducer/cart/action";
import { record, table } from "./types";

const Table: FC<table> = ({ name, products, categoryId }) => {
  const dispatch = useAppDispatch();

  const onRow = (record: record) => ({
    onChange(e: ChangeEvent<HTMLInputElement>) {
      const quantity = Number(e.target.value);
      const productId = record.id;
      const productPrice = record.price;
      dispatch(
        updateCart({
          id: productId,
          price: productPrice,
          quantity,
        })
      );
      dispatch(
        setQuantityProduct({
          quantity,
          productId,
          categoryId,
        })
      );
    },
  });

  return (
    <StyledTable>
      <h1 className="title">{name}</h1>
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
