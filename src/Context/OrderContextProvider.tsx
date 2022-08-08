import React, { useState, createContext } from 'react'
import { Item } from "../types";
import { OrderContextModel } from './OrderContext'



export const OrderContext = createContext<OrderContextModel>({
    orders: [],
    addItem: () => {},
    removeItem: () => {},
});

interface Props {
    children: React.ReactNode;
}

export default function OrderContextProvider({ children }: Props) {
        const [orders, setOrders] = useState<Item[]>([]);
    
        function addItem(item: Item) {
            setOrders([item, ...orders]);
        };
    
        function removeItem(id: string) {
            setOrders(orders.filter((order) => order.id !== id));
        };
    
        return (
            <OrderContext.Provider value={{ orders, addItem, removeItem }}>
                {children}
            </OrderContext.Provider>
        );
    }
