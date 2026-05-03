import { useReducer, useMemo, useRef } from "react";
import type {
  MixedCheckboxState,
  ReducerAction,
  ReducerState,
  RowDataUI,
  selectionSummary,
} from "../data/types";
import { TableRows } from "./TableRows";
import { TableControls } from "./TableControls";
import { TableHeader } from "./TableHeader";
import { DownloadDialog } from "./DownloadDialog";

function reducer(state: ReducerState, action: ReducerAction): ReducerState {
  switch (action.type) {
    case "TOGGLE_ROW":
      return {
        rows: state.rows.map((r) =>
          r.id === action.id ? { ...r, selected: !r.selected } : r,
        ),
      };

    case "TOGGLE_ALL":
      return {
        rows: state.rows.map((r) => ({
          ...r,
          selected: action.value,
        })),
      };

    default:
      return state;
  }
}

function getSelectionSummary(rows: RowDataUI[]): selectionSummary {
  const selectedRows = rows.filter((r) => r.selected);
  const selectedCount = selectedRows.length;

  const mixedCheckboxState: MixedCheckboxState =
    selectedCount === 0
      ? "none"
      : selectedCount === rows.length
        ? "all"
        : "some";

  return {
    selectedRows,
    selectedCount,
    mixedCheckboxState,
  };
}

export function DataTable({ initialRows }: { initialRows: RowDataUI[] }) {
  const [state, dispatch] = useReducer(reducer, {
    rows: initialRows,
  });

  const dialogRef = useRef<HTMLDialogElement>(null);

  const summary = useMemo(() => getSelectionSummary(state.rows), [state.rows]);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <>
      <div className="dataTable">
        <TableControls
          selectedCount={summary.selectedCount}
          mixedCheckboxState={summary.mixedCheckboxState}
          onToggleAll={(checked) => {
            dispatch({ type: "TOGGLE_ALL", value: checked });
          }}
          openDialog={openDialog}
        />
        <table>
          <TableHeader data={state.rows[0]} />
          <TableRows
            rows={state.rows}
            onToggleRow={(id) => dispatch({ type: "TOGGLE_ROW", id })}
          />
        </table>
      </div>
      <DownloadDialog
        ref={dialogRef}
        selectedFiles={summary.selectedRows}
        title="Files Download"
        onClose={closeDialog}
      />
    </>
  );
}
