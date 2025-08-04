import './Home.css';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { useTransactions } from '../Transactions/TransactionContext';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function Home() {

    const {total, transactions, goal, setGoal, handleTransaction} = useTransactions();
    const graph_title = `Goal: $${total.toLocaleString()}/$${goal.toLocaleString()}`;

    return(
        <>
            <h2>Dashboard</h2>
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
        </>
    );
}

export default Home