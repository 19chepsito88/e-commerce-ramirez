import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import validator from "validator";
import "./CartForm.css";

const CartForm = ({
  cartList,
  totalPrice,
  insertOrders,
}) => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    phone: "",
    email: "",
    emailConfirm: "",
  });

  const { name, phone, email, emailConfirm } = formValues;
  const generateOrder = async (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      renderAlert("Nombre requerido");
    } else if (!validator.isEmail(email)) {
      renderAlert("El Email no es valido");
    }else if (!validator.isInt(phone)) {
      renderAlert("El Telefono no es valido");
    } else if (email !== emailConfirm) {
      renderAlert("El Email no conincide");
    } else {
      let orden = {};
      orden.buyer = formValues;
      orden.total = totalPrice();
      orden.items = cartList.map((product) => {
        const id = product.id;
        const name = product.name;
        const price = product.price * product.amount;
        const amount = product.amount;
        return { id, name, price, amount };
      });
      await insertOrders(orden, cartList);
    }
  };

  const renderAlert = (alert) => {
    return Swal.fire({
      title: alert,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  return (
    <form onSubmit={generateOrder} className="cart-form">
      <input
        className="input-form"
        name="name"
        type="text"
        placeholder="Ingrese el Nombre"
        onChange={handleInputChange}
        value={name}
      />
      <input
        className="input-form"
        name="email"
        type="text"
        placeholder="Ingrese el Email"
        onChange={handleInputChange}
        value={email}
      />
      <input
        className="input-form"
        name="emailConfirm"
        type="text"
        placeholder="Repita el Email"
        onChange={handleInputChange}
        value={emailConfirm}
      />
      <input
        className="input-form"
        name="phone"
        type="text"
        placeholder="Ingrese Telefono"
        onChange={handleInputChange}
        value={phone}
        maxLength="10"
      />
      <Button
        type="submit"
        variant="success"
        className="btn-Orden"
      >
        Generar Orden
      </Button>
    </form>
  );
};

export default CartForm;