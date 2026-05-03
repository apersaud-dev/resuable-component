import type { RowDataUI } from "../data/types";
import { ListItem } from "./ListItem";

export function List({
  files,
  title,
  className,
}: {
  files: RowDataUI[];
  title: string;
  className: string;
}) {
  if (!files.length) {
    return null;
  }

  return (
    <div>
      <h3>{title}</h3>
      <ul className={className}>
        {files.map((file, index) => {
          return (
            <ListItem
              key={`${index}-${file.path}-${file.path}`}
              device={file.device}
              path={file.path}
            />
          );
        })}
      </ul>
    </div>
  );
}
