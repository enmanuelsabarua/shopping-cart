import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../styles/Home.css';

function Home() {
    return (
      <div className='home'>
        <main className="main">
          <div className="container title-container">
            <div className="titles">
              <h2>BEST ONLINE LAPTOPS STORE OF THE YEAR</h2>
              <h1>Reach New Heights with LapBottom: Your Gateway to Cutting-Edge Laptops! </h1>
              <button className='shopnow-btn' type='button'><Link className='link' to="/catalog">Shop Now</Link></button>
            </div>
          </div>
        </main>
        
        <Footer color={'white'} />
      </div>
    );
  }
  
  export default Home;