import { create } from "zustand";
import axios from "axios";
import { message } from "@/lib/notify";
import { normalize } from "@/utils/util";

interface AddressStore {
  cities: string[];
  countries: string[];
  states: string[];
  getCountries: () => void;
  getStates: (country: string) => void;
  getCities: (country: string, state: string) => void;
  reset: () => void;
}

const getCountriesApi = async () => {
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://countriesnow.space/api/v0.1/countries/capital",
    headers: {},
  };
  try {
    const response = await axios(config);
    return response.data?.data.map((d: any) => normalize(d.name)) ?? [];
  } catch (error) {
    message.warning("Failed to get countries");
    return [];
  }
};

const getStatesApi = async (country: string) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://countriesnow.space/api/v0.1/countries/states",
    headers: {},
    data: { country },
  };

  try {
    const response = await axios(config);
    return (
      response.data?.data?.states?.map((d: any) => normalize(d.name)) ?? []
    );
  } catch (error) {
    message.warning("Failed to get states");
    return [];
  }
};

const getCitiesApi = async (country: string, state: string) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://countriesnow.space/api/v0.1/countries/state/cities",
    headers: {},
    data: { country, state },
  };

  try {
    const response = await axios(config);
    return response.data?.data.map((d: string) => normalize(d)) ?? [];
  } catch (error) {
    message.warning("Failed to get cities");
    return [];
  }
};

export const useAddressStore = create<AddressStore>((set, get) => ({
  countries: [],
  states: [],
  cities: [],
  getCountries: async () => {
    if (get().countries.length) return;
    const countries = await getCountriesApi();
    set({ countries });
  },
  getStates: async (country = "India") => {
    const states = await getStatesApi(country);
    set({ states, cities: [] });
  },
  getCities: async (country: string, state: string) => {
    const cities = await getCitiesApi(country, state);
    set({ cities });
  },
  reset: () => {
    set({ states: [], cities: [] });
  },
}));
