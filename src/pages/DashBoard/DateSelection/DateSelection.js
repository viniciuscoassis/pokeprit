import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";

export default function DateSelectionPage() {
  const [startDate, setStartDate] = useState(new Date());

  const a = useLocation();
  console.log(a);
  return (
    <>
      {" "}
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </>
  );
}
