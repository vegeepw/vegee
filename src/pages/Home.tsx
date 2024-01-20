import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameLinkClick = useCallback(() => {
    window.open("https://www.youtube.com/@vegeething");
  }, []);

  const onImgboxImageClick = useCallback(() => {
    navigate("/pragma-chaps");
  }, [navigate]);

  const onImgboxImage1Click = useCallback(() => {
    navigate("/tie");
  }, [navigate]);

  const onImgboxImage2Click = useCallback(() => {
    navigate("/ss");
  }, [navigate]);

  return (
    <div className={styles.home} data-animate-on-scroll>
      <div className={styles.frameParent}>
        <div className={styles.vegeeWrapper}>
          <div className={styles.vegee}>vegee</div>
        </div>
        <a className={styles.videosWrapper} onClick={onFrameLinkClick}>
          <div className={styles.videos}>videos</div>
        </a>
      </div>
      <img
        className={styles.imgboxIcon}
        alt=""
        src="/imgbox@2x.png"
        onClick={onImgboxImageClick}
      />
      <img
        className={styles.imgboxIcon}
        alt=""
        src="/imgbox@2x.png"
        onClick={onImgboxImage1Click}
      />
      <img
        className={styles.imgboxIcon}
        alt=""
        src="/imgbox@2x.png"
        onClick={onImgboxImage2Click}
      />
      <div className={styles.homeInner}>
        <div className={styles.vegeeContainer}>
          <div className={styles.vegee1}>vegee ©</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
