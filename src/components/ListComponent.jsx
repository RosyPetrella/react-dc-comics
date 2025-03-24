import Card from "./Card";
export default function ListComponent({ comicsList }) {
  return (
    <div className="ListComponent-container">
      <div className="ListComponent-title">CURRENT SERIES</div>
      <div className="ListComponent-body">
        {comicsList.map((comic, index) => (
          <Card key={index} image={comic.image} title={comic.title} />
        ))}
      </div>
      <div className="ListComponent-button flex-justify-center">
        <span>LOAD MORE</span>
      </div>
    </div>
  );
}
