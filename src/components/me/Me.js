import React from 'react';
import styles from './Me.module.css';
import daniela from "../../images/דניאלה יוסופוב תדמית.png"
import Recommends from '../recommends/Recommends';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">בואי נכיר</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={daniela} alt="דניאלה יוסופוב" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>דניאלה יוסופוב</h1>
          <div className={styles.subtitle}>""לכל אחת מגיע להרשות לעצמה ולהרגיש הכי יפה בעולם ביום המיוחד שלה""</div>
          <p className={styles.description}>
            המסע שלי בעולם האיפור והשיער התחיל מהתמודדות אישית עם אקנה ופוסט אקנה. החיפוש אחר מישהי שתדע לטפל בעור כמו שלי, הוביל אותי להבין לעומק את העור שלנו ואת הצרכים המיוחדים של כל אחת.
          </p>
          <p className={styles.description}>
            התחלתי בכלל מעשיית צמות, אך חברות שהאמינו בי דחקו בי לפרסם את עצמי. מהר מאוד התחלתי לקבל פניות - "את עושה שיער? את עושה איפור?" - וכך, צעד אחר צעד, התאהבתי בתחום והתמקצעתי בו, באירועי ערב, בת מצות, חתונות ובעקרון - בכל מקום שאת רוצה להגיע אליו בשיא שלך.
          </p>

          <p className={styles.description}>
            מתחילת דרכי האמנתי שכל אישה ראויה להרגיש מושלמת ביום החשוב בחייה, ללא קשר למצב הכלכלי. לכן, בניתי חבילות במחירים נגישים לכל כיס, המשלבות איפור ועיצוב שיער ברמה הגבוהה ביותר, תוך התאמה מדויקת לסוג העור והשיער שלך, וליווי אישי לאורך כל הדרך.
          </p>
          <p className={styles.description} style={{fontFamily:"Assistant"}}>
        עד שאני לא ארגיש שאת שלמה ב100% עם המראה שלך את לא יוצאת ממני! 
          </p>
          <p className={styles.description}>
            כי אני מאמינה שיום האירוע הוא הרבה מעבר למראה מושלם - זו חוויה שלמה. אני כאן בשבילך 24/7, להקשיב, להרגיע, ולהפוך את ההכנות לחלק מהזיכרונות המתוקים של היום המיוחד שלך. כי בסופו של יום, הביטחון והשמחה שלך הם המראה הכי יפה שאפשר לייצר.
          </p>
        </div>
      </div>

    </>
  );
};

export default AboutMe;