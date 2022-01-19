import React from 'react'
import { useBasket } from '../../contexts/BasketContext';
import styles from "./styles.module.css";

function Basket() {
  const { items, changeStyle } = useBasket();

  return (
    <div className={styles.basket}>
      <p className={styles.showDetail} onClick={changeStyle}>{`<<`} Detaylı Sepeti Göster</p>
      <p className={styles.summary}>Sepet Özeti</p>

      {items.map((item) => (
        <div key={item.id} style={{ display: "flex", justifyContent:'space-between'}}>
          <div>
            {` ${item.no}`}
          </div>
          <div>
            {`${item.count} ad.`}
          </div>
        </div>
      ))}
      <hr />
    </div>
  )
}

export default Basket
