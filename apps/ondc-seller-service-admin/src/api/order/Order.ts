import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDetails: string | null;
  product?: Product | null;
  updatedAt: Date;
  user?: User | null;
};
