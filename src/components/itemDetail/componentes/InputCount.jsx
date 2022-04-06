import { Link } from "react-router-dom";

const InputCount = () => {
  return (
    <>
      <Link to="/cart">
        <button
          className="btn btn-outline-primary"
        >
          Ir al Cart o Terminar compra
        </button>
      </Link>
      <Link to="/">
        <button
          className="btn btn-outline-primary"
        >
          Seguir comprando
        </button>
      </Link>
    </>
  );
};

export default InputCount;