import React from "react";
import { toast } from "react-toastify";

// Toast pruning
const successToast = (title, description) => {
  toast.success(
    <div>
      <div style={{ fontWeight: 400, fontSize: "10px" }}> {title} </div>
      <div>{description}</div>
    </div>,
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );
};

const errorToast = (title, description) => {
  toast.error(
    <div>
      <div style={{ fontWeight: 400, fontSize: "10px" }}> {title} </div>
      <div>{description}</div>
    </div>,
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );
};

export { successToast, errorToast };
