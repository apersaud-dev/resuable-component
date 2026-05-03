import type { RowDataUI } from "../data/types";

const TABLE_HEADER_MAP: Partial<Record<keyof RowDataUI, string>> = {
  selected: "Selected",
  name: "Name",
  device: "Device",
  path: "Path",
  status: "Status",
};

export function TableHeader({ data }: { data: RowDataUI }) {
  if (!data) {
    return null;
  }

  const headers = Object.keys(data) as Array<keyof RowDataUI>;

  return (
    <thead className="dataTableHeader">
      <tr>
        {headers.map((header, index) => {
          const label = TABLE_HEADER_MAP[header];
          return label ? (
            <th
              key={`${index}-${header}`}
              className={`dataTableHeader__${header}`}
              scope="col"
              colSpan={1}
            >
              {label === "Selected" ? (
                <span className="sr-only">Select</span>
              ) : (
                `${label}`
              )}
            </th>
          ) : null;
        })}
      </tr>
    </thead>
  );
}
