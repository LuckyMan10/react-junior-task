import Styled from "styled-components";

const StyledPurchase = Styled.div`
    font-size: 20px;
    font-family: sans-serif;
    position: absolute;
    width: 100%;
    bottom: 0;
    .purchase {
        bottom: 0;
        width: 100%;
        min-height: 60px;
        position: fixed;
        background: white;
        border-top: 2px solid rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        &__result-price {}
        &__result-quantity {}
        &__buy-button {
            cursor: pointer;
            font-size: 20px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            &:hover {
                background: rgba(0,0,0,0.9);
                transition: 0.3s; 
            }
        }
        &__wrapper {
            display: flex;
            justify-content: space-around;
            align-items: center;
            max-width: 1000px;
            width: 100%;
        }
    }
`;

export { StyledPurchase };
