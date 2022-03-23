import React from "react";
import { useCounter } from "../hooks/useCounter";
import { ReactComponent as UpIcon } from "./Icons/up.svg";
import { ReactComponent as DownIcon } from "./Icons/down.svg";
import { ReactComponent as AddIcon } from "./Icons/add.svg";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial }) => {
  const { counter, increment, decrement, reset } = useCounter(initial);

  const disable = counter > stock;

  const onIncrement = () => {
    increment(1);
  };
  const onDecrement = () => {
    counter > 0 && decrement(1);
  };

  const onAdd = () => {
    alert(`Total de compra ${counter}`);
  };

  return (
    <div className="item-count-container">
      <div className="item-count-controls-container">
        <UpIcon className="icon-count m-b-5" onClick={onIncrement} />
        <span className="item-count-text">{counter}</span>
        <DownIcon className="icon-count" onClick={onDecrement} />
      </div>
      <Button
        className=" "
        disabled={disable}
        onClick={onAdd}
        variant="primary"
      >
        Agregar
      </Button>
    </div>
  );
};

export default ItemCount;
