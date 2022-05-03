import { useCounter } from "../../hooks/useCounter";
import { ReactComponent as UpIcon } from "../Icons/up.svg";
import { ReactComponent as DownIcon } from "../Icons/down.svg";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const { counter, increment, decrement, reset } = useCounter(initial);

  const disable = counter > stock;

  const onIncrement = () => {
    increment(1);
  };
  const onDecrement = () => {
    counter > 1 && decrement(1);
  };

  const onClickAdd = () => {
    onAdd(counter);
  };

  return (
    <div className="item-count-container">
      <div className="item-count-controls-container">
        <UpIcon className="icon-count" onClick={onIncrement} />
        <span className="item-count-text">{counter}</span>
        <DownIcon className="icon-count" onClick={onDecrement} />
      </div>
      <Button
        className=" "
        disabled={disable}
        onClick={onClickAdd}
        variant="primary"
      >
        Agregar
      </Button>
    </div>
  );
};

export default ItemCount;