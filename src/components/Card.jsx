export default function Card({ image, title }) {
  return (
    <div className="Card">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <span>{title}</span>
    </div>
  );
}
