import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    // Ensure 'amount' is a valid number before adding the transaction
    if (text.trim() === "" || isNaN(parseFloat(amount))) {
      // You can display an error message to the user if needed.
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    // Clear the form fields after adding the transaction
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">
            <span style={{ color: "#c0392b" }}>Label</span>
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter transaction label.."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <span style={{ color: "#2ecc71" }}>Amount</span>{" "}
            <i>
              <small>Use (-) sign for expenses</small>
            </i>
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter transaction amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
export default AddTransaction;
