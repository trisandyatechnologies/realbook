"use client";
import { DEFAULT_PAGE_SIZE } from "@/utils/config";
import { Flex, Pagination as PaginationControl, theme } from "antd";

interface PaginationProps {
  onChange: (page: number) => void;
  total?: number;
  pageSize?: number;
}

export default function Pagination({
  total = 0,
  onChange,
  pageSize = DEFAULT_PAGE_SIZE,
}: PaginationProps) {
  const {
    token: { padding },
  } = theme.useToken();
  return (
    <>
      {total && total > pageSize && (
        <Flex justify="center" style={{ padding }}>
          <PaginationControl
            total={total}
            pageSize={pageSize}
            onChange={onChange}
          />
        </Flex>
      )}
    </>
  );
}
