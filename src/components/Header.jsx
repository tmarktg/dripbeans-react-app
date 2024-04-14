import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class='bg-white shadow'>
      <nav class='container mx-auto px-6 py-3 flex justify-between items-center'>
        <Link
          to='/'
          className='text-xl font-bold text-gray-800'>
          DRIPBEANS COFFEE
        </Link>
        <div class='flex items-center space-x-4'>
          <Link
            to='/about'
            className='text-sm text-gray-600 hover:text-gray-800'>
            About Us
          </Link>
          <Link
            to='/order-online'
            className='text-sm text-gray-600 hover:text-gray-800'>
            Order Online
          </Link>

          <Link
            to='/shop'
            className='text-sm text-gray-600 hover:text-gray-800 active'>
            Shop
          </Link>
          <Link
            to='/hiring'
            className='text-sm text-gray-600 hover:text-gray-800'>
            Hiring
          </Link>
          <Link
            to='/contact'
            className='text-sm text-gray-600 hover:text-gray-800'>
            Contact
          </Link>

          <Link
            to='/franchise'
            className='text-sm text-gray-600 hover:text-gray-800'>
            Franchise
          </Link>

          <Link
            to='/coffee-club'
            className='py-2 px-4 bg-pink-200 text-pink-600 rounded-full text-sm'>
            Coffee Culture Club
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
