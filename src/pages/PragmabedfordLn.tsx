import { FunctionComponent, useEffect } from "react";
import styles from "./PragmabedfordLn.module.css";

const PragmabedfordLn: FunctionComponent = () => {
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
    <div className={styles.pragmabedfordLn} data-animate-on-scroll>
      <div className={styles.body}>
        <b className={styles.atlantaGeorgiaIContainer}>
          <p className={styles.atlantaGeorgia}>ATLANTA, GEORGIA.</p>
          <p className={styles.atlantaGeorgia}>
            I don’t know why they won’t get more help. If we could just get a
            couple more hands on this, I know mere kids with brain bigger than
            those sheriffs combined. But it’s an evil world we live in. The ones
            with the brains do jobs meant for the brawn. Wasting away good
            brain. Like Rosa, she took my order down without putting pen to
            paper and even did the math in her head. I reckon she could help
            solve one or two of these cases. Everything served by her hand is so
            delicious even though I don’t like the food. I could go back today,
            After Bedford.
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma sits uprights from the bed he fell asleep in. He exhales
            uncomfortably as he reaches for his watch
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "Oh Bedford" It’s the third one now, well that we know of. But
            Bedford is a different ground, not even close to the first two ones.
            We could have two killers? The method of killing are very similar, I
            haven’t seen the body in Bedford but M told me it’s the same, blunt
            force trauma to the skull and throat slash, Ear to ear. but they are
            far apart enough to be one person. What kind of women are they, I
            need to see the Bedford body. Those poor damsels. What fucks me up
            the most? This bastard is a brother. The truth everyone else is
            perhaps too bewildered to utter. I for one am relieved though they
            call me a mad man, if this be a white man, we will eternally be
            bounded… worse identified with him. And God help us who live on pain
            because he will be our god all over again. So I rejoice we hurt
            ourselves. At least it is we who hurt us. And It is we who will lick
            our wounds when pain is gone.
          </p>
          <p className={styles.atlantaGeorgia}>The phone rings</p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"My dear Constantine"</p>
          <p className={styles.atlantaGeorgia}>
            He mutters aloud. Pragma picks up the phone by his bed
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA [ON THE PHONE]</p>
          <p className={styles.atlantaGeorgia}>"Babushka"</p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>
            "Don’t you call me that, you have yet to tell me what it means."
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "It means whatever you want it to mean my dear."
          </p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>
            "Um I heard they got new meaning for it. The paper gave new meaning
            this morning, It says I’ll see you tonight, no going near dead
            bodies. Why go near dead ones? When you got a living one right here”
          </p>
          <p className={styles.atlantaGeorgia}>
            Constantine's voice starts to raise with concern
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "Well, hold on now. What papers you reading with meaning like
            that?if that is “babushka” “Babushka” “babushka”
          </p>
          <p className={styles.atlantaGeorgia}>Constantine giggles</p>
          <p className={styles.atlantaGeorgia}>"Now Constantine,"</p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>"Yes"</p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "I’m putting this watch in my pocket, this suit on my back, hat on
            my head and walking towards these blue bodies so I don’t even gotta
            walk towards yours you hear me? I’m walking towards the blue ones,
            and yours is the bright one, the sunny and warm one, you hear me,
            Constantine, that’s how it’s got to be okay?"
          </p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>"You know what Pragma,"</p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"And what is that my dear,"</p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>"I love you."</p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "Ahh, look at that, she loves me back."
          </p>
          <p className={styles.atlantaGeorgia}>
            A smile creeps on pragma's face
          </p>
          <p className={styles.atlantaGeorgia}>
            "I leave now for Bedford, To see a body. We think it’s the second
            one."
          </p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>
            "You got to see this one too?"
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "Yes I do. I got to see what type of women they are so I know why
            he’s going after these certain groups. It should open every kind of
            door into who he might be, I got to see this one Constantine."
          </p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>
            "Well you listen to me then, Under every of them white bags, you see
            my photographs and paintings"
          </p>
          <p className={styles.atlantaGeorgia}>
            There is silence. Pragma exhales heavily
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "Under every of them white bags, I see your photographs and
            paintings."
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma is walking hurriedly, Matilda trails behind
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>"Walk slower"</p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "Just walk faster. If I walk slower we get there slower. If you walk
            faster we get there faster. Our desired goal is to get there in the
            most efficient means, surely the right decision is clear. Or has
            common sense missed you?"
          </p>
          <p className={styles.atlantaGeorgia}>
            Matilda responds in a low but seductive tone.
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>"Yes, I'll walk faster."</p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "You really need to fix that you know."
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "Shut up. Hold my coat and let me walk in front."
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "That’s all it took for the boys in Budapest falling head over heels
            for the great- whatever the fuck your name is now."
          </p>
          <p className={styles.atlantaGeorgia}>
            Matilda sternly cuts pragma off
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "You are dense, It is Paris. Oh, you can still call me Matilde, but
            I prefer Matilda. It's the modern way. So, you’re worried about the
            men I fucked? Aw you’re still in love with me?"
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "I don’t know what it is I feel when I think I about you M, believe
            me, It still confuses me, but it’s far from love."
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "I sang, drank, fucked, sang, drank. It was such a picture Pragma. I
            got photographs to show you. On my camera. See, I figure I get one
            and save some life from Paris. Also been meaning to give photography
            a try. Let’s see how hard it is shall we."
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma walks faster, Matilda hurries to stay in front
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "We could be dealing with a man who has somewhat of an high social
            status."
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>"Why do you say that?"</p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "How else is he able to subdue young women at night?"
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "That could just be mere physical dominance."
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "You fool, mere physicality given the time and place will actually
            do him doom. He then stands out. But just picture this here, I am an
            unsuspectingly built man, somewhat fashionable with good sense that
            is interesting enough to spark a conversation about my high-class
            job, you don’t mind going on and on even though it’s in the dark and
            I am a stranger because now you can tell I'm a learned man. What
            harm could I ever do you? So you follow me down the dark alleyway of
            the diner."
          </p>
          <p className={styles.atlantaGeorgia}>Matilda suddenly gasps</p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>"I'm so wet right now."</p>
          <p className={styles.atlantaGeorgia}>Pragma stops</p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>"Feel it."</p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "When will you stop being an absolute disgrace to your class M?"
          </p>
          <p className={styles.atlantaGeorgia}>
            Matilda glares up at Pragma. She sticks up her middle finger as
            pragma continues walking.
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "You know the body Pragma, some of the officers say they recognize
            her"
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "The officers? Those racist bastards can’t tell no difference
            between different black girls even if they tried. They all look the
            same to y’all."
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "Shut the fuck up. They say they recognize her. I hope you don’t
            shatter. I know you it’s around that time again."
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma grabs Matilda by her arms and forcefully turns her towards
            him
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "How the fuck do you know that"
          </p>
          <p className={styles.atlantaGeorgia}>Matilda's glare shakes</p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "It’s not uncommon knowledge. Plus you got that look on your face
            again."
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "Well, it’s none of your business."
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "You know, just because we do not fuck anymore does not mean you
            can’t-"
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma breaks into an hysterical laughter
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "Don't talk like that M, you're scaring me."
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma now taken with laughter reaches into his pocket
          </p>
          <p className={styles.atlantaGeorgia}>
            "Oh what the fuck M, what the fuck, what the fuck. The manners of
            France you brought back tastes sour on you."
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma checks the time on his watch
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "Oh fuck you. I brought back Jeans and Sushi."
          </p>
          <p className={styles.atlantaGeorgia}>
            Matilda sharply turns back showing Pragma her backside
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "What's Jeans? This you got on your leg? Looks too heavy to be
            wearing. Makes your ass look fat."
          </p>
          <p className={styles.atlantaGeorgia}>Matilda laughs</p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "They will change the world Pragma. Jeans and Sushi."
          </p>
          <p className={styles.atlantaGeorgia}>THE NEXT DAY</p>
          <p className={styles.atlantaGeorgia}>
            It's a warm afternoon outside the Atlanta police department.
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma is standing in front of a newly constructed conference room
            that is slowly filling up with officers.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"Listen here you folks"</p>
          <p className={styles.atlantaGeorgia}>
            One of the men sitting in the back blurt out immediately
          </p>
          <p className={styles.atlantaGeorgia}>"Speak up kid"</p>
          <p className={styles.atlantaGeorgia}>Pragma glares at him sharply</p>
          <p className={styles.atlantaGeorgia}>"Listen here Crackers"</p>
          <p className={styles.atlantaGeorgia}>
            Pragma repeats immediately, in a slightly hushed tone
          </p>
          <p className={styles.atlantaGeorgia}>"What the fuck did you say?"</p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "Ahhh, heard me this time looks like."
          </p>
          <p className={styles.atlantaGeorgia}>Pragma softly smiles.</p>
          <p className={styles.atlantaGeorgia}>"What did you say Nigg—"</p>
          <p className={styles.atlantaGeorgia}>
            The man’s voice now getting louder.
          </p>
          <p className={styles.atlantaGeorgia}>"Woah, hold on there!"</p>
          <p className={styles.atlantaGeorgia}>
            A slim tall figure in front of the conference room immediately
            stands up, sharply interjecting the man in the back of the room.
          </p>
          <p className={styles.atlantaGeorgia}>
            "Not another word out your loose ass mouth."
          </p>
          <p className={styles.atlantaGeorgia}>He’s turned to the front now.</p>
          <p className={styles.atlantaGeorgia}>
            "And you, these men here listening to what you gots to say so do not
            be a smart ass, the real evil to catch is out. there."
          </p>
          <p className={styles.atlantaGeorgia}>He sharply points outside.</p>
          <p className={styles.atlantaGeorgia}>
            Pragma quickly but slowly nods towards at the tall man in front of
            the room who is now staring straight ahead. Ignoring Pragma.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"Ahem."</p>
          <p className={styles.atlantaGeorgia}>
            "As you fine folks are all aware, a new victim was unearthed
            yesterday. Body of twenty-two year old Rosa Trice. Rosa was a
            waitress at the diner just a few blocks left of Bedford. The one we
            was just at."
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma pauses as he puts his right hand on his hip and the other on
            his forehead.
          </p>
          <p className={styles.atlantaGeorgia}>
            "What? couple days ago?. Some of y’all may know her. She served that
            evening."
          </p>
          <p className={styles.atlantaGeorgia}>
            Some of the officers drop their head and mutter quietly.
          </p>
          <p className={styles.atlantaGeorgia}>"Which one again?"</p>
          <p className={styles.atlantaGeorgia}>
            The man in the back mutters while he looks at Pragma.
          </p>
          <p className={styles.atlantaGeorgia}>
            A few of the officers turn around and look at him with a mix of
            embarrassment and shame.
          </p>
          <p className={styles.atlantaGeorgia}>"What, they look the same,"</p>
          <p className={styles.atlantaGeorgia}>He says laughingly.</p>
          <p className={styles.atlantaGeorgia}>
            "It's not my blame they got on the same clothes and hair, and face,
            and nose. No, the nose is always different"
          </p>
          <p className={styles.atlantaGeorgia}>
            It's the man in front of the room again, this time he's speaking
            with anger.
          </p>
          <p className={styles.atlantaGeorgia}>"Up, now."</p>
          <p className={styles.atlantaGeorgia}>
            "What? Just giving the kid some valid information for the
            investigation"
          </p>
          <p className={styles.atlantaGeorgia}>
            "Get the fuck out of my fucking conference room Ovlav. You are a
            fucking stupid piece of shit. Out. Now."
          </p>
          <p className={styles.atlantaGeorgia}>
            There is movement in the back of the room moments later.
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma clears his throat as the door to the conference room close.
          </p>
          <p className={styles.atlantaGeorgia}>
            "So far he has now dropped three poor damsels, it pleases me to tell
            you all that we have a serial killer on our hands."
          </p>
          <p className={styles.atlantaGeorgia}>"What that is?"</p>
          <p className={styles.atlantaGeorgia}>
            A short officer sitting close across from Pragma asks.
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma rests his hand on his forehead. He continues on.
          </p>
          <p className={styles.atlantaGeorgia}>
            "A term for a killer responsible for two or more series of murders.
            Do you like the name?"
          </p>
          <p className={styles.atlantaGeorgia}>"Umm. No."</p>
          <p className={styles.atlantaGeorgia}>
            The officer hisses. His cheeks visibly red.
          </p>
          <p className={styles.atlantaGeorgia}>
            "So what is this serial killer business?"
          </p>
          <p className={styles.atlantaGeorgia}>
            The tall slim man sharply interjects.
          </p>
          <p className={styles.atlantaGeorgia}>
            "Why is he special than that nut in the cell right down there?"
          </p>
          <p className={styles.atlantaGeorgia}>
            He points past Pragma with his eyebrows.
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma’s eyes light up. He turns towards the man who now has his
            hands folded over his crossed legs.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "It is not because he’s too strong and his rage won this time while
            beating his wife. No, no. Or because he got drunk on his loaded
            rifle he got on his poor waist too big for him anyways. Oh God no."
          </p>
          <p className={styles.atlantaGeorgia}>
            "See officer, what worries me is he’s a learned man. One that knows
            the way of the land. He’s trained in a craft that does good, a man
            that’s been around, cultured, primed. What worries my heart at night
            officer is this man doesn’t have to be big or have rage too big for
            him. You know, I don’t think he has either."
          </p>
          <p className={styles.atlantaGeorgia}>
            One of pragma’s left finger points out in objection then follows
            identically with his right.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "But officer, I fear when I think about this man because I know he
            has more brain than all of us here combined. Now ain’t mean to talk
            crudely to none of y’all and y’all’s brain but he got all of us beat
            here. So you ask me why he’s so special than the nut in the cell
            right over from us? I’ll tell you why,"
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma looks towards where the tall slim man was pointing to earlier
            as he puts his left hand on his hip and then reaches into his
            pocket. He grabs his watch.
          </p>
          <p className={styles.atlantaGeorgia}>
            "He’s slashing a young woman as we speak. She’s nothing around
            sixteen to twenty-five. She works a job that’s late at night. Poor
            girl was tired, just wanted to go home and rest up, but that poor
            man just looked lost and sad. Spoke to me nicely too. What kind of
            lady am I if I don’t indulge him."
          </p>
          <p className={styles.atlantaGeorgia}>
            "But what fucks me up the most you see,"
          </p>
          <p className={styles.atlantaGeorgia}>
            "Men like him the ones those poor damsels can’t help but fall prey
            to. He knows them, so he just pokes and pushes them till he finds it
            fun no longer. Then he throws them away. For us to find."
          </p>
          <p className={styles.atlantaGeorgia}>"See hold on now,"</p>
          <p className={styles.atlantaGeorgia}>
            The short man in the hat forcefully grunts
          </p>
          <p className={styles.atlantaGeorgia}>
            "If he so smart why you here, begging us to help you?"
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma chuckles without looking at the man in the chair on his
            right.
          </p>
          <p className={styles.atlantaGeorgia}>
            "Wait till you find out they don built a whole department to catch
            crackers like him."
          </p>
          <p className={styles.atlantaGeorgia}>
            The double door to the large conference room suddenly springs wide
            open
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>"Pragma, it's for you."</p>
          <p className={styles.atlantaGeorgia}>
            Matilda puts her hand close to her ear
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"It can wait."</p>
          <p className={styles.atlantaGeorgia}>
            Matilda drops her shoulders, her hand follows as she curses under
            her breath
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>"It’s Constantine."</p>
          <p className={styles.atlantaGeorgia}>
            Pragma rearranges his suit. He turns to the tall slim man on his
            left.
          </p>
          <p className={styles.atlantaGeorgia}>
            “Pardon me, I have to take this.”
          </p>
          <p className={styles.atlantaGeorgia}>OFFICER</p>
          <p className={styles.atlantaGeorgia}>“Go on son.”</p>
          <p className={styles.atlantaGeorgia}>He nods.</p>
          <p className={styles.atlantaGeorgia}>
            Pragma steps out of the room with Matilda.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "So did she say what’s so troubling she could not wait till after?"
          </p>
          <p className={styles.atlantaGeorgia}>
            Matilda's eyes widen surprisingly.
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "I don’t fucking know! That’s your wife.”
          </p>
          <p className={styles.atlantaGeorgia}>Matilda says coldly.</p>
          <p className={styles.atlantaGeorgia}>
            “Ol' lady just says she wants to talk to you."
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>"Pragma"</p>
          <p className={styles.atlantaGeorgia}>
            Matilda softly says as she touches Pragma on his arms stopping him
            in his tracks.
          </p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "She sounds sick. What’s wrong."
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma looks down and grabs Matilda by her arm.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"Matilda"</p>
          <p className={styles.atlantaGeorgia}>
            Pragma responds softly, with worry in his tone.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "Will you please shut the fuck up."
          </p>
          <p className={styles.atlantaGeorgia}>Matilda jerks away</p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "It’s simple, a retard. Still has bitter and mean as back then. The
            phone is down the hall by the cell."
          </p>
          <p className={styles.atlantaGeorgia}>Pragma nods</p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "You said cracker in there before I opened the door, Do you think he
            is white?"
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma chuckles as he closes the door behind Matilda.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"No."</p>
          <p className={styles.atlantaGeorgia}>PRAGMA (on the phone)</p>
          <p className={styles.atlantaGeorgia}>
            "Oh, I was so shocked Constantine. I went to Bedford place
            yesterday. It was Horror. But I'm holding on Constantine, I'm
            holding on.”
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma stutters as he grabs the phone tighter.
          </p>
          <p className={styles.atlantaGeorgia}>
            "So what is it, Babushka? You know, this time of the day ain't
            really a good time for me to talk to my dear."
          </p>
          <p className={styles.atlantaGeorgia}>
            Constantine who has been silent slowly starts sobbing.
          </p>
          <p className={styles.atlantaGeorgia}>"Pragma."</p>
          <p className={styles.atlantaGeorgia}>
            "Hold on now, is that tears I hear, my dear what’s the matter?"
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma says ever so softly as he subtly checks his watch.
          </p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>"I went there today."</p>
          <p className={styles.atlantaGeorgia}>"Where?"</p>
          <p className={styles.atlantaGeorgia}>
            Pragma's arms drop remembering where Constantine went.
          </p>
          <p className={styles.atlantaGeorgia}>
            "I told you not to go there alone, Dear. Why? Why did you go without
            me?"
          </p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>"Dear...dear...dear..."</p>
          <p className={styles.atlantaGeorgia}>Constantine trails off.</p>
          <p className={styles.atlantaGeorgia}>
            "All the sweet words, except you never here. Never fucking here when
            I need you. But the blue bodies got your attention huh?”
          </p>
          <p className={styles.atlantaGeorgia}>
            Constantine's voice breaks as she asks. after a few moments of
            silence on the line, Constantine continues bitterly.
          </p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>
            "It's even no use, I forget who I'm talking to. The fool over there
            just nodding and checking his watch."
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma swallows bitterly. He slowly responds
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"My dear, can we- Ahem."</p>
          <p className={styles.atlantaGeorgia}>He clears his throat.</p>
          <p className={styles.atlantaGeorgia}>
            "I reckon we talk about this later."
          </p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>
            "Oh fuck you nigga. Why? because M said so? Working for crackers
            enough as is, now they got the poor nigger listening to a white
            bitch."
          </p>
          <p className={styles.atlantaGeorgia}>
            With his left hand on his forehead and pain in his tone, he
            responds.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>
            "I'm almost home my dear, I'm almost home. Just hold on for me. Do
            that for me?"
          </p>
          <p className={styles.atlantaGeorgia}>Constantine softly responds.</p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>"Yes, I will."</p>
          <p className={styles.atlantaGeorgia}>
            Her sobbing growing loud now. At the same time, the door to the
            hallway opens again. He looks up.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"I got to go now, my dear."</p>
          <p className={styles.atlantaGeorgia}>
            Matilda yells from the hallway without fully walking to Pragma.
          </p>
          <p className={styles.atlantaGeorgia}>
            "Pragma, the sheriffs found something. We need to leave."
          </p>
          <p className={styles.atlantaGeorgia}>
            Constantine curses on the line.
          </p>
          <p className={styles.atlantaGeorgia}>CONSTANTINE</p>
          <p className={styles.atlantaGeorgia}>"There go your boss."</p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>"Now."</p>
          <p className={styles.atlantaGeorgia}>
            Constantine hisses. The line cuts.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"My ears work, M."</p>
          <p className={styles.atlantaGeorgia}>MATILDA</p>
          <p className={styles.atlantaGeorgia}>
            "That's great, I need your legs to work too because we've got to
            move. Now."
          </p>
          <p className={styles.atlantaGeorgia}>
            Matilda responds and closes the door.
          </p>
          <p className={styles.atlantaGeorgia}>
            Some seconds of silence pass then a raspy voice inside the cell
            across the phone stall begins to mutter something under his breath.
          </p>
          <p className={styles.atlantaGeorgia}>pragma looks across.</p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"What did you say?"</p>
          <p className={styles.atlantaGeorgia}>
            The man's voice is still raspy as he steps closer to the bars of the
            cell. he whispers,
          </p>
          <p className={styles.atlantaGeorgia}>RASPY VOICE</p>
          <p className={styles.atlantaGeorgia}>
            "Looks to me like you have some lady issues on your hands."
          </p>
          <p className={styles.atlantaGeorgia}>
            Pragma looks at the man. He smiles as he looks away and finally
            hangs the phone back.
          </p>
          <p className={styles.atlantaGeorgia}>PRAGMA</p>
          <p className={styles.atlantaGeorgia}>"You are a funny man."</p>
          <p className={styles.hisSmileQuickly}>
            His smile quickly fades as he makes for the door.
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

export default PragmabedfordLn;
