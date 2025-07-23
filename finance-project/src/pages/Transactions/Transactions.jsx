import './Transactions.css'
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { useState } from 'react';

function Transactions() {

    const [total, setTotal] = useState(0);

    const handleTransaction = ({ amount, add }) => {
        const numericAmount = parseFloat(amount);
        
        if (isNaN(numericAmount)) return;

        setTotal(prev => add ? prev + numericAmount : prev - numericAmount);
    };

    return(
        <>
            <h2>Transactions</h2>
            <TransactionForm onSubmit={handleTransaction}></TransactionForm>

            <h1>Total: ${total.toFixed(2)}</h1>
        </>
    );
}

export default Transactions