
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import ParkingSpace from './Components/ParkingSpace';

function App() {
  return (
    <div className="App">
       <Navbar /> 
       <Footer />
       <Login />
       <Signup />
       <ParkingSpace />

    </div>
  );
}

export default App;