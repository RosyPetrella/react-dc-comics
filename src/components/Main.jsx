export default function Main() {

    return(
        <>
        <section >
            <div className="container content">
               <h3>-- Content goes here --</h3> 
            </div>
            
        </section>
        <section className="section2">
            <div className="container bar">
        
                    {/* /* <div className="main-list">
                        <ul>
                            <li><img src="/buy-comics-digital-comics.png" alt="" /><a href="">DIGITAL COMICS</a></li>
                            <li><img src="/buy-comics-merchandise.png" alt="" /><a href="">DC MERCHANDISE</a></li>
                            <li><img src="/buy-comics-subscriptions.png" alt="" /><a href="">SUBSCRIPTION</a></li>
                            <li><img src="/buy-comics-subscriptions.png" alt="" /><a href="">COMIC SHOP LOCATOR</a></li>
                            <li><img src="/buy-dc-power-visa.svg" alt="" /><a href="">DC POWER VISA</a></li>   
                        </ul>
                    </div> */}

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
     
    )
}