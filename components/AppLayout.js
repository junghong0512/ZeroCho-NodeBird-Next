import Link from 'next/link';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/profile'>
          <a>Profile</a>
        </Link>
        <Link href='/signup'>
          <a>Signup</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
