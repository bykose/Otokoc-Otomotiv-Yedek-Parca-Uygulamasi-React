import React from 'react'
import { Table } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Products } from '../../fake-db/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.css";
import { useBasket } from "../../contexts/BasketContext";
import { useProduct } from "../../contexts/ProductsContext";
import { usePagination } from '../../contexts/PaginationContext'

function List() {
  const { pagesVisited, productsPerPage } = usePagination()
  const { addToBasket, count, setCount } = useBasket();
  const { filtered } = useProduct();

  const filteredSearch = Products.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().includes(filtered)
    );
  });
  return (
    <div className={styles.container}>
      <Table className={styles.table} borderless hover>
        <thead>
          <tr className={styles.header}>
            <th>Resim</th>
            <th>Parça No</th>
            <th>Parça Adı</th>
            <th>Tutar</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ borderStyle: "" }}>
          {filteredSearch.slice(pagesVisited, pagesVisited + productsPerPage).map((item) => (
            <tr key={item.id} className={styles.row}>
              <td>
                <img
                  src={item.resim}
                  alt=""
                  style={{ width: 82, height: 100 }}
                />
              </td>
              <td>{item.parcaNo}</td>
              <td>{item.parcaIsmi}</td>
              <td>{item.fiyat}</td>
              <td>
                <input className={styles.input}
                  type="number"
                  defaultValue={1}
                  name=""
                  id=""
                  placeholder="Adet"
                  min={1}
                  style={{ width: 60 }}
                  onChange={(e) => { setCount(parseInt(e.target.value)) }}
                />
              </td>
              <td>
                <AiOutlinePlusSquare
                  size={"27px"}
                  onClick={() => {
                    addToBasket({
                      count: count,
                      id: item.id,
                      no: item.parcaNo,
                      price: item.fiyat,
                    });
                    setCount(1);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default List
