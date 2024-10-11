import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const EditItemModal = forwardRef(({ itemTitle, category, price, quantity, value }, ref) => {
    const modalRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                modalRef.current.showModal();
            }
        }
    });
    return createPortal(
        <dialog ref={modalRef} className="edit-modal">
            <form method="dialog">
                <div className="modal-header">
                    <div className="modal-head-content">
                        <p className="modal-title">Edit product</p>
                        <p>{itemTitle}</p>
                    </div>
                    <img src="../../assets/close.png" onClick={() => { modalRef.current.close() }} alt="close" className="close-btn" />
                </div>
                <div className="edit-data">
                    <div className="edit-data-content">
                        <label htmlFor="category">Category</label>
                        <input id="category" type="text" value={category} />
                    </div>
                    <div className="edit-data-content">
                        <label htmlFor="price">Price</label>
                        <input id="price" type="text" value={price} />
                    </div>
                    <div className="edit-data-content">
                        <label htmlFor="quantity">Quantity</label>
                        <input id="quantity" type="text" value={quantity} />
                    </div>
                    <div className="edit-data-content">
                        <label htmlFor="value">Value</label>
                        <input id="value" type="text" value={value} />
                    </div>
                </div>
                <div className="modal-action">
                    <button type="button" onClick={() => { modalRef.current.close() }}>Cancel</button>
                    <button type="button" onClick={() => { modalRef.current.close() }}>Save</button>
                </div>
            </form>
        </dialog>,
        document.getElementById("root")
    );
});

export default EditItemModal;