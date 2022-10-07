import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
import coffe from "../utils/coffe.json"

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState({});

   useEffect(() => {
    customFetch(1, coffe[0])
    .then(result => setProductList(result))
    .catch(err => console.log(err))
   }, [])

    return(
        <ItemDetail products={productList}/>
    )
}

export default ItemDetailContainer;