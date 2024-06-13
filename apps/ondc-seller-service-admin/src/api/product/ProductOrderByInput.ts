import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  inventoryCount?: SortOrder;
  price?: SortOrder;
  productName?: SortOrder;
  updatedAt?: SortOrder;
};
