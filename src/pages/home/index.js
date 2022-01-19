import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import Filter from "../../components/Filter"
import List from "../../components/List"
import Pagination from "../../components/Pagination"
import Basket from "../../components/Basket"
import DetailedBasket from "../../components/DetailedBasket"

function Home() {
  return (
    <div >
      <div style={{display:"flex"}}>
        <div className={styles.container}>
          <Filter />
          <List />
          <Pagination />
        </div>
        
        <Basket/>
        <DetailedBasket/>
      </div>
      
    </div>
  );
}

export default Home;
