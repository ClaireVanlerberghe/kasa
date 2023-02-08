import {useState} from "react";
import chevron from '../../chevron1.png'
import './Collapse.css'

function Collapse({titre, description}) {
    const [open, setOpen] = useState(false);

    return(
        <div className="collapse" id={`collapse-${titre}`}>
        <div className="header-collapse">
            <div className="titre-collapse">{titre}</div>
            <span className={`fleche-collapse ${open}`} onClick={() => setOpen(!open)}>
                <img src={chevron} alt="Ouvrir cette liste"/>
            </span>
        </div>
        {
            /* Si le collapse est à TRUE, il affichera la description */
            open && <div className="description-collapse">{description}</div>
        }
    </div>
);
}

export default Collapse;
