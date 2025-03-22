import ListComponent from "./ListComponent";
export default function Main() {
  return (
    <>
      <section className="section1 flex-justify-center">
        <div className="width-70 ">
          <ListComponent />
        </div>
      </section>
      <section className="section2  flex-justify-center">
        <div className="width-70 container bar">
          <div className="col">
            <img src="/buy-comics-digital-comics.png" alt="" />
            <span>DIGITAL COMICS</span>
          </div>
          <div className="col">
            <img src="/buy-comics-merchandise.png" alt="" />
            <span>DC MERCHANDISE</span>
          </div>
          <div className="col">
            <img src="/buy-comics-subscriptions.png" alt="" />
            <span>SUBSCRIPTION</span>
          </div>
          <div className="col">
            <img src="/buy-comics-subscriptions.png" alt="" />
            <span>COMIC SHOP LOCATOR</span>
          </div>
          <div className="col">
            <img src="/buy-comics-digital-comics.png" alt="" />
            <span>DC POWER VISA</span>
          </div>
        </div>
      </section>
    </>
  );
}
