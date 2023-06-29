import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.rtl.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhysicsAiTeacher from "./components/PhysicsAiTeacher";
import SignUp from "./components/SignUp";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<PhysicsAiTeacher />} />
                    <Route path="/SingUpForm" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
