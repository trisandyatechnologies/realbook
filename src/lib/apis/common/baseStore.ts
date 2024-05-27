export const baseStore = (set: any, get: any) => ({
  records: {
    data: [],
    total: 0,
  },
  reset: () => {
    set({ record: undefined, records: { data: [], total: 0 } });
  },
});
