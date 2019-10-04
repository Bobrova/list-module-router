import axios from 'axios';
import url from '../constants/Url';

export default class apiList {
  static getList() {
    return axios.get(url);
  }

  static postItem(payload) {
    return axios.post(url, payload);
  }

  static deleteItem(payload) {
    return axios.delete(`${url}/${payload}`);
  }

  static putItem(payload) {
    return axios.put(`${url}/${payload.id}`, payload);
  }
}
