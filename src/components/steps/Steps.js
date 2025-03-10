import { useEffect, useState, useRef } from 'react';
import { MessageCircle, Calendar, Sparkles, Heart } from 'lucide-react';
import styles from './Steps.module.css';
import Button from '../button/Button';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "שיחת ייעוץ",
      content: "אנחנו מבינות איזה סוג תסרוקות ואיפור את מחפשת, מתאמות ציפיות וכמובן אני נותנת את הדעה המקצועית שלי לפי סוג העור שלך",
      icon: MessageCircle
    },
    {
      number: 2,
      title: "חודש לפני החתונה (לכלות)",
      content: "איפור ושיער נסיון - נפגשות בסטודיו שלי ומייצרות לך את הנראות שאת הולכת לקבל, שתוכלי להגיע לחתונה עם האיפור והשיער שחלמת עליהן וכמובן - מבינות אם משהו לא מסתדר לה עד שמתאימות את הנראות המושלמת עד שתצאי סגורה 100%",
      icon:Calendar
    },
    {
      number: 3,
      title: "הוראות טיפוח",
      content: "מה לעשות - מה לא לעשות לפני החתונה עם העור שלך. לדוגמא - כמה זמן לפני לעשות טיפולים בפנים, שעווה… וכמובן מבחינת השיער - מתי לחפוף, איך לחפוף - גוונים צבעים וכו..",
      icon: Heart
    },
    {
      number: 4,
      title: "יום האירוע",
      content: "אני מגיעה, לשמח אותך להקליל את היום ומתחילה בעבודה - מסרקת אותך, עוברות לאיפור וטאצאפים. כמובן שבמידת הצורך, יש אפשרות שניפגש גם בערב לטאצאפים לפני/אחרי החופה (לכלות)",
      icon: Sparkles
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visible = new Set();

      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (timelineTop <= windowHeight) {
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(Math.max(scrolled / (timelineHeight + windowHeight/2), 0), 1);
      }
      
      setScrollProgress(progress);

      const elements = document.querySelectorAll(`.${styles.timelineItem}`);
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementProgress = (viewportHeight - rect.top) / viewportHeight;
        
        if (elementProgress > 0.2 && elementProgress < 1) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
      if (visible.size > 0) {
        setActiveStep(Math.max(...visible));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return <>
    <div className={styles.container}>

      <div className={styles.title}>וככה זה עומד לקרות</div>
      <div className={styles.content}>
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: 'height 0.1s linear',
                background: 'linear-gradient(180deg, #ff9eb4 0%, #ffb6c1 100%)'
              }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${
                visibleSteps.has(step.number) ? styles.active : styles.inactive
              } ${step.number % 2 === 0 ? styles.left : styles.right}`}
            >
              <div 
                className={`${styles.timelineNumber} ${
                  visibleSteps.has(step.number) ? styles.numberActive : styles.numberInactive
                }`}
                style={{
                  borderColor: '#ffb6c1',
                  background: visibleSteps.has(step.number) 
                    ? 'linear-gradient(135deg, #ff9eb4 0%, #ffb6c1 100%)'
                    : '#FFFFFF'
                }}
              >
                <step.icon className={styles.iconStyle} size={24} 
                  color={visibleSteps.has(step.number) ? '#FFFFFF' : '#ff9eb4'} />
                <div className={styles.numberGlow} />
              </div>

              <div className={styles.timelineContent}>
                <div className={`${styles.glassEffect} ${
                  visibleSteps.has(step.number) ? styles.cardActive : ''
                }`}>
                  <h3 className={styles.timelineTitle} style={{ color: '#ff9eb4' }}>
                    {step.title}
                  </h3>
                  <p className={styles.timelineText}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Button text="אני רוצה לשריין תאריך"/>
  </>
};

export default Timeline;