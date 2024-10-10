import { GrCart } from "react-icons/gr";
import "./cartwidget.css";
export function CartWidget() {
  return (
    <div className="carrito">
      <GrCart />
      <span>0</span>
    </div>
  );
}
