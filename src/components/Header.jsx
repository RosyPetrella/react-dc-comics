export default function Header({ navLinks }) {
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
