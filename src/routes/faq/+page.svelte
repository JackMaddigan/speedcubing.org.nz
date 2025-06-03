<svelte:head>
  <title>FAQ | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import "../../app.css";
  import ContentColumn from "../../components/ContentColumn.svelte";
  import Expandable from "../../components/Expandable.svelte";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  let title = "FREQUENTLY ASKED QUESTIONS";
  let imagePath = "/faq/IMG_6029.webp";
</script>

<Header></Header>
<PageTitle {title} {imagePath}>
    <p>Find out more about speedcubing, competitions, our organisation and more!</p>
</PageTitle>

<ContentColumn>
  <section>
    <Expandable title="HOW CAN I LEARN TO SOLVE THE CUBE?">
      <p>
        We have a collection of great resources listed on our 
        <a href="../getting-started">Getting Started</a> page. 
        You can also find a huge number of tutorials about almost 
        any aspect of cubing on YouTube.
      </p>
    </Expandable>
    <Expandable title="HOW CAN I GET FASTER?">
      <p>
        The most important thing is practice! Beyond that though, 
        we have event-specific resources listed <a href="../getting-started#events_info">here</a>. 
        There are also a variety of paid coaching services available from international sites 
        like <a href="https://cubing.gg">cubing.gg</a> and <a href="https://cubing.life">
        Cubing Life Academy</a> if you want to take your cubing to the next level. One of the best 
        ways to get free advice though is to come to a competition and meet fellow cubers!
      </p>
    </Expandable>
    <Expandable title="WHERE CAN I BUY SPEEDCUBES?">
      <p>
        We have two excellent local stores, 
        <a href="https://speedcube.co.nz" target="_blank">Speedcube.co.nz</a> 
        and <a href="https://mindplay.nz" target="_blank">Mindplay.nz</a>.
      </p>
    </Expandable>
    <Expandable title="WHAT IS THE WCA?">
      <p>
        The World Cube Association (WCA) is the governing body for speedcubing worldwide. 
        The <a href="https://worldcubeassociation.org">WCA website</a> is where you can find all 
        the details for a particular competition, where you register for competitions, and where 
        you can find all the results and records from previous competitions. <br><br>The WCA appoints 
        delegates, who are responsible for making sure that all competitions are run according to 
        the WCA’s mission, spirit, and <a href="https://www.worldcubeassociation.org/regulations/">
        regulations</a>. There will be at least one WCA delegate at every competition, and 
        they’re good people to ask for help if you’re confused about anything!
      </p>
    </Expandable>
    <Expandable title="HOW DOES A COMPETITION WORK?">
      <p>
        Check out <a href="../competitions#your_first_competition">Your First Competition</a>. 
        We also encourage all competitors to read and understand the 
        <a href="https://www.worldcubeassociation.org/regulations/">WCA Regulations</a>.
      </p>
    </Expandable>
    <Expandable title="HOW DO I REGISTER FOR A COMPETITION?">
      <p>
        When a competition’s registration period is open, you can register on the competition page 
        on the WCA website. You will not be added to the competitor list until you have paid, so make 
        sure to do so! If the competitor limit for the competition is full, you will be put on a 
        waiting list and alerted if you get a place due to others dropping out. Please read all 
        the information on the relevant WCA page for the competition.
      </p>
    </Expandable>
    <Expandable title="WHEN WILL THERE BE A COMPETITION NEAR ME?">
      <p>
        We have a list of all our announced upcoming competitions <a href="../competitions#competitions">
        here</a>. We usually try to organise competitions that service each of the major population centres 
        in New Zealand at least a few times per year, but we rely on local volunteer organisers, so this 
        can vary. If you’re keen for a competition in your area, we always welcome people getting involved 
        by <a href="../competitions#organising">organising</a>!
      </p>
    </Expandable>
    <Expandable title="HOW FAST DO I HAVE TO BE TO COMPETE?">
      <p>
        If you know how to solve the cube, you’re more than welcome to compete! Most of our competitions 
        have a time limit of ten minutes for the classic 3x3 Rubik’s Cube, but you can find more details 
        on a competition’s WCA page.
      </p>
    </Expandable>
    <Expandable title="HOW OLD DO I HAVE TO BE TO COMPETE?">
      <p>
        There is no age requirement; all competitors are welcome! Most are 10–20 years old, but there 
        have been competitors younger than 5 and older than 80 competing before.
      </p>
    </Expandable>
    <Expandable title="ARE THERE DIFFERENT AGE OR ABILITY CATEGORIES?">
      <p>
        Everyone competes on the same level, regardless of age or level of ability. WCA competitions 
        are incredibly supportive environments and there is always a range of ages and abilities.
      </p>
    </Expandable>
    <Expandable title="WHAT EVENTS CAN I COMPETE IN?">
      <p>There are currently <a href="../getting-started#events_info">17 official WCA events</a>, 
        but most competitions won’t hold every event. Make sure to check the “Events” tab on the 
        competition’s WCA page to see which events are being held, and to see the time limit/cut 
        off for each event. If you think you can meet the time limit for an event, give it a go!
      </p>
    </Expandable>
    <Expandable title="HOW CAN I CHANGE WHICH EVENTS I’M REGISTERED FOR?">
      <p>
        Each competition will have a cut-off date for changing events, generally a week before. 
        You can alter which events you’re registered for using the “Register” tab on the competition 
        WCA page. <a href="../contact-us">Contact us</a> if you have any issues.
      </p>
    </Expandable>
    <Expandable title="WHAT IS A CUTOFF/TIME LIMIT?">
      <p>
        To make sure competitions run on schedule, many events have a “cut off” and a “time limit”, 
        which will be listed on the “Events” tab on the competition’s WCA page.<br><br>The time limit
        is the maximum time allowed for a solve — if you haven’t solved the puzzle when you hit the 
        time limit, the attempt will be marked as a DNF (Did Not Finish). These time limits are 
        usually quite generous though, so most competitors won’t need to worry about hitting them.
        <br><br>The cutoff is a stricter requirement which determines how many solves you do in a 
        round. If you achieve a solve faster than the cutoff within your first 2 solves*, then you 
        will be allowed to complete your average. If you don’t, then your first two solves will still 
        count, but you will be unable to complete your last 3. This is just to make sure that we 
        don’t run behind schedule.<br><br>For 6x6 and 7x7, the cutoff is after just 1 solve.
      </p>
    </Expandable>
    <Expandable title="WHAT DO I NEED TO BRING?">
      <p>You should bring some form of ID, something to eat for lunch (although there are often food 
        options near the competition venue), and your cubes. You will use your own cubes to compete, 
        so make sure they are clean, undamaged, and otherwise comply with the 
        <a href="https://www.worldcubeassociation.org/regulations/#article-3-puzzles">Puzzles</a> 
        section of the WCA Regulations. There are also hundreds of cubes at competitions — make sure 
        to keep track of yours, as they can easily get mixed up!</p>
    </Expandable>
    <Expandable title="CAN I BRING GUESTS?">
      <p>Yes! We allow as many guests as you’d like at most of our competitions.</p>
    </Expandable>
    <Expandable title="CAN I HELP OUT AT A COMPETITION?">
      <p>Of course! Competitions are completely volunteer-run, so we welcome any help. A great way to get 
        started is by judging — read the official 
        <a href="https://documents.worldcubeassociation.org/edudoc/judge-tutorial/judge-tutorial.pdf">
        Judging Tutorial</a> to learn how, and ask for an explanation on the day if you want any 
        additional guidance.
      </p>
    </Expandable>
    <Expandable title="AM I ALLOWED TO FILM MY SOLVES?">
      <p>
        Absolutely! Many competitors film their solves, and there are also often parents taking photos or 
        videos. There are a few important rules to remember however: <br>
        • Do NOT use flash<br>
        • Spectators MUST be 1.5M away from the solving station at all times<br>
        • Competitors MUST NOT be able to see the screen of the camera filming their solve<br>
        • Do NOT film the solves of another competitor in your group
      </p>
    </Expandable>
    <Expandable title="WHERE DO I FIND MY RESULTS?">
      <p>
        During the competition, results will be uploaded to <a href="https://live.worldcubeassociation.org/"> 
        WCA Live</a>. This may take up to an hour, so please be patient. WCA Live will also allow you to see 
        whether you’ve advanced to the next round. Competitors whose name is highlighted bright green are 
        confirmed to have made the next round. Competitors whose name is dull green are currently set to 
        advance to the next round, but this may change as data entry for the round is ongoing.<br><br>
        After the competition is over, results will be verified and then uploaded to the 
        <a href="https://www.worldcubeassociation.org/results/rankings">WCA Database</a>. 
        This may take several days. Once this is done, you will be able to find your results listed on 
        the competition page, and on your WCA profile.
      </p>
    </Expandable>
    <Expandable title="HOW DO I GET A WCA ID?">
      <p>
        Once you have competed at a competition for the first time, you will automatically have a WCA ID 
        generated for you. This will then be linked to your WCA account you registered with, so that 
        you may upload a picture if you wish, and also sign up for future competitions. For your first 
        competition you only need a <a href="https://www.worldcubeassociation.org/users/sign_up">
        WCA account</a>, not a WCA ID.
      </p>
    </Expandable>
    <Expandable title="CAN I COME JUST TO WATCH, WITHOUT COMPETING?">
      <p>Yes! We encourage spectators, and it’s often a good idea to come to a competition to see 
        what it’s all about. It can look a bit chaotic at first, but they are well organised and 
        everyone is very friendly! You can have a great time without competing, and it can give you 
        an opportunity to try out the timers during lunch break.
      </p>
    </Expandable>
    <Expandable title="ARE THERE ANY CLUBS OR LOCAL MEETUPS I CAN GO TO?" isBottom="true">
      <p>
        Yes, there are several unofficial <a href="../getting-started#clubs">cube clubs</a> 
        around the country. These are not affiliated with Speedcubing New Zealand, but can be a 
        great way to get to know other cubers without the pressure of an official competition.
      </p>
    </Expandable>
  </section>
</ContentColumn>
<Footer></Footer>

<style>
    section{
      padding: 24px 16px;
    }
    a{
      text-decoration: none;
      color: var(--colorBlue1);
    }
</style>