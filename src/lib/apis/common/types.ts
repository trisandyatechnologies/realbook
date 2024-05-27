export interface BaseStore<T = {}> {
  record?: T;
  records?: IPaginatedData<T>;
  reset: () => void;
}
