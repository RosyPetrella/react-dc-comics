export default function Header() {
  const navLinks = [
    "CHARACTERS",
    "COMICS",
    "MOVIES",
    "TV",
    "GAMES",
    "COLLECTIBLES",
    "VIDEOS",
    "FANS",
    "NEWS",
    "SHOP",
  ];

  return (
    <header>
      <div className="flex-justify-center">
        <div className="width-70 flex-alignitems-center flex-between">
          <div>
            <img src="./dc-logo.png" alt="DC Logo" />
          </div>
          <div className="top-nav">
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
