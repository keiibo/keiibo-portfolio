import React, { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import "../Style/PortfolioTile.scss";
import works from "../Json/works.json";
import { firestore } from "../util/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface PortfolioTileProps {
  max: number;
}

const PortfolioTile: React.FC<PortfolioTileProps> = (props) => {
  interface Work {
    name: string;
    url: string;
    img: string;
  }

  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const worksCollection = collection(firestore, "keiibo-portfolio");
      const snapshot = await getDocs(worksCollection);
      const data = snapshot.docs.map((doc) => doc.data() as Work);
      setWorks(data);
    };

    fetchWorks();
    console.log(works);
  }, []);

  return (
    <div className="grid-container">
      {works.slice(0, props.max).map((work: Work, index: number) => (
        <PortfolioCard
          name={work.name}
          index={index}
          img={work.img}
          url={work.url}
        />
      ))}
    </div>
  );
};

export default PortfolioTile;
