// Updated Where component with white icons and styled profile image
import React from 'react';
import { MapPin, School, Users, Heart, Phone, Instagram, Facebook, Image } from 'lucide-react';
import styles from './Where.module.css';
import midrag from "../../images/דניאלה יוסופוב מדרג.png"
const Where = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+972525222897";
    const message = "היי דניאלה הגעתי מהדף, אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/daniela_yosupov/", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/daniela.yosupov", "_blank");
  };

  const handleImageClick = () => {
    // You can define what happens when the image is clicked
    window.open("https://www.instagram.com/daniela_yosupov/", "_blank");
  };

  const socialIcons = [
    { 
      icon: <Instagram className={styles.icon} size={24} strokeWidth={1} />, 
      name: 'instagram',
      onClick: handleInstagramClick
    },
    { 
      icon: <Facebook className={styles.icon} size={24} strokeWidth={1} />, 
      name: 'facebook',
      onClick: handleFacebookClick
    },
    { 
      icon: <Phone className={styles.icon} size={24} strokeWidth={1} />, 
      name: 'whatsapp',
      onClick: handleWhatsAppClick
    }
  ];

  return (
    <div className={styles.container}>

      
      <h2 className={styles.title}>תוכלו למצוא אותי גם כאן:</h2>
      <div className={styles.socialContainer}>
        {socialIcons.map((social, index) => (
          <div 
            key={index} 
            className={styles.socialIcon}
            onClick={social.onClick}
          >
            {social.icon}
          </div>
        ))}
      </div>
      <h2 className={styles.title}>וגם במדרג</h2>
      <div 
        className={styles.imageContainer}
      
      >
        <img 
          src={midrag} 
          alt="דניאלה יוסופוב" 
          className={styles.profileImage}
        />
    
      </div>
    </div>
  );
};

export default Where;

/* Updated CSS with white icons and styled image */