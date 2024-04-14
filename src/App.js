import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import OrderOnline from './pages/OrderOnline';
import Shop from './pages/Shop';
import Hiring from './pages/Hiring';
import ContactUs from './pages/ContactUs';
import Franchise from './pages/Franchise';
import CoffeeClub from './pages/CoffeeClub';

// NOTE: Alert is only used on the '/' route moving to that route we can prevent
// content shift when alert shows by hiding and unhiding the Alert rather than
// conditionally rendering

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Header />

        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <About />
                </>
              }
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/order-online'
              element={<OrderOnline />}
            />
            <Route
              path='/shop'
              element={<Shop />}
            />
            <Route
              path='/hiring'
              element={<Hiring />}
            />
            <Route
              path='/contact'
              element={<ContactUs />}
            />
            <Route
              path='/franchise'
              element={<Franchise />}
            />
            <Route
              path='/coffee-club'
              element={<CoffeeClub />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
