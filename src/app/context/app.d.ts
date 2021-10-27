import { ICategory } from "../../lib/lib";

export interface IAppContext {
  onGetCategories?: () => Promise<void>;
  error?: any;
  categories: ICategory[];
  isLoading?: boolean;
  onSearch?: (query: { key: string; value: any }) => Promise<any>;
  isInSearchMode?: boolean;
}
