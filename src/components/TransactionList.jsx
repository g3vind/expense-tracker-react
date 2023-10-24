import React, { useContext } from "react";
import Transaction from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>
        <span style={{ color: "#c0392b" }}>Transactions</span> History
      </h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
export default TransactionList;
