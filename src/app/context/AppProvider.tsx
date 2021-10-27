import React from "react";
import { IAppContext } from "./app";

import General from "../../lib/General";
import { ICategory } from "../../lib/lib";

const AppContext = React.createContext<IAppContext>(null);

/** Application hook */
export const useApp = () => React.useContext(AppContext);

export default function AppProvider({ children }) {
  const [error, setError] = React.useState();
  const [categories, setCategories] = React.useState<ICategory[]>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isInSearchMode, setIsInSearchMode] = React.useState(false)


  React.useEffect(() => {
    onGetCategories()
  }, [])

  /** Get categories from the api */
  const onGetCategories = React.useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await General.getCategories();
      if (response?.error) {
        /**
         * TODO: log the error to the server for debuging and fix
         */
        setError(response.error);
        setIsLoading(false)
      } else {
        setCategories(response.data);
        setIsLoading(false)
      }
    } catch (error) {
      setError(error?.message);
        setIsLoading(false)
    }
  }, [])


  /**
   * 
   * @param query 
   */
  const onSearch = async (query: string) => {
    try {
      setIsInSearchMode(true)
      const req = await General.search(query)

      if(req.error){
        setError(req.error)
        setIsInSearchMode(false)
      }else {
        setIsInSearchMode(false)
        return req.data
      }

    } catch (error) {
      setError(error?.message)
      setIsInSearchMode(false)
    }
  }

  /**
   * Application context memoization
   */
  const contextValue = React.useMemo<IAppContext>(
    () => ({
      /** categories */
      categories,

      /** Application error state */
      error,

      /** Search mode state */
      isInSearchMode,

      /** Application loading state */
      isLoading,

      /** Get categories */
      onGetCategories,

      /** Search anything  */
      onSearch
     
    }),
    [error, categories, isLoading, isInSearchMode]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
