import React , { useState }from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { yellow } from 'color-name';
import '../assets/css/rating.css';


const StarRating = () => {
    const [rating, setRating ] = useState(null);
    const [hoverRating, hoverSetRating ] = useState(null);
    return (
        <div>
            {[ ...Array(5)].map((star,i) => {
                const ratingVal = i + 1 ; 
                return (
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingVal}
                            onClick={() => setRating(ratingVal) }
                            />
                       
                        <FontAwesomeIcon 
                            icon={faStar} 
                            className="star" 
                            color={ ratingVal <= (hoverRating || rating)  ?  "#ffc108" : "#e4e5e9"}
                            onMouseEnter={() => hoverSetRating(ratingVal)}
                            onMouseLeave={() => hoverSetRating(null)}
                            />
                    </label>
                );
            })}
           
        </div>
    )
}


export default StarRating;