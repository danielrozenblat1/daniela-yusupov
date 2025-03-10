import React, { useState, useEffect } from 'react';
import styles from './Works.module.css';
// import Button from '../button/Button';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import result2 from "../../images/דניאלה יוסופוב עבודות 2.png";
import result3 from "../../images/דניאלה יוסופוב עבודות 3.png";
import result5 from "../../images/דניאלה יוסופוב עבודות 5.png";
import result6 from "../../images/דניאלה יוסופוב עבודות 6.png";
import result9 from "../../images/דניאלה יוסופוב עבודות 9.png";
import result11 from "../../images/דניאלה יוסופוב עבודות 11.png";
import result12 from "../../images/דניאלה יוסופוב עבודות 12.png";
import result13 from "../../images/דניאלה יוסופוב עבודות 13.png";
import result18 from "../../images/דניאלה יוסופוב עבודות 18.png";
import result23 from "../../images/דניאלה יוסופוב עבודות 23.png";
import result26 from "../../images/דניאלה יוסופוב עבודות 26.png";
import result27 from "../../images/דניאלה יוסופוב עבודות 27.png";
import result29 from "../../images/דניאלה יוסופוב עבודות 29.png";
import result36 from "../../images/דניאלה יוסופוב עבודות 36.png";
import result37 from "../../images/דניאלה יוסופוב עבודות 37.png";
import result40 from "../../images/דניאלה יוסופוב עבודות 40.png";
import result41 from "../../images/דניאלה יוסופוב עבודות 41.png";
import result42 from "../../images/דניאלה יוסופוב עבודות 42.png";
import result43 from "../../images/דניאלה יוסופוב עבודות 43.png";
import result44 from "../../images/דניאלה יוסופוב עבודות 44.png";
import result45 from "../../images/דניאלה יוסופוב עבודות 45.png";
import result46 from "../../images/דניאלה יוסופוב עבודות 46.png";
import result47 from "../../images/דניאלה יוסופוב עבודות 47.png";
import result48 from "../../images/דניאלה יוסופוב עבודות 48.png";
import result49 from "../../images/דניאלה יוסופוב עבודות 49.png";
import result50 from "../../images/דניאלה יוסופוב עבודות 50.png";
import result51 from "../../images/דניאלה יוסופוב עבודות 51.png";
import result52 from "../../images/דניאלה יוסופוב עבודות 52.png";
import result53 from "../../images/דניאלה יוסופוב עבודות 53.png";
import result54 from "../../images/דניאלה יוסופוב עבודות 54.png";
import result55 from "../../images/דניאלה יוסופוב עבודות 55.png";
import result56 from "../../images/דניאלה יוסופוב עבודות 56.png";
import result57 from "../../images/דניאלה יוסופוב עבודות 57.png";
import result58 from "../../images/דניאלה יוסופוב עבודות 58.png";
import result59 from "../../images/דניאלה יוסופוב עבודות 59.png";
import result60 from "../../images/דניאלה יוסופוב עבודות 60.png";
import result61 from "../../images/דניאלה יוסופוב עבודות 61.png";
import result62 from "../../images/דניאלה יוסופוב עבודות 62.png";
import result63 from "../../images/דניאלה יוסופוב עבודות 63.png";
import result64 from "../../images/דניאלה יוסופוב עבודות 64.png";
import result65 from "../../images/דניאלה יוסופוב עבודות 65.png";
import result66 from "../../images/דניאלה יוסופוב עבודות 66.png";
import result67 from "../../images/דניאלה יוסופוב עבודות 67.png";
import result68 from "../../images/דניאלה יוסופוב עבודות 68.png";
import result69 from "../../images/דניאלה יוסופוב עבודות 69.png";
import result70 from "../../images/דניאלה יוסופוב עבודות 70.png";
import result71 from "../../images/דניאלה יוסופוב עבודות 71.png";
import result72 from "../../images/דניאלה יוסופוב עבודות 72.png";

const Works = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  // עדכון מספר התמונות בהתאם לרוחב המסך
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 650) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1150) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    // קריאה ראשונית
    handleResize();

    // האזנה לשינויי גודל מסך
    window.addEventListener('resize', handleResize);
    
    // ניקוי האזנה בעת פירוק הקומפוננטה
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // הגדרות הקרוסלה מבוססות על קומפוננטת ForthScreen של ספיר
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false
  };

  // משתמש בדיוק באותן תמונות מהקוד המקורי
  const images = [
    result2, result3, result5, result6,
    result9, result11, result12, result13,
    result18, result23, result26, result27, 
    result29, result36, result37,result40,result41,result42,result43,result44,
    result45,result46,result47,result48,result49,result50,result51,result52,result53,
    result54,result55,result56,result57,result58,result59,result60,result61,result62,result63,result64,result65,result66,result67,result68,result69,result70,result71,result72,
  ];
  
  const content = images.map(src => ({ type: 'image', src }));

  return (
    <>
     
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} className={styles.slideItem}>
              {item.type === 'image' && (
                <img 
                  src={item.src} 
                  className={styles.image} 
                  alt={`דניאלה יוסופוב תלמידה ${index + 1}`} 
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
      {/* <Button text="דניאלה, בואי נבדוק התאמה" /> */}
    </>
  );
};

export default Works;