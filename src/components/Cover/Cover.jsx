import "./Cover.scss";
import { useEffect, useState } from "react";
import cover from "../../assets/mockups/mockup3.png";

export default function Cover() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2500);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timer);
      };
    } else {
      window.removeEventListener("resize", handleResize);
    }
  }, [isVisible]);

  if (!isMobile || !isVisible) return null;

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
