import "./card.css";

interface CardProps {
  title?: string;
  content?: string[];
  uniqueContent?: string;
}

export const Card = ({ title, content, uniqueContent }: CardProps) => {
  return (
    <>
      <div>
        {title && (
          <div className="card-with-title">
            <h2 className="card-title">{title}</h2>
            <ul>
              {content &&
                content.map((c, index) => (
                  <li key={index} className="card-content">
                    {c}
                  </li>
                ))}
            </ul>
          </div>
        )}
        {uniqueContent && (
          <div className="card-unique-content">
            <span className="unique-content">{uniqueContent}</span>
          </div>
        )}
      </div>
    </>
  );
};
