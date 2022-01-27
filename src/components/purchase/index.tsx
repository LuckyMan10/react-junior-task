import { FC } from "react";
import { StyledPurchase } from "./style";
import { useAppSelector, useAppDispatch } from "redux/store/hooks";
import {addBasket} from "redux/reducer/cart/action";

const Purchase: FC = () => {
  const { priceSumm, totalProducts, cartData } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    const formData = new FormData();
    Object.keys(cartData).forEach((id) => {
      formData.append(`product[${id}]`, String(cartData[id]));
    })
    dispatch(addBasket(formData))
  }

  return (
    <StyledPurchase>
      <div className="purchase">
        <div className="purchase__wrapper">
          <div className="purchase__result-price">
            Итоговая цена: {priceSumm}
          </div>
          <div className="purchase__result-quantity">
            Общее количество товаров: {totalProducts}
          </div>
          <div className="purchase__to-cart">
            <button onClick={addToCartHandler} className="purchase__buy-button">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </StyledPurchase>
  );
};

export { Purchase };
