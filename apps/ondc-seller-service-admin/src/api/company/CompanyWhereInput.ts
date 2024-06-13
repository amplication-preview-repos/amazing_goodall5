import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyWhereInput = {
  city?: StringNullableFilter;
  companyName?: StringNullableFilter;
  id?: StringFilter;
  sellingCategory?: "Option1";
};
