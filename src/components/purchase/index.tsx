import { FC } from "react";
import { StyledPurchase } from "./style";

type Purchase = {
  resultPrice: number;
  resultQuantity: number;
};

const Purchase: FC<Purchase> = ({ resultPrice, resultQuantity }) => {
  return (
    <StyledPurchase>
      <div className="purchase">
        <div className="purchase__wrapper">
            <div className="purchase__result-price">
            Итоговая цена: {resultPrice}
            </div>
            <div className="purchase__result-quantity">
            Общее количество товаров: {resultQuantity}
            </div>
            <div className="purchase__to-cart">
                <button className="purchase__buy-button">Добавить в корзину</button>
            </div>
        </div>
      </div>
    </StyledPurchase>
  );
};

export { Purchase };
