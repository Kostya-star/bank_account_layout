import { createPortal } from 'react-dom';
import { useState } from 'react';
import { ReactComponent as BellSvg } from '../assets/bell.svg';
import { ReactComponent as AvatarSvg } from '../assets/avatar-2.svg';
import { ReactComponent as ArrowDownSvg } from '../assets/arrow_down.svg';
import { ReactComponent as LoupeSvg } from '../assets/loupe.svg';
import { ReactComponent as MenuHamburgerSvg } from '../assets/menu-hamburger.svg';
import { ReactComponent as LogoBigSvg } from '../assets/logo-big-black.svg';
import { Modal } from './UI/Modal/Modal';
import { Menu } from './Menu';
import { Input } from './UI/Input/Input';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const renderModal = () =>
    createPortal(
      <Modal>
        <Menu isModal={isMenuOpen} toggleModal={setMenuOpen} />
      </Modal>,
      document.body
    );

  return (
    <header className="header">
      <div className="content__container">
        <div className="header__wrapper">
          <div className="header__logo-big">
            <LogoBigSvg />
          </div>
          <div className="header__search-input">
            <Input type="text" placeholder="Search..." />
            <LoupeSvg />
          </div>
          <div className="header__col-2">
            <span className="header__col-2__loupe">
              <LoupeSvg />
              <div className="header__search-input">
                <Input type="text" placeholder="Search..." />
                <LoupeSvg />
              </div>
            </span>

            <span className="header__col-2__notifications">
              <BellSvg />
            </span>

            <div className="header__avatar">
              <AvatarSvg />
              <ArrowDownSvg />

              {/* DISPLAY ONLY ON SCREENS SMALLER 1000px */}
              <span onClick={() => setMenuOpen(!isMenuOpen)}>
                <MenuHamburgerSvg />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RENDER MENU IN MODAL */}
      {isMenuOpen && renderModal()}
    </header>
  );
};
