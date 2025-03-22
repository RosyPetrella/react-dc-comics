export default function Footer() {
  return (
    <>
      <section className="section3">
        <div className="width-70 d-flex">
          <div className="link-container col-4">
            <div className="d-flex col1 col-link">
              <ul>
                <h4>DC COMICS</h4>
                <li>
                  <a href="#">Characters</a>
                </li>
                <li>
                  <a href="#">Comics</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">TV</a>
                </li>
                <li>
                  <a href="#">Games</a>
                </li>
                <li>
                  <a href="#">Videos</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
              <ul>
                <h4 className="shop">SHOP</h4>
                <li>
                  <a href="#">Shop DC</a>
                </li>
                <li>
                  <a href="#">Shop DC Collectibles</a>
                </li>
              </ul>
            </div>
            <div className="d-flex col-link">
              <ul>
                <h4>DC</h4>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Ad Choices</a>
                </li>
                <li>
                  <a href="#">Advertising</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Subscriptions</a>
                </li>
                <li>
                  <a href="#">Talent Workshops</a>
                </li>
                <li>
                  <a href="#">Ratings</a>
                </li>
                <li>
                  <a href="#">Shop Help</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="d-flex col-link">
              <ul>
                <h4>SITES</h4>
                <li>
                  <a href="#">DC</a>
                </li>
                <li>
                  <a href="#">MAD Magazine</a>
                </li>
                <li>
                  <a href="#">DC Kids</a>
                </li>
                <li>
                  <a href="#">DC Universe</a>
                </li>
                <li>
                  <a href="#">DC Power Visa</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="DC_image col-8">
            <img src="/dc-logo-bg.png" alt="" />
          </div>
        </div>
      </section>
      <section className="section4 flex-justify-center">
        <div class="container width-70 bottom">
          <div>
            <button class="signup-btn">SIGN-UP NOW!</button>
          </div>

          <div class="social-links">
            <span>FOLLOW US</span>
            <a href="#">
              <img src="/footer-facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/footer-twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/footer-youtube.png" alt="YouTube" />
            </a>
            <a href="#">
              <img src="/footer-pinterest.png" alt="Pinterest" />
            </a>
            <a href="#">
              <img src="/footer-periscope.png" alt="Location" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
