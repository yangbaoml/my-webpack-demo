import { message } from "antd";
import axios from "axios";
import { action, observable } from "mobx";
export interface Data {
  targetAudience: number;
  name: string;
  id: string;
}
class Store {
  @observable dataSource: Data[] = [];
  @observable visible: boolean = false;
  @observable currentInfo = {};
  @observable loading: boolean = false;

  @action.bound
  async loadData() {
    try {
      this.loading = true;
      let res = await axios
        .get(
          "http://test-api-lemon-novel.c645439bf76c34e25b01d92b1dda26a83.us-west-1.alicontainer.com/v1/book/tags"
        )
        .then((res) => res.data);
      this.dataSource = res.data?.slice(0,10);
      console.log("this.dataSource===", this.dataSource);
    } catch (error) {
      message.error(error.message);
    } finally{
      this.loading = false;
    }
  }
}
export const pageStore = new Store();
