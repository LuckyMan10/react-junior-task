import Styled from "styled-components";

const StyledNav = Styled.nav`
    font-family: sans-serif;
    .list {
        list-style: none;
        padding: 0;
        &__item {
            padding: 5px 0px;
            font-size: 18px;
            max-width: 400px;
            a {
                text-decoration: none;
                color: inherit;
            }
            &:hover {
                box-shadow: inset 0 -2px rgba(0,0,0,0.7);
                transition: 0.2s;
            }
        }
    }
    .item-active {
        .list__item a{
            color: blue;
        }
    }
`

export { StyledNav }