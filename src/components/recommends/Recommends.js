import styles from "./Recommends.module.css"
import result1 from "../../images/דניאלה יוסופוב המלצות 1.png"
import result2 from "../../images/דניאלה יוסופוב המלצות 2.png"
import result3 from "../../images/דניאלה יוסופוב המלצות 3.png"
import result4 from "../../images/דניאלה יוסופוב המלצות 4.png"
import result5 from "../../images/דניאלה יוסופוב המלצות 5.png"
import result6 from "../../images/דניאלה יוסופוב המלצות 6.png"
import result7 from "../../images/דניאלה יוסופוב המלצות 7.png"
import result8 from "../../images/דניאלה יוסופוב המלצות 8.png"
import result9 from "../../images/דניאלה יוסופוב המלצות 9.png"
import result10 from "../../images/דניאלה יוסופוב המלצות 10.png"
import result11 from  "../../images/דניאלה יוסופוב המלצות 11.png"
import result12 from  "../../images/דניאלה יוסופוב המלצות 12.png"
import result13 from  "../../images/דניאלה יוסופוב המלצות 13.png"
import result14 from  "../../images/דניאלה יוסופוב המלצות 14.png"
import result15 from  "../../images/דניאלה יוסופוב המלצות 15.png"
import result16 from  "../../images/דניאלה יוסופוב המלצות 16.png"
import result17 from  "../../images/דניאלה יוסופוב המלצות 17.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"
const Recommends=()=>{
  const sliderSettings = {
    autoplay: true,           // הוספת הגדרה זו להפעלת התנועה האוטומטית
    autoplaySpeed: 3000,      // מהירות החלפה - 2 שניות
    infinite: true,
    speed: 700,
    dots: false,
    slidesToShow: window.innerWidth < 450 ? 1 :
                  window.innerWidth <= 1050 ? 2 : 4,
    slidesToScroll: 1,
};
      const content = [
        {
          type: 'image',
          src: result1,
        },
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result12,
        },
        {
          type: 'image',
          src: result13,
        },
        {
          type: 'image',
          src: result14,
        },
        {
          type: 'image',
          src: result15,
        },
        {
          type: 'image',
          src: result16,
        },
        {
          type: 'image',
          src: result17,
        },
        {
          type: 'image',
          src: result8,
        },
        {
          type: 'image',
          src: result10,
        },
        {
          type: 'image',
          src: result9,
        },
        {
          type: 'image',
          src: result2,
        },
        {
          type: 'image',
          src: result3,
        },
        {
          type: 'image',
          src: result4,
        }, 
        
        {
          type: 'image',
          src: result5,
        },
          {
            type: 'image',
            src: result6,
          },
          {
            type: 'image',
            src: result7,
          },
        ];  
return <>
<div className={styles.title} id="כלה לעתיד">רק לפני הכל..</div>
<div className={styles.explain}>ריכזתי עבורך מקבץ קטן מהבנות והכלות שעברו אצלי שהרגישו צורך לשתף על החוויה</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`דניאלה יוסופוב לקוחה ממליצה מספר ${index + 1}`} itemprop="image"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>


</>


}
export default Recommends