import { useContext } from 'react'
import { Item } from "../types";
import { OrderContext } from '../Context/OrderContextProvider';

interface MenuItemProps {
    item: Item;
    removeItem?: (id: string) => void;
}

export default function MenuItem({ item }: MenuItemProps) {
    const { removeItem } = useContext(OrderContext);

  return (
    <div>
        <p>Name: {item.name}</p>
        <p>Description: {item.description}</p>
        <p>Calories: {item.calories}</p>
        <p>Price: {item.price}</p>
        <p>{item.vegetarian ? 'Vegetarian' : 'Not Vegetarian'}</p>
    </div>
  )
}
