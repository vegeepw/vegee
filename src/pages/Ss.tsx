import { FunctionComponent, useEffect } from "react";
import styles from "./Ss.module.css";

const Ss: FunctionComponent = () => {
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
  return (
    <div className={styles.ss} data-animate-on-scroll>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>a letter to my younger self</b>
        </div>
        <b className={styles.youJustFinishedContainer}>
          <p className={styles.youJustFinished}>
            You just finished posting a poem. This is your first time signing it
            with your “W”. You’re exhilarated because one of friend happens to
            like it. Not only like, but she felt it. And that’s all that
            matters. You feel over the moon right now, don’t worry you wrote a
            lot more. So much more, not to brag but you even published a poetry
            book. And even more people liked that one. I know you thought it
            would feel so good but it passed, you barely remember it. Maybe
            because you always got a lot on your preoccupied mind now or maybe
            the blue nights caught up faster than you thought. Well now I know
            why, but I can’t spoil everything for you. Either ways, you’re about
            to feel some really deep feelings, you’ll feel empty some days,
            other days you’ll be bitter and tired but most days you will never
            want to get up. It’s okay, this one will pass too. Just like they
            all do. There will be more just so you know. But don’t be scared, it
            was scary at first but I promise they’re your friends. They help you
            make so much art. Let me cut this short, I know you don’t have the
            attention span. If you’re seeing this it might be one of those blue
            nights for you, it is for me which is why I can confidently say,
            you’ll be okay kid. I’m friends with them now.
          </p>
          <p className={styles.keepReadingIf}>
            Keep reading if you want me to show you how.
          </p>
        </b>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>barry’s diary</b>
        </div>
        <b className={styles.youJustFinishedContainer}>
          <p className={styles.youJustFinished}>It’s Tuesday,</p>
          <p className={styles.youJustFinished}>I’m depressed.</p>
          <p className={styles.youJustFinished}>Wednesday, </p>
          <p className={styles.youJustFinished}>
            Wear bright colors, they help.
          </p>
          <p className={styles.youJustFinished}>Thursday,</p>
          <p className={styles.youJustFinished}>
            I saw a pretty girl today, she looks like rainbows.
          </p>
          <p className={styles.youJustFinished}>I don’t think she saw me</p>
          <p className={styles.youJustFinished}>
            I was doing that thing again.
          </p>
          <p className={styles.youJustFinished}>
            I still can’t control it yet. She's way out of my league anyways
          </p>
          <p className={styles.youJustFinished}>Friday,</p>
          <p className={styles.youJustFinished}>
            I was just about to sleep when they came. My friends. Merlin’s beard
            I missed them.
          </p>
          <p className={styles.youJustFinished}>Alas they sting.</p>
          <p className={styles.youJustFinished}>
            Worst of all, what it is now?
          </p>
          <p className={styles.youJustFinished}>What do my friends want?</p>
          <p className={styles.youJustFinished}>The feel good I have not?</p>
          <p className={styles.youJustFinished}>
            Or that big bright bubbly hue that can’t be bought
          </p>
          <p className={styles.youJustFinished}>It keeps you up, Sit it out</p>
          <p className={styles.youJustFinished}>
            Worst part is I don’t even know what’s wrong
          </p>
          <p className={styles.youJustFinished}>Can’t put my fingers on it</p>
          <p className={styles.youJustFinished}>All I can say is, Go out Now</p>
          <p className={styles.youJustFinished}>
            Go feel the wind on your skin
          </p>
          <p className={styles.youJustFinished}>Touch leaves,</p>
          <p className={styles.youJustFinished}>
            Sit on Grass but don't kill ants
          </p>
          <p className={styles.youJustFinished}>
            Make it your drug, mark it in your blood
          </p>
          <p className={styles.youJustFinished}>
            Hell make it bread. And you'll find out,
          </p>
          <p className={styles.youJustFinished}>
            Its all sticks and stones Barry
          </p>
          <p className={styles.keepReadingIf}>
            You've got the whole world inside you
          </p>
        </b>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>my right ankle is aching me</b>
        </div>
        <b className={styles.youJustFinishedContainer}>
          <p className={styles.youJustFinished}>My right ankle is aching me</p>
          <p className={styles.youJustFinished}>
            As I sit upright to face the wall
          </p>
          <p className={styles.youJustFinished}>
            For a split second, I feel my leg upwards.
          </p>
          <p className={styles.youJustFinished}>
            Like it’s too much paint there and now it’s dabbed back
          </p>
          <p className={styles.youJustFinished}>
            It’s so blue, but it’s not Monday.
          </p>
          <p
            className={styles.youJustFinished}
          >{`I saw lightning that turned night to noon But that was after blue turned warm, `}</p>
          <p className={styles.youJustFinished}>
            that one sent shivers down my spine
          </p>
          <p className={styles.youJustFinished}>
            The Cherry and Panther tell tales of their battles
          </p>
          <p className={styles.youJustFinished}>How long they have journeyed</p>
          <p className={styles.youJustFinished}>
            A delight to my ear, I mean honor
          </p>
          <p className={styles.youJustFinished}>
            Slumped over as rain stomps above me
          </p>
          <p className={styles.keepReadingIf}>Ever so blue</p>
        </b>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>my right ankle is aching me</b>
        </div>
        <b className={styles.youJustFinishedContainer}>
          <p className={styles.youJustFinished}>My right ankle is aching me</p>
          <p className={styles.youJustFinished}>
            As I sit upright to face the wall
          </p>
          <p className={styles.youJustFinished}>
            For a split second, I feel my leg upwards.
          </p>
          <p className={styles.youJustFinished}>
            Like it’s too much paint there and now it’s dabbed back
          </p>
          <p className={styles.youJustFinished}>
            It’s so blue, but it’s not Monday.
          </p>
          <p
            className={styles.youJustFinished}
          >{`I saw lightning that turned night to noon But that was after blue turned warm, `}</p>
          <p className={styles.youJustFinished}>
            that one sent shivers down my spine
          </p>
          <p className={styles.youJustFinished}>
            The Cherry and Panther tell tales of their battles
          </p>
          <p className={styles.youJustFinished}>How long they have journeyed</p>
          <p className={styles.youJustFinished}>
            A delight to my ear, I mean honor
          </p>
          <p className={styles.youJustFinished}>
            Slumped over as rain stomps above me
          </p>
          <p className={styles.keepReadingIf}>Ever so blue</p>
        </b>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>jack’s voicemail</b>
        </div>
        <b className={styles.youJustFinishedContainer}>
          <p className={styles.youJustFinished}>"Barry, Barry.</p>
          <p className={styles.youJustFinished}>All these jumping about,</p>
          <p className={styles.youJustFinished}>It's gonna get you hurt.</p>
          <p className={styles.youJustFinished}>
            What use are you when you end up injured?
          </p>
          <p className={styles.youJustFinished}>
            But, of course you don't think
          </p>
          <p className={styles.youJustFinished}>
            I just hope this reckless lifestyle doesn't kill you.
          </p>
          <p className={styles.keepReadingIf}>Call me back, it's Jack."</p>
        </b>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>the theater of dreams</b>
        </div>
        <b className={styles.youJustFinishedContainer}>
          <p className={styles.youJustFinished}>the theater of dreams</p>
          <p className={styles.youJustFinished}>The epitome of life</p>
          <p className={styles.youJustFinished}>
            Will swallow whoever comes without battle
          </p>
          <p className={styles.youJustFinished}>
            But armor hung in it’s walls The greatest mantle 
          </p>
          <p className={styles.youJustFinished}>
            Hazel clear eyes That dooms the  un-formidable foe 
          </p>
          <p className={styles.youJustFinished}>
            My nostrils welcome the warm smell of dust, yesterdays, and bad
            paper all-together.
          </p>
          <p className={styles.youJustFinished}>
            As I remember all over again How I lost sense when you woed me
          </p>
          <p className={styles.youJustFinished}>
            Like a sad dog I lick my wounds today
          </p>
          <p className={styles.youJustFinished}>
            As I go to sleep a boy in a tent with nothing on his mind but
          </p>
          <p className={styles.keepReadingIf}>The Theater of Dreams</p>
        </b>
      </div>
      <div className={styles.boxx6}>
        <div className={styles.h1}>
          <b className={styles.crumpledPapersAnd}>
            crumpled papers and dotted lines
          </b>
        </div>
        <b className={styles.iTryWritingContainer}>
          <p className={styles.youJustFinished}>
            I try writing spite the abyss of dread that lingers But crumpled
            paper and dotted lines are all I seem to offer Alas, my trade and I
            are no longer
          </p>
          <p className={styles.youJustFinished}>
            Should I assign fault to the vertigo which I call my mind? her I
            know well, she tugs at me sometimes when the night is cold
          </p>
          <p className={styles.youJustFinished}>
            Only God forbid like a drunken stupor she drags my ink cross paper
            into the night
          </p>
          <p className={styles.youJustFinished}>
            No but really this unknown ailment growing at my leg keeps at my
            heart.
          </p>
          <p className={styles.youJustFinished}>it’s like none other,</p>
          <p className={styles.youJustFinished}>
            I face it and my decades of sage falter
          </p>
          <p className={styles.youJustFinished}>
            You took my all yet you give me suffer
          </p>
          <p className={styles.youJustFinished}>
            No greater mystery has life gone and offered this foolish sage and
            the eternal cancer of love that is it’s founder
          </p>
          <p className={styles.youJustFinished}>
            Have I wronged you? If then I beseech you.
          </p>
          <p className={styles.youJustFinished}>
            Is it my frail humanity, is that the issue?
          </p>
          <p className={styles.youJustFinished}>
            They’re crawling up my leg as I look to you for refuge now your eyes
            refuses to meet mine?
          </p>
          <p className={styles.youJustFinished}>
            When you told me you would always be here whenever they started
            crumbling and the ink don’t seem to connect
          </p>
          <p className={styles.youJustFinished}>
            Well I’m neck deep now, Like close enough to see the crumbled paper
            and dried inks aren’t really dashes and dots You see, the grip
            making love to my neck now I know too well with blue emerald lips
            that taste like the cold air mid December.
          </p>
          <p className={styles.youJustFinished}>{`Remember?, `}</p>
          <p className={styles.youJustFinished}>
            that one that tugs at me sometimes when the night is cold?
          </p>
          <p className={styles.youJustFinished}>
            Like a drunken stupor it tugs at me
          </p>
          <p className={styles.youJustFinished}>Dragging ink all over</p>
          <p className={styles.keepReadingIf}>What am I to do?</p>
        </b>
      </div>
      <div className={styles.boxx6}>
        <div className={styles.h1}>
          <b className={styles.crumpledPapersAnd}>i love you</b>
        </div>
        <b className={styles.iTryWritingContainer}>
          <p className={styles.youJustFinished}>I really hope you get it now</p>
          <p className={styles.youJustFinished}>Running round,</p>
          <p className={styles.youJustFinished}>
            kicking sand On the wheel that goes merry round
          </p>
          <p className={styles.youJustFinished}>
            Wish we knew that was the start to good trouble
          </p>
          <p className={styles.youJustFinished}>
            Now, I look back at all that rumble
          </p>
          <p className={styles.youJustFinished}>I chuckle,‍</p>
          <p
            className={styles.youJustFinished}
          >{`Remember noir, We were stuck inside Just me and you, no noise, no color. `}</p>
          <p className={styles.youJustFinished}>
            But we danced still What about the hill. Laughed till we ran out of
            breath.
          </p>
          <p className={styles.youJustFinished}>
            You told me I was crazy as we pretended the stares lingering down
            below ceased to exist.
          </p>
          <p
            className={styles.youJustFinished}
          >{`My interlude to you hurt so much when you left a bit too early, `}</p>
          <p className={styles.youJustFinished}>
            but I made merry because you said you would come back. 
          </p>
          <p className={styles.youJustFinished}>
            Perhaps that’s why I waited too late.
          </p>
          <p className={styles.youJustFinished}>
            Keeping busy whether it be tapes, scrolls or Wes’ plays.
          </p>
          <p className={styles.youJustFinished}>Alas you never came.</p>
          <p className={styles.youJustFinished}>
            I spit out the grieve you have rid me
          </p>
          <p className={styles.youJustFinished}>
            but I could never despise you I know I’m still a riddle but do you
            see all you've given me?
          </p>
          <p className={styles.youJustFinished}>
            Not knowing where it will take us
          </p>
          <p className={styles.youJustFinished}>
            Oh the places we've been Without butt leaving bench
          </p>
          <p className={styles.youJustFinished}>And when I’m all alone</p>
          <p className={styles.youJustFinished}>Be it near or far from home,</p>
          <p className={styles.youJustFinished}>
            And thought of you is becoming unknown
          </p>
          <p className={styles.keepReadingIf}>
            Oh god I hope these sticks and stones don’t break my bones.
          </p>
        </b>
      </div>
      <div className={styles.ssInner}>
        <div className={styles.vegeeWrapper}>
          <div className={styles.vegee}>vegee ©</div>
        </div>
      </div>
    </div>
  );
};

export default Ss;
