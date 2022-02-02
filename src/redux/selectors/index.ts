import { createSelector } from "reselect";
import { RootState } from "../store/index";

const table = (state: RootState) => state.table;

const selectCategoriesNav = createSelector(
  table,
  (table) => table.categoriesNav
);

const selectCurrentProducts = createSelector(
  table,
  (table) => table.currentProducts
);

const selectCategoryName = createSelector(
  table,
  (table) => table.currentCategoryName
);

const selectCurrentCategory = createSelector(
  table,
  (table) => table.currentCategory
)

export { selectCategoriesNav, selectCurrentProducts, selectCategoryName, selectCurrentCategory };
