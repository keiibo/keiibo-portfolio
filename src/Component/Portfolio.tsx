import React from "react";

const Portfolio: React.FC = () => {
  const works: string[] = [
    "作品1",
    "作品2",
    "作品3",
    "作品4",
    "作品5",
    "作品6",
    "作品7",
    "作品8",
    "作品9",
  ];
  const max: number = 3;

  return (
    <div className="grid-container">
      {works.slice(0, max).map((work, index) => (
        <div key={index} className="grid-item">
          {work}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
