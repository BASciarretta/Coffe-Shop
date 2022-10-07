import ItemList from "../components/ItemList"
import coffe from "../utils/coffe.json"
import { useState } from "react"

const ItemListContainer = () => {

  const [productList, setProductList] = useState([])
  
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(coffe);
    }, 300);
  });
myPromise.then((res) => {
  setProductList(res)
})

  return(
    <ItemList item={productList}/>
  )
}

export default ItemListContainer