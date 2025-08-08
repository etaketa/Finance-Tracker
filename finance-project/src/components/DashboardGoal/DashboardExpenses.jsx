import { useState } from "react";
import './DashboardExpenses.css';
import { useTransactions } from '../../pages/Transactions/TransactionContext';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function DashboardExpenses() {

    const {total, transactions, categoryTotals, goal, setGoal, handleTransaction} = useTransactions();
    const expenses= `Distribution of Expenses: $${Object.values(categoryTotals).reduce((sum, val) => sum + val, 0).toLocaleString()}`;
    const categories = Object.keys(categoryTotals);
    const data = Object.values(categoryTotals);

    return(
        <>
        <div className="goal">
            <div className="pie-graph">
                <Pie
                    data={{
                        labels: categories,
                        datasets: [{
                            data,
                            backgroundColor: [
                                    "yellow",
                                    "red",
                                    "pink",
                                    "blue"
                            ],
                        }]
                    }}
                    options={{
                            plugins: {
                                title: {
                                    text: expenses,
                                },
                            },
                    }}
                />
            </div>
        </div>
        </>
    );
}

export default DashboardExpenses