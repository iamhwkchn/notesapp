
import './App.css';
import Header from './components/Header.js'
import Body from './components/Body.js'
import NotesListPage from './pages/NotesListPage.js'

function App() {
  return (
    <div className="App">
        <p>
          <Header />
          <NotesListPage />
        </p>
    </div>
  );
}

export default App;
