import { Product } from "../product/Product";

export type Category = {
  categoryName: string | null;
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
};
