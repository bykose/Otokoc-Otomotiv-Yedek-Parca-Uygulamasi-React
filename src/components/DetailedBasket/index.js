import React from 'react'
import { useBasket } from '../../contexts/BasketContext';
import { AiTwotoneDelete } from "react-icons/ai";
import styles from "./styles.module.css";

function DetailedBasket() {
  const { items, total, addToBasket, deleteFromBasket, count, setCount, sidebar, changeStyle } = useBasket();
  return (
    <div style={{backgroundColor:"red"}}>
      <div className={sidebar ? styles.basketMenuActive : styles.basketMenu}>
        <div className={styles.container}>
          <i onClick={changeStyle}>{`<<`}Detaylı Sepeti Gizle</i>
          <h2>Sepet</h2>
          {items.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: 'space-between' }}>
              <div>
                {` ${item.no}`}
              </div>

              <input className={styles.input} type="number" placeholder={item.count} value={item.count} onChange={(e) => {
                setCount(parseInt(e.target.value));
                addToBasket({
                  count: count,
                  id: item.id,
                  no: item.parcaNo,
                  price: item.fiyat,
                });
                setCount(1)
              }} />{`ad.`}
              <div>
                {`${(parseFloat(item.price) * parseFloat(item.count))}`}
              </div>

              <AiTwotoneDelete onClick={() => { deleteFromBasket(item.id) }} /> 

            </div>
          )
          )}
          <hr />
          <div style={{ display: "flex", justifyContent: 'space-around' }}>
            <div>Ara Toplam</div>
            <div>{total}</div>
          </div>
          <div style={{ display: "flex", justifyContent: 'space-around' }}>
            <div >{`KDV %18`}</div>
            <div>{(parseFloat(total) * parseFloat(0.18))}</div>
          </div>
          <div style={{ display: "flex", justifyContent: 'space-around' }}>
            <div >Toplam</div>
            <div>{(parseFloat(total) * parseFloat(0.18)) + parseFloat(total)}</div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default DetailedBasket
