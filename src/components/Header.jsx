export default function Header() {
  return (
    <header>
      <div className="flex-justify-center">
        <div className="width-70 flex-alignitems-center flex-between">
          <div>
            <img src="./dc-logo.png" alt="DC Logo" />
          </div>
          <div className="top-nav">
            <ul>
              <li>
                <a href="">CHARACTERS</a>
              </li>
              <li>
                <a href="">COMICS</a>
              </li>
              <li>
                <a href="">MOVIES</a>
              </li>
              <li>
                <a href="">TV</a>
              </li>
              <li>
                <a href="">GAMES</a>
              </li>
              <li>
                <a href="">COLLECTIBLES</a>
              </li>
              <li>
                <a href="">VIDEOS</a>
              </li>
              <li>
                <a href="">FANS</a>
              </li>
              <li>
                <a href="">NEWS</a>
              </li>
              <li>
                <a href="">SHOP</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
