import { Category } from "../category/Category";
import { Order } from "../order/Order";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  inventoryCount: number | null;
  orders?: Array<Order>;
  price: number | null;
  productName: string | null;
  updatedAt: Date;
};
