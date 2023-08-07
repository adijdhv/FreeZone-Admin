 import './App.css';
 import AdminRoutes from './routes/AdminRoutes';
 import Navbar from '../src/components/navbar'
  function App() {
  return (
    <div className="App">
    <Navbar/>
 
      <header className="App-header">
       
      <AdminRoutes/>
         
      </header>
    </div>
  );
}

export default App;
