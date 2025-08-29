import React from 'react';

function CartChat({ cart, onRemove }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: 15,
      maxHeight: 300,
      overflowY: 'auto',
      backgroundColor: '#fafafa',
      textAlign: 'center',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h3>Purchased Items</h3>
      {cart.length === 0 && <p>No items bought yet.</p>}

      {cart.length > 0 && (
        <button 
          onClick={() => onRemove(null)} 
          style={{ marginBottom: '10px', padding: '5px 10px', cursor: 'pointer' }}
        >
          Clear All
        </button>
      )}

      {cart.map(item => (
        <div key={item.id} style={{ position: 'relative', marginBottom: 10 }}>
          <p>
            {item.title} - ${item.price}
          </p>
          <button 
            aria-label={`Remove ${item.title}`}
            onClick={() => onRemove(item.id)} 
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              background: 'transparent',
              border: 'none',
              color: 'red',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartChat;
