import Styled from "styled-components";

const StyledNav = Styled.nav`
    .list {
        list-style: none;
        padding: 0;
        &__item {
            max-width: 400px;
        }
        &__button {
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 15px;
            margin: 5px 0px;
            width: 100%;
        }
    }
    .item-active {
        .list__button {
            color: blue;
        }
    }
`

export { StyledNav }