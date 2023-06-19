import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Layout/Body';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import LoginDisplay from './components/Pages/LoginDisplay';
import SignUpDoctor from './components/Pages/SignUpDoctor';
import SignupPatient from './components/Pages/SignupPatient';
import DoctorLogin from './components/Pages/DoctorLogin';
import PatientLogin from './components/Pages/PatientLogin';
import Drawer from './components/Layout/Drawer';
// import Home from './components/Home';
function App() {
  return (<>
    <Header />
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="login" element={<LoginDisplay />} />
      <Route path="doctorlogin" element={<DoctorLogin />} />
      <Route path="profile" element={<Drawer/>} />
      <Route path="doctorsignup" element={<SignUpDoctor />} />
      {/* </Route> */}
      {/* </Route> */}
      <Route path="patientlogin" element={<PatientLogin />} />
      <Route path="patientsignup" element={<SignupPatient />} />
      {/* </Route> */}
      {/* </Route> */}
    </Routes>
    <Footer />
  </>
  );
}

export default App;
