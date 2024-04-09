import { API_ROOT } from "@/utils/config";
import api from "../axios";

export default class BaseAPI<T> {
  restPath = API_ROOT;
  constructor(restPath: string) {
    this.restPath += restPath;
  }

  async create(body: T) {
    const res = await api.post<T>(this.restPath, { body });
    return res.data;
  }

  async find(id: string) {
    const res = await api.get<T>(`${this.restPath}/${id}`);
    return res.data;
  }

  //TODO: Pagination
  async findAll() {
    const res = await api.get<T[]>(`${this.restPath}`);
    return res.data;
  }

  async update(id: string, body: Partial<T>) {
    const res = await api.put<T>(`${this.restPath}/${id}`, { body });
    return res.data;
  }

  async delete(id: string) {
    const res = await api.delete<T>(`${this.restPath}/${id}`);
    return res.data;
  }
}
