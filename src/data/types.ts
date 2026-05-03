export type FileStatus = "available" | "scheduled";

export type RowDataRaw = {
  name: string;
  device: string;
  path: string;
  status: FileStatus;
};

export interface RowDataUI {
  id: string;
  name: string;
  device: string;
  path: string;
  status: FileStatus;
  selected: boolean;
}

export type ReducerState = { rows: RowDataUI[] };

export type ReducerAction =
  | { type: "TOGGLE_ROW"; id: string }
  | { type: "TOGGLE_ALL"; value: boolean };

export type MixedCheckboxState = "none" | "some" | "all";

export type selectionSummary = {
  selectedRows: RowDataUI[];
  selectedCount: number;
  mixedCheckboxState: MixedCheckboxState;
};
