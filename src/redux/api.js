export const fetchAllProducts = async () => {
  const apiResponse = await fetch("https://fakestoreapi.com/products");
  const parsedData = await apiResponse.json();
  return parsedData;
};
