import './Transactions.css'
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { useState } from 'react';
import { useTransactions } from './TransactionContext';

function Transactions() {

    const {total, transactions, goal, setGoal, handleTransaction} = useTransactions();

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
                        <td className={tx.type === 'Add' ? 'amount-add' : 'amount-remove'}>{tx.sign}${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td>${tx.newBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <h1 className='total'>Total: ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
        </>
    );
}

export default Transactions