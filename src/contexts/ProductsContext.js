import React, { useState, createContext, useContext } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [filtered, setFiltered] = useState("");
    

  
    const onChangeInput = (e) => {
        setFiltered(e.target.value);
      };

  const values = {
    filtered,
    onChangeInput,
  };

  return (
    <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
  );
};

const useProduct = () => useContext(ProductsContext);

export { ProductsProvider, useProduct };
