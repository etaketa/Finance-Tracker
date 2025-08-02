import { useState } from "react";
import './TransactionForm.css'

function TransactionForm( {onSubmit} ) {

    const [formData, setFormData] = useState({
        amount : '',
        memo: '',
        add : true
    });

    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log('submitted', formData);
        if (formData.amount === '') return;
        if (formData.memo === '') return;

        onSubmit(formData);
        setFormData({ amount: '', memo: '', add: true });
    }

    const handleAmountChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleDropdown = (e) => {
        const value = e.target.value === "true";
        setFormData((prev) => ({ ...prev, add: value }));
    }

    return(
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Amount: <input type="text" name="amount" value={formData.amount} onChange={handleAmountChange}/></label>
                    <label>Memo: <input type="text" name="memo" value={formData.memo} onChange={handleAmountChange}/></label>
                    <label htmlFor="category">Add or remove: </label>
                    <select id="category" value={formData.add.toString()} onChange={handleDropdown}>
                        <option value="">-- Select --</option>
                        <option value={true}>Add</option>
                        <option value={false}>Remove</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default TransactionForm