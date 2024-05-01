import React, { useState } from "react";
import { AutoComplete, Form, Input, SelectProps } from "antd";
import Link from "next/link";
import { PATHS } from "@/utils/constants";
import { debounce } from "@/utils/util";
import { DefaultOptionType } from "antd/es/select";
import { SearchOutlined } from "@ant-design/icons";

const renderItem = (
  d: DefaultOptionType,
  getPath: (id: string) => string,
  getLabel?: (id: string) => React.ReactNode
) => ({
  value: d.id,
  label: getLabel ? (
    getLabel(d.id)
  ) : (
    <Link href={getPath(d.id)}>{d.label}</Link>
  ),
});

interface SearchInputProps {
  searchApi: (q: string) => Promise<SelectProps["options"]>;
  getPath: (id: string) => string;
  getLabel?: (id: string) => React.ReactNode;
  placeholder?: string;
  onChange?: (val: string) => void;
}

export default function SearchInput(props: SearchInputProps) {
  const [options, setOptions] = useState<SelectProps["options"]>([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const getOptions = async (q: string) => {
    const options = await props.searchApi(q);
    const data = options?.map((opt) =>
      renderItem(opt, props.getPath, props.getLabel)
    );
    setOptions(data ?? []);
  };

  const handleSearch = async (query: string) => {
    setValue(query);
    if (query.trim().length === 0) return;
    setLoading(true);
    debounce(getOptions, 300)(query);
    setLoading(false);
  };

  return (
    <form
      action={PATHS.COMPANIES}
      style={{ display: "flex", flex: 1, maxWidth: 720 }}
    >
      <AutoComplete
        popupClassName="search-dropdown"
        popupMatchSelectWidth={true}
        style={{ width: "100%" }}
        options={options}
        onSearch={handleSearch}
        value={value}
        onSelect={(val) => {
          props.onChange ? props.onChange(val) : setValue("");
        }}
      >
        <Input
          className="header-search"
          placeholder={props.placeholder ?? "Search"}
          prefix={<SearchOutlined />}
          name="q"
        />
      </AutoComplete>
    </form>
  );
}
