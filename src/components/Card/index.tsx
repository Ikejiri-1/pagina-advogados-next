import { AnimatedCard } from "../Cards/AnimatedCard";
import "./card.css";

interface CardProps {
  title?: string;
  subtitle?: string;
  content?: string[];
  subcontent?: string;
  uniqueContent?: string;
}

export const Card = ({
  title,
  subtitle,
  content,
  subcontent,
  uniqueContent,
}: CardProps) => {
  return (
    <>
      <div>
        {title && (
          <div className="card-with-title">
            <h2 className="card-title">{title}</h2>
            <h3 className="card-subtitle">{subtitle}</h3>
            <div>
              {content &&
                content.map((c, index) => (
                  <AnimatedCard key={index}>{c}</AnimatedCard>
                ))}
            </div>
            {subcontent && <p className="card-subcontent">{subcontent}</p>}
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
