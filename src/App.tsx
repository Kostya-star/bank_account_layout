import './scss/main.scss';
import { ReactComponent as MenuDashboardSVG } from './assets/menu_1.svg';
import { ReactComponent as MenuAnalyticsSVG } from './assets/menu_2.svg';
import { ReactComponent as MenuPaymentsSVG } from './assets/menu_3.svg';
import { ReactComponent as MenuDepositSVG } from './assets/menu_4.svg';
import { ReactComponent as MenuMoneyBoxSVG } from './assets/menu_5.svg';
import { ReactComponent as MenuSecuritiesSVG } from './assets/menu_6.svg';
import { ReactComponent as MenuHelpSVG } from './assets/menu_7.svg';
import { ReactComponent as MenuSettingsSVG } from './assets/menu_8.svg';
import { ReactComponent as MenuLogoSVG } from './assets/logo.svg';
import { ReactComponent as MenuAvatarSVG } from './assets/avatar.svg';
import { ReactComponent as MenuCloseSVG } from './assets/close.svg';
import { ReactComponent as ArrowDownSVG } from './assets/arrow_down.svg';
import { useState } from 'react';

const menuList = [
  { svg: <MenuDashboardSVG />, text: 'Dashboard' },
  { svg: <MenuAnalyticsSVG />, text: 'Analytics' },
  { svg: <MenuPaymentsSVG />, text: 'Payments' },
  { svg: <MenuDepositSVG />, text: 'Deposit' },
  { svg: <MenuMoneyBoxSVG />, text: 'Moneybox' },
  { svg: <MenuSecuritiesSVG />, text: 'Securities' },
  { svg: <MenuHelpSVG />, text: 'Help' },
  { svg: <MenuSettingsSVG />, text: 'Settings' },
];

function App() {
  const [isActive, setActive] = useState(0);
  return (
    <div className="wrapper">
      <menu className="menu">
        <div className="menu__wrapper">
          <div className="menu__header">
            <MenuLogoSVG />
            <span className="menu__close">
              <MenuCloseSVG />
            </span>
          </div>
          <div className="menu__list">
            {menuList.map((item, ind) =>
              ind === 5 ? (
                <hr />
              ) : (
                <li
                  key={ind}
                  className={isActive === ind ? 'menu__list--active' : ''}
                  onClick={() => setActive(ind)}
                >
                  {item.svg}
                  {item.text}
                </li>
              )
            )}
          </div>
          <div className="menu__profile">
            <MenuAvatarSVG />
            <p>
              <span>Anna Karin <ArrowDownSVG/></span>
              <span className="menu__profile__email">annakarin@gmail.com</span>
            </p>
          </div>
        </div>
      </menu>

      <div className="content">MAIN PART</div>
    </div>
  );
}

export default App;
