export function ListItem({ path, device }: { path: string; device: string }) {
  return <li className="">{`Device: ${device}, Path: ${path}`}</li>;
}
