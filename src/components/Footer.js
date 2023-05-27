import '../styles/Footer.css';  

function Footer({ color }) {
    return (
        <footer className="footer">
            <p className={color}>Copyrigth &copy; enmanuelsabarua <a className={color} href="https://github.com/enmanuelsabarua" target='_blank'><i className="fa-brands fa-github"></i></a> </p>
        </footer>
    );
}

export default Footer;