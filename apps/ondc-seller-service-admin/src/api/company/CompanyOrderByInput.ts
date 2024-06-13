import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  city?: SortOrder;
  companyName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sellingCategory?: SortOrder;
  updatedAt?: SortOrder;
};
