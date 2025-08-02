import './Transactions.css'
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { useState } from 'react';

function Transactions() {

    const [total, setTotal] = useState(0);
    const [transactions, setTransactions] = useState([]);

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

    return(
        <>
            <h2>Transactions</h2>
            <TransactionForm onSubmit={handleTransaction}></TransactionForm>

            <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>Memo</th>
                        <th>Transaction Type</th>
                        <th>Amount</th>
                        <th>Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map(tx => (
                        <tr key={tx.id}>
                        <td>{tx.newMemo}</td>
                        <td>{tx.type}</td>
                        <td className={tx.type === 'Add' ? 'amount-add' : 'amount-remove'}>{tx.sign}${tx.amount.toFixed(2)}</td>
                        <td>${tx.newBalance.toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <h1 className='total'>Total: ${total.toFixed(2)}</h1>
        </>
    );
}

export default Transactions