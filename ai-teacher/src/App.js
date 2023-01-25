import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.rtl.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartLearningPage from "./components/StartLearningPage";
import MainPage from './components/MainPage';
import MathAiTeacher from "./components/MathAiTeacher";
import PhysicsAiTeacher from "./components/PhysicsAiTeacher";
import InfoAiTeacher from "./components/InfoAiTeacher";
import HistoryoAiTeacher from "./components/HistoryAiTeacher";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/start-learning" element={<StartLearningPage />} />
                    <Route path="/MathAi" element={<MathAiTeacher />} />
                    <Route path="/PhysicsAi" element={<PhysicsAiTeacher />} />
                    <Route path="/InfoAi" element={<InfoAiTeacher />} />
                    <Route path="/HistoryAi" element={<HistoryoAiTeacher />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
