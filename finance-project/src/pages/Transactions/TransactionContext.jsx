import { createContext, useState, useContext } from "react";

const TransactionContext = createContext();

export function TransactionProvider ({children}) {
    const [total, setTotal] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [goal, setGoal] = useState(0);

    const handleTransaction = ({ amount, add, memo }) => {
        const numericAmount = parseFloat(amount);
        console.log("memo: " + memo);
        
        if (isNaN(numericAmount)) return;

        const newTotal = add ? total + numericAmount : total - numericAmount;

        const newTransaction = {
            amount: numericAmount,
            type: add ? 'Add' : 'Remove',
            newMemo: memo,
            newBalance: newTotal,
            sign: add ? '+' : '-'
        };
        setTotal(newTotal);
        setTransactions(prev => [...prev, newTransaction]);


    };

    return (
        <TransactionContext.Provider value={{ total, transactions, goal, setGoal, handleTransaction }}>
        {children}
        </TransactionContext.Provider>
    );
};

export function useTransactions() {
  return useContext(TransactionContext);
}