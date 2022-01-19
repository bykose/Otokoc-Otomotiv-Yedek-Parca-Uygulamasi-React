import React, { useState, createContext, useContext } from "react";
import { Products } from "../fake-db/Products";

const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
    const [pageNumber, setPageNumber] = useState(0)

    const productsPerPage = 5
    const pagesVisited = pageNumber * productsPerPage

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    const pageCount = Math.ceil(Products.length / productsPerPage);

  const values = {
    pageCount,
    pagesVisited,
    productsPerPage,
    changePage,
  };

  return (
    <PaginationContext.Provider value={values}>{children}</PaginationContext.Provider>
  );
};

const usePagination = () => useContext(PaginationContext);

export { PaginationProvider, usePagination };
