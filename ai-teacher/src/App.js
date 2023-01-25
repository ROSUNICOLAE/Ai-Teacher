import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.rtl.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import CountSection from "./components/countSection";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
      <header className="App-header">
          <body>
          <h1>AI Teacher</h1>
            <p>AI Teacher is a web application that helps students to learn and practice their math skills.</p>
            <p>AI Teacher is a web application that helps students to learn and practice their math skills.</p>
          </body>
          <CountSection />
      </header>
        <Footer />
    </div>

  );
}

export default App;
