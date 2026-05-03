import type { RowDataUI } from "../data/types";

export function TableRows({
  rows,
  onToggleRow,
}: {
  rows: RowDataUI[];
  onToggleRow: (id: string) => void;
}) {
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={`${index}-${row.id}`} className="dataTableRow">
          <td className="dataTableRow__label" colSpan={1}>
            <label key={row.id}>
              <input
                type="checkbox"
                checked={row.selected}
                onChange={() => onToggleRow(row.id)}
                aria-label={`Select ${row.name} row`}
              />
            </label>
          </td>
          <td className="dataTableRow__name" colSpan={1}>
            <p>{row.name}</p>
          </td>
          <td className="dataTableRow__device" colSpan={1}>
            <p>{row.device}</p>
          </td>
          <td className="dataTableRow__path" colSpan={1}>
            <p>{row.path}</p>
          </td>
          <td className="dataTableRow__status" colSpan={1}>
            <div className={`dataTableRow__status--${row.status}`}></div>
            <p className="dataTableRow__statusText">{row.status}</p>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
