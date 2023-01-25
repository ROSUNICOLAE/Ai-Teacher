import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.rtl.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartLearningPage from "./components/StartLearningPage";
import MainPage from './components/MainPage';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/start-learning" element={<StartLearningPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
