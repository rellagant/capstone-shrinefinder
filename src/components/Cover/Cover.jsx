import "./Cover.scss";
import { useEffect, useState } from "react";
import cover from "../../assets/images/rantan.png";

export default function Cover() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    console.log("cover component mounted")
    const coverShown = localStorage.getItem('coverShown');
    console.log('coverShown:', coverShown);
    if (!coverShown && isMobile) {
      console.log("Showing cover");
      setIsVisible(true);
      localStorage.setItem('coverShown', 'true');
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className={`cover-page ${isVisible ? "visible" : "hidden"}`}>
        <div className="cover-content">
          <img src={cover} alt="cover shrinefinder" className="cover-image" />
        </div>
      </div>
    </>
  );
}
