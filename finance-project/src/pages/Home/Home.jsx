import './Home.css';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { useTransactions } from '../Transactions/TransactionContext';
import { useState } from 'react';
import DashboardExpenses from '../../components/DashboardGoal/DashboardExpenses';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function Home() {

    const {total, transactions, categoryTotals, goal, setGoal, handleTransaction} = useTransactions();
    const graph_title = `Goal: $${total.toLocaleString()}/$${goal.toLocaleString()}`;

    const [newGoal, setNewGoal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const parsedGoal = parseFloat(newGoal);
        if (!isNaN(parsedGoal)) {
            setGoal(parsedGoal);
            setNewGoal('');
        }
    };

    return(
        <>
            <h2>Dashboard</h2>
            <div className='goal'>
                <div className='graph'>
                    <Doughnut
                        data={{
                            labels: ["Money", "Money to Save"],
                            datasets: [{
                                data: [total, goal - total],
                                backgroundColor: [
                                    "green",
                                    "tan",
                                ],
                            }]
                        }}
                        options={{
                            plugins: {
                                title: {
                                    text: graph_title,
                                },
                            },
                        }}
                    />
                </div>
                    <form onSubmit={handleSubmit} className='goal-form'>
                        <label>Set a Goal!: <input type="number" step="0.01" value={newGoal} onChange={(e) => setNewGoal(e.target.value)}/></label>
                        <button type="submit">Submit</button>
                    </form>
            </div>
            <DashboardExpenses></DashboardExpenses>
        </>
    );
};

export default Home