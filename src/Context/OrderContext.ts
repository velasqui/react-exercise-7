import { Item } from "../types";

export interface OrderContextModel {
    orders: Item[];
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
};
