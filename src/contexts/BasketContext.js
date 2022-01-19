import React, { useState, createContext, useContext} from "react";

const BasketContext = createContext();



const BasketProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [items, setItems] = useState([]);
  let [count,setCount]=useState(1)
  let [total,setTotal]=useState(0)
  
  const addToBasket = (data) => {
    
    if (items.some((e) => e.id === data.id)) {
      checkCount(data.id,data.count)
      checkTotal()
      return;
    }
    setTotal(parseFloat(total)+(parseFloat(data.price)))
    setItems((prev) => [...prev, data]);
  };

  const deleteFromBasket=(item_id)=>{
    const filtered=items.filter((item)=>(item.id!==item_id))
    setItems(filtered)
    setTotal(0)
  }
  const checkCount=(id,value)=>{
    items.find((e)=>{
      const filtered=items.filter((item)=>(item.id!==e.id));
      if(e.id===id)
      {
        setItems([...filtered,{...e,  count:e.count+parseInt(value)}])
      }
      return ""
    })
  }
  const changeStyle = () => {
    setSidebar(!sidebar);
  };
  const checkTotal=()=>{
    items.map((item)=>
      setTotal(parseFloat(total)+(parseFloat(item.count)*parseFloat(item.price)))
    )
    console.log(total);
  }
  const values = {
    items,
    total,
    count,
    sidebar,
    setCount,
    setItems,
    addToBasket,
    deleteFromBasket,
    changeStyle,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
