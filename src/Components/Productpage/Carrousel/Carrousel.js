import React, { useState } from "react";
import "./Carrousel.css";
import chevron from "../../../chevron1.png";

function Carrousel({images}) {
    /* Crée un Hook d'état */
    let [imgAfficher, changerImg] = useState(0);
    let nombreImg = images.length;

    const imgPrecedente = () => {
        if(imgAfficher === 0) {
            changerImg(nombreImg - 1);
        } else {
            changerImg(imgAfficher - 1);
        }
        return(changerImg);
    };  

    const imgSuivante = () => {
        if(imgAfficher === nombreImg - 1) {
            changerImg(nombreImg = 0);
        } else {
            changerImg(imgAfficher + 1);
        }
        return(changerImg);
    };

    return(
        <div className="carrousel">
            {
                nombreImg > 1 && <img className="fleche fleche-gauche" src={chevron} alt="Contenu précedént" onClick={imgPrecedente}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === imgAfficher ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                nombreImg > 1 && <img className="fleche fleche-droite" src={chevron} alt="Contenu suivant" onClick={imgSuivante}/>
            }
        </div>
    );
}

export default Carrousel;
