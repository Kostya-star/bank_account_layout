import { Fragment, useState } from 'react';

import { ReactComponent as MenuDashboardSVG } from '../assets/menu_1.svg';
import { ReactComponent as MenuAnalyticsSVG } from '../assets/menu_2.svg';
import { ReactComponent as MenuPaymentsSVG } from '../assets/menu_3.svg';
import { ReactComponent as MenuDepositSVG } from '../assets/menu_4.svg';
import { ReactComponent as MenuMoneyBoxSVG } from '../assets/menu_5.svg';
import { ReactComponent as MenuSecuritiesSVG } from '../assets/menu_6.svg';
import { ReactComponent as MenuHelpSVG } from '../assets/menu_7.svg';
import { ReactComponent as MenuSettingsSVG } from '../assets/menu_8.svg';
import { ReactComponent as MenuBigLogoSVG } from '../assets/big-logo.svg';
import { ReactComponent as MenuSmallLogoSVG } from '../assets/small-logo.svg';
import { ReactComponent as MenuAvatarSVG } from '../assets/profile.svg';
import { ReactComponent as MenuCloseSVG } from '../assets/close.svg';
import { ReactComponent as ArrowDownSVG } from '../assets/arrow_down.svg';
import { ReactComponent as MenuHamburgerSVG } from '../assets/menu-hamburger.svg';

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

export const Menu = () => {
  const [isActive, setActive] = useState(0);
  const [isHiddenMenu, setHiddenMenu] = useState(false);

  return (
    <menu className="menu">
      <div className={`menu__wrapper ${isHiddenMenu ? 'centered' : ''}`}>
        <div className="menu__header">
          {/* LOGO */}
          {isHiddenMenu ? <MenuSmallLogoSVG /> : <MenuBigLogoSVG />}

          {/* MENU SWITCH BTN */}
          <span
            className={isHiddenMenu ? 'menu__open-hamburger' : `menu__close`}
            onClick={() => setHiddenMenu(!isHiddenMenu)}
          >
            {isHiddenMenu ? <MenuHamburgerSVG /> : <MenuCloseSVG />}
          </span>

          {/* MENU LIST ITEMS */}
        </div>
        <ul className="menu__list">
          {menuList.map((item, ind) => (
            <Fragment key={ind}>
              <li
                className={isActive === ind ? 'menu__list--active' : ''}
                onClick={() => setActive(ind)}
              >
                {item.svg}
                {isHiddenMenu ? null : item.text}
              </li>
              {ind === 5 ? <hr /> : null}
            </Fragment>
          ))}
        </ul>
        <div className={`menu__profile ${isHiddenMenu ? 'menu__profile--column' : ''}`}>
          <MenuAvatarSVG />
          <p>
            <span>
              {
                isHiddenMenu
                ? 'Profile'
                : 'Anna Karin'
              }
               <ArrowDownSVG />
            </span>

            {/* USER EMAIL */}
            {isHiddenMenu ? null : (
              <span className="menu__profile__email">annakarin@gmail.com</span>
            )}
          </p>
        </div>
      </div>
    </menu>
  );
};
