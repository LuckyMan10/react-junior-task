import Styled from "styled-components";

const StyledTable = Styled.div`
    margin: 25px;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    .rc-table-cell {
        text-align: center;
    }
    .rc-table-thead > tr > * {
        font-size: 1.2em;
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
`

export {StyledTable}