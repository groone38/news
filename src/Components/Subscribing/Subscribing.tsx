import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribing = () => {
  const [dis, setDis] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)) {
      setDis(false);
    } else {
      setDis(true);
    }
    setEmail(e.target.value);
  };
  const onSubmit = () => {
    setEmail("");
    setDis(true);
    notificration();
  };
  const notificration = () =>
    toast("Thanks for subscribing! We will send news to the mail.");

  return (
    <div className="my-5">
      <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
        Subscribe
      </h5>
      <p className="text-gray-600 mb-4">Subcribe to our newsletter.</p>
      <input
        type="email"
        placeholder="your email address"
        className="text-gray-700 bg-gray-100 w-full p-2 border rounded-t hover:broder-gray-600"
        value={email}
        onChange={(e) => onChangeHandler(e)}
      />
      <button
        onClick={onSubmit}
        disabled={dis}
        className={
          "px-5 py-2 text-white rounded-b w-full " +
          (dis ? " bg-slate-500 " : " bg-indigo-600 hover:bg-indigo-800 ")
        }
      >
        Subscribe
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Subscribing;
