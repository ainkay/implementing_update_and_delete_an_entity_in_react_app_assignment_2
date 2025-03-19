import Item from "./Item";

const ItemList = ({ items, onDelete }) => (
  <div>
    {items.length === 0 ? (
      <p>No items available.</p>
    ) : (
      items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} />
      ))
    )}
  </div>
);

export default ItemList;