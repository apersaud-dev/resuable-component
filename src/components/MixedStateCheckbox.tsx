import { useEffect, useRef } from "react";

export function MixedStateCheckbox({
  state,
  onToggle,
}: {
  state: "none" | "some" | "all";
  onToggle: (checked: boolean) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.checked = state === "all";
    ref.current.indeterminate = state === "some";
  }, [state]);

  return (
    <input
      ref={ref}
      type="checkbox"
      onChange={(e) => onToggle(e.target.checked)}
      aria-checked={state === "some" ? "mixed" : state === "all"}
      className="mixedStateCheckbox"
      aria-label="Select all rows"
    />
  );
}
