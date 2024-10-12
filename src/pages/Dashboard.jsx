import { useState, useEffect } from "react";
import DataTable from "../components/DataTable.jsx";
import SummaryData from "../components/SummaryData.jsx";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const deleteProduct = (i) => {
        setProducts(prev => {
            const newProducts = [...prev];
            newProducts.splice(i, 1);
            return newProducts;
        });
    }

    return (
        <div className="dashboard-container black-theme">
            <div className="dashboard-header">
                <h1>Inventory stats</h1>
                <SummaryData products={products} />
            </div>
            <div className="dashboard-data">
                <DataTable productList={products} onDeleteItem={deleteProduct} />
            </div>
        </div>
    );
}

export default Dashboard;