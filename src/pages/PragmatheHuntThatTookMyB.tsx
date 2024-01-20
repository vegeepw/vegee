import { FunctionComponent, useEffect } from "react";
import styles from "./PragmatheHuntThatTookMyB.module.css";

const PragmatheHuntThatTookMyB: FunctionComponent = () => {
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
    <div className={styles.pragmatheHuntThatTookMyB} data-animate-on-scroll>
      <div className={styles.body}>
        <b className={styles.ovlavWeGotContainer}>
          <p className={styles.p}>22:03</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"We got to get going."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Fuck!"</p>
          <p className={styles.p}>
            Ovlav and his company start to make their to the car. Matilda
            catches up to pragma
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "What was that? On your face. When Ovlav mentioned Mockingbird. Did
            you know the street?"
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Remember when I said I slept under a tree this morning?"
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Yes?"</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"I slept under Mockingbird Lane."</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Whaa-"</p>
          <p className={styles.p}>
            Pragma brushes past her. They all inside the car. Ovlav starts for
            the station.
          </p>
          <p className={styles.p}>INSIDE THE CAR</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            I got two questions. So what’s your problem with the location? I
            wasn’t bullshitting. They found it there. Also, it was never on the
            map. How did you fucking miss that?
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "I didn’t. I was there this morning on my personal stakeout but as
            it turns out, I was a little off."
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "What the fuck? You were waiting for the man?When were you going to
            run that by us? We got niggas going on missions now?"
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "It was unofficial. I was going to inform y’all until I proved my
            findings."
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "Fuck your findings. You tell us! Any move towards catching him? You
            tell us!"
          </p>
          <p className={styles.p}>Ovlav looks back as he continues driving</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Fuck!"</p>
          <p className={styles.p}>Ovlav curses aloud</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"That makes number what?"</p>
          <p className={styles.p}>
            Before pragma could respond, Ovlav interjects
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Five."</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Is our profile still on track?"</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "It seems pretty good so far. He hasn’t deviated. We won’t know more
            until we get back to the station."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Mocking bird. So fucking close."</p>
          <p className={styles.p}>He looks at Matilda</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"So fucking close M."</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "What are you still weeping about? Something else you’re not telling
            us?"
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"This close!"</p>
          <p className={styles.p}>Ovlav swallows then laughs</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "Got to be one of the dumbest thing I’ve heard someone with a badge
            do."
          </p>
          <p className={styles.p}>Pragma exclaims</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Woah? You ain't never had one?"</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Alright, alright. Profile still intact with this new girl?"
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "I ain’t hear nothing out of the ordinary."
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Not that any of these is but what’s the ordinary?"
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "Blunt force to the head then strangulation which they all die by.
            Rosa was the only exception."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Where did they find the body?"</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "I ain’t get to that on the phone but it wasn’t where you said.
            Gideon made a point in that."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Fuck."</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Stop filling the car with spit and foul language. At the very least
            spit out information that will help us."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Fuck off. We will know more when we get to the station."
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "There’s a “we” now? Almost forgot your dumbass still had that in
            your vocabulary."
          </p>
          <p className={styles.p}>Ovlav chuckles</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"I can continue my way, I am happy to."</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "What exactly the fuck is that? That way of yours. Fucking running
            around bushes hoping you run into one of the most dangerous killer
            out right now? Let’s say by God’s mercy to even come across this
            fella, you seen how you look boy? Your ass ain’t lasting than a few
            seconds.”
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"He does um, have a point."</p>
          <p className={styles.p}>
            Matilda leans to the back as she mentions to Pragma. Pragma reaches
            for Ovlav’s neck from the rear passage seat he’s seated in. He
            forcefully yanks him backwards by the collar as he leans into him.
            Pragma’s mouth almost touching Ovlav’s right ear
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Call me a boy next time I’ll show you what I’ll do to when I see
            him. I promise I’ll last more than a few seconds."
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Easy lover boys. We’re no use if we dead."
          </p>
          <p className={styles.p}>She looks back at Pragma</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Wait till he safely delivers me to the station. Then y’all can get
            back to love making for all I care."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Never-mind."</p>
          <p className={styles.p}>He lets go</p>
          <p className={styles.p}>"He’s not worth the cheating M."</p>
          <p className={styles.p}>Ovlav chuckles</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "Look all I’m saying is we are better together. All that running
            around ain’t gon do nothing but get someone killed. Gideon would
            lose his shit if he heard this."
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "I think he could do without the information."
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Safe with me."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "I don’t need anyone keeping anything. Both of you can fuck off."
          </p>
          <p className={styles.pragmaLetsOut}>
            Pragma let’s out a short sarcastic laugh
          </p>
        </b>
        <b className={styles.ovlavWeGotContainer}>
          <p className={styles.p}>22:44</p>
          <p className={styles.p}>
            The three officers walk into the busy station. They halt at the
            entrance. There is paper and folders everywhere you look Everyone
            seemed to be talking and walking at the same time
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Would you look at that."</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"All this for one man?"</p>
          <p className={styles.p}>They’re approached by Gideon</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"It is almost twelve."</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"This way."</p>
          <p className={styles.p}>
            He nods in the direction of the large conference room. He closes the
            door
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"We found another one."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"We know that already."</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Or should I say it found us."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "What is the meaning of that? Where did you find him?"
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Right out there."</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Outside?"</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"The station."</p>
          <p className={styles.p}>
            He finishes the sentence Matilda is too stunned to utter. Pragma's
            eyes widen
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "We have an ID on him now. We do right? Tell me we do."
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "The man said he saw a figure out in the distance. Must have not
            have been past twenty past nine when I got the call."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Gideon! Tell me we got an ID!"</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"How about you let me catch my breath."</p>
          <p className={styles.p}>
            A hush fell over the room. Gideon continues
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            {" "}
            The man who called me said he had a something over his head. No, we
            could not ID him."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Fuck me."</p>
          <p className={styles.p}>Pragma buries his face in one of his palm</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "Fella was also said to be singing and dancing."
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Singing..."</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"and dancing."</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Yes just right out there."</p>
          <p className={styles.p}>gideon points to the back of the station</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "It's official, my head hurts now. I'm getting coffee."
          </p>
          <p className={styles.p}>
            Matilda leaves the conference room. Gideon continues
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"That’s not all."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Out with it then. What are you waiting for?"
          </p>
          <p className={styles.p}>His voice slightly raised</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Hey! Tough guy."</p>
          <p className={styles.p}>
            Ovlav puts a finger to his lips as he holds a stare at Pragma
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Shut the fuck up."</p>
          <p className={styles.p}>Gideon holds his arms in Ovlav's direction</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"It's all good."</p>
          <p className={styles.p}>
            Gideon is pointing both his hands in pragma's direction. He starts
            to shuffle his feet
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Boss. What are you doing?"</p>
          <p className={styles.p}>
            He is dancing now as he begins to motion to Pragma with his fingers
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "That's what our fella was doing back there."
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"He's saying come here."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Come get me."</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Exactly."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "We must have something on him. A description, we can start with the
            clothes, we'll narrow...
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Son,"</p>
          <p className={styles.p}>Gideon shakes his head</p>
          <p className={styles.p}>"It's too late for that."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Well, what are we waiting for, let's go join them out there."
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "We don't have men out there yet. A search party is being prepped
            right now."
          </p>
          <p className={styles.p}>Pragma interrupts</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Excuse me? So there aren't men out there as we speak? Gideon what
            the fuck are you doing!
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Enough! You, outside."</p>
          <p className={styles.p}>
            Gideon points at Pragma. Pragma immediately bursts out of the large
            room
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "Ovlav check on the officers over by the armory, get everybody
            ready. It's time."
          </p>
          <p className={styles.p}>
            Ovlav nods and exits the conference room leaving Gideon behind. He
            comes out and is approached by Pragma
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Gideon you better have a good reason why agents aren't"
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            “Listen to me son, No one in here is listening to you. At least not
            for a while.”
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Meaning?"</p>
          <p className={styles.p}>Pragma shifts uncomfortably</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"You heard me."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "I have a job to do, a killer to catch. Sheriff I don’t care if you
            don’t like me or you can’t stand the very sight of me. Black women
            are dying. I know that might not strike any nerve in the heart of
            those officers in there but someone has to be working like a madman
            to protect those women by finding their killers. So excuse me if you
            or someone in there don’t take too kindly to my tone. You can fuck
            off and find something for your ears but until then I’m not resting
            till these girls are found."
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"You got it wrong Pragma."</p>
          <p className={styles.p}>
            Gideon puts an arm on his shoulder. Pragma slightly buckled under
            the weight of his arm
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "This morning. We listened to you. I vouched for you. Here. Then a
            girl got dragged across the station tonight. This same station.
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"That's..."</p>
          <p className={styles.p}>Pragma swallows</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "I know. Not you. But you see now we got to head in another
            direction. We still doing the job Look at me."
          </p>
          <p className={styles.p}>Pragma looks up</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"This is part of the job."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Part of the job huh? You sure it’s not something else."
          </p>
          <p className={styles.p}>Pragma scoffs</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "The job in your hands is looks pretty shitty to me."
          </p>
          <p className={styles.p}>
            The busy station fell to complete silence. Murmurs start flying and
            a crowd starts to form around Pragma
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>Gideon motions to the officers</p>
          <p className={styles.p}>"Easy, easy. easy fellas."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Do they know about your record? Your last case. Do they know?"
          </p>
          <p className={styles.p}>Gideon's face starts to tighten</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "I don’t think they’ll sing your praise as much if they knew."
          </p>
          <p className={styles.p}>
            Pragma starts to smile. Suddenly from behind, Ovlav grabs Pragma by
            the tie he drags him into the armory. he locks the door and pulls
            out a gun from his holster. he holds it to pragma's neck
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "Talk to him or anyone in here like that again."
          </p>
          <p className={styles.p}>He gets closer</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"I will kill you."</p>
          <p className={styles.p}>
            The two men hold a stare moments later, there are several knocks on
            the door
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Open the door."</p>
          <p className={styles.p}>The knocks continue. Several seconds pass</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "If you make me break this door, I will break your leg."
          </p>
          <p className={styles.p}>The door opens</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "Oh no. I was just showing him where the holsters were."
          </p>
          <p className={styles.p}>
            Ovlav steps out with a grin on his face. He pulls Pragma into the
            view of the door
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"You all good there?"</p>
          <p className={styles.p}>He motions to Pragma</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"I can look out for myself."</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Come on. Now it is time."</p>
          <p className={styles.p}>Gideon leaves for the front</p>
          <p className={styles.p}>Pragma begins to set out</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Hey! Forgot something?"</p>
          <p className={styles.p}>
            Ovlav points to the guns and ammunition on the wall
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Help yourself."</p>
          <p className={styles.p}>
            Pragma looks into the armor filled room, he looks back to the front.
            Ovlav's eyes widen as a grin starts to fade into his face
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Or?"</p>
          <p className={styles.p}>
            he exhales dramatically which quickly turns into a chuckle
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"You have to ask your mummy!"</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Shut the fuck up. He hits Ovlav in the gut as he begins to examine
            the room."
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "Oh shit. You pack a lot in that tiny fucking arm."
          </p>
          <p className={styles.p}>
            Few moments later Pragma takes off his jacket as he wears a gun
            filled holster. He puts his jacket back on
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "The things we do to protect the people will love"
          </p>
          <p className={styles.p}>Ovlav mutters mockingly</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Anyone find out? I empty it all in your brain."
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Okay Nigga, your secret is safe with me."</p>
          <p className={styles.p}>Ovlav puts both his hands up dramatically</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "Hope you’re as good of a shot as you are a talker. You see me, I’m
            not so good. So try not to stay in front."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Motherfucker... You wouldn’t."</p>
          <p className={styles.p}>He gets closer to Pragma’s ears</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "Oh I’m a fucking nut. I’ll tell all about it."
          </p>
          <p className={styles.p}>he turns to leave away then turns back</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "And, tell your mummy I’m staying at the triple six tonight."
          </p>
          <p className={styles.p}>Pragma curses under his breath</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "Don’t be sad baby brother. All that she got is too much for you to
            handle."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"She likes it black."</p>
          <p className={styles.pragmaLetsOut}>
            Pragma retorts as Ovlav walks away
          </p>
        </b>
        <b className={styles.ovlavWeGotContainer}>
          <p className={styles.p}>00:20</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Alright good guys. and gals."</p>
          <p className={styles.p}>
            Gideon's voice echoes through the whole station. Pragma makes his
            way to the front with the rest of the officers
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "Quick introduction. As you can see, there are some folks among us.
            Say hello to the GBI. We will get acquainted later. For now listen
            up. This will be a party divided into three. I want a tactical team
            in the front. They stay alert and are ready to engage with threat. I
            and some officer will be behind you looking and paying attention to
            the surroundings. See if we see anything out of the ordinary in the
            woods and a last team behind to watch our six. We are looking for a
            middle aged black man. Last seen behind the station about three
            hours ago. He is considered to be armed and dangerous. If
            encountered do not engage alone, I repeat. Do not engage alone.
          </p>
          <p className={styles.p}>
            Gideon begins to pace around the room, scanning the faces of the
            officers. He lands at Pragma
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            ""Hell, no reason you are alone in the first place. We move in
            parties. Everyone understand?
          </p>
          <p className={styles.p}>There is echoes through the room</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Yessir."</p>
          <p className={styles.p}>Pragma nods</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "Everyone strap up. We leave in five. Oh and nothing loose."
          </p>
          <p className={styles.p}>
            A few of the officers start to remove their jacket
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Why that?"</p>
          <p className={styles.p}>Maltilda whispers behind Pragma</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Imagine running through the woods then suddenly your jacket catches
            a branch. A silly fucking way to loose someone would you not say?"
          </p>
          <p className={styles.p}>Pragma flinches</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Fuck! How long have you been there. Fucking creep"
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Why were you in the armory room. You know-"
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Are you blind? Your lover-boy over there dragged me there."
          </p>
          <p className={styles.p}>Matilda starts to snoop closer</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Yes but you went back in."</p>
          <p className={styles.p}>Pragma raises his eyebrows</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"You are watching me?"</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"You better not be up to anything stupid."</p>
          <p className={styles.p}>Matilda pokes him in the tie</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Okay Mother."</p>
          <p className={styles.p}>Pragma comments sarcastically</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Put that up, you will lose it."</p>
          <p className={styles.p}>Matilda looks down at his ring</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"The fucking orders today."</p>
          <p className={styles.p}>Pragma smiles as he reaches for her arm</p>
          <p className={styles.p}>"Are you alright?"</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Fuck off."</p>
          <p className={styles.p}>She brushes his arm away</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Don't tell me you are coming with."</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Okay."</p>
          <p className={styles.p}>They hold a stare</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Oh. Fuck. You never passed physical!"</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            She throws up her shoulder as she walks away
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"M, No. You will kill yourself."</p>
          <p className={styles.p}>
            Pragma notices her backside. He swallows as he catches back up to
            her
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Listen before we go out there..."</p>
          <p className={styles.p}>Pragma starts hesitantly</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"What?"</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "I feel it is going to get bloody and ugly out there. So all I'm
            saying is stick with me. Stay close. I will protect you.
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "It's okay. I can handle my own. Besides I'm in Gideon's camp not
            yours. Focus on keeping our people safe.
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Does he know you are not cleared to be anywhere near the field."
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Do they know you were suspended from firearms?"
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"You don't see me with one do you now?"</p>
          <p className={styles.p}>Matilda raises her eyebrows in suspicion</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Hmm, you are up to something. What are you hiding?"
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Nothing. Yet."</p>
          <p className={styles.pragmaLetsOut}>
            pragma holds out his ring as he heads for the door
          </p>
        </b>
        <b className={styles.ovlavWeGotContainer}>
          <p className={styles.p}>05:31</p>
          <p className={styles.p}>
            Pragma has trailed off suddenly he hears indistinct chatter
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Wha--"</p>
          <p className={styles.p}>
            He heads towards the noise. The indistinct chatter starts to get
            louder as Pragma approaches the source. He freezes. He’s met by a
            hooded man behind a tree. The hooded man sees Pragma. He suddenly
            raises his hands then slowly flicks him off. The hooded man begins
            to run. Pragma begins to chase
          </p>
          <p className={styles.p}>OFFICER</p>
          <p className={styles.p}>"Sir! Ehm. Mr..."</p>
          <p className={styles.p}>
            A voice that pragma does not recognize shouts out
          </p>
          <p className={styles.p}>OFFICER</p>
          <p className={styles.p}>"Wait!"</p>
          <p className={styles.p}>
            Pragma continues to chase. Moments later he stops
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"I lost him. Fuck!"</p>
          <p className={styles.p}>
            He laments as he catches his breath by a tree. His eyes wander
            around for some time. He makes out some footprints past the woods
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Thank the gods."</p>
          <p className={styles.p}>
            He begins after the prints. After a couple yards he runs into a
            clear field. He slows down and turns around. He continues on to
            charging after the foot print
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"Slow down fella!"</p>
          <p className={styles.p}>
            The man from the forest is few yards away from him. Pragma freezes
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Woah. I--"</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"Woah. I--"</p>
          <p className={styles.p}>The man repeats sarcastically</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>
            "Huh? What was that? I can't hear you. You are going to have to be
            louder than that Pragma."
          </p>
          <p className={styles.p}>
            Pragma clenches his face. The hooded figure is swinging a hammer
            beside the face of a young girl.
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Okay, okay."</p>
          <p className={styles.p}>Pragma holds out his arms</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Easy there. How about we talk about it? "Man to man."
          </p>
          <p className={styles.p}>The hooded man pauses briefly</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"What the fuck does that mean?"</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"What? Say, how about you let her go?"</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"What’s she to do with this?"</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "I just don't want her getting hurt is all."
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"What? I’m not going to hurt her. See?"</p>
          <p className={styles.p}>
            the hooded man swings the hammer meets the young girl right at the
            crown of her ankle she lets out a scream
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Fuck! Easy! Okay, Fuck! What do you want?"
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"The gun. Give it to me."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Okay, I'm taking it out now."</p>
          <p className={styles.p}>He pulls out the gun</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"Drop it."</p>
          <p className={styles.p}>Pragma drops the gun on the ground</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>
            "You look so scared little boy. I’m not going to hurt her. I
            promise."
          </p>
          <p className={styles.p}>
            The hooded man pulls the face of the girl close to him. Pragma
            flinches
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"You are not my type."</p>
          <p className={styles.p}>He looks back at pragma</p>
          <p className={styles.p}>"You know my type P"</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "I do? How about you let her go. I’ll do whatever you want. Just let
            her go."
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"Your wish."</p>
          <p className={styles.p}>
            he pushes the girl away as he chuckles. She hits some rocks close
            by. Pragma immediately runs over to to the girl. Before he could
            reach her the hooded man lands a kick right by his torso. He screams
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Ah!"</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"Hmm, hmm."</p>
          <p className={styles.p}>The hooded man wiggles his fingers</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"Don't do that."</p>
          <p className={styles.p}>Pragma lets out a cough</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>
            "That's your problem, you never mind your business."
          </p>
          <p className={styles.p}>
            He was just about to land another kick when the girl starts to
            slowly get up
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>
            "Oh. Where are you going? I'm not done with you."
          </p>
          <p className={styles.p}>
            He starts to make his way to the girl. He is stopped by something.
            Pragma has his hands around his ankle
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Run."</p>
          <p className={styles.p}>He whispers to the girl</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"What do we have here! Mr. Hero."</p>
          <p className={styles.p}>He returns to land a kick on his face</p>
          <p className={styles.p}>"She can't hear you, say it louder."</p>
          <p className={styles.p}>
            The hooded man kicks Pragma again. He locks eyes with the girl. He
            smiles as he nods
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Go."</p>
          <p className={styles.p}>Pragma whispers again</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>
            "Oh no you are not going anywhere. Come here."
          </p>
          <p className={styles.p}>
            The hooded man goes over to the girl but can't reach her. The hooded
            man continues to kick Pragma
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"Oh so you think you are a tough man?"</p>
          <p className={styles.p}>
            The hooded man lands another blow on his face. He kicks him again.
            Pragma still hasn't let go of the hooded man's ankle
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"I think therefore I am."</p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>
            "Let's have you think some more then nigga."
          </p>
          <p className={styles.p}>
            Blow lands. Pragma loses consciousness. The hooded man finally stops
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"Did I break you? Already?"</p>
          <p className={styles.p}>
            The hooded man softly taps him with his leg
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>"No fun."</p>
          <p className={styles.p}>
            The hooded man suddenly crouches down to Pragma’s bloodied face
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>
            "You and me see, we are the same. Cut from the same cloth."
          </p>
          <p className={styles.p}>
            he interlocks two of his fingers indistinct chatter in the woods
            starts
          </p>
          <p className={styles.p}>HOODED MAN</p>
          <p className={styles.p}>
            "Looks like that is all the time we have today. I will be speaking
            to you again little boy."
          </p>
          <p className={styles.pragmaLetsOut}>
            He pushes pragma’s head back to the ground. The hooded man swings
            his hammer as he gallops away
          </p>
        </b>
        <b className={styles.ovlavWeGotContainer}>
          <p className={styles.p}>06:05</p>
          <p className={styles.p}>
            What? Why am I here again. I am at the gate again. wait, why do I
            look like this? it’s not the same place. now all I see is white. in
            this huge space just white. where am i?
          </p>
          <p className={styles.p}>Pragma hears voices calling behind him</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Who is that?"</p>
          <p className={styles.p}>
            The mob of people are running towards him now
          </p>
          <p className={styles.p}>
            "Pragma, Pragma, Pragma, Pragma, Pragma, Pragma, Pragma, Pragma,
            Prag-"
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Pragma."</p>
          <p className={styles.p}>
            Pragma jerks awake on the hospital bed. He gasps heavily as he
            regains consciousness
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Easy!"</p>
          <p className={styles.p}>
            Matilda flinches. She leaves the room. Few moments later everyone is
            in the room with Pragma
          </p>
          <p className={styles.p}>DOCTOR</p>
          <p className={styles.p}>"Well your vitals seems to be all good."</p>
          <p className={styles.p}>
            A man in glasses and a large lab coat finally declares
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Ain't that great news!"</p>
          <p className={styles.p}>DOCTOR</p>
          <p className={styles.p}>"Although"</p>
          <p className={styles.p}>The doctor holds out a finger</p>
          <p className={styles.p}>DOCTOR</p>
          <p className={styles.p}>
            "Your injuries were really severe. Bruises to the abdomen, two
            fractured ribs and a mild concussion. Thankfully there were no
            internal bleeding or we would have had to take you into surgery."
          </p>
          <p className={styles.p}>
            The doctor continues. His tone has gotten more serious now
          </p>
          <p className={styles.p}>DOCOTOR</p>
          <p className={styles.p}>
            "Sir, I understand the nature of your job but your injuries were
            very severe. Oddly enough those blows missed vital organs. Very
            intentionally placed blows."
          </p>
          <p className={styles.p}>
            The doctor frowns as he holds his hand to his chin
          </p>
          <p className={styles.p}>DOCTOR</p>
          <p className={styles.p}>
            "Officers I will stick to the job that pays me but from these wounds
            this man wanted you to survive. Not only that but he is also of a
            medical mind. He is knowledgeable about the human body."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"So you think he is a doctor?"</p>
          <p className={styles.p}>
            He winces as he sits up straight. The doctor rushes to him
          </p>
          <p className={styles.p}>DOCTOR</p>
          <p className={styles.p}>
            "Sire, You are in a lot of pain right now even if you don't
            currently feel it. I need you to lay back down and try not to use
            too much of your energy."
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "About that. Say doctor, with some good rest and good liquor How
            long till he can get back out there."
          </p>
          <p className={styles.p}>
            The doctor turns to Gideon both men stare at each other. The awkward
            silence between them makes Matilda giggle
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "Fooling about with that last part of-course. None of that."
          </p>
          <p className={styles.p}>Gideon clears his throat</p>
          <p className={styles.p}>DOCTOR</p>
          <p className={styles.p}>"Well"</p>
          <p className={styles.p}>
            His stare lingers at Gideon as he finally turns back to the chart by
            Pragma's bed
          </p>
          <p className={styles.p}>DOCTOR</p>
          <p className={styles.p}>
            "He should be back to one hundred percent in about two to three
            weeks with proper rest and good food. I would advise even more but
            it looks like there is still work to do. For now, pay closer
            attention to your nutrition. That is one area that could help you
            recover faster."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "Never enough time doctor but I will do my best sir."
          </p>
          <p className={styles.p}>DOCTOR</p>
          <p className={styles.p}>the doctor taps him on the shoulder</p>
          <p className={styles.p}>
            "Make time. I will let you have some time with your people. Take it
            easy."
          </p>
          <p className={styles.p}>Pragma smiles</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"I'll try."</p>
          <p className={styles.p}>DOCTOR</p>
          <p className={styles.p}>
            "And you, no more brining me more of your men."
          </p>
          <p className={styles.p}>He turns to Gideon before he leaves</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "Not my fault they won’t stay out of here."
          </p>
          <p className={styles.p}>DOCTOR</p>
          <p className={styles.p}>"Whatever you say Gideon."</p>
          <p className={styles.p}>
            The doctor taps on Gideon’s shoulders. The door closes moments later
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "The girl. There was a girl. She real short-"
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "It’s alright son. She’s okay. She’s okay. She ran into us and we
            saw you a little while later."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"He hit her. Is she okay?"</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "She’s here too. Her ankle is a little torn up but she is going to
            be fine."
          </p>
          <p className={styles.p}>Pragma exhales</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Oh that's good. That's good."</p>
          <p className={styles.p}>
            Pragma reaches for his ring but realizes it’s gone
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "I hope that is still there where you left it."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Can we speak to her? Question her?"</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"She’s still out."</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "We will do that once she’s well and awake."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"I am okay to give a description."</p>
          <p className={styles.p}>Pragma gets up again</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "The kid was right, he keeps dancing and swaying. Could that be
            mental instability? He also carries an hammer. I reckon it’s the
            source of the blunt force trauma. The mask he has, it has an X
            across it. He also a ring. Oh, funny fella too. He was wearing a
            yellow vest and khakis but I don’t know if we can ID him with that.
            It could just be an outfit for that day."
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Calm down. You just woke up. How about you relax first. You don’t
            even know if your bottom half is in one piece."
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "That's right, let's get your blood flowing all over."
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "There’s something you got to do anyways. Your lady. She called
            while you were still unconscious."
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>
            "Calm down. You just woke up. How about you relax first. You don’t
            even know if your bottom half is in one piece."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"It might be drugs."</p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"What?"</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "The reason why he keeps dancing and shit."
          </p>
          <p className={styles.p}>
            Pragma looks at Gideon. Gideon scoffs as he turns to Matilda
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"Get him out of here."</p>
          <p className={styles.p}>
            Gideon steps out of the room. Gideon catches a glimpse of Ovlav
          </p>
          <p className={styles.p}>GIDEON</p>
          <p className={styles.p}>"You! Get your ass over here!"</p>
          <p className={styles.p}>The door closes</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Alright tough guy. Come on."</p>
          <p className={styles.p}>
            Matilda throws his arms over her shoulders. Pragma shuffles to his
            feet. They begin to walk
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"So you are okay?"</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Why are you asking me that? I’m the one helping your ass walk."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"You're okay."</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"And you are not."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"No I am not. No."</p>
          <p className={styles.p}>They both chuckles</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"You saw him."</p>
          <p className={styles.p}>
            There is silence. Pragma continue as they walk past the busy
            hallway’s tight counters
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "He wasn't that surprising. Something is funny about the guy. So
            normal and causal but he’s so strange. Scary strange."
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Jeez. Now I'm scared."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Jeez? You still talking funny?"</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"It's English. Gosh, go outside."</p>
          <p className={styles.p}>She rolls her eyes</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"It's over in there."</p>
          <p className={styles.pragmaLetsOut}>
            Pragma limps to a office behind the hospital
          </p>
        </b>
        <b className={styles.ovlavWeGotContainer}>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "Hey, it’s okay. It’s fine. She’ll be fine. You need to rest.
            There’s so much more work to do so you need rest up. Then you’ll go
            back to her."
          </p>
          <p className={styles.p}>They start to walk back to his room</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"I can't feel a thing. I love drugs."</p>
          <p className={styles.p}>Matilda blushes</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Nothing? Not even this?"</p>
          <p className={styles.p}>
            Matilda places pragma's hands on her posterior
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"M"</p>
          <p className={styles.p}>He whispers then clears his throat</p>
          <p className={styles.p}>"No, I don't."</p>
          <p className={styles.p}>
            Matilda reaches for his dick. Pragma grabs her by the wrist
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"What?"</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Easy. You’ll get it."</p>
          <p className={styles.p}>
            They continue towards pragma’s room Ovlav appears by the reception.
            Ovlav stretches out his arms he run to Pragma and grabs his face
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "I was so scared. How many bones did he break?"
          </p>
          <p className={styles.p}>
            Ovlav punches pragma all over. Pragma looks at Ovlav confused
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Who are you?"</p>
          <p className={styles.p}>
            Pragma has a confused look on his face. Ovlav stops. He looks at
            Matilda
          </p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Did he hit him, on the..."</p>
          <p className={styles.p}>Ovlav points to his head. she nods</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Several times."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Two ribs broke."</p>
          <p className={styles.p}>His face is back to normal</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"You were- Ya'll were fucking with me."</p>
          <p className={styles.p}>Ovlav starts to recedes his steps</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>
            "See you tomorrow fuck-face. Or you might need some time to rest."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Rest?"</p>
          <p className={styles.p}>Pragma's face is confused again</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Oh fuck off."</p>
          <p className={styles.p}>
            Pragma smiles. He continues for his room with Matilda
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"You took a gun?"</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Whaa-"</p>
          <p className={styles.p}>Matilda kicks him in his bandaged ribs</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>Pragma let’s out a shout</p>
          <p className={styles.p}>
            "Yes. God! Right there? You pick there to hit?"
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>
            "I asked you, You didn't fucking tell me. Why? You could lose your
            job."
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>
            "I don’t think it’s relevant information. Besides, I don’t plan on
            keeping it.
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Why?"</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"It don't look good on me."</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>Matilda laughs</p>
          <p className={styles.p}>Nothing looks good on you."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Except when you're riding."</p>
          <p className={styles.p}>
            Pragma whispers behind Matilda's ears. They are at the entrance of
            his room now. pragma is inside the room while Matilda is just on the
            edge. There is barely space between them
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Boy, stop."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Really?"</p>
          <p className={styles.p}>
            Pragma puts his hands down Matilda’s pants. She moans as she
            trembles in his hands. She looks back, making sure no one was
            watching
          </p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Close the blinds."</p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"Yes."</p>
          <p className={styles.p}>He starts to undo the blinds</p>
          <p className={styles.p}>MATILDA</p>
          <p className={styles.p}>"Only this once."</p>
          <p className={styles.p}>
            She's on the edge of the bed Matilda starts to undress. Pragma was
            about to completely shut the blinds. Ovlav walks by
          </p>
          <p className={styles.p}>PRAGMA</p>
          <p className={styles.p}>"I told you she likes it black."</p>
          <p className={styles.p}>He mouths to Ovlav</p>
          <p className={styles.p}>Ovlav makes out a figure in the room</p>
          <p className={styles.p}>OVLAV</p>
          <p className={styles.p}>"Motherfuc—"</p>
          <p className={styles.pragmaLetsOut}>
            Pragma blows him a kiss as the blind shuts
          </p>
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

export default PragmatheHuntThatTookMyB;
