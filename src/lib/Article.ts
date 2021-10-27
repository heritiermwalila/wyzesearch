import Application from "../app/Application";
import { IArticle } from "./lib";

class Article extends Application {
  /**
   *
   * @param {number} num
   * @returns
   */
  async getLatestArticles(num: number = 10) {
    try {
      return this.API.request<IArticle[]>("/articles", {
        type: "latest",
        number: num,
      });
    } catch (error) {}
  }

  /**
   *
   * @param {number} per_page
   * @returns
   */
  async getWithHighestLikes(per_page: number = 20) {
    try {
      return this.API.request<string[]>("/articles/", {
        type: "moreLikes",
        per_page,
      });
    } catch (error) {}
  }
}

export default new Article();
