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
        setIsLoading(false)
    }
  }, [])

  /**
   * Application context memoization
   */
  const contextValue = React.useMemo<IAppContext>(
    () => ({
      /** categories */
      categories,

      /** Application error state */
      error,

      /** Application loading state */
      isLoading,
      onGetCategories
     
    }),
    [error, categories, isLoading]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
