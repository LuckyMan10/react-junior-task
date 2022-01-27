import { FC, useState, useEffect } from "react";
import RcTable from "rc-table";
import { StyledTable } from "./style";
import { columns } from "./columns";
import { filtredProduct, tableActionEnum } from "redux/reducer/table/types";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { setQuantityProduct } from "redux/reducer/table/action";
import { updateCart } from "redux/reducer/cart/action";

type table = {
  name: string;
  products: filtredProduct[];
  categoryId: string;
};

const Table: FC<table> = ({ name, products, categoryId }) => {
  const dispatch = useAppDispatch();

  const onRow = (record: any) => ({
    onChange(e: any) {
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
