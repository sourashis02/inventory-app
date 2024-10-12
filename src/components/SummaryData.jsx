import Summary from "../components/Summary.jsx";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

const SummaryData = ({ products }) => {
    return (
        <div className="dashboard-header-summary">
            <Summary title={"Total Products"} value={products.length}>
                <ShoppingCartIcon sx={{ fontSize: 30, color: "white" }} />
            </Summary>
            <Summary title={"Total store value"} value={products.reduce((total, curr) => {
                if (String(curr.value).includes("$")) {
                    return total + parseFloat(String(curr.value).split("$")[1]);
                }
                return total + parseFloat(curr.value);
            }, 0)} isCurrency={true} >
                <CurrencyExchangeIcon sx={{ fontSize: 30, color: "white" }} />
            </Summary>
            <Summary title={"Out of stock"} value={products.filter(p => p.quantity === 0).length}>
                <RemoveShoppingCartIcon sx={{ fontSize: 30, color: "white" }} />
            </Summary>
            <Summary title={"No of Category"} value={new Set(products.map(p => p.category)).size}>
                <CategoryIcon sx={{ fontSize: 30, color: "white" }} />
            </Summary>
        </div>
    );
}

export default SummaryData;