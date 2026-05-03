import { DataTable } from "./components/DataTable";
import { sampleData } from "./data/mockData";
import "./styles/main.scss";
import { normalizeRowData } from "./utils/Utils";

const rows = normalizeRowData(sampleData);

function App() {
  return <DataTable initialRows={rows} />;
}

export default App;
