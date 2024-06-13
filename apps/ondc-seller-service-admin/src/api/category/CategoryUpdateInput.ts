import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categoryName?: string | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
};
