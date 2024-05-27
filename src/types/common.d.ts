type Address = {
  dno?: string;
  street?: string; // May include village
  city?: string;
  state: string;
  country: string;
  survey?: string;
  landmark?: String;
  pin?: string;
};

interface IPaginatedData<T> {
  data: T[];
  total: number;
}

interface BaseQuery<T = {}> extends T {
  q?: string;
  page?: number;
  take?: number;
}
