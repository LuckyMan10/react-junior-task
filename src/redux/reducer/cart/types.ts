export type InitialState = {
    priceSumm: number;
    totalProducts: number;
    isAddBasketError: boolean;
    products: {
        [key: string]: {
            quantity: number;
            price: number;
        }
    };
    cartData: {
        [key: string]: number;
    }
}

export enum cartActionEnum {
    UPDATE_CART = "UPDATE_CART",
    ADD_BASKET_ERROR = "ADD_BASKET_ERROR",
    ADD_BASKET = "ADD_BASKET"
}

export interface updateCart {
    type: cartActionEnum.UPDATE_CART;
    payload: {
        id: string;
        quantity: number;
        price: number;
    }
}

export interface addBasket {
    type: cartActionEnum.ADD_BASKET;
    payload: any;
}

export interface addBasketError {
    type: cartActionEnum.ADD_BASKET_ERROR;
}

export type cartAction = addBasketError | updateCart | addBasket;