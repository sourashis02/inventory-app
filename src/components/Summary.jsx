const Summary = ({ children, title, value, isCurrency }) => {
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div className="summary-container">
            <div className="summary-icon">
                {children}
            </div>
            <div className="summary-data">
                <h3>{title}</h3>
                <p>{isCurrency ? currencyFormat(value) : value}</p>
            </div>
        </div>
    );
}

export default Summary;