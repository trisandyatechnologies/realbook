import React, { useEffect, useState } from "react";
import { AutoComplete, Input, SelectProps } from "antd";
import { debounce } from "@/utils/util";
import { useCityStore } from "@/lib/apis/external/cityStore";
import { EnvironmentOutlined } from "@ant-design/icons";

interface SelectCityProps {
  onChange?: (val: string) => void;
  defaultValue?: string;
}

export default function SelectCity(props: SelectCityProps) {
  const [options, setOptions] = useState<SelectProps["options"]>([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(props.defaultValue);
  const { cities, getCities, setCity } = useCityStore((s) => s);

  useEffect(() => {
    getCities();
  }, [getCities]);

  const getOptions = async (q: string) => {
    const options = cities
      .filter((city) => city.toLowerCase().includes(q.toLowerCase()))
      .map((city) => ({
        value: city,
        label: city,
      }));
    setOptions(options ?? []);
  };

  const handleSearch = async (query: string) => {
    setValue(query);
    if (query.trim().length === 0) return;
    setLoading(true);
    debounce(getOptions, 300)(query);
    setLoading(false);
  };

  return (
    <AutoComplete
      popupClassName="search-dropdown"
      popupMatchSelectWidth={true}
      options={options}
      onSearch={handleSearch}
      value={value}
      onSelect={(val) => {
        setValue(val);
        setCity(val);
      }}
      placeholder="Select city"
    >
      <Input prefix={<EnvironmentOutlined />} />
    </AutoComplete>
  );
}
