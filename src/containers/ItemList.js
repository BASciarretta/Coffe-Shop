import Item from "../components/Item";
import coffe from "../utils/coffe.json"

const ItemList = () => {
  return (
    <section className="row p-2">
    {
      coffe.map(item => 
      <Item
      thumnail={item.thumnail}
      title={item.title}
      body={item.body}
      sourness={item.sourness}
      flavor={item.flavor}
      id={item.id}
      />)
    }
    </section>
  );
};

export default ItemList;