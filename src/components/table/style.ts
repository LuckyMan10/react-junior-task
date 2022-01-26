import Styled from "styled-components";

const StyledTable = Styled.div`
    font-family: sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    .title {
        max-width: 1100px;
        margin: 15px;
    }
    .rc-table-cell {
        text-align: center;
    }
    .rc-table-thead > tr > * {
        font-size: 1.2em;
    }
    .rc-table-cell > input {
        font-size: 20px;
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
`

export {StyledTable}