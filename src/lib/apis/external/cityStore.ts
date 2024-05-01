import { create } from "zustand";
import axios from "axios";
import { message } from "@/lib/notify";
import { defaultCountry } from "@/utils/config";
import { normalize } from "@/utils/util";

interface CityStore {
  city?: string;
  cities: string[];
  getCities: (country?: string) => void;
  setCity: (city: string) => void;
}

const getCitiesApi = async (country: string) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://countriesnow.space/api/v0.1/countries/cities",
    headers: {},
    data: { country },
  };

  try {
    const response = await axios(config);
    return (response.data?.data.map((c: string) => normalize(c)) ?? []).filter(
      (c: string, i: number, a: string[]) => a.indexOf(c) === i
    );
  } catch (error) {
    message.warning("Failed to get cities");
    return [];
  }
};

export const useCityStore = create<CityStore>((set, get) => ({
  cities: [],
  getCities: async (country = defaultCountry) => {
    if (get().cities.length) return;
    const cities = await getCitiesApi(country);
    set({ cities });
  },
  setCity: (city: string) => {
    set({ city });
  },
  reset: () => {
    set({ cities: [], city: undefined });
  },
}));
