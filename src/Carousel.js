/* import { useState, useEffect, useRef } from "react";
import { data } from './data';
import './App.css';

const Carousel = () => {
    const timerRef = useRef();
    const [picture, setPicture] = useState(0);
    
  useEffect(() => () => clearInterval(timerRef.current), []);
  
  const nextImage = () => {
    timerRef.current = setInterval(() => {
      setPicture((picture) => picture+1);
      }, 2000);
  }
  
  const nowImage = () => {
    clearInterval(timerRef.current);
    setPicture(0);
   
  };
  
   return(
    <div className="carousel">
    <div>

      <img className="bild"   onMouseOver={nextImage} onMouseOut={nowImage} src={data[picture % data.length].image} alt="Bild"/>
    </div>
    </div>
  
  )

}

export default Carousel;
 */
import { useState, useEffect, useRef } from "react";

const pictures = ["dish01.jpeg", "dish02.jpg", "dish03.jpg", "dish04.jpg", "dish05.jpg", "dish06.jpg", "dish08.jpg", "dish09.jpg", "dish010.jpg"];
const delay = 3000;

const Carousel = () => {
  
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    //resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pictures.length - 2 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="carousel">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {pictures.map((image, index) => (
          <div
            className="slide"
            key={index}
           
          >
            <img className="bild" src={image} alt="bild"/>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Carousel;