import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext({
  data: [],
  setData: () => {},
  fetchAllProducts: () => {},
});
export const DataProvider = ({children}) => {
  const [data, setData] = useState([]);

  //Fetching all product from API
  const fetchAllProducts = async ()=> {
    try {
      const res = await axios.get('https://fakestoreapi.com/products')
      // console.log(res);
      const productsData = res.data
      setData(productsData);
    }
      catch (error) {
        console.log(error);
    }
  }

  const getUniqueCategory = (data, property) => {
    const values = data?.map((curElem) => curElem[property]);
    const uniqueValues = [ ...new Set(values)];
    return uniqueValues;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = ()=> useContext(DataContext);