function onQuantityChange() {}

const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    width: 200,
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
    width: 200,
  },
  {
    title: "price",
    dataIndex: "price",
    key: "price",
    width: 200,
  },
  {
    title: "quantity",
    dataIndex: "quantity",
    key: "quantity",
    width: 200,
    render: (_: any, record: any) => <input type="number" min="0" value={String((record).quantity).replace(/^0+/, '')} onChange={onQuantityChange}/>,
  },
  {
    title: "result price",
    dataIndex: "summ",
    key: "summ",
    width: 200
  },
];

export { columns };
