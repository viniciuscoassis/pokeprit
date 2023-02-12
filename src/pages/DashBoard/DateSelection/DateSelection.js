import { useLocation } from "react-router-dom";

export default function DateSelectionPage() {
  const a = useLocation();
  return <>{a}</>;
}
