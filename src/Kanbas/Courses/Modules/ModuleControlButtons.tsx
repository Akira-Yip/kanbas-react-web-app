import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa6";

export default function ModuleControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      <span className="me-2">
        <GreenCheckmark />
      </span>
      <span className="me-2">
        <FaPlus />
      </span>
      <span>
        <IoEllipsisVertical className="fs-4" />
      </span>
    </div>
  );
}
