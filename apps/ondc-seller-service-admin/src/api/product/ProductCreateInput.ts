import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  inventoryCount?: number | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  productName?: string | null;
};
