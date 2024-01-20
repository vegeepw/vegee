import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pragmachapters.module.css";

const Pragmachapters: FunctionComponent = () => {
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

  const onOneContainerClick = useCallback(() => {
    navigate("/pragmabedford-ln");
  }, [navigate]);

  const onTwoContainerClick = useCallback(() => {
    navigate("/pragmaihot");
  }, [navigate]);

  const onThreeContainerClick = useCallback(() => {
    navigate("/pragmaomwtw");
  }, [navigate]);

  const onFiveContainerClick = useCallback(() => {
    navigate("/pragmathttmba");
  }, [navigate]);

  return (
    <div className={styles.pragmachapters} data-animate-on-scroll>
      <div className={styles.one} onClick={onOneContainerClick}>
        <b className={styles.bedfordLn}>bedford ln</b>
        <b className={styles.pragmaAndMatilda}>
          Pragma and Matilda meet up as they make their way to Bedford to
          examine a corpse. Pragma struggles with loss as he prepares to
          introduce the case to the team. 
        </b>
      </div>
      <div className={styles.one} onClick={onTwoContainerClick}>
        <b className={styles.bedfordLn}>it’s hot out today</b>
        <b className={styles.pragmaAndMatilda}>
          The bodies keep dropping but Pragma still needs more time to make a
          profile. An interview with one of the victim’s relation might help
          break the case. Gideon officially introduces himself.
        </b>
      </div>
      <div className={styles.one} onClick={onThreeContainerClick}>
        <b className={styles.bedfordLn}>on my way to work</b>
        <b className={styles.pragmaAndMatilda}>
          Pragma sees something on his way to the station. The profile is ready.
          Ovlav joins the duo on a trip to school while Gideon and the rest host
          a stakeout party. Matilda and Pragma’s past gets dredged up.
        </b>
      </div>
      <div className={styles.one} onClick={onFiveContainerClick}>
        <b className={styles.theHuntThat}>the hunt that took my breath away</b>
        <b className={styles.pragmaAndMatilda}>
          The station gets a lead on the location of the killer. Tensions flare
          between Pragma and Gideon as they set out prepare on a the hunt.
          Pragma encounters the killer.
        </b>
      </div>
      <div className={styles.pragmachaptersInner}>
        <div className={styles.vegeeWrapper}>
          <div className={styles.vegee}>vegee ©</div>
        </div>
      </div>
    </div>
  );
};

export default Pragmachapters;
