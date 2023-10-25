import { Link } from 'react-router-dom';

import classNames from 'classnames';
import { HOME_ROUTE } from 'routeKeys';

const Header = ({ absolute }: { absolute?: boolean }) => {
  return (
    <header className={classNames({ absolute: absolute }, 'inset-x-0 top-0 z-50')}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to={HOME_ROUTE}>
            <img className="h-[38px] w-auto" src="assets/nearby-logo.svg" alt="Nearby" />
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <Link
            to="https://app.usenearby.com/login"
            className="h-9 px-8 text-sm rounded-full text-brandBlue bg-white hover:bg-brandBlue/80 hover:text-white border border-brandBlue inline-flex justify-center items-center transition-colors"
          >
            Log in
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
