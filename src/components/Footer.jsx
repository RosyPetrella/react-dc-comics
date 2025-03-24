export default function Footer() {
  const footerLinks = {
    dcComics: [
      "Characters",
      "Comics",
      "Movies",
      "TV",
      "Games",
      "Videos",
      "News",
    ],
    shop: ["Shop DC", "Shop DC Collectibles"],
    dc: [
      "Terms Of Use",
      "Privacy Policy",
      "Ad Choices",
      "Advertising",
      "Jobs",
      "Subscriptions",
      "Talent Workshops",
      "Ratings",
      "Shop Help",
      "Contact Us",
    ],
    sites: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"],
  };

  const socialLinks = [
    { name: "Facebook", image: "/footer-facebook.png" },
    { name: "Twitter", image: "/footer-twitter.png" },
    { name: "YouTube", image: "/footer-youtube.png" },
    { name: "Pinterest", image: "/footer-pinterest.png" },
    { name: "Location", image: "/footer-periscope.png" },
  ];
  return (
    <>
      <section className="section3">
        <div className="width-70 d-flex">
          <div className="link-container col-4">
            <div className="d-flex col1 col-link">
              <ul>
                <h4>DC COMICS</h4>
                {footerLinks.dcComics.map((footerLink, index) => (
                  <li key={index}>
                    <a href="#">{footerLink}</a>
                  </li>
                ))}
              </ul>
              <ul>
                <h4 className="shop">SHOP</h4>
                {footerLinks.shop.map((linkShop, index) => (
                  <li key={index}>
                    <a href="#">{linkShop}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex col-link">
              <ul>
                <h4>DC</h4>
                {footerLinks.dc.map((dcLink, index) => (
                  <li key={index}>
                    <a href="#">{dcLink}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex col-link">
              <ul>
                <h4>SITES</h4>
                {footerLinks.sites.map((sitesLink, index) => (
                  <li key={index}>
                    <a href="#">{sitesLink}</a>
                  </li>
                ))}
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
