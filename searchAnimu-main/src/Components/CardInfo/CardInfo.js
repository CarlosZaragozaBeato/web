import "./CardInfo.css";
import { AiFillCloseCircle } from "react-icons/ai";
import React,{ useContext } from "react";
import { AnimuContext } from "../../Context/AnimuContext";

const CardInfo = ({ info }) => {
  const { setSelected } = useContext(AnimuContext);

  return (
    <div className="cardContainer">
      <div className="closeIcon">
        <AiFillCloseCircle onClick={() => setSelected()} />
      </div>


        <div className="cardInfoContainer">
          <div className="infoTitle">
            <h2 className="titleAnimu">{info.title}</h2>

            <div className="names">
              <h3>Synonyms</h3>
              <div className="groupSynonyms">
                {info.synonyms.map((spanSyn) => (
                  <p key={Math.floor(Math.random() * 10000000)}>- {spanSyn}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="infoType">
            <p>
              Type:<span>{info.type}</span>
            </p>
            <p>
              Episodes:<span>{info.episodes}</span>
            </p>
          </div>

          <div className="infoTime">
            <p>
              Anime Season:{" "}
              {info.animeSeason.season === "UNDEFINED" ? (
                <span>Unknown</span>
              ) : (
                <span>{info.animeSeason.season}</span>
              )}
            </p>
            <p>
              Year: <span>{info.animeSeason.year}</span>
            </p>
            <p>
              Status: <span>{info.status}</span>
            </p>
          </div>

          <div className="tags">
            <h3>Tags</h3>
            <div>
              {info.tags.map((spanTags) => (
                <span key={Math.floor(Math.random() * 10000000)}>
                  #{spanTags}
                </span>
              ))}
            </div>
          </div>

          <figure className="infoPicture">
            <img src={info.picture} alt="" />
         </figure>
        </div>
      

    </div>
  );
};

export default CardInfo;
