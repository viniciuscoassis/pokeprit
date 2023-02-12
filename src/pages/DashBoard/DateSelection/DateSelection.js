import { useLocation, useNavigate } from "react-router-dom";
import DatePicker, { registerLocale } from "react-datepicker";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../layouts/Button";
import { pt } from "date-fns/esm/locale";
import { toast } from "react-toastify";
import isBefore from "date-fns/isBefore";

registerLocale("pt", pt);

export default function DateSelectionPage() {
  const [startDate, setStartDate] = useState(new Date());

  const location = useLocation();
  const navigate = useNavigate();
  const ids = location.state;

  return (
    <Wrapper>
      <div className="top">
        <h1>Escolha o dia de batalha!</h1>
      </div>
      <div className="middle">
        <p>Selecione a data e hora:</p>
        <div>
          {" "}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="Pp"
            showTimeSelect
            locale={"pt"}
          />
        </div>
        <But
          onClick={
            isBefore(startDate, new Date())
              ? () => toast.warn("A data escolhida deve ser futura")
              : () => navigate("/review", { state: { ids, date: startDate } })
          }
        >
          confirmar{" "}
        </But>
      </div>
      <div className="bottom"> </div>
    </Wrapper>
  );
}
const But = styled(Button)`
  width: 200px;
  height: 2rem;
  background-color: #3ca4b8;
  color: white;
  font-size: 10px;
  border-radius: 10px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .top {
    font-family: "Press Start 2P", cursive;
    font-size: 30px;
  }
  .middle {
    height: 13rem;
    width: 20rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #b24dc6;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.45);
    p {
      color: white;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 600px) {
    .top {
      font-size: 20px;

      text-align: center;
    }
  }
`;
