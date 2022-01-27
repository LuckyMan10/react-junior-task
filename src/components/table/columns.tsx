function onQuantityChange() {}

const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    width: 200,
  },
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
    width: 200,
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
    width: 200,
  },
  {
    title: "Количество",
    dataIndex: "quantity",
    key: "quantity",
    width: 200,
    render: (_: any, record: any) => (
      <input
        type="number"
        min="0"
        value={String(record.quantity).replace(/^0+/, "")}
        onChange={onQuantityChange}
      />
    ),
  },
  {
    title: "Сумма",
    dataIndex: "summ",
    key: "summ",
    width: 200,
  },
];

export { columns };
