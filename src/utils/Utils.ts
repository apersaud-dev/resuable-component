import type { RowDataRaw, RowDataUI } from "../data/types";

const createId = (row: RowDataRaw, index: number): string => {
  return `${row.device}-${row.name}-${index}`;
};

export const normalizeRowData = (data: RowDataRaw[]): RowDataUI[] => {
  return data.map((row, index) => ({
    id: createId(row, index),
    selected: false,
    ...row,
  }));
};
