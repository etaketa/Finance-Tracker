import { createContext, useState, useContext, useMemo } from "react";

const TransactionContext = createContext();

export function TransactionProvider ({children}) {
    const [total, setTotal] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [goal, setGoal] = useState(0);

    const handleTransaction = ({ amount, add, memo, category }) => {
        const numericAmount = parseFloat(amount);
        
        if (isNaN(numericAmount)) return;

        const newTotal = add ? total + numericAmount : total - numericAmount;

        const newTransaction = {
            amount: numericAmount,
            type: add ? 'Add' : 'Remove',
            newMemo: memo,
            newBalance: newTotal,
            sign: add ? '+' : '-',
            newCategory: category
        };
        setTotal(newTotal);
        setTransactions(prev => [...prev, newTransaction]);


    };

    const categoryTotals = useMemo(() => {
        const categories = {
            Bills: 0,
            Shopping: 0,
            Food: 0,
            Fun: 0,
        };

        transactions.forEach(tx => {
            if (categories.hasOwnProperty(tx.newCategory)) {
            categories[tx.newCategory] += tx.amount;
            }
        });

        return categories;
    }, [transactions]);

    return (
        <TransactionContext.Provider value={{ total, transactions, categoryTotals, goal, setGoal, handleTransaction }}>
        {children}
        </TransactionContext.Provider>
    );
};

export function useTransactions() {
  return useContext(TransactionContext);
}