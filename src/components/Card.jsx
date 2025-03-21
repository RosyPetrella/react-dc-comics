export default function card({ image, title }) {
    return(
        <div className="col-2">
            <div className="card">
                <div className="img-container">
                    <img src={image} alt="" />                
                </div>
                <span>{title}</span> 
            </div>
        </div>
    )
}