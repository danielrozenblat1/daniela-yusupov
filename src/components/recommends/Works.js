import React from 'react';
import styles from './Works.module.css';
// import Button from '../button/Button';

import result1 from "../../images/דניאלה יוסופוב עבודות 1.png";
import result2 from "../../images/דניאלה יוסופוב עבודות 2.png";
import result3 from "../../images/דניאלה יוסופוב עבודות 3.png";
import result4 from "../../images/דניאלה יוסופוב עבודות 4.png";
import result5 from "../../images/דניאלה יוסופוב עבודות 5.png";
import result6 from "../../images/דניאלה יוסופוב עבודות 6.png";
import result7 from "../../images/דניאלה יוסופוב עבודות 7.png";
import result8 from "../../images/דניאלה יוסופוב עבודות 8.png";
import result9 from "../../images/דניאלה יוסופוב עבודות 9.png";
import result10 from "../../images/דניאלה יוסופוב עבודות 10.png";
import result11 from "../../images/דניאלה יוסופוב עבודות 11.png";
import result12 from "../../images/דניאלה יוסופוב עבודות 12.png";
import result13 from "../../images/דניאלה יוסופוב עבודות 13.png";
import result14 from "../../images/דניאלה יוסופוב עבודות 14.png";
import result15 from "../../images/דניאלה יוסופוב עבודות 15.png";
import result16 from "../../images/דניאלה יוסופוב עבודות 16.png";
import result17 from "../../images/דניאלה יוסופוב עבודות 17.png";
import result18 from "../../images/דניאלה יוסופוב עבודות 18.png";
import result19 from "../../images/דניאלה יוסופוב עבודות 19.png";
import result20 from "../../images/דניאלה יוסופוב עבודות 20.png";
import result21 from "../../images/דניאלה יוסופוב עבודות 21.png";
import result22 from "../../images/דניאלה יוסופוב עבודות 22.png";
import result23 from "../../images/דניאלה יוסופוב עבודות 23.png";
import result24 from "../../images/דניאלה יוסופוב עבודות 24.png";
import result25 from "../../images/דניאלה יוסופוב עבודות 25.png";
import result26 from "../../images/דניאלה יוסופוב עבודות 26.png";
import result27 from "../../images/דניאלה יוסופוב עבודות 27.png";
import result28 from "../../images/דניאלה יוסופוב עבודות 28.png";
import result29 from "../../images/דניאלה יוסופוב עבודות 29.png";
import result30 from "../../images/דניאלה יוסופוב עבודות 30.png";
import result31 from "../../images/דניאלה יוסופוב עבודות 31.png";
import result32 from "../../images/דניאלה יוסופוב עבודות 32.png";
import result33 from "../../images/דניאלה יוסופוב עבודות 33.png";
import result34 from "../../images/דניאלה יוסופוב עבודות 34.png";
import result35 from "../../images/דניאלה יוסופוב עבודות 35.png";
import result36 from "../../images/דניאלה יוסופוב עבודות 36.png";
import result37 from "../../images/דניאלה יוסופוב עבודות 37.png";
import result38 from "../../images/דניאלה יוסופוב עבודות 38.png";
import result39 from "../../images/דניאלה יוסופוב עבודות 39.png";

const Works = () => {
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8,
    result9, result10, result11, result12, result13, result14, result15, result16,
    result17, result18, result19, result20, result21, result22, result23, result24,
    result25, result26, result27, result28, result29, result30, result31, result32,
    result33, result34, result35, result36, result37, result38, result39
  ];

  return (
    <>
     
      <div className={styles.explain}>ריכזתי עבורך מקבץ קטן מהבנות והכלות שעברו אצלי</div>
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`דניאלה יוסופוב תלמידה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`דניאלה יוסופוב תלמידה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Button text="דניאלה, בואי נבדוק התאמה" /> */}
    </>
  );
};

export default Works;