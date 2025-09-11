import './App.css';
import ProductList from './components/products/ProductList';
import UserList from './components/users/UserList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mini React Project</h1>
      <UserList/>
      <ProductList/>
    </div>
  );
}

export default App;