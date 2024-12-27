type Order = "asc" | "desc";
export interface BlogSortOption<SortKey extends string, ModelField extends string> {
  key: SortKey;
  field?: ModelField;
  order?: Order;
}
