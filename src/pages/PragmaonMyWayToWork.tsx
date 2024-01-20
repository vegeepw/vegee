import { FunctionComponent, useEffect } from "react";
import styles from "./PragmaonMyWayToWork.module.css";

const PragmaonMyWayToWork: FunctionComponent = () => {
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
    <div className={styles.pragmaonMyWayToWork} data-animate-on-scroll>
      <div className={styles.body}>
        <b className={styles.twoDaysLaterContainer}>
          <p className={styles.twoDaysLater}>TWO DAYS LATER</p>
          <p className={styles.twoDaysLater}>
            Run Pragma run, run, run. They’re getting closer now hauling at me,
            meaning me evil. Pragma! It’s white now. Is this the same dream? I
            see a big gate a long staircase behind me
          </p>
          <p className={styles.twoDaysLater}>"You fell asleep again"</p>
          <p className={styles.twoDaysLater}>
            A voice whispered behind. Not one I have heard before. I feel the
            voice start to reach for my shoulder, my left shoulder. That's when
            I jerked awake.
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            That dreadful dream again. If only I knew it's purpose Anyways, they
            can't know I'm here. That I did this. They wouldn't understand. Well
            I might be wrong, M is crazy. She would not be surprised. Gideon
            seems a wise man, he might get it. I still don't think I'll tell
            them
          </p>
          <p className={styles.twoDaysLater}>
            Pragma gets up from the tree he slept under. He begins to walk.
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            He didn't pick this place. Not that I'm surprised. I've got to get
            to the station. See if he dropped another-
          </p>
          <p className={styles.twoDaysLater}>
            Pragma suddenly stops. He’s drawn to something just on the edge of
            the path he's walking. He makes his way into the short bush. It’s a
            dog
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"What is it? You hurt?"</p>
          <p className={styles.twoDaysLater}>Pragma asks out loud</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Too bad"</p>
          <p className={styles.twoDaysLater}>He notices the dog's broken leg</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            Must have been hit. But you made it all the way over here
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Tough boy"</p>
          <p className={styles.twoDaysLater}>Pragma whispers</p>
          <p className={styles.twoDaysLater}>
            After a few seconds pass. Pragma gets on his knees
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Let me take the pain away"</p>
          <p className={styles.twoDaysLater}>
            he starts to caress the dog. Pragma chokes up as he whispers
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"It will only be a second"</p>
          <p className={styles.twoDaysLater}>
            The dog’s neck snaps. Pragma paces back looking down with horror in
            his eyes
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Just like Ruby"</p>
          <p className={styles.twoDaysLater}>He chokes on his sob</p>
          <p className={styles.twoDaysLater}>"Oh Ruby"</p>
          <p className={styles.twoDaysLater}>
            He caress his ring as he wipes his sob. Pragma gets up
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "I got to get to the station. See if that bastard has killed another
            damsel. I've got to see if I'm right. Even if not, The profile is
            ready."
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Where were you?"</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"I was sleeping under a tree."</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "I hope you don't use that one with Constantine."
          </p>
          <p className={styles.twoDaysLater}>Matilda scoffs</p>
          <p className={styles.twoDaysLater}>
            "Anyways, they are waiting on you. We'll work on your lying later."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "They will never believe you anyways. Just lie."
          </p>
          <p className={styles.twoDaysLater}>
            Pragma mentions to something in the corner
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "That's what you tell yourself?"
          </p>
          <p className={styles.twoDaysLater}>
            Pragma flicks her off. They are at the entrance of the conference
            room when Matilda asks
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Is it ready?"</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Yes"</p>
          <p className={styles.twoDaysLater}>Pragma and Matilda enter</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "There's is something you should know"
          </p>
          <p className={styles.twoDaysLater}>
            The door was almost fully shut behinds them when Matilda grabbed
            Pragma's arm
          </p>
          <p className={styles.twoDaysLater}>
            Matilda leans to whisper in his ear
          </p>
          <p className={styles.twoDaysLater}>
            "While you were sleeping under a tree,"
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "I know. What I don't know is where. Work on that for me?"
          </p>
          <p className={styles.twoDaysLater}>
            He looks a Matilda as he makes his way to the front
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"He finally shows up."</p>
          <p className={styles.twoDaysLater}>Ovlav bellows from the back</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Who the fuck are you again?"</p>
          <p className={styles.twoDaysLater}>Pragma thinks for a second</p>
          <p className={styles.twoDaysLater}>
            "Oh, that one that was put out the first time? You better behave
            officer before you get put out again."
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Fuck you Nigger"</p>
          <p className={styles.twoDaysLater}>Ovlav frowns. Gideon interjects</p>
          <p className={styles.twoDaysLater}>GIDEON</p>
          <p className={styles.twoDaysLater}>"Watch it!"</p>
          <p className={styles.twoDaysLater}>He yells out from the front</p>
          <p className={styles.twoDaysLater}>GIDEON</p>
          <p className={styles.twoDaysLater}>"You"</p>
          <p className={styles.twoDaysLater}>He points at Pragma</p>
          <p className={styles.twoDaysLater}>"Get on with it"</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Looks like you crawled up a pig's ass"
          </p>
          <p className={styles.twoDaysLater}>Ovlav says as he smiles</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "I ain't got time to be playing in dirt with you"
          </p>
          <p className={styles.twoDaysLater}>Pragma replies quickly</p>
          <p className={styles.twoDaysLater}>Ovlav's smile recedes</p>
          <p className={styles.twoDaysLater}>GIDEON</p>
          <p className={styles.twoDaysLater}>"Will you boys cut it out?"</p>
          <p className={styles.twoDaysLater}>Pragma clears his throat</p>
          <p className={styles.twoDaysLater}>GIDEON</p>
          <p className={styles.twoDaysLater}>
            "Now I believe you ready for us detective?"
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Yes I am"</p>
          <p className={styles.twoDaysLater}>Pragma raises his voice</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Since the last time we were here, three more have been found.
            Pleased to inform we have a Profile."
          </p>
          <p className={styles.twoDaysLater}>"What's that one now?"</p>
          <p className={styles.twoDaysLater}>
            A short officer in the front asks
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Call it a description of this killer we looking for. Based on the
            previous bodies and past behaviors I have identified with the help
            of you all, we can create a persona for this killer."
          </p>
          <p className={styles.twoDaysLater}>
            "We supposed to just believe everything you tell us about this--
            killer?"
          </p>
          <p className={styles.twoDaysLater}>
            The short officer in-front asks again
          </p>
          <p className={styles.twoDaysLater}>
            "How do I know you right about him?"
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"How do you know I'm wrong?"</p>
          <p className={styles.twoDaysLater}>Pragma replies</p>
          <p className={styles.twoDaysLater}>
            "How many of this have you done?"
          </p>
          <p className={styles.twoDaysLater}>The short man asks</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"This is my first one"</p>
          <p className={styles.twoDaysLater}>Pragma pauses then continues</p>
          <p className={styles.twoDaysLater}>
            "Well if we not counting training at Quantico"
          </p>
          <p className={styles.twoDaysLater}>Pragma laughs quietly</p>
          <p className={styles.twoDaysLater}>
            "And we supposed to put all our eggs in this basket"
          </p>
          <p className={styles.twoDaysLater}>
            The short man starts to get up. Gideon interrupts
          </p>
          <p className={styles.twoDaysLater}>GIDEON</p>
          <p className={styles.twoDaysLater}>
            "Look, Obviously the man ain’t here because he some ordinary man we
            can't trust. This one got good brains on him."
          </p>
          <p className={styles.twoDaysLater}>
            He reaches for Pragma and taps his shoulders
          </p>
          <p className={styles.twoDaysLater}>
            "And that's coming from me fellas."
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Let's hear it then nigger"</p>
          <p className={styles.twoDaysLater}>Ovlav shouts from the back</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Well, I'm almost sure he's a brother. I place him middle aged. Late
            thirties to early forties. He’s fairly built. Well above average
            height. In other sense quite an attractive man. He's also smart.
            Therefore his job is respectable. Also high income. In addition to
            that, it's admirable or high profile. He's someone we all might have
            seen. Someone we all like. Think our friendly mailman, cop,
            firefighter, family doctor, teacher. I won't even cross a cop off.
            More precisely an ex cop. I also have good reason to believe he is a
            native of this town. If not then he's been a resident for a long
            time. Long one. I say this because he knows his way around the city.
            He knows where to dump them bodies. That we know. He kills them
            somewhere then dumps their bodies at these sites. The speed at which
            he does this attests to his high profile because he's someone that
            has a reliable means of getting around. Another possibility is that
            his job allows him to move around. Think a mailman. Firefighter.
            Railway worker. I would not put a politicians past either. Even a
            driver. Any job that allows easy access to places or allows new
            roads to be discovered. There is a small chance this brother might
            not be working alone. That one is slim though. Killers like him
            usually work alone. Now this man is polite. Calm, gentle. Again we
            all can't help but like him. Whether it's the smile, appearance, or
            his words. He cajoles you somehow. Especially those poor damsels.
            Uses his intelligence to his advantage, plays the part until he gets
            what he wants. Now these girls, it's been six girls now. All between
            eighteen to twenty seven years. Apart from their education level and
            age, Connection them is still virtually impossible. I figure they
            might not even be connected. Could be just luck of draw. Now to the
            way he kills them, very violent. Animalistic even but remember"
          </p>
          <p className={styles.twoDaysLater}>
            Pragma holds up a finger from both hands
          </p>
          <p className={styles.twoDaysLater}>
            "You would never know, he prolly got the brightest smile on him.
            Although violent, they are not personal. No, almost remorseful.
            Religious like"
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"You saying like a sacrifice?"</p>
          <p className={styles.twoDaysLater}>
            Pragma snaps his finger in his direction
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Exactly like a sacrifice. Took you long enough"
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Motherfucker"</p>
          <p className={styles.twoDaysLater}>
            Ovlav holds his middle finger up. Pragma briefly smiles then
            continues
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            Like Rosa and the first three. He gently placed them at the scene
            neatly. Almost like he hasn't just killed them. that sick son of a
            bitch. This violent yet remorseful nature is something I would link
            his childhood. Not that he's particularly inflicting hate on this
            women when he does. In fact I have reason to believe when he's
            committing he's not thinking about them. Something in his past he
            can't control. Takes over. Then remorse after. Almost Like a teenage
            boy who feels back after jerking off. Except no traces of sexual
            activity. Well, only one is exception. Rosa. Rosa was special to
            him. Still can't fully put my fingers on why. Even though it was
            after her death. You were still able to get it up. Maybe you wanted
            it, or she was she the only one that was your type. Most
            importantly, despite the perfect physique, good finance and
            charisma. I believe he has one huge shortcoming. One he doesn't want
            to people to know. The one he's protecting with his life. One I
            think he killed Penelope for, He's impotent.”
          </p>
          <p className={styles.twoDaysLater}>There is murmur</p>
          <p className={styles.twoDaysLater}>"Here we go"</p>
          <p className={styles.twoDaysLater}>the short officer in front says</p>
          <p className={styles.twoDaysLater}>"Bare with me..."</p>
          <p className={styles.twoDaysLater}>
            pragma hesitates, waiting for the officer. The short man replies
          </p>
          <p className={styles.twoDaysLater}>JOSHUA</p>
          <p className={styles.twoDaysLater}>"Joshua"</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "The reason I say this Joshua is the way he kills! It's right there,
            staring us in the face. Only if we could see it. Can't you all see?"
          </p>
          <p className={styles.twoDaysLater}>There is silence</p>
          <p className={styles.twoDaysLater}>
            "All that passion. The feelings he puts into it. That's the way he
            gets off. His outlet."
          </p>
          <p className={styles.twoDaysLater}>
            "Now, my colleague will pass some briefs of everything I just told
            y’all. In it is the full profile of our suspected killer as of right
            now. Mental, psychological all the way down to the physical."
          </p>
          <p className={styles.twoDaysLater}>
            Pragma glances at Matilda’s direction
          </p>
          <p className={styles.twoDaysLater}>She shoots a look back at him.</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Who, Me?"</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>They hold a stare</p>
          <p className={styles.twoDaysLater}>"Share the Docs?"</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Oh, so not me."</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Right now? really?"</p>
          <p className={styles.twoDaysLater}>Pragma gets closer to her</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"You are going to to this now?"</p>
          <p className={styles.twoDaysLater}>GIDEON</p>
          <p className={styles.twoDaysLater}>"Alright, alright."</p>
          <p className={styles.twoDaysLater}>Gideon gets up</p>
          <p className={styles.twoDaysLater}>GIDEON</p>
          <p className={styles.twoDaysLater}>"No problem see?"</p>
          <p className={styles.twoDaysLater}>
            He goes to pick up a handful of files in his arms.
          </p>
          <p className={styles.twoDaysLater}>
            He motions to Ovlav in the back. In no time, the two officers are
            almost done sharing the documents
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>“Thank you”</p>
          <p className={styles.twoDaysLater}>
            Pragma mouths to Gideon as he makes his way back to his seat hiding
            his embarrassment. Pragma continues over the shuffling and rustling
            that has now engulfed the room
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Alright now, me and a party will go interview some kids at the
            school and majority of you will get acquainted with Mr. Wonder out
            there."
          </p>
          <p className={styles.twoDaysLater}>
            Pragma was about to continue when Gideon steps up yet again. He
            walks up and taps on his shoulder
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Pardon me fellas"</p>
          <p className={styles.twoDaysLater}>
            The two officers pull themselves aside
          </p>
          <p className={styles.twoDaysLater}>
            They talk for some moment. Pragma makes his way back to the front of
            the conference room
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Now if y’all would kindly find that last piece of paper at the
            end."
          </p>
          <p className={styles.twoDaysLater}>
            Papers go shuffling once again. There is silence
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "What you’re looking at right there is a triangulation of the area I
            reckon he might drop bodies again based on the previous dump sites.
            You see, the one place that is outside of Mr. Wonder’s control is
            out there. Where it’s all leveled between us and him. When he’s
            dumping those bodies. Right there is where we can meet him. Catch
            him. Now, He tells me ya'll don't need no getting acquainted"
          </p>
          <p className={styles.twoDaysLater}>
            Pragma nods in the direction of Gideon who is now talking to someone
            in the back of the room
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "You all can just dive into the fun stuff."
          </p>
          <p className={styles.twoDaysLater}>Pragma announces</p>
          <p className={styles.aStakeout}>"A stakeout"</p>
        </b>
        <b className={styles.twoDaysLaterContainer}>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            We got to the school. It was dark. I preferred it that way. Matilda
            was livid. Foul mood she was in that one.
          </p>
          <p className={styles.twoDaysLater}>
            Matilda walks briskly ahead Pragma trails behind
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Walk slower"</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Walk faster"</p>
          <p className={styles.twoDaysLater}>She hisses at him</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"The kids are going nowhere"</p>
          <p className={styles.twoDaysLater}>Matilda ignores pragma</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "They are almost out, are you dense?"
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "I know that's a rhetorical question"
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "Don't blame me, you just act like a dumbass for someone who claims
            to be intelligent"
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Woah"</p>
          <p className={styles.twoDaysLater}>Pragma's eyes widen</p>
          <p className={styles.twoDaysLater}>"In front of company?"</p>
          <p className={styles.twoDaysLater}>
            "What a way to make a first impression"
          </p>
          <p className={styles.twoDaysLater}>
            He looks back at the officer behind them
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "I could give two fucks what you or anyone thinks of me. Especially
            the ones with dicks."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Language!"</p>
          <p className={styles.twoDaysLater}>
            Pragma announces dramatically as he tries to catch up to her
          </p>
          <p className={styles.twoDaysLater}>"We are on school grounds"</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"I don't give a shit!"</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "one minute is Pragma, lets not be late, another is-"
          </p>
          <p className={styles.twoDaysLater}>
            He keeps on mockingly. Matilda abruptly cuts in
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Just stop. Not in the mood."</p>
          <p className={styles.twoDaysLater}>
            Pragma's smirk stops. They hold a stare. She continues walking
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "What's got you so worked up anyways? Since this morning you have
            been acting like a"
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "Like a what? Huh Like a what? Say it."
          </p>
          <p className={styles.twoDaysLater}>There is silence</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "Let's just do what we are here to do so we don't have to bear each
            other."
          </p>
          <p className={styles.twoDaysLater}>She walks away</p>
          <p className={styles.twoDaysLater}>
            The officer in trailing behind is now caught up to Pragma
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Ouch"</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>“What’d you say?”</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Oh don't mind me. Piece of advice fresh meat, that one’s out of
            your league."
          </p>
          <p className={styles.twoDaysLater}>Pragma chuckles</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Oh, so out of my league you don't even know."
          </p>
          <p className={styles.twoDaysLater}>
            Pragma was the last to enter the big gym
          </p>
          <p className={styles.twoDaysLater}>Matilda charged forward</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"At least let's ask?"</p>
          <p className={styles.twoDaysLater}>Pragma yells out</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Why?"</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"You’ve never met her before"</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "Correct, but I know who I’m looking for"
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"You know she is at the gym?"</p>
          <p className={styles.twoDaysLater}>
            Pragma sighs. Matilda lets a hiss escape
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Fuck you"</p>
          <p className={styles.twoDaysLater}>She shakes her head</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Always charging ahead head first. Ain’t nothing changed"
          </p>
          <p className={styles.twoDaysLater}>
            "What. the. fuck. is wrong with you!"
          </p>
          <p className={styles.twoDaysLater}>
            Matilda is yelling now. There is fury in her eyes as she paces back
            toward Pragma who is still trailing behind
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"I said not now!"</p>
          <p className={styles.twoDaysLater}>she is teary eyed</p>
          <p className={styles.twoDaysLater}>"and not here!"</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"What the fuck is wrong then?"</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"What’s today?"</p>
          <p className={styles.twoDaysLater}>
            Matilda wipes tears off her face
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "M, what are you talking about?"
          </p>
          <p className={styles.twoDaysLater}>
            Pragma's tone is getting serious but they are soon interrupted by
            Ovlav
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Hey Lovebirds, I think the one we’re looking for just found us."
          </p>
          <p className={styles.twoDaysLater}>
            Ovlav points to a figure approaching them
          </p>
          <p className={styles.twoDaysLater}>
            "Excuse me, I don’t know who you folks are or any business y’all got
            on but please no yelling in the gym we got something going on if you
            can’t see."
          </p>
          <p className={styles.twoDaysLater}>
            a short light-skinned woman comes approaching
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>“Sorry about that”</p>
          <p className={styles.twoDaysLater}>
            Matilda charges towards her with her arms out. Both women shake
            hands
          </p>
          <p className={styles.twoDaysLater}>
            "My name is Matilda I’m with the FBI"
          </p>
          <p className={styles.twoDaysLater}>
            She points to the badge hung below her belt
          </p>
          <p className={styles.twoDaysLater}>
            "I was just trying to drill something into the head of my partner
            here but you know how men are"
          </p>
          <p className={styles.twoDaysLater}>
            "“A bit slow” I know how they are"
          </p>
          <p className={styles.twoDaysLater}>
            The girl replies. A smile builds on pragma’s face
          </p>
          <p className={styles.twoDaysLater}>"Destiny"</p>
          <p className={styles.twoDaysLater}>They break their handshake</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>"This is about Rosa Isn’t it?"</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "Yes it is, could we maybe find somewhere better to talk?"
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "Look, I got a practice to coach and got work right after this. So I
            hope you officers don’t mind if we talk over some squeaking feet. I
            still got to observe their game."
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "No objections. I don’t mind that."
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>"Thank you, let's go up here."</p>
          <p className={styles.twoDaysLater}>
            They head to the top of the bleachers in the gym. A hush fell over
            the big gym for a few moment but noise continued shortly
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "We got a few question for you Destiny"
          </p>
          <p className={styles.twoDaysLater}>
            Destiny nods as she gets comfortable
          </p>
          <p className={styles.twoDaysLater}>
            "First of all, sorry for your loss. I don’t know how close of a
            friend you were to her”
          </p>
          <p className={styles.twoDaysLater}>Destiny swallows</p>
          <p className={styles.twoDaysLater}>
            "But we offer you our deepest condolences nevertheless"
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"How are you feeling?"</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "First of all she was my best friend then she was killed and raped.
            How do you think I feel?"
          </p>
          <p className={styles.twoDaysLater}>
            Destiny meets Matilda’s face with a frown
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "I know this is hard for you. I’m so sorry to keep dredging up this
            unfortunate incident. The main reason why we are here is to learn
            how much we can about her to see if it can help us get closer to
            catching the person who did this to her."
          </p>
          <p className={styles.twoDaysLater}>Destiny nods</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "So you said you two were close?"
          </p>
          <p className={styles.twoDaysLater}>
            Pragma pulls out a small note from his pocket
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "Yes, very. We had almost every class together."
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "How long has the friendship been."
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "We first met each other on the first day of school of sophomore
            year."
          </p>
          <p className={styles.twoDaysLater}>she scoffs</p>
          <p className={styles.twoDaysLater}>
            "She came late to Mr. Kirk’s math class. I remember she was so
            pretty."
          </p>
          <p className={styles.twoDaysLater}>Matilda smiles</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Who spoke first?"</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "She did, she definitely did. I was a jock, still am. Most girls
            just look at me and ignore me. And guys, they were just intimidated
            by me. Probably because I am better than our men’s sport team
            combined."
          </p>
          <p className={styles.twoDaysLater}>
            "But Rosa was just drawn to me. She asked me if I had a spare
            pencil."
          </p>
          <p className={styles.twoDaysLater}>Destiny lets out a laugh</p>
          <p className={styles.twoDaysLater}>
            "As I reached to give it to her, I realized she had one her other
            hand. I was confused at first but then I realized that was her
            version of a joke. We were practically inseparable ever since then."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Your time with hanging out with her, was there anyone else in her
            life? One that mum might not know about? ”Like a boyfriend, someone
            she was talking to? Anyone that was in her life that she brought up
            to you?"
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "Well like I said she was a feast for the eyes. Everyone wanted her.
            Her locker was always filled with love letters that guys had sneaked
            in earlier in the morning so she had a lot of secret admirers but
            there was not one of the she was really akin to. In fact, you might
            find it hard to believe but Rosa rarely talked about men. It’s like
            they did not exist Even though she was the only they were staring at
            when we are together."
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "Trust me, I don’t find that hard to believe."
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "But towards the end of Junior year she there was this man she
            started talking to"
          </p>
          <p className={styles.twoDaysLater}>Destiny’s face clenches up.</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "It was really brief, it might not be anything to even bring up."
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "Please, any information certainly helps up."
          </p>
          <p className={styles.twoDaysLater}>Matilda retorts</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "There was this one she kept telling me about that liked her and
            wanted to 'take her around the world' but of course every guy that
            talks to Rosa says the same thing. The way she spoke about this one,
            I could tell she liked him back. Or at least curious about him. She
            never told me that of course. She denies she was personally
            interested in him. But I could tell."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            Pragma sits up straight as he asks
          </p>
          <p className={styles.twoDaysLater}>
            "Do you know the name of this kid?"
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>"That’s the thing,"</p>
          <p className={styles.twoDaysLater}>Destiny looks at Matilda</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>"It wasn’t a student."</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"A teacher then?"</p>
          <p className={styles.twoDaysLater}>Ovlav chuckles out in the back</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "It was someone she meet at her workplace. She said he would always
            come and order the same thing. He would also draw her on the tips he
            leaves her. I personally thought it was creepy."
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Did she ever mention a name?"</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "Yes, David. I only remember because I used to tease her about it.
            'All these guys begging for a chance in school and old ass David is
            who you crushing on?' I would always say. 'Stop, stop, it's nothing.
            She always told me'"
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Do you remember a last name?"</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "“Carolina! your legs, don’t plant your feet. Stay on on your toes!”
          </p>
          <p className={styles.twoDaysLater}>Destiny yells out standing up</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "No. Sorry about that. She's still learning."
          </p>
          <p className={styles.twoDaysLater}>
            Destiny returns back to her seat
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"All good."</p>
          <p className={styles.twoDaysLater}>Matilda replies</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "Apologies for taking you away from your job again. Just a couple
            more questions and we will be good. Do you know anyone who did not
            like Rosa and would want to harm her?"
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "Rosa was gem. She a kind, intelligent and good-looking. Really hard
            to find all three in one."
          </p>
          <p className={styles.twoDaysLater}>Pragma nods in agreement</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Even still, no one is liked by everyone. She must have had people
            who could not stand her."
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>she palms her hands to her chin</p>
          <p className={styles.twoDaysLater}>
            "The only group of people I know would be Jessica and her covens.
            Jessica is the head of the spelling bee club. She never really liked
            Rosa."
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "See she’s also very good with books and she had looks but her
            attitude was a nasty one. She was, how do I put this, 'Territorial'.
            She always had a problem with Rosie also being super smart. I think
            she felt threatened. Oh let’s not forget when her boyfriend had
            asked Rosa to the Winter Formal last year Rosa said no of course but
            someone let it slip that she was the second choice and ever since
            then, she had always had an attitude towards her.
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            “Do you know if this Jessica girl is here? We would love to ask her
            a few questions.”
          </p>
          <p className={styles.twoDaysLater}>
            A smile builds on destiny’s face
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "Ahh, yes. She should be meeting with her group. They got a
            competition soon."
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "How about you two go ahead and find Jessica, I’ll finish up here.
            Y’all can handle that?"
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Sure thing."</p>
          <p className={styles.twoDaysLater}>
            Ovlav replies as he finally gets up
          </p>
          <p className={styles.twoDaysLater}>pragma holds up a thumb</p>
          <p className={styles.twoDaysLater}>the two men get up</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Bosy Bitch"</p>
          <p className={styles.twoDaysLater}>
            Ovlav mutters to pragma as they make their way down the stairs
          </p>
          <p className={styles.twoDaysLater}>
            "She got good ass on her though."
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"You fucked yet?"</p>
          <p className={styles.twoDaysLater}>
            Pragma ignores him. They make their way towards the exit
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "I think we should go to the head teachers office for direction. We
            don’t want to be searching round a whole school."
          </p>
          <p className={styles.twoDaysLater}>
            The gym door closes. Matilda draws closer to Destiny
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Now that the dicks are gone,"</p>
          <p className={styles.twoDaysLater}>she pulls out a picture</p>
          <p className={styles.twoDaysLater}>"When was this?"</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "The first time we won the title."
          </p>
          <p className={styles.twoDaysLater}>she wipes her tears</p>
          <p className={styles.twoDaysLater}>
            "It was an away game, she was one of the few from our school that
            attended. That stupid picture."
          </p>
          <p className={styles.twoDaysLater}>She manages a chuckle</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "I always hated it, see I’m not really what you would call
            photogenic. I rarely have a picture of myself. But Rosa took
            pictures of me every chance she got. She knew I hated it. She did it
            more to spite me."
          </p>
          <p className={styles.twoDaysLater}>Matilda laughs</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>"This one?"</p>
          <p className={styles.twoDaysLater}>she reaches for the picture</p>
          <p className={styles.twoDaysLater}>
            "She never gave me this one. She told me it was for her only. It was
            the only one I ever smiled in."
          </p>
          <p className={styles.twoDaysLater}>
            Destiny buries her head in her lap. Matilda can hear her cries. The
            thuds and squeaking have stopped now you could hear a pin drop in
            the gym
          </p>
          <p className={styles.twoDaysLater}>MATILDDA</p>
          <p className={styles.twoDaysLater}>"You loved her didn't you?"</p>
          <p className={styles.twoDaysLater}>she raises her head insulted</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "Of course I did. She was my best friend, my only friend. And you
            ask me if her loved her?"
          </p>
          <p className={styles.twoDaysLater}>
            Matilda reaches for her cheek as she helps her wipe away her tears
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"You know what I mean."</p>
          <p className={styles.twoDaysLater}>
            Matilda replies with a smile on her face. Destiny reaches for
            Matilda's hands retracting her
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>"Yes."</p>
          <p className={styles.twoDaysLater}>She mutters</p>
          <p className={styles.twoDaysLater}>"Yes I did."</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>"You know?"</p>
          <p className={styles.twoDaysLater}>she turns to Matilda teary eyed</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "I don’t know if she ever did... that way. And I’ll never know. They
            took her from me."
          </p>
          <p className={styles.twoDaysLater}>
            she buries her face in her palms sniffling
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Look,"</p>
          <p className={styles.twoDaysLater}>
            Matilda points to the picture of Rosa
          </p>
          <p className={styles.twoDaysLater}>“Look at her”</p>
          <p className={styles.twoDaysLater}>she uncovers her face</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"How do you think I knew?"</p>
          <p className={styles.twoDaysLater}>
            "Not just talking as someone who has been on both side but
            objectively as someone has done years of studying behaviors,
            mannerisms and body language. Joy I kid you not, She felt exactly
            the same way. I’m so sorry you both never got to experience each
            other the way you both dreamed of but I want you to know she was
            absolutely in love with you. More than best friend."
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "You said this was the first time you smiled in her pictures. Notice
            anything else?"
          </p>
          <p className={styles.twoDaysLater}>
            Destiny looks long and hard. She shakes her head
          </p>
          <p className={styles.twoDaysLater}>
            "When we went to her house to talk to her mother, I saw all the
            pictures she had of everyone in her room. She did had a lot. When it
            came to you though, she was always looking at you while the shutter
            clicked."
          </p>
          <p className={styles.twoDaysLater}>That's not any type of look</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "My guess is she’d wanted to say something since then but it was too
            complicated."
          </p>
          <p className={styles.twoDaysLater}>Matilda smiles</p>
          <p className={styles.twoDaysLater}>"Come here"</p>
          <p className={styles.twoDaysLater}>
            Matilda pulls joy into an embrace. Destiny sobs for some time
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>"Thank you"</p>
          <p className={styles.twoDaysLater}>She pulls away from Matilda</p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>"I've got to get back to now"</p>
          <p className={styles.twoDaysLater}>
            She moves to turn to where the girls are then she realizes the balls
            weren't bouncing anymore
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>"Speaking of"</p>
          <p className={styles.twoDaysLater}>
            The girls have stopped playing. A few of them start clapping
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "You might not have Rosa with you anymore, but these kids are still
            here and it looks to me like they love you just as much."
          </p>
          <p className={styles.twoDaysLater}>
            Destiny smiles as she wipes her face
          </p>
          <p className={styles.twoDaysLater}>DESTINY</p>
          <p className={styles.twoDaysLater}>
            "Practice has never been this loud."
          </p>
          <p
            className={styles.twoDaysLater}
          >{`Destiny chuckles as she gets up. She makes her way down `}</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Destiny"</p>
          <p className={styles.twoDaysLater}>
            Matilda yells out to the girl who is now almost on the floor of the
            gym
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Thank you"</p>
          <p className={styles.twoDaysLater}>
            Destiny looks back and nods. The room is thunderous with clapping
          </p>
        </b>
        <b className={styles.twoDaysLaterContainer}>
          <p className={styles.twoDaysLater}>
            Pragma could feel the shaking as he and Ovlav knocks on the door to
            the principal’s office
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>“I hope it’s something good.”</p>
          <p className={styles.twoDaysLater}>
            There is shuffling behind the door as a raspy off tune voice hastily
            responds
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "Slide it under the door. It better be the Newport too. You know I
            don’t like those other lemony shit."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            “Sir. Umm... we are officers from the station. We are here about one
            of your student-
          </p>
          <p className={styles.twoDaysLater}>"A former student."</p>
          <p className={styles.twoDaysLater}>pragma catches himself</p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>"Who could that be?"</p>
          <p className={styles.twoDaysLater}>
            The voice behind the door asks. Several coughs follow
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Rosa Wilson. She was a student at this school. Tragically killed
            late last week."
          </p>
          <p className={styles.twoDaysLater}>"Is it coming back now?"</p>
          <p className={styles.twoDaysLater}>
            Pragma hisses as he lets himself in. The room was hot with smoke.
            The single window in the back of the room did not help.
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "You know, you might have to do better than that to clear the
            smoke."
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>"What smoke?"</p>
          <p className={styles.twoDaysLater}>
            The man awkwardly asks as he leans on his table
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Oh, Nothing."</p>
          <p className={styles.twoDaysLater}>Ovlav smirks</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Good Afternoon. My name is Pragma Alderson. This here is Ovlav-"
          </p>
          <p className={styles.twoDaysLater}>Pragma turns to Ovlav.</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Ovlav Pennywise. Nice to make your acquaintance"
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "And I'm the principal of this whole thing."
          </p>
          <p className={styles.twoDaysLater}>
            He waves his hands around frantically. He knocks over his ashtray
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>"Ignore that."</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "You got a call about us this morning. Our other partner called."
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            “I’m sorry who the fuck are you?”
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            “I just told you. We are from the Atlanta station. We called you.”
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            “Oh, yes. The FBI people. Sorry. Psssft."
          </p>
          <p className={styles.twoDaysLater}>
            The principal holds pops an invisible bubble close to his ears
          </p>
          <p className={styles.twoDaysLater}>
            “Too many, you know, Newports. They never tell you how bad those
            things are you know? I tell my kids, don’t touch these things."
          </p>
          <p className={styles.twoDaysLater}>
            He pulls out one cigarette. Lights it then take a few puffs
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>"How rude of me."</p>
          <p className={styles.twoDaysLater}>
            He offers the stick to the officers
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"No thank you."</p>
          <p className={styles.twoDaysLater}>THE PRINCIPAL</p>
          <p className={styles.twoDaysLater}>"Why the fuck not?"</p>
          <p className={styles.twoDaysLater}>The principal visible offended</p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "Wait. You're not underage. Are you?
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"No."</p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "Are you catholic or something? I got a cousin that's a priest. That
            ain't never stop him. He told me it was okay. But then he also told
            me he saw the cross move in the Chapel. I tell him he got a problem
            but he say it's Jesus."
          </p>
          <p className={styles.twoDaysLater}>Pragma clears his throat</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"No. I'm good sir."</p>
          <p className={styles.twoDaysLater}>THE PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "Then why the fuck you not taking the stick?"
          </p>
          <p className={styles.twoDaysLater}>The principal is upset now</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Well, if you must know, I quit a long time ago."
          </p>
          <p className={styles.twoDaysLater}>Pragma finally answers</p>
          <p className={styles.twoDaysLater}>
            "More importantly, last time I checked smoking is not permitted on
            school property."
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>"Last time is checked-"</p>
          <p className={styles.twoDaysLater}>The principal replies mockingly</p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "Listen here... panther. Are you here to ask question about Rosa or
            are you gonna be an uptight son of a bitch and make this about me?"
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Yes Panther, which is it?"</p>
          <p className={styles.twoDaysLater}>
            Ovlav replies after the principal. He grabs a seat across the
            principal
          </p>
          <p className={styles.twoDaysLater}>
            The principal points to Ovlav with the hand he has his smoke on
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "That is the attitude I like in my office. Be like him. Be. Like."
          </p>
          <p className={styles.twoDaysLater}>he coughs multiple times</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Ovlav."</p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "Ovlav. Be like Ovlav. Now you are you going to like your partner
            over here?"
          </p>
          <p className={styles.twoDaysLater}>
            He points to Ovlav handing him the stick
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Now me, I'm waiting of the new ones that will come sliding under
            the door."
          </p>
          <p className={styles.twoDaysLater}>
            The principal draws closer to Ovlav
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>"I like you."</p>
          <p className={styles.twoDaysLater}>He looks at Pragma next</p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "I like this guy! Now, let's get to brass task. Rosa unfortunately
            is dead so I don't think you fellas will be doing any questioning
            there. I'm sorry. I didn't want to break it to you over the phone."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "I am looking for a woman named Jessica. She is the leader of the
            spelling bee club?"
          </p>
          <p className={styles.twoDaysLater}>THE PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "Jessica, ummm Jessica. Does not ring a bell."
          </p>
          <p className={styles.twoDaysLater}>He puts his hands on his cheek</p>
          <p className={styles.twoDaysLater}>"In my school?"</p>
          <p className={styles.twoDaysLater}>
            the door opens. A boy with blue died hair walks in. He had dirty
            socks with sandals, his shirt barely tucked. He walks in and takes a
            sit beside Ovlav. He drops a pack of Newport on the table in front
            of the principal. The principal leans into his table and grabs the
            kid by the collar
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "I told you to slide it under the door. Under the door dumbass. You
            know who these guys are? Do you? You are going to jail young one."
          </p>
          <p className={styles.twoDaysLater}>
            the kid, suddenly terrified is slowly turns to his left. He locks
            eyes with Ovlav. His head continues to turn until it’s turned to
            Pragma he sees the badge around his neck
          </p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>
            "Oh shit, The fucking FBI Shit. I heard about you guys on the
            radio."
          </p>
          <p className={styles.twoDaysLater}>
            He suddenly gets up as he puts both his hands up
          </p>
          <p className={styles.twoDaysLater}>"He... he sent me."</p>
          <p className={styles.twoDaysLater}> He murmurs terrified</p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>
            "I was walking in the hallway and he came to me and said, 'are you
            over 18?' and I said well almost, I’m 17 and a half and I eat a lot
            so I’m tall and sometimes the teachers look at me and tell me I’m a
            big boy."
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            "That is true. He is a tall fucking kid. I thought he was one of the
            teachers at first. Look at those legs."
          </p>
          <p className={styles.twoDaysLater}>
            He adds as he opens the new pack of cigarette
          </p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>
            "Am I going to jail now? I’m just 17 so I can’t go to big boy jail.
            I lied, I’m not a big boy. He told me this was the last time. And,
            and I got a girlfriend, a girlfriend! Well, almost my girlfriend."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Listen kid,"</p>
          <p className={styles.twoDaysLater}>
            Pragma puts his hand on the kids shoulders. Ovlav burts into a small
            laughter.
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "We are not here for you. So Shhhh"
          </p>
          <p className={styles.twoDaysLater}>
            pragma holds a finger to his mouth
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Don’t say any more before you implicate that man over there. Do you
            know who Jessica is? The leader of the spelling bee club?"
          </p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>"Yes I do."</p>
          <p className={styles.twoDaysLater}>He replies</p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>
            "She’s still in school. I think?. I don’t know. I feel really dizzy.
          </p>
          <p className={styles.twoDaysLater}>Pragma sighs</p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>
            "Yes, she’s here. She currently has spelling practice.
          </p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>"I got a Jessica here?"</p>
          <p className={styles.twoDaysLater}>The principal suddenly shouts</p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>"Jessica"</p>
          <p className={styles.twoDaysLater}>
            The kid whispers. The principal is still blank
          </p>
          <p className={styles.twoDaysLater}>
            The kid cups both of his hands and he raises it to his chest
          </p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>"Jessica"</p>
          <p className={styles.twoDaysLater}>He raises his eyebrows</p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>
            “Oh. Why you ain’t say that then!”
          </p>
          <p className={styles.twoDaysLater}>
            Pragma hisses in the principal's direction. He turns back to the kid
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            “Can you lead us to where she is?”
          </p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>"Yes I can. This way. "</p>
          <p className={styles.twoDaysLater}>
            The kid opens up the door and walks out
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Thank you for your help?"</p>
          <p className={styles.twoDaysLater}>Pragma hesitates</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "We’ll be back. For you this time."
          </p>
          <p className={styles.twoDaysLater}>He follows the kid out</p>
          <p className={styles.twoDaysLater}>PRINCIPAL</p>
          <p className={styles.twoDaysLater}>"You know, you a real dick."</p>
          <p className={styles.twoDaysLater}>The principal retorts</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Tell me about it."</p>
          <p className={styles.twoDaysLater}>Ovlav says as he gets up</p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>
            "It's just across those trophies"
          </p>
          <p className={styles.twoDaysLater}>
            He points to a row of glass shelves.
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Thanks kid."</p>
          <p className={styles.twoDaysLater}>The kid salutes pragma</p>
          <p className={styles.twoDaysLater}>"And... stop smoking."</p>
          <p className={styles.twoDaysLater}>Pragma adds</p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>
            "You know, my girlfriend tells me that."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"The one that's not yours yet?"</p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>
            "Woah. Officer. Are you trying to be funny?"
          </p>
          <p className={styles.twoDaysLater}>The kid rolls his eyes</p>
          <p className={styles.twoDaysLater}>KID</p>
          <p className={styles.twoDaysLater}>
            "Everyone is addicted to something."
          </p>
          <p className={styles.twoDaysLater}>
            The kid yells out as he runs away
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Pick someone, that's better."</p>
          <p className={styles.aStakeout}>Pragma yells after him</p>
        </b>
        <b className={styles.twoDaysLaterContainer}>
          <p className={styles.twoDaysLater}>
            He opens the door to the room. All the students were packed in the
            front. While Ovlav trailed behind Pragma noticed the giggles first
            but he got closer and sighted mostly women.
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>“All of them are women”</p>
          <p className={styles.twoDaysLater}>
            Pragma told Ovlav as he got closer
          </p>
          <p className={styles.twoDaysLater}>
            A tall busty girl made eye contact with him. She immediately comes
            pacing towards him
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"You men lost?"</p>
          <p className={styles.twoDaysLater}>
            The girl says barely reaching the two men
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "If your name is Jessica then we must be in the right place. We were
            hoping to talk to you about Rosa and the events surrounding her
            death."
          </p>
          <p className={styles.twoDaysLater}>The girl is silent for a while</p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"And you are?"</p>
          <p className={styles.twoDaysLater}>She hisses</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Pragma. From the FBI."</p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>Jessica raises her eyebrows</p>
          <p className={styles.twoDaysLater}>"I ain't know they let-"</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Let who?"</p>
          <p className={styles.twoDaysLater}>Pragma bellows</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "I'm Ovlav. From the Atlanta precinct."
          </p>
          <p className={styles.twoDaysLater}>Ovlav abruptly interrupts</p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>
            "Well hello there, Ovlav. How do you do?"
          </p>
          <p className={styles.twoDaysLater}>
            The girl replies to Ovlav. Ovlav just smiles back
          </p>
          <p className={styles.twoDaysLater}>
            "Can y’all do this Ovlav? Without my lawyer?
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Well, we’re just here to ask you a few questions. You are not
            obligated to answer any questions you don't want to. in-fact you can
            walk away at anytime. However, If for whatever reason we have to
            bring you to the station with for questioning then you can think of
            contacting your lawyer. It’s well within our right to ask you a
            question all by yourself as long as you are over the age of consent.
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Are you over the age of eighteen?"
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"I am"</p>
          <p className={styles.twoDaysLater}>She bats an eye towards Ovlav</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Great let’s get started. Do you mind stepping outside so we can
            talk to you privately."
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>
            "Actually no, Here is fine. I can talk about whatever with my
            girls."
          </p>
          <p className={styles.twoDaysLater}>
            she turns around, giggles then waves to the group of girls in the
            front of the classroom. A few wave and giggle back
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"This way."</p>
          <p className={styles.twoDaysLater}>
            she motions to Ovlav as she makes her way back to the girls in-front
          </p>
          <p className={styles.twoDaysLater}>
            Pragma looks at Ovlav bewildered
          </p>
          <p className={styles.twoDaysLater}>Ovlav shrugs</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"The more the merrier."</p>
          <p className={styles.twoDaysLater}>
            They get to the front. Pragma starts
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Do you what happened to Rosa?"</p>
          <p className={styles.twoDaysLater}>Jessica nods</p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"Hmmm hmmm yes. She died."</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Do you know anything else concerning her death?"
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>
            "It was after her shift on Sunday."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>Pragma raises his eyebrows</p>
          <p className={styles.twoDaysLater}>"You know that how?"</p>
          <p className={styles.twoDaysLater}>He begins to write in his note</p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"I was there."</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>Pragma looks up</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"You said what?"</p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"I was there."</p>
          <p className={styles.twoDaysLater}>She repeats</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Do you understand what you’re saying? Do you realize you are a
            prime witness of a murder?"
          </p>
          <p className={styles.twoDaysLater}>
            Pragma's voice intensifies. Ovlav puts his arm on pragma’s shoulder.
            He leans in and whispers into his ears
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"She is messing with you."</p>
          <p className={styles.twoDaysLater}>
            pragma’s arms drops from taking his note. He can see the smile on
            the girl's face now
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Ma’m, Please take this seriously. A child is dead!"
          </p>
          <p className={styles.twoDaysLater}>His voice starts to grow</p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"Calm down sir."</p>
          <p className={styles.twoDaysLater}>
            Her face is enveloped in disgust
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>
            "No one raises their voice at me."
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Look ma'm."</p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"it's Jessica."</p>
          <p className={styles.twoDaysLater}>
            She twirls her hair while looking at Pragma
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Okay Jessica. I’m going to need you to take this seriously. My
            partner here is right."
          </p>
          <p className={styles.twoDaysLater}>
            He touches Pragma on the shoulders again
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Your friend is dead. A lot more too. In fact,"
          </p>
          <p className={styles.twoDaysLater}>Ovlav gets closer</p>
          <p className={styles.twoDaysLater}>
            "Women might be dying right now so all we’re asking is to help us
            catch this bastard so more women don’t lose their life. Can you help
            me with that Jessica?"
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"Yes I can."</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Thank you. Now, what was your relationship with Rosa like?"
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"Who?"</p>
          <p className={styles.twoDaysLater}>
            Ovlav turns his head to the side. She giggles the rest of the girls
            giggle with her. She looks at Pragma then back at Ovlav both men
            have stern looks on their face. She rolls her eyes
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>
            "She’s not my friend. I mean I know her. But we ain’t no friends so
            you got that wrong."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"How well did you know her?"</p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>
            "We was classmates back in... freshman year."
          </p>
          <p className={styles.twoDaysLater}>
            "Actually, it was sophomore year."
          </p>
          <p className={styles.twoDaysLater}>
            A darker skinned girl in a bun points out
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>
            "Oh yes. That’s right. Wait, how do you know that?"
          </p>
          <p className={styles.twoDaysLater}>Jessica swiftly turns back</p>
          <p className={styles.twoDaysLater}>
            "I sat behind you for the whole year."
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>"Ohhhhh!"</p>
          <p className={styles.twoDaysLater}>
            she exclaims then giggles. The rest join her
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "You said you were never friends. Can you explain your relationship
            with her was?"
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>
            "I can tell you she was a bitch. That’s for sure."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"You sure that’s not you?"</p>
          <p className={styles.twoDaysLater}>
            Ovlav’s eyes widen. Jessica’s mouth is open. The girl in the bun
            behind her covered her mouth
          </p>
          <p className={styles.twoDaysLater}>
            Ovlav interjects before Jessica could talk
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "So y’all never talked? Even interacted since sophomore year?"
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>
            "I’m done talking to y’all. I told you I don’t know that bitch."
          </p>
          <p className={styles.twoDaysLater}>Her cheeks are getting red</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Are you sure? We heard from someone you really hated her guts."
          </p>
          <p className={styles.twoDaysLater}>JESSICA</p>
          <p className={styles.twoDaysLater}>
            "Nigger please. I ain’t never give two fucks about that bitch."
          </p>
          <p
            className={styles.twoDaysLater}
          >{`Pragma swallows. Ovlav gets between Pragma and Jessica placing both his hands around Jessica’s shoulders. `}</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Okay Jessica, hold on tight for me okay?"
          </p>
          <p className={styles.twoDaysLater}>
            Ovlav cuts a look at Pragma as he points his left eyebrow to the
            back of the classroom
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Come on"</p>
          <p className={styles.twoDaysLater}>The two men walk away</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"What the fuck are you doing?"</p>
          <p className={styles.twoDaysLater}>
            Ovlav whispers as both officers settle under a map hung in the back
            of the classroom
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"What?"</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"What the fuck?"</p>
          <p className={styles.twoDaysLater}>He points to Pragma's chest</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"My job."</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "You know when Gideon told me to come with ya'll he didn't tell me I
            was going to teach you how to interview common civilians."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Yeah I’m good there. I got this badge for a reason."
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "It sure don’t fucking look like it. You getting riled up over some
            chick in high school."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "I was just trying to get some answers."
          </p>
          <p className={styles.twoDaysLater}>Pragma says calmly</p>
          <p className={styles.twoDaysLater}>
            "That involves getting an informant pissed till she don’t want to
            answer questions anymore?"
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            Pragma puts his left hands on his forehead
          </p>
          <p className={styles.twoDaysLater}>
            "Well, now we now know she don’t like the girl."
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Real funny motherfuker."</p>
          <p className={styles.twoDaysLater}>Ovlav lets out a smile</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Here’s what’s going to happen, I will go back to her and see if I
            can get her to give me something more. You stay right here. Here."
          </p>
          <p className={styles.twoDaysLater}>Ovlav taps on his chest again</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "Try to remember those academy training."
          </p>
          <p className={styles.twoDaysLater}>
            Pragma gets close to Ovlav their faces are inches away now
          </p>
          <p className={styles.twoDaysLater}>"Get a room!"</p>
          <p className={styles.twoDaysLater}>
            Jessica and her friends giggle out from the front
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Don’t. Touch. Me. Ever. Again."
          </p>
          <p className={styles.twoDaysLater}>
            Pragma taps on Ovlav's chest. The officers stare each other down
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Sure thing tough fella."</p>
          <p
            className={styles.twoDaysLater}
          >{`He taps the back of his neck with his left hand and walks away before Pragma could remove his hand. Pragma stood in the back of the classroom for a while. He was there to witness Ovlav clutch Jessica close to him. Pragma puts his hands on his hips the other on his forehead `}</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"That's not appropriate."</p>
          <p className={styles.twoDaysLater}>Pragma says out loud</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            I don’t think I should be seeing this. Maybe I should go see if
            Matilda done with that girl? What’s her name? Is it Destiny? She
            seem sad. Well, she lost Rosa. Such a good girl. Why can’t I get her
            out of my head? She’s been all I can think about lately. More than
            Ruby. Oh Ruby.
          </p>
          <p className={styles.aStakeout}>
            Pragma stood behind the classroom deep in thought. The girls in the
            front of the classroom start making strange noises. Pragma heads out
          </p>
        </b>
        <b className={styles.twoDaysLaterContainer}>
          <p className={styles.twoDaysLater}>
            Few moments after Pragma stepped out he sees Matilda coming along
            the hallway. Her eyes wet
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Everything alright there?"</p>
          <p className={styles.twoDaysLater}>
            Matilda says nothing. walking past Pragma
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Cut that out."</p>
          <p className={styles.twoDaysLater}>
            "We are amongst teen I know, but we don't gots to act like them."
          </p>
          <p className={styles.twoDaysLater}>
            Matilda heads for the classroom Pragma came from. Peeping in
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "He thought best to do it himself."
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "You just ain't doing shit today."
          </p>
          <p className={styles.twoDaysLater}>Matilda shakes her head</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"See these?"</p>
          <p className={styles.twoDaysLater}>
            Matilda looks at the pictures in the shelf
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Oh, must have missed me."</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Everyone has their off days."</p>
          <p className={styles.twoDaysLater}>She sniffs</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Must be David."</p>
          <p className={styles.twoDaysLater}>
            She declares as she points at a picture behind one of the glass
            shelf
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"Did you-"</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            Pragma interjects before she could finish
          </p>
          <p className={styles.twoDaysLater}>
            "He’s away. Football game at another school."
          </p>
          <p className={styles.twoDaysLater}>Pragma holds up three fingers</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            "Don't play about. Inform me of your findings as fast as possible.
            This is not time to fuck around. I thought you knew that better than
            anyone."
          </p>
          <p className={styles.twoDaysLater}>Matilda charges on</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Will you just stop fucking walking for God’s sake?This is the same
            shit that almost got you killed. What is it? Is it a fuck? I know
            how you get when you are in need."
          </p>
          <p className={styles.twoDaysLater}>Matilda turns back around</p>
          <p className={styles.twoDaysLater}>
            "If that is the case, I think Ovlav has taken a liking to you. You
            should have no problem there. Now with me-"
          </p>
          <p className={styles.twoDaysLater}>
            pragma never got to finish. Matilda slaps him. Pragma raises his
            eyebrow. She sighs as he grabs her by the wrist
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Alright, that’s enough. Out with it."
          </p>
          <p className={styles.twoDaysLater}>
            Matilda remains quiet as she removes her hand
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"I’ll be outside."</p>
          <p className={styles.twoDaysLater}>she walks towards the door</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            Pragma lets out a short breath. He makes eye with something in the
            corner
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Women, they'll be the death of you."
          </p>
          <p className={styles.twoDaysLater}>
            Pragma trails behind her. He asks again. She goes mute again
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"I must be in real trouble."</p>
          <p className={styles.twoDaysLater}>
            Pragma mutters under his breath but loud enough for Matilda to hear.
            she was paces ahead. She finally stops by a bridge a few yards just
            around the School. Pragma stayed by the car taking in the view of
            the clear sky. It was dark already but the lights of the city below
            made it a view. The chilly air that blew made Matilda shiver. Pragma
            makes his way over to her
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Look at that view. Takes you back doesn’t it? The city of stars."
          </p>
          <p className={styles.twoDaysLater}>
            Pragma waves his hands dramatically over the clear city. Matilda is
            quiet after a few silent moment Pragma puts his jacket around her
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"I’m fine."</p>
          <p className={styles.twoDaysLater}>She gives it back</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"You're not."</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>"I said I'm fucking fine."</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            "Only you're not. You're fucking shaking. You know, I don't give a
            fuck what's up your ass anymore but just don't freeze to death
            because you're being a stubborn motherfuker. That doesn't help
            anyone does it."
          </p>
          <p className={styles.twoDaysLater}>
            He puts it back on her shoulders. Matilda starts to walk but stops a
            few feet away this time
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            “I fucking hate you so much. You have not even the faintest idea.
            Pragma what is today? ‍
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            “Well I won’t know if you don’t tell.‍”
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            “Who fucking says that. You are broken. I don’t know how that poor
            women does it.‍”
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>“Watch it.‍”</p>
          <p className={styles.twoDaysLater}>{`MATILDA `}</p>
          <p className={styles.twoDaysLater}>
            “I know you got brains but where is the heart?Where is the Pragma I
            loved?”
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            “‍Oh you wanna talk about love? I’ll tell you about love. You ask
            where the heart is? It’s funny, I'm sorry I can't help but laugh.
            It’s just funny is what it is. The same person who turned it to
            stone asks where it's gone. It fucking turned to rock in that office
            that afternoon. When you said you were never with me. How dare you
            ask after my heart. After how many years huh M? Fuck you!‍”
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            “I know I left some thorns but this ain't about us.”
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            “‍Well what is it then, Spell it out already. You’re gonna tell you
            love me now? You’re years late M.‍”
          </p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            “See, you’ve got your own head so far up your ass to even be here.
            How is it that someone like you could be so out of touch? You are
            the only one that I have to remind what day today is.‍”
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>“Shut the fuck up.‍”</p>
          <p className={styles.twoDaysLater}>MATILDA</p>
          <p className={styles.twoDaysLater}>
            You are the only thing person, Only person I have to remind what
            today is. How can you even sleep”
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p
            className={styles.twoDaysLater}
          >{`You think I don’t remember? That's the thing M, I can't fucking sleep! I close my eyes and every night I see these men. Who they are or where they're from I don't know. I don't know even know what they want from me. But I know it ain't good.‍ You know what I do know though? Whatever it is, I deserve it, I do. Is that what you wanted to hear?” `}</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>
            “Maybe you haven't had enough.‍ Her name was Ruby. Ruby Fitzgerald.
            She was seventeen years five months and twenty-eight days. Her
            favorite color was purple. It reminded her of her name. She was
            going to be a detective. She said she wanted to be like me.‍ Well
            that didn't happen. Because she died in my arms. By my fucking
            bullet. ‍But you know what’s so funny about all this? You only saw
            it, Well I pulled the fucking trigger Matilda. I did, not you. So
            don’t stand there and act like I don’t think about her every single
            fucking day. You will never know how it feels you understand, Never.
            Screw you for bringing that up. You’re a piece of shit. I hope
            you've had your fun now.”
          </p>
          <p className={styles.twoDaysLater}>
            Pragma walks away. He barely left the bridge when Ovlav came rushing
            out
          </p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"A call came for us."</p>
          <p className={styles.twoDaysLater}>
            Ovlav yells out. Pragma did not have to ask. It was all over Ovlav’s
            face
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Where?"</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>
            "It wasn’t in the any of the maps you gave us."
          </p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Where!"</p>
          <p className={styles.twoDaysLater}>Pragma asks again</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.twoDaysLater}>"Mockingbird Lane."</p>
          <p className={styles.twoDaysLater}>Pragma halts</p>
          <p className={styles.twoDaysLater}>PRAGMA</p>
          <p className={styles.twoDaysLater}>"Mockin-"</p>
          <p className={styles.twoDaysLater}>He is in disbelief</p>
          <p className={styles.twoDaysLater}>"Are you sure?"</p>
          <p className={styles.twoDaysLater}>OVLAV</p>
          <p className={styles.aStakeout}>"Positive."</p>
        </b>
      </div>
      <div className={styles.footer}>
        <div className={styles.vegeeWrapper}>
          <div className={styles.vegee}>vegee ©</div>
        </div>
      </div>
    </div>
  );
};

export default PragmaonMyWayToWork;
