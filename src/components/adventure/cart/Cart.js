import React from "react";
import "./Cart.css";

function Cart({ cart, onRemove }) {
  // Sort cart by start time
  const sortedCart = [...cart].sort((a, b) => 
    a.startTime.localeCompare(b.startTime)
  );

  // Calculate total duration in hours
  const calculateTotalDuration = () => {
    let totalMinutes = 0;
    cart.forEach((adventure) => {
      const start = timeToMinutes(adventure.startTime);
      const end = timeToMinutes(adventure.endTime);
      totalMinutes += (end - start);
    });
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes > 0 ? minutes + 'min' : ''}`;
  };

  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };

  return (
    <div className="adventure-cart">
      <h2>Your Schedule</h2>
      <div className="cart-icon">📅</div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>No activities scheduled yet.</p>
          <p className="empty-subtitle">Start building your perfect day!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {sortedCart.map((adventure) => (
              <div key={adventure.id} className="cart-item">
                <div className="cart-item-time">
                  {adventure.startTime} - {adventure.endTime}
                </div>
                <div className="cart-item-details">
                  <h4>{adventure.name}</h4>
                  <button 
                    onClick={() => onRemove(adventure.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-item">
              <span>Total Activities:</span>
              <strong>{cart.length}</strong>
            </div>
            <div className="summary-item">
              <span>Total Duration:</span>
              <strong>{calculateTotalDuration()}</strong>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;