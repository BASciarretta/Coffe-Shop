import Item from "./Item"

const ItemList = ({item}) => {  
 return (
    <section className='row p-2'>
    {item.map((item) => (<Item key={item.id} products={item}/>))}
</section>
  );
};

export default ItemList;