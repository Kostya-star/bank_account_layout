import { Header } from './components/Header';
import { Menu } from './components/Menu';
import './scss/main.scss';

function App() {
  return (
    <div className="wrapper">
      <Menu />

      <div className="content">
        <Header/>
        <main>
          
        </main>
      </div>
    </div>
  );
}

export default App;
