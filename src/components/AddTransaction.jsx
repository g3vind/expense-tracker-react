import React from "react";
import { useState } from "react";
export const AddTransaction = () => {
  // Hooks
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">
            <span style={{ color: "red" }}>Transaction</span> Label
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Transaction Label..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <span style={{ color: "red" }}>Transaction</span> Amount <br />
            <br />
            Use (+) for income and (-) for expenses
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Transaction Amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
