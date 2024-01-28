import logo from './logo.svg';
import Register from './Pages/Ev_Register';
import Signin from './Pages/Ev_Signin';
import '../src/Styles/overall_css.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route,Router,Routes } from 'react-router-dom';
import { MdHeight } from 'react-icons/md';
import StationBooking from './Pages/StationBooking/StationBooking';
import UserReview from './Elements/UserReview';
import Timeslot from './Elements/Timeslot';

function App() {
  return (
    <>
     {/* <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<StationBooking />} />
        {/* <Route index path="/signin" element={<Signin />} />
        <Route index path="/register" element={<Register />} /> */}

      {/* </Routes>
      </BrowserRouter> */} 
      <StationBooking />
      {/* <Timeslot /> */}
     
    </>
  );
}

export default App;
