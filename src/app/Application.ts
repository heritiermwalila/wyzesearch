import { API_HOST } from "../../config";

export interface IAPI {
  request: <T extends any>(
    path: string,
    opts?: Record<string, any>
  ) => Promise<{ data: T; error?: any; status: number }>;
}

class Application {
  /**
   * Backend API request helper function
   */
  protected get API(): IAPI {
    return {
      /**
       *
       * @param {string} path
       * @param {object} opts
       * @returns
       */
      request: async (path: string, opts?: Record<string, any>) => {
        const reqObj = {
          method: opts?.post ? "POST" : "GET",
        };

        if (opts?.post) {
          Object.assign(reqObj, { body: JSON.stringify(opts?.data) });
        }

        console.log(reqObj);

        const request = await fetch(`${API_HOST}${path}`, {
          headers: {
            "Content-Type": "application/json",
          },
          ...reqObj,
        });

        const { data, error, status } = await request.json();

        return { data, error, status };
      },
    };
  }
}

export default Application;
