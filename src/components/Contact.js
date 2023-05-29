import '../styles/Contact.css'
import Footer from './Footer';

function Contact() {
    return (
      <div className="contact">
        <div className="social-media">
          <a href="https://github.com/enmanuelsabarua" target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
        </div>

        <div className="address">
          <p>LapBottom</p>  
          <p>Rodeo Drive 42, Los Angeles USA</p>
        </div>

        <Footer color={'black'} />
      </div>
    );
}
  
export default Contact;