import { ReactComponent as BellSvg } from '../assets/bell.svg';
import { ReactComponent as AvatarSvg } from '../assets/profile.svg';
import { ReactComponent as ArrowDownSvg } from '../assets/arrow_down.svg';
import { ReactComponent as LoupeSvg } from '../assets/loupe.svg';

export const Header = () => {
  return (
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
  );
};
