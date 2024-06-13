import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categoryName?: string | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
};
