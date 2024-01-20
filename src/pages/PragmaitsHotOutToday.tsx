import { FunctionComponent, useEffect } from "react";
import styles from "./PragmaitsHotOutToday.module.css";

const PragmaitsHotOutToday: FunctionComponent = () => {
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
    <div className={styles.pragmaitsHotOutToday} data-animate-on-scroll>
      <div className={styles.body}>
        <b className={styles.iAmInContainer}>
          <p className={styles.iAmIn}>
            I am in a field, I find myself under a tree. I see men, they mean me
            evil. The mean men are coming at me now with blood in their eyes,
            run, run, run, run move, move move.
          </p>
          <p className={styles.iAmIn}>pragma jerks awake.</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>“Oh,""Hell.”</p>
          <p className={styles.iAmIn}>
            he slumps back on his bed, his heart beating profusely.
          </p>
          <p className={styles.iAmIn}>
            "Still this same one? Where mean men mean me evil."
          </p>
          <p className={styles.iAmIn}>
            M once told me science says if you seem to remember your dream, you
            enjoy it.
          </p>
          <p className={styles.iAmIn}>“Fucking M and science.”</p>
          <p className={styles.iAmIn}>a long silence pass</p>
          <p className={styles.iAmIn}>
            "Oh that poor damsel. He slashed her neck, from ear to ear you see,
            her head barely on her neck."
          </p>
          <p className={styles.iAmIn}>pragma's eyes starts to swell</p>
          <p className={styles.iAmIn}>
            "Fucker smashed her head in so much we can’t even ID her. She looked
            just about Ruby’s age. Oh ruby.”
          </p>
          <p className={styles.iAmIn}>
            pragma gently rubs the ring on his left hand, he’s sobbing now.
          </p>
          <p className={styles.iAmIn}>
            "Under every one of them bodies, I see your photographs and
            paintings."
          </p>
          <p className={styles.iAmIn}>"I’m coming home my dear, I’m coming."</p>
          <p className={styles.iAmIn}>
            pragma kisses his ring as he slowly sits up on the bed of the hotel
            room.
          </p>
          <p className={styles.iAmIn}>
            “I’m scared when the sun comes up, it reminds me of the ghost I went
            to sleep running from.”
          </p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p className={styles.iAmIn}>
            see, pragma's sanity was something I had always questioned. the
            strange creature he is, which is why he is perfect. However after
            penelope, he flipped. he seemed fine at first. I thought.
          </p>
          <p className={styles.iAmIn}>
            "Now when we get in there, please let me do all the talking. I don’t
            trust your mouth yet"
          </p>
          <p className={styles.iAmIn}>the tall old man said.</p>
          <p className={styles.iAmIn}>I let out a laugh</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>“Fair enough”</p>
          <p className={styles.iAmIn}>pragma bellowed</p>
          <p className={styles.iAmIn}>"What about the first body?"</p>
          <p className={styles.iAmIn}>asks the man</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "Nothing too serious, blunt force trauma to the head."
          </p>
          <p className={styles.iAmIn}>"But,"</p>
          <p className={styles.iAmIn}>
            pragma announces with a finger in the air
          </p>
          <p className={styles.iAmIn}>"That was his first one."</p>
          <p className={styles.iAmIn}>
            "It got worse. The second body, blunt force to the head then thoat
            slashed."
          </p>
          <p className={styles.iAmIn}>"Third one?"</p>
          <p className={styles.iAmIn}>pragma pauses</p>
          <p className={styles.iAmIn}>“Rosa”</p>
          <p className={styles.iAmIn}>
            "Blunt force, throat slash, then penetration."
          </p>
          <p className={styles.iAmIn}>"Penetration?"</p>
          <p className={styles.iAmIn}>the sheriff looks back.</p>
          <p className={styles.iAmIn}>"You saying he raped her?"</p>
          <p className={styles.iAmIn}>pragma looks at the sheriff. he nods</p>
          <p className={styles.iAmIn}>
            "Worst of all, he did it after she died."
          </p>
          <p className={styles.iAmIn}>the sheriff clutches his face</p>
          <p className={styles.iAmIn}>matilda scoffs</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Enough pouting boys."</p>
          <p className={styles.iAmIn}>"Pragma, do you have a profile?"</p>
          <p className={styles.iAmIn}>he shakes his head</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Not yet. I still need more time."</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"You mean more bodies."</p>
          <p className={styles.iAmIn}>
            m whispers under her breath as she settles back into the backseat of
            the brown benz
          </p>
          <p className={styles.iAmIn}>"Yes."</p>
          <p className={styles.iAmIn}>
            He sighs briefly glancing at her reflection.
          </p>
          <p className={styles.iAmIn}>
            the car parks and the three officers make their way toward a couple
            of buildings nested together. the tall officer stops in front of the
            biggest one.
          </p>
          <p className={styles.iAmIn}>
            He looks back after briefly knocking on the door.
          </p>
          <p className={styles.iAmIn}>
            "You try to put on a nice face. And for goddness sake don’t go
            spewing any crazy things around this poor woman."
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"It's not crazy."</p>
          <p className={styles.iAmIn}>matilda cuts him off</p>
          <p className={styles.iAmIn}>he turns to pragma. he pauses.</p>
          <p className={styles.iAmIn}>"You just, do that."</p>
          <p className={styles.iAmIn}>
            they exchange glances. pragma holds up his thumb.
          </p>
          <p className={styles.iAmIn}>
            the officer turns back around as he hears footsteps approaching the
            door.
          </p>
          <p className={styles.iAmIn}>
            "Say, how come you don’t have a badge kid."
          </p>
          <p className={styles.iAmIn}>the officer asks</p>
          <p className={styles.iAmIn}>matilda scoffs as she replies</p>
          <p className={styles.iAmIn}>"Because he’s a nigger."</p>
          <p className={styles.iAmIn}>the door slightly opens</p>
          <p className={styles.iAmIn}>the three officers gaze up</p>
          <p className={styles.iAmIn}>
            "Good morning ma’am, we are from the FBI. We are here to ask you a
            couple of questions about Rosa."
          </p>
          <p className={styles.iAmIn}>
            the slim old man pulls out a wallet from the pocket of his suit to
            reveal his badge
          </p>
          <p className={styles.iAmIn}>
            "Oh that’s right, I already told ya’ll everything I know."
          </p>
          <p className={styles.iAmIn}>
            "We are from a different department ma'am."
          </p>
          <p className={styles.iAmIn}>the slim officer firmly replies</p>
          <p className={styles.iAmIn}>she pauses</p>
          <p className={styles.iAmIn}>"Come on in"</p>
          <p className={styles.iAmIn}>
            "I only got a little time till I leave for work."
          </p>
          <p className={styles.iAmIn}>'Where do you work?"</p>
          <p className={styles.iAmIn}>pragma asks</p>
          <p className={styles.iAmIn}>
            "At the post office. Do you boys want anything? She looks back after
            leading them into the living room. Can I get anyone water or tea?"
          </p>
          <p className={styles.iAmIn}>
            "Thank you kindly ma'am. I think we are all good."
          </p>
          <p className={styles.iAmIn}>
            the sheriff says as he looks around. nobody refutes
          </p>
          <p className={styles.iAmIn}>
            "So where were you the morning of the tragedy ma'am?"
          </p>
          <p className={styles.iAmIn}>
            pragma bursts out. the sheriff gives him a look. He immediately
            walks over to the kitchen where the woman is
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>
            "I’m terribly sorry for the manners of my partner here."
          </p>
          <p className={styles.iAmIn}>
            he points a finger to his chest then points backward at pragma
          </p>
          <p className={styles.iAmIn}>
            "Mrs. Wilson, I would like to officially offer my condolences on the
            loss of your daughter Rosa. I’m sorry for your loss. I would like to
            ask you a few questions about that morning and Rosa’s life in
            general and any information you have that can help us catch whoever
            committed this crime."
          </p>
          <p className={styles.iAmIn}>
            he pauses when he realizes she”s making tea
          </p>
          <p className={styles.iAmIn}>
            "You must have not heard me, ma'am, we are all good.  We said no to
            tea."
          </p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>
            "I heard y’all. I’m making it still, I make it for everyone that
            step into my home. When I’m done with my tea, y’all can go ahead
            with all the questions. Drink it don’t drink it, that’s up to you."
          </p>
          <p className={styles.iAmIn}>a smile creeps from Matilda's face</p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"Well you heard the lady."</p>
          <p className={styles.iAmIn}>
            He says as he moves back into the living room.
          </p>
          <p className={styles.iAmIn}>"I told you to shut the fuck up."</p>
          <p className={styles.iAmIn}>he glares at Pragma.</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "I just want to say, Mrs. Wilson, you are a strong woman."
          </p>
          <p className={styles.iAmIn}>
            Matilda mentions as Mrs. Wilson brings over the tea. She smiles
            towards Matilda
          </p>
          <p className={styles.iAmIn}>
            "Y’all can go ahead with the questions now."
          </p>
          <p className={styles.iAmIn}>she sits down and looks at her watch.</p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>
            "We can start with where you were on the morning of the crime."
          </p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>"I was at work."</p>
          <p className={styles.iAmIn}>mrs. wilson pauses, then continues</p>
          <p className={styles.iAmIn}>
            "The same place I have always been every Monday morning."
          </p>
          <p className={styles.iAmIn}>"Where do you work?"</p>
          <p className={styles.iAmIn}>pragma asks as he pulls out a note</p>
          <p className={styles.iAmIn}>"The papers."</p>
          <p className={styles.iAmIn}>
            the officer cuts pragma a look once more
          </p>
          <p className={styles.iAmIn}>"Ma’am,"</p>
          <p className={styles.iAmIn}>the sheriff says softly</p>
          <p className={styles.iAmIn}>"Do they know?"</p>
          <p className={styles.iAmIn}>
            Mrs. Wilson looks at the sheriff and then smiles wryly.
          </p>
          <p className={styles.iAmIn}>"They don't you know,"</p>
          <p className={styles.iAmIn}>
            she says with a smile still on her face
          </p>
          <p className={styles.iAmIn}>
            "All they’ll do is tell me to stay here."
          </p>
          <p className={styles.iAmIn}>
            "I just ain’t want it, No point. I’ll think too much about it."
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"But Mrs. Wilson,"</p>
          <p className={styles.iAmIn}>Mrs. Wilson cuts her off</p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>"Just not yet,"</p>
          <p className={styles.iAmIn}>she looks at matilda.</p>
          <p className={styles.iAmIn}>"I know I’ll break."</p>
          <p className={styles.iAmIn}>matilda nods at her</p>
          <p className={styles.iAmIn}>"Any other questions?"</p>
          <p className={styles.iAmIn}>she looks at her watch again</p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"Leaving us already?"</p>
          <p className={styles.iAmIn}>He asks</p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>
            "You folks are here working, I don't want to be late to my own."
          </p>
          <p className={styles.iAmIn}>the officer smiles then continues</p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>
            "Do you know any of Rosa’s close relations? Maybe a close friend at
            school or a co-worker down at the diner she used to work at?"
          </p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>"Not really,"</p>
          <p className={styles.iAmIn}>
            "My baby girl is, was just like me, always so quiet and she kept to
            herself. I seldom see her with her peers. When I do it’s probably
            something to do with school."
          </p>
          <p className={styles.iAmIn}>
            "How often have you seen her with those peers?"
          </p>
          <p className={styles.iAmIn}>pragma asks</p>
          <p className={styles.iAmIn}>"Maybe two or three times a week."</p>
          <p className={styles.iAmIn}>she replies</p>
          <p className={styles.iAmIn}>"Can you ID those students?"</p>
          <p className={styles.iAmIn}>the officer cuts in</p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>
            "We won’t need all that ma'am, we just want to know as much as we
            can about the events concerning Rosa leading to that day."
          </p>
          <p className={styles.iAmIn}>"The rest,"</p>
          <p className={styles.iAmIn}>
            the officer bellows as he turns to pragma
          </p>
          <p className={styles.iAmIn}>
            "We can figure out, that bit is our job."
          </p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>
            "Well like I was saying. There wasn’t anything odd about that day or
            the rest of the day before that. She works at the diner after
            school, so I’m used to her coming late. Just as she did all that
            week. Same time and all. Believe me, I seem nice but nun gets past
            me. Rosa knew that. She never tried anything funny under my roof.
            After I caught her trying to sneak this little boy in, she never did
            anything without letting me know, even boys and all."
          </p>
          <p className={styles.iAmIn}>There is silence. She continues.</p>
          <p className={styles.iAmIn}>
            "My Rosa is a good girl. She is smart and bright and precious. She
            ain’t in no body’s business. She ain’t deserve this. She ain’t do
            nothing to deserve this."
          </p>
          <p className={styles.iAmIn}>
            Matilda hurries to where mrs. wilson is
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "I’m sorry about all this. I can’t begin to imagine what you are
            going through. We apologize for bringing this up again. I don’t know
            ma’m, Um, can we see Rosa’s room? Maybe we can answer these
            questions ourselves."
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"Excellent idea"</p>
          <p className={styles.iAmIn}>Mrs. Wilson nods</p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>"It’s just upstairs"</p>
          <p className={styles.iAmIn}>
            Matilda helps her up as she wipes hot tears pouring down her cheeks
          </p>
          <p className={styles.iAmIn}>they follow behind</p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p className={styles.iAmIn}>
            We weren’t even fully upstairs when pragma asked that foolish
            question
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "How do you manage a house like this, a single mother like
            yourself?"
          </p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p className={styles.iAmIn}>
            That was when I knew it was one of those days
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"Watch it son."</p>
          <p className={styles.iAmIn}>Mrs. Wilson holds a stare at pragma</p>
          <p className={styles.iAmIn}>"You don’t have to answer that Ma’m."</p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>
            "It is alright detective, he ain’t ask nothing ain’t heard before.
            Although, it is a first from a brother."
          </p>
          <p className={styles.iAmIn}>pragma swallows</p>
          <p className={styles.iAmIn}>
            "I work two jobs, it used to be three."
          </p>
          <p className={styles.iAmIn}>
            she says as she grabs the wood-stained metal handle right on the
            left of the upstairs area
          </p>
          <p className={styles.iAmIn}>
            "I slowed down when I had the surgery done on my leg."
          </p>
          <p className={styles.iAmIn}>"Here it is"</p>
          <p className={styles.iAmIn}>
            she reaches for something on the wall as she opens the door. the
            light flickers open
          </p>
          <p className={styles.iAmIn}>
            "I haven’t been in here since that morning."
          </p>
          <p className={styles.iAmIn}>
            "I was the one that brought the laundry in, she had just washed it
            but she always forgets to leave them outside."
          </p>
          <p className={styles.iAmIn}>
            she pauses as her voice starts to choke
          </p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p className={styles.iAmIn}>
            I went reaching for her again, this time she brushed me off.
          </p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>
            "I’ll be outside. Please try not to take too much time, I’m needed
            this morning."
          </p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p className={styles.iAmIn}>
            I left with her, I couldn’t leave her alone in that state. it might
            be better to talk to her, woman to woman. Also to apologize on
            behalf of that fool,
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "I do apologize for the loose mouth that is that skinny one back
            there."
          </p>
          <p className={styles.iAmIn}>Mrs. Wilson smiles</p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>"You know, he reminds me of Rosa."</p>
          <p className={styles.iAmIn}>"I can’t put my hands on what it is"</p>
          <p className={styles.iAmIn}>
            mrs. Wilson turns to Matilda as her grin widens
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "Oh don't know Rosa ma'm, but I know for certain she ain't like that
            moron back there."
          </p>
          <p className={styles.iAmIn}>
            "You would be surprised. She was one of those who had too much brain
            and not enough heart."
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "If that’s the case you might be close Ma’m. See Pragma got too big
            a brain, you got that one right."
          </p>
          <p className={styles.iAmIn}>She hisses</p>
          <p className={styles.iAmIn}>"but heart, he got none of that."</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "Oh he does, he does, and it seem I don't need to tell you."
          </p>
          <p className={styles.iAmIn}>Matilda looks away flustered</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Oh, you are trouble ma'm."</p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p className={styles.iAmIn}>
            Mrs. Wilson was doing my job for me when we heard a soft thud in the
            room behind us. I'm so glad those ones were messing about in there.
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "I should head back in there before they break anything. Are you
            okay ma'am?"
          </p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p
            className={styles.iAmIn}
          >{`I asked her before I headed back in, but she didn't even answer this time. She just smiled at me then turned her head to her front with a smile on her face. `}</p>
          <p className={styles.iAmIn}>
            When I got in there, pragma was rubbing his head while the officer
            was bent down looking in a drawer
          </p>
          <p className={styles.iAmIn}>
            "That is not the first place I would go looking for a lead officer."
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"Just trying to be thorough."</p>
          <p className={styles.iAmIn}>the officer replies.</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Is that a joke?"</p>
          <p className={styles.iAmIn}>Matilda snifs</p>
          <p className={styles.iAmIn}>
            Pragma continues to rub the back of his head
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"What happened to you?"</p>
          <p className={styles.iAmIn}>Matilda points at pragma’s head</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"The bed"</p>
          <p className={styles.iAmIn}>he points down</p>
          <p className={styles.iAmIn}>"A good hiding spot."</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"For what?"</p>
          <p className={styles.iAmIn}>matilda asks</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Whatever she was keeping from mummy."</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"what doesn’t mummy know?"</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "She got into the volleyball team at school."
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"I’ll be back."</p>
          <p className={styles.iAmIn}>Matilda leaves the room</p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"Maybe mama already knows?"</p>
          <p className={styles.iAmIn}>
            the sheriff asks as soon as the door closes
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "I doubt that. Don’t think she approves."
          </p>
          <p className={styles.iAmIn}>pragma continues</p>
          <p className={styles.iAmIn}>
            "She’s a really smart girl, the mama too. Seeing she’s had surgery
            before, don’t gotta be sport related, she will subconsciously preach
            her fears about physical sports, Rosa being the woman she is, she
            got her own decisions to make. Whether mummy likes it or not. And
            I’m only trying out, I don’t know if I will get picked yet, no need
            to worry her yet."
          </p>
          <p className={styles.iAmIn}>
            pragma holds up a flyer from the cabinet he was just searching
          </p>
          <p className={styles.iAmIn}>the officer scoffs as the door opens</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            “So turns out she don't condone sports”
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"You see, I could have told you that."</p>
          <p className={styles.iAmIn}>
            Pragma looks at Matilda without moving his head
          </p>
          <p className={styles.iAmIn}>He holds up one finger</p>
          <p className={styles.iAmIn}>Matilda mutters under her tongue</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>“Motherfucker.”</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "Anyhow, she tried out without mum knowing."
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>
            "If mama don't know about this, there’s more she could not know."
          </p>
          <p className={styles.iAmIn}>
            the officer adds as he continues to search.
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Excellent point, good sir."</p>
          <p className={styles.iAmIn}>Matilda turns backs to pragma</p>
          <p className={styles.iAmIn}>"See, his brain is working."</p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p className={styles.iAmIn}>
            just as I uttered those words, I remember pragma saying something
            but I couldn’t tell you what it was, something just over to the
            right of pragma rendered me dumbfounded. I was surprised at first
            but it dawned on me a smile was beginning to creep up on my face
            that I immediately retracted. I couldn’t have him thinking I was
            looking at him.
          </p>
          <p className={styles.iAmIn}>pragma raises his eyebrows</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>“Not you dumbass”</p>
          <p className={styles.iAmIn}>
            Matilda goes over to the board behind pragma
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>“Well, What do we have here”</p>
          <p className={styles.iAmIn}>
            the officer sighs as he joins them at the board
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "A girl with a good social circle. Even though folks as smart as she
            ain't that popular round people. Especially within this age group.
            But look,"
          </p>
          <p className={styles.iAmIn}>pragma starts to point</p>
          <p className={styles.iAmIn}>
            "Pictures with school faculty. Pictures with friends. Even jocks.
            Everyone likes her. Smart, and good with people. Seem like a Prom
            Queen to me."
          </p>
          <p className={styles.iAmIn}>Matilda and Pragma lock eyes</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Finally"</p>
          <p className={styles.iAmIn}>Matilda whispers</p>
          <p className={styles.iAmIn}>A brief moment pass between them</p>
          <p className={styles.iAmIn}>
            Matilda continues investigating the pictures
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>“A fake?”</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>“Not really”</p>
          <p className={styles.iAmIn}>
            matilda starts to stare closer at the board
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>“Are you fucking smiling?”</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Shut up"</p>
          <p className={styles.iAmIn}>she plucks out a small picture</p>
          <p className={styles.iAmIn}>
            "You know, that thing in your chest isn’t only for pumping blood."
          </p>
          <p className={styles.iAmIn}>the officer behind smiles</p>
          <p className={styles.iAmIn}>
            Matilda plucks another one and hands it to the officer
          </p>
          <p className={styles.iAmIn}>
            she glances around a bit more then plucks a few more pictures off
            the board
          </p>
          <p className={styles.iAmIn}>"Now y'all look at these"</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"M just because"</p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"Shhh"</p>
          <p className={styles.iAmIn}>the officer hushes pragma</p>
          <p className={styles.iAmIn}>"Humor the lady."</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "What do you see when you look at them?"
          </p>
          <p className={styles.iAmIn}>{`she is now turned towards them. `}</p>
          <p className={styles.iAmIn}>{`There is silence. `}</p>
          <p className={styles.iAmIn}>
            {" "}
            The sheriff tilts his head. Her eyes widen
          </p>
          <p className={styles.iAmIn}>Pragma is still dumbfounded.</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "I can’t do this, I will take it to go."
          </p>
          <p className={styles.iAmIn}>Matilda storms out</p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"Full of life that one."</p>
          <p className={styles.iAmIn}>he comments in Pragma's direction</p>
          <p className={styles.iAmIn}>
            "But a good pair of detective y’all are.”
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>“that we are sir”</p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p className={styles.iAmIn}>
            Mrs. Wilson told me I could keep the pictures. I was elated. No
            reason to keep her waiting any longer. I thanked her at the door,
            she told me I was a good girl. Something about the way she told me
            scared me. Like she had known my deepest secrets and treasures.
            those I could never tell anyone, good, or bad. all of it. yet she
            looked at me with a smile on her face, you would think she hadn’t
            just lost a piece of her heart.
          </p>
          <p className={styles.iAmIn}>
            Mrs. Wilson grabs Matilda as they walks down the front stair of her
            big house.
          </p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>
            "You are a good girl, I want you to know that. A good girl."
          </p>
          <p className={styles.iAmIn}>Matilda's eyes glistened</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>“I was a good girl you say?”</p>
          <p className={styles.iAmIn}>MRS. WILSON</p>
          <p className={styles.iAmIn}>“The best.”</p>
          <p className={styles.iAmIn}>
            Mrs. Wilson starts to choke up as they make their way outside
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "Ma'm, I want you to know you are cool as fuck. Please find time to
            break."
          </p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p className={styles.iAmIn}>
            We barely put butt to bench at the station when we headed to the
            third body. We got there about a few minutes past twelve. For me,
            bodies do nothing to me. they don’t exist but that afternoon, what I
            saw. What that thing had done, I never want to see that again. A
            human didn’t do this.
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>
            "Slow down, You will destroy evidence!"
          </p>
          <p className={styles.iAmIn}>
            the officer yells at pragma as he paces towards a ditch some feet
            away
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Completely without sense."</p>
          <p className={styles.iAmIn}>
            Matilda murmurs looking closely down as she walks
          </p>
          <p className={styles.iAmIn}>
            Pragma is there now. He leans into the ditch. He turned around with
            with his fingers to his head after some time.
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>“Fuck”</p>
          <p className={styles.iAmIn}>MATILDA [NARRATOR]</p>
          <p className={styles.iAmIn}>
            When I got to the ditch Pragma was a few yard away. My stomach
            dropped. I fumbled for my camera as I reached into my cross bag. So
            embarrassing.
          </p>
          <p className={styles.iAmIn}>
            Hot tears starts to rolling down Matilda’s eyes as her camera
            flashes across the ditch
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>“get it together, get it together.”</p>
          <p className={styles.iAmIn}>She whispers</p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>“Oh God”</p>
          <p className={styles.iAmIn}>the sheriff spits out</p>
          <p className={styles.iAmIn}>
            “So what’s it looking like to you kid.”
          </p>
          <p className={styles.iAmIn}>{`He asks Pragma. `}</p>
          <p className={styles.iAmIn}>
            Pragma fully fits his gloves and then crotches down while he looks
            around. After a while he gets up
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "His method is getting firmer. Blunt force, just like Rosa. But not
            immature or untrained. Forceful sure, one could even say animalistic
            but still very controlled, directed rage. Pretty rare for someone
            like them."
          </p>
          <p className={styles.iAmIn}>
            Pragma's face starts to settle into what looks like a smile.
          </p>
          <p className={styles.iAmIn}>"You smart.”</p>
          <p className={styles.iAmIn}>Pragma announces.</p>
          <p className={styles.iAmIn}>
            {" "}
            "I know it don't look it but a human did this. Rosa was slashed with
            her neck almost broken. The other one was gagged with a covering on
            her face, her skull beaten in. We have our first strangulation. Not
            with his bare hands. Looks like a type of rope."
          </p>
          <p className={styles.iAmIn}>
            "Firstly he’s getting bolder, more comfortable. A reason could be in
            the slow perfection of his craft, another could be his relationship
            with these women. Strangulation is a sign of passion and intimacy.
            Secondly and most importantly, his killing is getting closer."
          </p>
          <p className={styles.iAmIn}>Pragma moves closer to the ditch.</p>
          <p className={styles.iAmIn}>
            "There is something emotional about her. It seems like she was
            murdered last night. I want to know that for sure."
          </p>
          <p className={styles.iAmIn}>He gestures in matilda’s direction.</p>
          <p className={styles.iAmIn}>Matilda holds up a thumb</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "If I’m right, He might kill again soon."
          </p>
          <p className={styles.iAmIn}>Pragma looks at the tall slim officer.</p>
          <p className={styles.iAmIn}>
            “We got to know who this is and how she’s connected to Rosa and
            Penelope so we can know how he’s picking them. We might also need to
            get ready for another one tonight."
          </p>
          <p className={styles.iAmIn}>
            Pragma looks back down as Matilda's camera flick.
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "Correction. We should get ready for another one tonight."
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "Layla Jasper 18 years old. She was in her last year of high school.
            Recently started working at the mall 3 weeks ago. Doctor confirmed
            she died between 12 to 36 hours ago."
          </p>
          <p className={styles.iAmIn}>
            Matilda slides something across the table of the hot large
            conference room in the station. Pragma looks at the pictures spread
            across him. He starts to slowly caress his ring.
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Maybe you can make sense now?"</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"You are Dense."</p>
          <p className={styles.iAmIn}>Matilda hisses.</p>
          <p className={styles.iAmIn}>"What does that remind you of?”</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"M, What is it?"</p>
          <p className={styles.iAmIn}>
            He asks as he slumps his arms back down.
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "Our girl really liked volleyball, and it was not just for the
            balls."
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Speak in sense."</p>
          <p className={styles.iAmIn}>pragma says with a frown on his face</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>
            "Ain't you supposed to be smarter? Look at that one, then the rest."
          </p>
          <p className={styles.iAmIn}>silence again,</p>
          <p className={styles.iAmIn}> then he smiles</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "More reason to go against mama’s plea "Not mad at her. She is
            gorgeous""
          </p>
          <p className={styles.iAmIn}>"You caught me off guard."</p>
          <p className={styles.iAmIn}>pragma mutters</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Alright, alright, Shut up."</p>
          <p className={styles.iAmIn}>Matilda holds up two fingers</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Two? When?</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Now."</p>
          <p className={styles.iAmIn}>
            she slides Pragma another piece of paper
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Do I have to spell this one out too?"</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "Oh fuck off. Don’t tell me you think it’s the murder weapon. That
            is a joke."
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"No!"</p>
          <p className={styles.iAmIn}>she barks back</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "No blood marks on it. It would have been pretty difficult to kill
            and then wipe the blood off. I reckon he’s one strong son of a bitch
            too if he can make cuts that deep. Which is why I think the material
            is some type of iron. You tried though"
          </p>
          <p className={styles.iAmIn}>
            Pragma holds up two fingers. Before he could look up, he’s drawn
            back down.
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"M, I think he’s just like you."</p>
          <p className={styles.iAmIn}>He frowns</p>
          <p className={styles.iAmIn}>
            "He wants attention. No, He’s prey to it. He is trying to control
            himself. But he wants to sign his name, mark his claim."
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"The rope telling you that?"</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"It will make sense someday"</p>
          <p className={styles.iAmIn}>Matilda flicks him off</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Time and place M"</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Right here. Right now."</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"This is bold."</p>
          <p className={styles.iAmIn}>
            pragma lifts the paper ignoring Matilda
          </p>
          <p className={styles.iAmIn}>
            "This one was special? But why, was it who she was? What she stood
            for You couldn’t control yourself, I know. No words this time, just
            your mark I see. So you’re not too emotional. You think. But this
            one, this one you let go. Now question is did you want to or you
            could not help yourself? She was just too pretty. There she was"
          </p>
          <p className={styles.iAmIn}>
            Pragma suddenly looks up from the floor of the conference room. A
            light flashes. Pragma walks over to the other end of the long table.
            Matilda is sitting on its edge with her legs closely knitted
            together.
          </p>
          <p className={styles.iAmIn}>
            she drops her camera on her lap with a frown on her face
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"If I may?"</p>
          <p className={styles.iAmIn}>pragma reaches for her neck</p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"You may"</p>
          <p className={styles.iAmIn}>
            Matilda looks up as her feet begin to sway
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "I’m strangling her you see, She’s thicker than the rest. So I used
            something stronger but she’s still fighting, I don’t like that."
          </p>
          <p className={styles.iAmIn}>"Why not?"</p>
          <p className={styles.iAmIn}>Matilda whispers</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "I’m neat. Efficient. I cut to the chase. But you are refuting. It’s
            there, in your eyes."
          </p>
          <p className={styles.iAmIn}>
            Pragma’s hands fully wrapped around her neck. He gets close to her
            face.
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"How dare you look at me?"</p>
          <p className={styles.iAmIn}>
            his hand finds a piece of paper somewhere on the table. Seconds
            later he softly hits Matilda on her head with the now crumpled
            paper.
          </p>
          <p className={styles.iAmIn}>
            "Don’t look at me. You don't deserve to."
          </p>
          <p className={styles.iAmIn}>He continues to softly hit her</p>
          <p className={styles.iAmIn}>"Die, die, die. Trash. You are trash."</p>
          <p className={styles.iAmIn}>
            Matilda is now clutching Pragma's wrist as her legs slowly start to
            give way
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"You should really fix that."</p>
          <p className={styles.iAmIn}>
            He lets go and starts to walk back to his end of the table
          </p>
          <p className={styles.iAmIn}>MATILDA</p>
          <p className={styles.iAmIn}>"Um, you’re welcome"</p>
          <p className={styles.iAmIn}>Matilda moans behind him</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "This one was sure messy. But you cleaned it?"
          </p>
          <p className={styles.iAmIn}>
            His right hand finds his head as he twirls his curls
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "No, I got it wrong. It can’t be! You brought it here. A dumper, but
            so clean."
          </p>
          <p className={styles.iAmIn}>
            that odd smile starts to seep into pragma's face
          </p>
          <p className={styles.iAmIn}>"You smart"</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            I don’t fully remember when M left. I heard the door shut. I’ll say
            two hours past now. I think I’m hungry. Well, that’s good. Rosa
            can’t eat.
          </p>
          <p className={styles.iAmIn}>"Now"</p>
          <p className={styles.iAmIn}>
            pragma reaches for a coupled paper pinned to the case board
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Why her? "You left words for her."</p>
          <p className={styles.iAmIn}>
            "Dumped her in the well on West Point. You don’t want to see her.
            She repulses you. Slashed her throat, it was fast, efficient, clean.
            You didn’t savor her. I know why, Rosa was pretty. You liked that
            one. This one too, but Penelope? This one made you angry, perhaps
            not as good looking. You don't want to see it, you are a little
            ashamed."
          </p>
          <p className={styles.iAmIn}>"but what do you mean by this?"</p>
          <p className={styles.iAmIn}>pragma hold up the two pieces of paper</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            “When is a body not a body, when is a body not a body, when is a
            body not a body.”
          </p>
          <p className={styles.iAmIn}>
            The large room pragma was in slowly but loudly crept open. The slim
            tall officer appears
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"You look dead son"</p>
          <p className={styles.iAmIn}>Pragma manages a smile</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Thank God I only look it"</p>
          <p className={styles.iAmIn}>the officer chuckles</p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"So you got heart after all."</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>“Only when I look not dead.”</p>
          <p className={styles.iAmIn}>Pragma chuckles back</p>
          <p className={styles.iAmIn}>"Say, what’s your Poison"</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Whiskey"</p>
          <p className={styles.iAmIn}>
            the sheriff peers outside for a brief second pops his head back
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"Be right back."</p>
          <p className={styles.iAmIn}>
            the loud door opens after a while. The sheriff comes inside the
            conference room with a bottle and glasses.
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>“Let’s get something in you.”</p>
          <p className={styles.iAmIn}>Pragma gazes up. He chuckles.</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"On the job?"</p>
          <p className={styles.iAmIn}>"What Job."</p>
          <p className={styles.iAmIn}>They both share a long exhale</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Only me?"</p>
          <p className={styles.iAmIn}>
            Pragma asks as the officer pours. The officer grins widely showing
            his full pair of teeth
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"I see"</p>
          <p className={styles.iAmIn}>
            he smiles as he takes a drink. He clears his throat bitterly
          </p>
          <p className={styles.iAmIn}>
            "forget how awful it is, Haven’t had one since the days in
            Washington."
          </p>
          <p className={styles.iAmIn}>OFFICER</p>
          <p className={styles.iAmIn}>"Finally got a tag I see."</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Ah, yes."</p>
          <p className={styles.iAmIn}>"Pragma. Pragma Alderman."</p>
          <p className={styles.iAmIn}>GIDEON</p>
          <p className={styles.iAmIn}>"Gideon West"</p>
          <p className={styles.iAmIn}>
            He reveals his tag from the inside of his suit
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"We finally meet"</p>
          <p className={styles.iAmIn}>Both officers chuckles</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "Say detective, How do you deal with the demons?"
          </p>
          <p className={styles.iAmIn}>GIDEON</p>
          <p className={styles.iAmIn}>"Good question"</p>
          <p className={styles.iAmIn}>Gideon lets out a sigh</p>
          <p className={styles.iAmIn}>
            "Why do you think I got this under my desk?"
          </p>
          <p className={styles.iAmIn}>Gideon reaches for the bottle</p>
          <p className={styles.iAmIn}>GIDEON</p>
          <p className={styles.iAmIn}>
            "I’ll tell you one thing, they follow you everywhere. Has the
            nightmare started?"
          </p>
          <p className={styles.iAmIn}>Pragma drops his head</p>
          <p className={styles.iAmIn}>Gideon pours for both of them</p>
          <p className={styles.iAmIn}>"Look at me son, two things"</p>
          <p className={styles.iAmIn}>Gideon holds up two fingers</p>
          <p className={styles.iAmIn}>
            "You do the best you absolutely could and you leave it all out here.
            Using every muscle in that head of yours hoping you best that sick
            fuck out there. You keep going and going because if you don’t, the
            ghosts follow. That’s how you sleep at night. Also with this."
          </p>
          <p className={styles.iAmIn}>
            Gideon passes Pragma a refilled glass. Pragma lets out a laugh
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"I reckon I’m all tipsy already"</p>
          <p className={styles.iAmIn}>
            he swallows bitterly then turns back down
          </p>
          <p className={styles.iAmIn}>
            "He left words at West Point but not here"
          </p>
          <p className={styles.iAmIn}>
            Gideon motions to Pragma for the paper. He holds it up to the light
          </p>
          <p className={styles.iAmIn}>GIDEON</p>
          <p className={styles.iAmIn}>
            "The writing is wacky. Contrast to his intelligent behavior all this
            while. It was rushed?"
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "I concur. Even with the body. There is something about this one
            that feels rushed."
          </p>
          <p className={styles.iAmIn}>Gideon interrupts</p>
          <p className={styles.iAmIn}>GIDEON</p>
          <p className={styles.iAmIn}>“Emotional”</p>
          <p className={styles.iAmIn}>
            "Our man is losing control. Well, this one might have just been too
            much. That’s why you almost lost it."
          </p>
          <p className={styles.iAmIn}>Pragma beams. visibly intoxicated</p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"You think well."</p>
          <p className={styles.iAmIn}>GIDEON</p>
          <p className={styles.iAmIn}>“oh me, I try”</p>
          <p className={styles.iAmIn}>Gideon laughs back at Pragma</p>
          <p className={styles.iAmIn}>GIDEON</p>
          <p className={styles.iAmIn}>"I think I’ll lay down a bit"</p>
          <p className={styles.iAmIn}>GIDEON</p>
          <p className={styles.iAmIn}>
            "You do that son, I reckon that should put you to sleep. See, your
            woman told me how you was when she was leaving. She said you was
            gonna keep at it, no sleep, no food and all. We can't have that. You
            got to do it all over again tomorrow. You see, that’s why we got
            this."
          </p>
          <p className={styles.iAmIn}>
            He clings the small glass bottles together.
          </p>
          <p className={styles.iAmIn}>GIDEON</p>
          <p className={styles.iAmIn}>
            "It rocks you to sleep. Especially past the demons."
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>"Gideon"</p>
          <p className={styles.iAmIn}>
            A slumped over Pragma manages to hold up a finger in objection.
          </p>
          <p className={styles.iAmIn}>PRAGMA</p>
          <p className={styles.iAmIn}>
            "That woman is many things, mine she’s not."
          </p>
          <p
            className={styles.iAmIn}
          >{`Gideon laughs, his wide set of teeth protruding. `}</p>
          <p className={styles.iAmIn}>
            A few minutes pass in the conference room of the the now almost
            empty station.
          </p>
          <p className={styles.iAmIn}>GIDEON</p>
          <p className={styles.iAmIn}>
            "You really are something son. You were right, but not tonight. Get
            some rest. There is plenty of evil when you wake up."
          </p>
          <p className={styles.theDoorTo}>
            The door to the large conference room creaks loudly as it shuts
            behind him
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

export default PragmaitsHotOutToday;
