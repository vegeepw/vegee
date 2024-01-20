import { FunctionComponent, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Bhs.module.css";

const Bhs: FunctionComponent = () => {
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
    window.location.href = "tel:6159848932";
  }, []);

  const onContactClick = useCallback(() => {
    window.location.href = "mailto:boywhoshoots@gmail.com";
  }, []);

  return (
    <div className={styles.bhs} data-animate-on-scroll>
      <div className={styles.frameParent}>
        <div className={styles.bhsWrapper}>
          <div className={styles.bhs1}>bhs</div>
        </div>
        <a
          className={styles.contactWrapper}
          href="tel:6159848932"
          onClick={onFrameLinkClick}
        >
          <a
            className={styles.contact}
            href="mailto:boywhoshoots@gmail.com"
            onClick={onContactClick}
          >
            contact
          </a>
        </a>
      </div>
      <Link className={styles.imgbox} to="/pragma-chaps" />
      <Link className={styles.imgbox1} to="/pragma-chaps" />
      <Link className={styles.imgbox2} to="/pragma-chaps" />
      <Link className={styles.imgbox3} to="/pragma-chaps" />
      <Link className={styles.imgbox4} to="/pragma-chaps" />
      <Link className={styles.imgbox5} to="/pragma-chaps" />
      <Link className={styles.imgbox6} to="/pragma-chaps" />
      <Link className={styles.imgbox7} to="/pragma-chaps" />
      <Link className={styles.imgbox8} to="/pragma-chaps" />
      <Link className={styles.imgbox9} to="/pragma-chaps" />
      <Link className={styles.imgbox10} to="/pragma-chaps" />
      <Link className={styles.imgbox11} to="/pragma-chaps" />
      <div className={styles.bhsInner}>
        <div className={styles.vegeeWrapper}>
          <div className={styles.vegee}>vegee ©</div>
        </div>
      </div>
    </div>
  );
};

export default Bhs;
