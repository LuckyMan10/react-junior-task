function createFormData(cartData: { [key: string]: number }): FormData {
  const formData = new FormData();
  Object.keys(cartData).forEach((id) => {
    formData.append(`product[${id}]`, String(cartData[id]));
  });
  return formData;
}

export { createFormData };
