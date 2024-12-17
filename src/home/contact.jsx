import "./contact.css"

function Contact() {
  return (
    <footer className="footer-section" style={{ backgroundColor: '#1c3a63', color: '#f0f8ff' }}>
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt" style={{ color: '#f0f8ff' }}></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>s grand, KPHB road no.1, Hyderabad</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone" style={{ color: '#f0f8ff' }}></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9100010055</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open" style={{ color: '#f0f8ff' }}></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>vamsi@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-text">
                  <p>
                    In this web site you can book workspace at your location with reasonable prices.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <i className="fab fa-facebook-f" style={{ backgroundColor: '#3b5998' }}></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" style={{ backgroundColor: '#55acee' }}></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g" style={{ backgroundColor: '#dd4b39' }}></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="#" style={{ color: '#f0f8ff' }}>Home</a></li>
                  <li><a href="#" style={{ color: '#f0f8ff' }}>About</a></li>
                  <li><a href="#" style={{ color: '#f0f8ff' }}>Services</a></li>
                  <li><a href="#contact" style={{ color: '#f0f8ff' }}>Contact</a></li>
                  <li><a href="#work" style={{ color: '#f0f8ff' }}>Our Services</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form>
                    <input
                      type="text"
                      placeholder="Email Address"
                      style={{
                        padding: '14px 28px',
                        backgroundColor: '#4682b4',
                        border: '1px solid #4682b4',
                        color: '#fff',
                      }}
                    />
                    <button
                      style={{
                        backgroundColor: '#f0f8ff',
                        color: '#1c3a63',
                        padding: '13px 20px',
                        border: '1px solid #f0f8ff',
                      }}
                    >
                      <i className="fab fa-telegram-plane" style={{ fontSize: '22px' }}></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Contact;
