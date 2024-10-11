import EditItemModal from "./EditItemModal";
import { useRef, useState, useContext } from "react";
import { AccessContext } from "./AccessProvider.jsx";

const DataTable = ({ productList }) => {
    const [selectedProduct, setSelectedProduct] = useState({});
    const modalRef = useRef();
    const handleEdit = (product) => {
        setSelectedProduct(product);
        modalRef.current.open();
    }

    const accessContext = useContext(AccessContext);

    return (
        <div className="data-table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Value</th>
                        {accessContext.userAccess && <th>Action</th>}
                        {!accessContext.userAccess && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    <EditItemModal ref={modalRef} itemTitle={selectedProduct.name} category={selectedProduct.category} price={selectedProduct.price} quantity={selectedProduct.quantity} value={selectedProduct.value} />
                    {productList.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.value}</td>
                            {accessContext.userAccess && <td>
                                <img src="../../assets/edit.png" alt="open" className="action-btn" onClick={() => { handleEdit(product) }} />
                                <img src="../../assets/visibility.png" alt="open" className="action-btn" onClick={() => { }} />
                                <img src="../../assets/delete.png" alt="open" className="action-btn" onClick={() => { }} />
                            </td>}
                            {!accessContext.userAccess && <td>
                                <img src="../../assets/disableedit.png" alt="open" className="action-btn" />
                                <img src="../../assets/disablevisibility.png" alt="open" className="action-btn" />
                                <img src="../../assets/disabledelete.png" alt="open" className="action-btn" />
                            </td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default DataTable;