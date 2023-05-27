import { Menu } from './components/Menu';
import './scss/main.scss';
import { ReactComponent as BellSvg } from './assets/bell.svg';
import { ReactComponent as AvatarSvg } from './assets/avatar.svg';
import { ReactComponent as ArrowDownSvg } from './assets/arrow_down.svg';
import { ReactComponent as LoupeSvg } from './assets/loupe.svg';

function App() {
  return (
    <div className="wrapper">
      <Menu />

      <div className="content">
        <header className="header">
          <div className="content__container">
            <div className="header__wrapper">
              <div className="header__search-input">
                <input type="text" placeholder="Search..." />
                <LoupeSvg />
              </div>
              <div className="header__col-2">
                <span className="header__col-2__notifications">
                  <BellSvg />
                </span>
                <div className="header__avatar">
                  <AvatarSvg />
                  <ArrowDownSvg />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
