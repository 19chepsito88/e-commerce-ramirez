import React from "react";
import { useCounter } from "../hooks/useCounter";
import { ReactComponent as UpIcon } from "./Icons/up.svg";
import { ReactComponent as DownIcon } from "./Icons/down.svg";
import { ReactComponent as AddIcon } from "./Icons/add.svg";

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
    !disable && alert(`Total de compra ${counter}`);
  };

  return (
    <div className="item-count-container">
      <div className="item-count-controls-container">
        <span className="item-count-text">{counter}</span>
        <div className="container-icons-count">
          <UpIcon className="icon-count m-b-5" onClick={onIncrement} />
          <DownIcon className="icon-count" onClick={onDecrement} />
        </div>
      </div>
      <AddIcon
        className={`${disable ? "disabled-btn-add" : "btn-add"}`}
        onClick={onAdd}
      />
    </div>
  );
};

export default ItemCount;
