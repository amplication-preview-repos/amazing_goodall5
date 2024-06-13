import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  inventoryCount?: number | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  productName?: string | null;
};
