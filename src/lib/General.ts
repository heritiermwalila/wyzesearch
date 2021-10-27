import Application from "../app/Application";
import { ICategory } from "./lib";

class General extends Application {
  /**
   * Get search categories
   * @returns
   */
  async getCategories() {
    try {
      return await this.API.request<ICategory[]>("/categories");
    } catch (error) {}
  }

  async search(query: string) {
    try {
      return await this.API.request<any>("/search", {
        post: true,
        data: { query },
      });
    } catch (error) {}
  }
}

export default new General();
