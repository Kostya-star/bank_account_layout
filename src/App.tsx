import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Button } from './components/UI/Button/Button';
import { Heading } from './components/content/Heading';
import './scss/main.scss';

function App() {
  return (
    <div className="wrapper">
      <Menu />

      <div className="content">
        <Header />
        <div className="content__container">
          <main>
            <div className="heading">
              <Heading />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
