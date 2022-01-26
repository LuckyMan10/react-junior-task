import { FC, useState, useEffect } from "react";
import RcTable from "rc-table";
import { StyledTable } from "./style";
import { columns } from "./columns";
import { filtredProduct } from "redux/reducer/types";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { setQuantityProduct } from "redux/reducer/action";

type table = {
  name: string;
  productsId: string[];
};

const Table: FC<table> = ({ name, productsId }) => {
  const dispatch = useAppDispatch();
  const {products} = useAppSelector((state) => state.table);
  const [currentProducts, setCurrentProducts] = useState<Array<filtredProduct>>([]);

  useEffect(() => {
    const currProducts = productsId.map((id) => products[id]);
    setCurrentProducts(currProducts);
    console.log('table')
  }, [])

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
      <h1 className="title">{name}</h1>
      <RcTable
        rowKey={(obj) => obj.id}
        columns={columns}
        data={currentProducts}
        onRow={onRow}
      />
    </StyledTable>
  );
};

export { Table };
