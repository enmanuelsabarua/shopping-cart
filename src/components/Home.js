import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
      <main className="main">
        <div className="container title-container">
          <div className="titles">
            <h2>BEST ONLINE LAPTOPS STORE OF THE YEAR</h2>
            <h1>Reach New Heights with LapBottom: Your Gateway to Cutting-Edge Laptops! </h1>
            <button className='shopnow-btn' type='button'><Link className='link' to="/catalog">Shop Now</Link></button>
          </div>
        </div>
      </main>
    );
  }
  
  export default Home;