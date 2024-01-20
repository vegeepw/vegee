import { FunctionComponent, useEffect } from "react";
import styles from "./Tie.module.css";

const Tie: FunctionComponent = () => {
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
    <div className={styles.tie} data-animate-on-scroll>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>taking it easy</b>
        </div>
        <b className={styles.iveCriedOnContainer}>
          <p className={styles.iveCriedOn}>I’ve cried on these pages</p>
          <p className={styles.iveCriedOn}>I’ve Wept</p>
          <p className={styles.iveCriedOn}>
            I’ve prayed for this pages on this pages
          </p>
          <p className={styles.iveCriedOn}>
            I’ve gone places for the sake of these pages.
          </p>
          <p className={styles.iveCriedOn}>Places I will never tell anyone.</p>
          <p className={styles.iveCriedOn}>I’ve made sacrifices.</p>
          <p className={styles.iveCriedOn}>
            I’ve given up so much For these same words you’re reading.
          </p>
          <p className={styles.iveCriedOn}>
            But I’m learning to take it easy though,
          </p>
          <p className={styles.iveCriedOn}>Breathing in, Breathing out</p>
          <p className={styles.iveCriedOn}>Just taking it a day at a time</p>
          <p className={styles.iveCriedOn}>One step at a time.</p>
          <p className={styles.imTakingIt}>I’m taking it Easy</p>
        </b>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>fast nights</b>
        </div>
        <b className={styles.iveCriedOnContainer}>
          <p className={styles.iveCriedOn}>“Let’s go to Paris,</p>
          <p className={styles.iveCriedOn}>
            Kiss under the Eiffel like they all do
          </p>
          <p className={styles.iveCriedOn}>
            Let’s get kicked out of a restaurant cuz we were laughing too loud
          </p>
          <p className={styles.iveCriedOn}>Let’s go get Ice cream next</p>
          <p className={styles.iveCriedOn}>
            I’ll leave traces of my mint chocolate all over your lips.
          </p>
          <p className={styles.iveCriedOn}>Let’s walk along the River</p>
          <p className={styles.iveCriedOn}>
            Following wherever the water takes us
          </p>
          <p className={styles.iveCriedOn}>Let’s ...</p>
          <p className={styles.iveCriedOn}>”it doesn’t really matter,</p>
          <p className={styles.iveCriedOn}>I really don’t care</p>
          <p className={styles.imTakingIt}>As long as I’m with you.</p>
        </b>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>waves of death</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>I feel death</p>
            <p className={styles.iveCriedOn}>It usually comes in waves</p>
            <p className={styles.iveCriedOn}>It comes in small pockets</p>
            <p className={styles.iveCriedOn}>
              It only lasts for few seconds though, she loves to tease
            </p>
            <p className={styles.iveCriedOn}>
              I can’t really explain it, forgive me
            </p>
            <p className={styles.iveCriedOn}>But I see blue, lots of blue</p>
            <p className={styles.iveCriedOn}>And it’s very cold, I shiver</p>
            <p className={styles.iveCriedOn}>
              It’s as if death itself is closing up on me
            </p>
            <p className={styles.iveCriedOn}>Breathing on my skin</p>
            <p className={styles.iveCriedOn}>
              Creeping up with each beat of my heart
            </p>
            <p className={styles.iveCriedOn}>
              A few seconds of sheer fear, well that was at first,
            </p>
            <p className={styles.iveCriedOn}>
              I’ve grown accustomed to it now, I long for it now
            </p>
            <p className={styles.iveCriedOn}>
              But I never know when those few seconds of bliss will descend
              again
            </p>
            <p className={styles.iveCriedOn}>{`How unfortunate `}</p>
            <p className={styles.iveCriedOn}>
              So you ask my how I live so freely
            </p>
            <p
              className={styles.iveCriedOn}
            >{`Full of joy and spontaneity `}</p>
            <p className={styles.iveCriedOn}>
              Why everyone seem to strive while I do it so effortlessly
            </p>
            <p className={styles.iveCriedOn}>
              I answer you but you don’t seem to hear me
            </p>
            <p className={styles.iveCriedOn}>“I feel waves of death”</p>
            <p className={styles.iveCriedOn}>
              I repeat with outmost care as I stare into your eyes while
              caressing your cheeks
            </p>
            <p className={styles.imTakingIt}>
              “I feel waves of death and I don’t know when she’ll stop teasing”
              I smile.
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>the great paradox</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>
              I remember because we were looking at the stars when I asked him
            </p>
            <p className={styles.iveCriedOn}>
              “When did you know you loved her?”
            </p>
            <p className={styles.iveCriedOn}>
              He raised his hand at the sky and began to trace something I
              couldn’t make out
            </p>
            <p className={styles.iveCriedOn}>
              “When I realized I didn’t need her”
            </p>
            <p className={styles.iveCriedOn}>
              “But I chose her” “And she chose me”
            </p>
            <p className={styles.iveCriedOn}>
              “To share with each other the beautiful and complete experience
              that was our being”
            </p>
            <p className={styles.iveCriedOn}>
              “Even on days we despised each other”
            </p>
            <p className={styles.iveCriedOn}>
              “There was no one I would rather be mad at”
            </p>
            <p className={styles.iveCriedOn}>
              He grabbed my hand, and he starts to trace again.
            </p>
            <p className={styles.iveCriedOn}>
              I still can’t make out what he’s trying to show me
            </p>
            <p className={styles.iveCriedOn}>
              “We Fall in love knowing the floor can give under us any second.
            </p>
            <p className={styles.iveCriedOn}>
              After all there is in it the idea of the fall
            </p>
            <p
              className={styles.iveCriedOn}
            >{`Yours is not to identify it. Or control. Or manipulate it. `}</p>
            <p className={styles.iveCriedOn}>
              Simply experience it. Experience it in its entirety”
            </p>
            <p className={styles.iveCriedOn}>He lets go of my hand.</p>
            <p className={styles.iveCriedOn}>
              Now I stopped trying But I continue to move my hands
            </p>
            <p className={styles.iveCriedOn}>“I get it now.</p>
            <p className={styles.iveCriedOn}>It’s so beautiful”</p>
            <p className={styles.iveCriedOn}>I say unable to contain my joy.</p>
            <p className={styles.iveCriedOn}>
              I moved my hands until they hurt.
            </p>
            <p className={styles.iveCriedOn}>
              When I stopped it was the most beautiful sight I’d ever seen.
            </p>
            <p className={styles.imTakingIt}>
              ‍Not until I had surrendered did I start LIVE
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>nothings</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>We laughed and joked a lot</p>
            <p className={styles.iveCriedOn}>But I really don’t care now</p>
            <p className={styles.iveCriedOn}>
              another one of my brothers has been put down.
            </p>
            <p className={styles.iveCriedOn}>
              Another one of my brothers’ halo tried to be ripped from his head.
            </p>
            <p className={styles.iveCriedOn}>{`It’s always been this way `}</p>
            <p className={styles.iveCriedOn}>
              Deep down we rummage around the thought that we are all too afraid
              to share.
            </p>
            <p className={styles.iveCriedOn}>
              Hoping that our silence would dim its existence.
            </p>
            <p className={styles.iveCriedOn}>Who’s next?</p>
            <p className={styles.iveCriedOn}>
              listen closely, It’s not if happening again, it’s who’s next.
            </p>
            <p className={styles.iveCriedOn}>
              Which one of us will be in front of the flashes and the cameras
            </p>
            <p className={styles.iveCriedOn}>
              Which one of us will be the next to stare down the white tunnel of
              a Glock 22
            </p>
            <p className={styles.iveCriedOn}>
              Which one of my brothers is next?
            </p>
            <p className={styles.iveCriedOn}>
              So we laugh and joke about a bunch of nothings as we take turns
              giving each other side fades
            </p>
            <p className={styles.imTakingIt}>
              I try to fight the thought that it might be our last
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>to each their own</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>
              How complex is this maze that’s life
            </p>
            <p className={styles.iveCriedOn}>
              Full of turns and twists, Of unknown paths and roads Oblivious to
              the landscape that unravels with each step that I take
            </p>
            <p className={styles.iveCriedOn}>
              I can’t see fully ahead yet I’m convinced I am on the right path
              to the end, whatever that is
            </p>
            <p className={styles.iveCriedOn}>
              I’m surrounded by lovers, I would ask for help, I know they’ll
              heed my calling but they seem to be occupied. “To each their own”
              I realize
            </p>
            <p className={styles.iveCriedOn}>
              I look back in front of me, I’m faced with tall green leaves
              dancing.
            </p>
            <p className={styles.iveCriedOn}>
              Full of mystery and uncertainties.
            </p>
            <p className={styles.iveCriedOn}>
              They move rhythmically to the wind.
            </p>
            <p className={styles.iveCriedOn}>
              Each twist enticing, as if it dares me not to come in.
            </p>
            <p className={styles.iveCriedOn}>
              I smile as I walk aimlessly without worrying about where I step.
            </p>
            <p className={styles.iveCriedOn}>Each one easier than the last.</p>
            <p className={styles.iveCriedOn}>
              The less I worried about finding the right path, the more I
              enjoyed the journey.
            </p>
            <p className={styles.iveCriedOn}>
              The more I felt the wind on my skin the less I was anxious about
              the end.
            </p>
            <p className={styles.iveCriedOn}>So I ran.</p>
            <p className={styles.imTakingIt}>
              Blissfully having no idea what I was running towards
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>sunset (interlude)</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>Here it comes,</p>
            <p className={styles.iveCriedOn}>
              Just how amazing is it to watch that Big Ball of Hue melt in the
              sky
            </p>
            <p className={styles.iveCriedOn}>
              A fool of me to think your sight is one I could stop being
              appalled by
            </p>
            <p className={styles.iveCriedOn}>
              But i’m smiling just as hard as the first time I laid eyes on you
            </p>
            <p className={styles.iveCriedOn}>
              I wished you could stay a little longer this time
            </p>
            <p className={styles.iveCriedOn}>{`I have so much to tell you `}</p>
            <p className={styles.imTakingIt}>
              But here it comes and away it goes
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>4:am crush</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            I walk in, you raise your head but it’s slightly. I figured you’re
            the type to be nonchalant. But you push your hair under your ears. I
            see your dimples subtly above your lips. Right as I close the door
            behind me, the evening sun resumes gently basking in your face which
            is perfectly tilted to the right. I almost feel bad for interrupting
            whoever was painting this beautiful scene. At the same time I get
            the urge to capture it because I’ve never seen someone who made the
            sun look so good. I forget what I came for but I doesn’t matter
            anymore cuz I would be mad not to take a peak at your name tag But
            somehow it feels like I’ve known you forever. You have a great taste
            in music, you are the type to go to a concert alone, you don’t have
            lots of friends not because you don’t want them but most people
            aren’t interesting enough to keep you interested. You’re artsy even
            though you don’t think you aren’t. You laugh a lot but don’t smile
            enough. You have layers to you, I can tell. Beneath those radiant
            eyes, there’s a nerdy edge to you. Do you read a lot? Watch a lot of
            film? Or is it anime? You think you’re boring but you would probably
            make me blush without trying. I can already see you getting mad at
            me cuz I wasn’t listening to you. I’m sorry, I was mesmerized at how
            you use your hands whenever you describe anything and how your
            eyebrows shoot up when you realize I was spaced out but I really
            can’t help it because you remind me of the ocean in the late summer
            as the sun is setting into the water. I have countless of words
            prepared to say when I get a chance at the front of the line but I
            know I will be short of words even though I’ve always been good with
            them. I grab a mango popsicle for the seventh time this week as I
            walk towards you, interrupting the sun yet again I’m not sorry this
            time.
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>band-aid heart</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>It hurts somewhere,</p>
            <p className={styles.iveCriedOn}>Aches and throbs</p>
            <p className={styles.iveCriedOn}>
              Those ones you get out of nowhere
            </p>
            <p className={styles.iveCriedOn}>It hurts all over</p>
            <p className={styles.iveCriedOn}>They stung different yesterday</p>
            <p className={styles.iveCriedOn}>
              I had nothing to think about but them
            </p>
            <p className={styles.iveCriedOn}>
              I’m not really good with these things
            </p>
            <p className={styles.iveCriedOn}>
              Do I let it be? What should I take?
            </p>
            <p className={styles.iveCriedOn}>Is it even supposed to hurt?</p>
            <p className={styles.iveCriedOn}>Because it hurts somewhere</p>
            <p className={styles.iveCriedOn}>It aches and throbs</p>
            <p className={styles.iveCriedOn}>I still don’t know where from,</p>
            <p className={styles.imTakingIt}>
              So for now I’ll put a Band-Aid over my heart
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>ode</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>
              It is with ultimate privilege to still be standing
            </p>
            <p className={styles.iveCriedOn}>It seems like we were chosen</p>
            <p className={styles.iveCriedOn}>{`We lived, We died, `}</p>
            <p className={styles.iveCriedOn}>We cried, and cried, and cried</p>
            <p className={styles.iveCriedOn}>Then we laughed</p>
            <p className={styles.iveCriedOn}>But of all, we lived</p>
            <p className={styles.iveCriedOn}>
              When we tell the tales, I hope we remember how we laughed and
              cried
            </p>
            <p className={styles.iveCriedOn}>
              Of all, I hope we remember how we lived.
            </p>
            <p className={styles.iveCriedOn}>Ode to the ones lost,</p>
            <p className={styles.imTakingIt}>Cheers to the ones here still.</p>
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>la vie en rosa</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>I clutched you closer to me,</p>
            <p className={styles.iveCriedOn}>
              We sway all about, our eyes finally meet
            </p>
            <p className={styles.iveCriedOn}>
              I feel the ocean smiling back at me every time I look into your
              eyes
            </p>
            <p className={styles.iveCriedOn}>
              You make my heart feel things it’s never felt before
            </p>
            <p className={styles.iveCriedOn}>
              I might be ahead of myself but I swear I see what our front yard
              looks like
            </p>
            <p
              className={styles.iveCriedOn}
            >{`for now we’ll sway to the old Jumbotron music `}</p>
            <p className={styles.iveCriedOn}>
              because even in  a bar full of bad liquor, drunk men  and old
              music,
            </p>
            <p className={styles.iveCriedOn}>I’ve never smiled this much.</p>
            <p className={styles.imTakingIt}>‍I’m so happy I’m scared.</p>
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>la vie en rosa</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>I clutched you closer to me,</p>
            <p className={styles.iveCriedOn}>
              We sway all about, our eyes finally meet
            </p>
            <p className={styles.iveCriedOn}>
              I feel the ocean smiling back at me every time I look into your
              eyes
            </p>
            <p className={styles.iveCriedOn}>
              You make my heart feel things it’s never felt before
            </p>
            <p className={styles.iveCriedOn}>
              I might be ahead of myself but I swear I see what our front yard
              looks like
            </p>
            <p
              className={styles.iveCriedOn}
            >{`for now we’ll sway to the old Jumbotron music `}</p>
            <p className={styles.iveCriedOn}>
              because even in  a bar full of bad liquor, drunk men  and old
              music,
            </p>
            <p className={styles.iveCriedOn}>I’ve never smiled this much.</p>
            <p className={styles.imTakingIt}>‍I’m so happy I’m scared.</p>
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>where you from</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>Me? where I’m from?</p>
            <p className={styles.iveCriedOn}>We dawgs where I’m from</p>
            <p className={styles.iveCriedOn}>We tuff where I’m from.</p>
            <p className={styles.iveCriedOn}>
              We don’t complain where I’m from
            </p>
            <p className={styles.iveCriedOn}>I said we dawgs where I’m from</p>
            <p className={styles.iveCriedOn}>Look at me the wrong way?</p>
            <p className={styles.iveCriedOn}>
              You don’t wanna find out what happens next where I’m from
            </p>
            <p className={styles.iveCriedOn}>Where I’m from we real strong</p>
            <p className={styles.iveCriedOn}>I’m talking real strong</p>
            <p className={styles.iveCriedOn}>
              No wonder they think we run with the lions.
            </p>
            <p className={styles.iveCriedOn}>
              We built different where I’m from
            </p>
            <p className={styles.imTakingIt}>We dawgs where I’m from</p>
          </b>
        </div>
      </div>
      <div className={styles.boxx}>
        <div className={styles.h1}>
          <b className={styles.takingItEasy}>last ever love poem</b>
        </div>
        <div className={styles.body}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>You know,</p>
            <p className={styles.iveCriedOn}>
              I regret the idea that there’s someone out there just waiting for
              us,
            </p>
            <p className={styles.iveCriedOn}>
              that we’ll meet them in a perfect place at the perfect time
            </p>
            <p className={styles.iveCriedOn}>
              whilst our perfect song is playing
            </p>
            <p className={styles.iveCriedOn}>and we’ll fall in love forever.</p>
            <p className={styles.iveCriedOn}>‍It wasn’t much really, </p>
            <p className={styles.iveCriedOn}>
              all we did was lock eyes under the Santorini Sun, the chemicals
              took over.
            </p>
            <p
              className={styles.iveCriedOn}
            >{`It was a little after eight, you ordered your coffee to go while I pretended to eat my velvet cake. `}</p>
            <p className={styles.iveCriedOn}>
              something was playing over the speakers up here when the barrister
              called on you.
            </p>
            <p className={styles.iveCriedOn}>
              Even though I want nothing more than your happiness, I don’t think
              i wish you happiness if you aren’t with me.
            </p>
            <p className={styles.iveCriedOn}>
              I know, i’m still working on myself. that’s why I regret the idea
              that there’s someone out there just waiting for me.‍
            </p>
            <p className={styles.iveCriedOn}>
              I wrote this a year ago, I couldn't be more wrong. the chemicals
              were right so This is the last one I'm writing.
            </p>
            <p className={styles.imTakingIt}>
              There is no one else other than you.
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx13}>
        <div className={styles.h1}>
          <b className={styles.whyWontYou}>
            why won’t you help my troubled mind
          </b>
        </div>
        <div className={styles.body12}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>
              The brightest smiles really have the deepest hurt‍
            </p>
            <p className={styles.iveCriedOn}>
              Spent too much time way high up there Making the unreal
            </p>
            <p className={styles.iveCriedOn}>
              Come down, Ground is turning to dust Will you recognize when
              you're done?
            </p>
            <p className={styles.iveCriedOn}>
              Still jumping about eh? I would blame you but can't help it can
              you
            </p>
            <p className={styles.iveCriedOn}>
              Well now you're all alone Fallen to nothing but sticks and stones
            </p>
            <p className={styles.iveCriedOn}>How you wanted Abi?</p>
            <p className={styles.iveCriedOn}>
              ‍I stand up Beaten up by my fall
            </p>
            <p className={styles.iveCriedOn}>
              “Oh hell” I sigh under my breathe.
            </p>
            <p className={styles.iveCriedOn}>
              “I hope you help my troubled my mind,
            </p>
            <p className={styles.iveCriedOn}>
              Why won’t you help my troubled mind?”
            </p>
            <p className={styles.iveCriedOn}>
              ‍I smile a bright smile As I walk around,
            </p>
            <p className={styles.iveCriedOn}>
              Nothing left but Dust and bones.
            </p>
            <p className={styles.iveCriedOn}>
              It seem they my only friends now
            </p>
            <p className={styles.imTakingIt}>
              “Well one last time won’t hurt anymore now”
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx13}>
        <div className={styles.h1}>
          <b className={styles.whyWontYou}>stuntin like my mama</b>
        </div>
        <div className={styles.body12}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>
              I’m up here Stuntin like my mama
            </p>
            <p className={styles.iveCriedOn}>left to right then left again</p>
            <p className={styles.iveCriedOn}>
              Swaying funky cuz you know they all your sons
            </p>
            <p className={styles.iveCriedOn}>
              I’ll break bones and split head for my mama, on my mama
            </p>
            <p className={styles.iveCriedOn}>
              I’ll walk round the face of this earth twice barefooted then
              backwards just for my mama, and that’s on my mama.
            </p>
            <p className={styles.iveCriedOn}>
              Can’t wait till you pull up and them sons wondering what you do.
            </p>
            <p className={styles.imTakingIt}>
              Wishing they was Stuntin like my mama
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx13}>
        <div className={styles.h1}>
          <b className={styles.whyWontYou}>virago’s kiss</b>
        </div>
        <div className={styles.body12}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>
              In the middle of the night somewhere in the world, I kissed a
              virago.‍
            </p>
            <p className={styles.iveCriedOn}>
              She ain’t pay me to mind at first
            </p>
            <p className={styles.iveCriedOn}>
              You know how it is, all business.
            </p>
            <p className={styles.iveCriedOn}>That’s why she came</p>
            <p className={styles.iveCriedOn}>
              “Boy ain’t nobody checking for you, I'm not staying long” She
              said.
            </p>
            <p className={styles.iveCriedOn}>You know them ones</p>
            <p className={styles.iveCriedOn}>
              She don’t need me, She could do without it
            </p>
            <p className={styles.iveCriedOn}>
              “So why you in here then” I retorted
            </p>
            <p className={styles.iveCriedOn}>
              “Came for the food”she snapped back with her fingers up and eyes
              rolled back
            </p>
            <p className={styles.iveCriedOn}>‍Now I’m at the pictures</p>
            <p className={styles.iveCriedOn}>
              I don’t even know what movie I’m watching The way you rolled your
              eyes, that thing is stuck in my head
            </p>
            <p className={styles.iveCriedOn}>
              My God what a picture ‍And when you asked me if I’ve ever written
              about you, I smiled
            </p>
            <p className={styles.iveCriedOn}>"Everything is about you.</p>
            <p className={styles.iveCriedOn}>
              Ever since we locked eyes under Santorini’s Sun. It’s all been
              about you."
            </p>
            <p className={styles.iveCriedOn}>
              “Yeah, that’s what you told the last one”
            </p>
            <p className={styles.iveCriedOn}>
              ‍Look, I just made a a bracelet out of your old charm.
            </p>
            <p className={styles.iveCriedOn}>
              I know you don’t want me wearing it anymore.
            </p>
            <p className={styles.iveCriedOn}>
              I just can’t  stray too far away from you
            </p>
            <p className={styles.iveCriedOn}>I love you so much I’m scared</p>
            <p className={styles.iveCriedOn}>
              ‍She left me of seen at first,Then she took me to the ballroom
              after hours.
            </p>
            <p className={styles.iveCriedOn}>
              Told Cisco she might have been a better ride, he got jealous.
            </p>
            <p className={styles.iveCriedOn}>
              “So you ready to go?, You know since you not staying long”
            </p>
            <p className={styles.iveCriedOn}>I whispered in her ears</p>
            <p className={styles.imTakingIt}>
              Now she’s beating all over me under the lights in the backseat.
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx13}>
        <div className={styles.h1}>
          <b className={styles.whyWontYou}>virago’s kiss</b>
        </div>
        <div className={styles.body12}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>
              In the middle of the night somewhere in the world, I kissed a
              virago.‍
            </p>
            <p className={styles.iveCriedOn}>
              She ain’t pay me to mind at first
            </p>
            <p className={styles.iveCriedOn}>
              You know how it is, all business.
            </p>
            <p className={styles.iveCriedOn}>That’s why she came</p>
            <p className={styles.iveCriedOn}>
              “Boy ain’t nobody checking for you, I'm not staying long” She
              said.
            </p>
            <p className={styles.iveCriedOn}>You know them ones</p>
            <p className={styles.iveCriedOn}>
              She don’t need me, She could do without it
            </p>
            <p className={styles.iveCriedOn}>
              “So why you in here then” I retorted
            </p>
            <p className={styles.iveCriedOn}>
              “Came for the food”she snapped back with her fingers up and eyes
              rolled back
            </p>
            <p className={styles.iveCriedOn}>‍Now I’m at the pictures</p>
            <p className={styles.iveCriedOn}>
              I don’t even know what movie I’m watching The way you rolled your
              eyes, that thing is stuck in my head
            </p>
            <p className={styles.iveCriedOn}>
              My God what a picture ‍And when you asked me if I’ve ever written
              about you, I smiled
            </p>
            <p className={styles.iveCriedOn}>"Everything is about you.</p>
            <p className={styles.iveCriedOn}>
              Ever since we locked eyes under Santorini’s Sun. It’s all been
              about you."
            </p>
            <p className={styles.iveCriedOn}>
              “Yeah, that’s what you told the last one”
            </p>
            <p className={styles.iveCriedOn}>
              ‍Look, I just made a a bracelet out of your old charm.
            </p>
            <p className={styles.iveCriedOn}>
              I know you don’t want me wearing it anymore.
            </p>
            <p className={styles.iveCriedOn}>
              I just can’t  stray too far away from you
            </p>
            <p className={styles.iveCriedOn}>I love you so much I’m scared</p>
            <p className={styles.iveCriedOn}>
              ‍She left me of seen at first,Then she took me to the ballroom
              after hours.
            </p>
            <p className={styles.iveCriedOn}>
              Told Cisco she might have been a better ride, he got jealous.
            </p>
            <p className={styles.iveCriedOn}>
              “So you ready to go?, You know since you not staying long”
            </p>
            <p className={styles.iveCriedOn}>I whispered in her ears</p>
            <p className={styles.imTakingIt}>
              Now she’s beating all over me under the lights in the backseat.
            </p>
          </b>
        </div>
      </div>
      <div className={styles.boxx13}>
        <div className={styles.h1}>
          <b className={styles.whyWontYou}>m, are you with me</b>
        </div>
        <div className={styles.body12}>
          <b className={styles.iFeelDeathContainer}>
            <p className={styles.iveCriedOn}>All the times we’ve had,</p>
            <p className={styles.iveCriedOn}>All the memories we’ve made</p>
            <p className={styles.iveCriedOn}>
              Are you just going to let it go down the drain?Throw it all away?‍
            </p>
            <p className={styles.iveCriedOn}>
              Just stop, Stop. Don’t act naive, you’re too smart
            </p>
            <p className={styles.iveCriedOn}>
              I’ve loved you since I’ve laid eyes on you
            </p>
            <p className={styles.iveCriedOn}>
              Who was I kidding, I knew it might turn to a mess.
            </p>
            <p className={styles.iveCriedOn}>But you know I thought,</p>
            <p className={styles.iveCriedOn}>
              If there’s anyone who would love without sight It would be you.
            </p>
            <p className={styles.iveCriedOn}>
              I've seen you do it While I stayed here,
            </p>
            <p className={styles.iveCriedOn}>here, right here!</p>
            <p className={styles.iveCriedOn}>
              Oh so many times I wanted to say something but I held it in
            </p>
            <p className={styles.iveCriedOn}>"Maybe it will pass"</p>
            <p className={styles.iveCriedOn}>I would lie to myself</p>
            <p className={styles.iveCriedOn}>
              What is this thing Where we can’t talk to each other anymore? 
            </p>
            <p className={styles.iveCriedOn}>
              now Your hands feels cold against mine
            </p>
            <p className={styles.iveCriedOn}>M, You won’t even look at me?</p>
            <p className={styles.imTakingIt}>Are you still with me Matilda?</p>
          </b>
        </div>
      </div>
      <div className={styles.tieInner}>
        <div className={styles.vegeeWrapper}>
          <div className={styles.vegee}>vegee ©</div>
        </div>
      </div>
    </div>
  );
};

export default Tie;
