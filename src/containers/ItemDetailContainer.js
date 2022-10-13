import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
import coffe from "../utils/coffe.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      customFetch(1, coffe)
        .then((result) => setProductDetail(result))
        .catch((err) => console.log(err));
    } else {
      customFetch(1, coffe.filter((item) => item.id === id)[0])
        .then((result) => setProductDetail(result))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return <ItemDetail products={productDetail} />;
};

export default ItemDetailContainer;
