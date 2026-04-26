import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Espresso', price: 3.5, category: 'coffee' },
    { id: 2, name: 'Cappuccino', price: 4.5, category: 'coffee' },
    { id: 3, name: 'Croissant', price: 4.0, category: 'pastry' },
  ]);
  const [newItem, setNewItem] = useState({ name: '', price: '', category: 'coffee' });
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', items: 'Espresso x2', total: 7, status: 'pending' },
    { id: 2, customer: 'Jane Smith', items: 'Cappuccino x1, Croissant x1', total: 8.5, status: 'completed' },
  ]);

  const handleAddMenuItem = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price) {
      alert('Please fill in all fields');
      return;
    }
    const item = {
      id: Date.now(),
      name: newItem.name,
      price: parseFloat(newItem.price),
      category: newItem.category,
    };
    setMenuItems([...menuItems, item]);
    setNewItem({ name: '', price: '', category: 'coffee' });
  };

  const handleDeleteMenuItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>Admin Dashboard</h1>
          <div style={styles.userInfo}>
            <span>Welcome, {user?.name}!</span>
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </div>
        </div>
      </header>

      <div style={styles.tabs}>
        <button
          style={{ ...styles.tab, ...(activeTab === 'overview' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'menu' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('menu')}
        >
          Manage Menu
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'orders' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('orders')}
        >
          Orders
        </button>
      </div>

      <div style={styles.content}>
        {activeTab === 'overview' && (
          <div style={styles.section}>
            <h2>Overview</h2>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <h3>{menuItems.length}</h3>
                <p>Menu Items</p>
              </div>
              <div style={styles.statCard}>
                <h3>{orders.length}</h3>
                <p>Total Orders</p>
              </div>
              <div style={styles.statCard}>
                <h3>{orders.filter(o => o.status === 'completed').length}</h3>
                <p>Completed</p>
              </div>
              <div style={styles.statCard}>
                <h3>${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}</h3>
                <p>Total Revenue</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'menu' && (
          <div style={styles.section}>
            <h2>Manage Menu Items</h2>
            
            <form onSubmit={handleAddMenuItem} style={styles.form}>
              <h3>Add New Item</h3>
              <input
                style={styles.input}
                type="text"
                placeholder="Item Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              />
              <input
                style={styles.input}
                type="number"
                placeholder="Price"
                step="0.01"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              />
              <select
                style={styles.input}
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              >
                <option value="coffee">Coffee</option>
                <option value="pastry">Pastry</option>
                <option value="sandwich">Sandwich</option>
                <option value="beverage">Beverage</option>
              </select>
              <button type="submit" style={styles.addBtn}>Add Item</button>
            </form>

            <div style={styles.itemsList}>
              <h3>Current Menu</h3>
              {menuItems.map(item => (
                <div key={item.id} style={styles.menuItem}>
                  <div>
                    <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                    <span style={styles.category}>{item.category}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteMenuItem(item.id)}
                    style={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div style={styles.section}>
            <h2>Orders Management</h2>
            <div style={styles.ordersList}>
              {orders.map(order => (
                <div key={order.id} style={styles.orderCard}>
                  <div>
                    <h4>{order.customer}</h4>
                    <p>{order.items}</p>
                    <p>Total: ${order.total.toFixed(2)}</p>
                  </div>
                  <div style={styles.orderActions}>
                    <select
                      value={order.status}
                      onChange={(e) => handleOrderStatus(order.id, e.target.value)}
                      style={{ ...styles.input, width: '120px' }}
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <span style={{ ...styles.status, ...styles[`status_${order.status}`] }}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '32px',
    fontFamily: '"Playfair Display", serif',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  logoutBtn: {
    backgroundColor: '#e74c3c',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  tabs: {
    display: 'flex',
    gap: '10px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    borderBottom: '1px solid #ddd',
  },
  tab: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#e0e0e0',
    cursor: 'pointer',
    borderRadius: '5px',
    fontWeight: '500',
    transition: 'all 0.3s',
  },
  activeTab: {
    backgroundColor: '#d4a373',
    color: 'white',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  section: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  statCard: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    border: '1px solid #ddd',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px',
    outline: 'none',
  },
  addBtn: {
    padding: '10px 20px',
    backgroundColor: '#d4a373',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  itemsList: {
    marginTop: '20px',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    marginBottom: '10px',
    border: '1px solid #eee',
  },
  category: {
    display: 'inline-block',
    backgroundColor: '#d4a373',
    color: 'white',
    padding: '3px 10px',
    borderRadius: '3px',
    fontSize: '12px',
    marginLeft: '10px',
  },
  deleteBtn: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  ordersList: {
    display: 'grid',
    gap: '15px',
    marginTop: '20px',
  },
  orderCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    border: '1px solid #eee',
  },
  orderActions: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  status: {
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'white',
  },
  status_pending: {
    backgroundColor: '#f39c12',
  },
  status_completed: {
    backgroundColor: '#27ae60',
  },
  status_cancelled: {
    backgroundColor: '#e74c3c',
  },
};

export default AdminDashboard;
