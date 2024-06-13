import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  inventoryCount?: IntNullableFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  productName?: StringNullableFilter;
};
