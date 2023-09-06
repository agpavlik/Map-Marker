import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackBatton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &lArr; Back
    </Button>
  );
}

export default BackBatton;
