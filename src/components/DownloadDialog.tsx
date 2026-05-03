import { forwardRef } from "react";
import type { RowDataUI } from "../data/types";
import { List } from "./List";

interface DownloadDialogProps {
  selectedFiles: RowDataUI[];
  onClose: () => void;
  title: string;
}

export const DownloadDialog = forwardRef<
  HTMLDialogElement,
  DownloadDialogProps
>(({ selectedFiles, onClose, title }, ref) => {
  const availableFiles = selectedFiles.filter(
    (row) => row.status === "available",
  );
  const unavailableFiles = selectedFiles.filter(
    (row) => row.status === "scheduled",
  );

  return (
    <dialog ref={ref} onClose={onClose} className="downloadDialog">
      <header className="downloadDialog__header">
        <h2 className="downloadDialog__heading">{title}</h2>
      </header>
      <section>
        <List
          files={availableFiles}
          title="The following selected files are downloading:"
          className="downloadDialog__list"
        />
        <List
          files={unavailableFiles}
          title="The following selected files were unavailable for download:"
          className="downloadDialog__list"
        />
      </section>

      <footer className="downloadDialog__footer">
        <button className="downloadDialog__closeButton" onClick={onClose}>
          Close
        </button>
      </footer>
    </dialog>
  );
});
