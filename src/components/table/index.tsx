import { FC, ChangeEvent, useEffect } from "react";
import RcTable from "rc-table";
import { StyledTable } from "./style";
import { columns } from "./columns";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { setQuantityProduct } from "redux/reducer/table/action";
import { updateCart } from "redux/reducer/cart/action";
import { record } from "./types";
import { useParams } from "react-router-dom";
import { selectCategoryName, selectCurrentProducts } from "redux/selectors";
import { setCurrentProducts } from "redux/reducer/table/action";
import { Preload } from "components/preload";

const Table: FC = () => {
  const { id } = useParams();
  const { isError, isFetched } = useAppSelector((state) => state.table);
  const categoryName = useAppSelector(selectCategoryName);
  const currentProducts = useAppSelector(selectCurrentProducts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id && isFetched && !isError) {
      dispatch(setCurrentProducts(id));
    }
  }, [id, isFetched]);

  const isDataReady = isFetched && !isError && id;
  const isDataLoading = !isFetched && !isError && id;
  const isDataError = !isFetched && isError && id;
  const isNullPage = isFetched && !isError && !id;

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
      if (id) {
        dispatch(
          setQuantityProduct({
            quantity,
            productId,
            categoryId: id,
          })
        );
      }
    },
  });
  return (
    <StyledTable>
      {isDataReady && (
        <>
          <h1 className="title">{categoryName}</h1>
          <RcTable
            rowKey={(obj) => obj.id}
            columns={columns}
            data={currentProducts}
            onRow={onRow}
          />
        </>
      )}
      {isNullPage && <Preload message={"Пожалуйста, выберите категорию"} />}
      {isDataLoading && <Preload message={"Загрузка..."} />}
      {isDataError && <Preload message={"Произошла ошибка"} />}
    </StyledTable>
  );
};

export { Table };
