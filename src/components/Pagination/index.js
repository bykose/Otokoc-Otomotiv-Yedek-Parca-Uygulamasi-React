import React from "react";
import ReactPaginate from 'react-paginate'
import {usePagination} from '../../contexts/PaginationContext'
import styles from "./styles.module.css";


function Pagination() {
   const {pageCount,changePage}=usePagination()
    return (
        <div className={styles.kutu}>
            <ReactPaginate
                previousLabel={"P"}
                nextLabel={"N"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={styles.paginationBttns}
                previousLinkClassName={styles.previousBttn}
                nextLinkClassName={styles.nextBttn}
                activeClassName={styles.paginationActive}
            />
        </div>
    )
}
export default Pagination
