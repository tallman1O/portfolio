import sidefolioAtomicBlog from "public/images/sidefolioAtomicBlog.svg";
import sidefolioAtomicBlog2 from "public/images/sidefolioAtomicBlog-2.svg";
import sidefolioEatNsplit from "public/images/sidefolio-eatNsplit.svg";
import sidefolioEatNsplit2 from "public/images/sidefolio-eatNsplit-2.svg";
import PrepmateThumbnail from "public/images/prepmate-thumbnail.png";
import prepmateImage1 from "public/images/prepmate-image1.png";
import prepmateImage2 from "public/images/prepmate-image2.png";
import mttThumbnail from "public/images/mtt-thumbnail.png";
import mttImage1 from "public/images/mtt-image1.png";
import mttImage2 from "public/images/mtt-image2.png";
import mttImage3 from "public/images/mtt-image3.png";
import zentryThumbnail from "public/images/zentry-thumbnail.png";
import zentryImage1 from "public/images/zentry-image1.png";
import zentryImage2 from "public/images/zentry-image2.png";
import zentryImage3 from "public/images/zentry-image3.png";

export const products = [
  {
    href: "https://prepmate-ai.vercel.app/",
    title: "Prepmate - AI Mock Interview Platform",
    description:
      "A Mock Interview Platform That Lets you Practice for Your Interviews.",
    thumbnail: PrepmateThumbnail,
    images: [prepmateImage1, prepmateImage2],
    stack: ["NextJS", "TailwindCSS", "PostgreSQL", "Clerk", "Gemini API"],
    slug: "prepmate",
    content: (
      <div>
        <p>
          Prepmate is a platform that lets you practice for your interviews with
          AI. It uses the Gemini API to generate mock interviews and let you
          practice for your interviews. It also has a real-time feedback system
          to help you improve your answers.
        </p>
        <p>
          The platform offers a comprehensive suite of features designed to
          enhance your interview preparation. You can choose from various
          interview types, including technical interviews for software
          engineering roles, behavioral interviews for soft skills assessment,
          and domain-specific interviews tailored to your field. The AI
          interviewer adapts its questions based on your responses, creating a
          dynamic and realistic interview experience. What sets Prepmate apart
          is its real-time feedback system. After each response, you receive
          detailed feedback on your answer quality, communication clarity, and
          areas for improvement. The platform also provides a performance
          analytics dashboard where you can track your progress over time and
          identify specific areas that need more focus.
        </p>
      </div>
    ),
  },
  {
    href: "https://robocon.in",
    title: "MTT Robocon",
    description:
      "MIT Tech Team is the Official Robotics Team of MIT World Peace University",
    thumbnail: mttThumbnail,
    images: [mttImage1, mttImage2, mttImage3],
    stack: ["NextJS", "TailwindCSS", "Framer Motion", "Web3 Forms"],
    slug: "mtt-robocon",
    content: (
      <div>
        <p>
          MIT Tech Team Robocon is the official robotics team of MIT World Peace
          University, dedicated to participating in the prestigious ABU Robocon
          competition. Our team designs and builds advanced autonomous and
          manual robots to compete at national and international levels. The
          website showcases our journey, achievements, and the cutting-edge
          robotics technology we develop.
        </p>
        <p>
          As the digital face of MTT Robocon, this website serves as a
          comprehensive platform highlighting our team&apos;s innovative
          projects, competition history, and technical expertise. It features
          detailed documentation of our robot building process, team structure,
          and provides resources for aspiring robotics enthusiasts. The site
          also plays a crucial role in attracting sponsors and new team members
          to support our mission of advancing robotics technology.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://zentry-clone-dev.vercel.app/",
    title: "Zentry Clone Website",
    description:
      "A Clone of Zentry Website Replicating the UI and Features and Animations of the Original Website.",
    thumbnail: zentryThumbnail,
    images: [zentryImage1, zentryImage2, zentryImage3],
    stack: ["NextJS", "TailwindCSS", "GSAP"],
    slug: "zentry-clone",
    content: (
      <div>
        <p>
          Zentry Clone is a clone of the Zentry website, replicating the UI and
          features and animations of the original website. It is a clone of the
          Zentry website, replicating the UI and features and animations of the
          original website.
        </p>
        <p>
          The website is built using NextJS, TailwindCSS, and GSAP. It is a
          clone of the Zentry website, replicating the UI and features and
          animations of the original website.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://atomic-blog-ashen.vercel.app/",
    title: "The Atomic Blog",
    description:
      "A Blogging Feed That Lets you Read Blogs and Also Create Your Own Blogs.",
    thumbnail: sidefolioAtomicBlog,
    images: [sidefolioAtomicBlog, sidefolioAtomicBlog2],
    stack: ["ReactJS", "CSS Modules"],
    slug: "atomic-blog",
    content: (
      <div>
        <p>
          Atomic Blog is a user-friendly platform that lets you explore and read
          short blogs on various topics in a clean, feed-like style. It also
          empowers users to create and publish their own blogs, contributing to
          a vibrant community of writers and readers. The web app features a
          modern design with an intuitive dark mode, providing a comfortable and
          immersive reading and writing experience any time of day.
        </p>
        <p>
          Whether you’re looking to explore diverse perspectives or share your
          own ideas, Atomic Blog makes it easy and engaging. Our web app offers
          a clean and modern feed-like style where you can browse through a wide
          range of short blogs on various topics—from technology and lifestyle
          to personal experiences and creative writing.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://eat-n-split-dw56.vercel.app/",
    title: "Eat-N-Split",
    description: "Split Bills, Not Heart",
    thumbnail: sidefolioEatNsplit,
    images: [sidefolioEatNsplit, sidefolioEatNsplit2],
    stack: ["ReactJS"],
    slug: "Eat-N-Split",
    content: (
      <div>
        <p>
          Eat-N-Split is a smart web app designed to simplify the often tricky
          task of splitting bills with friends. Whether you&apos;re dining out,
          going on group trips, or sharing any expenses, Eat-N-Split makes
          managing shared costs hassle-free. Instead of juggling multiple
          payment apps or keeping track of who owes what manually, this app
          provides a streamlined solution for all your expense-sharing needs.
          With an intuitive interface, you can quickly split bills by entering
          the total amount, selecting the friends involved, and letting the app
          calculate each person&apos;s share automatically.
        </p>
        <p>
          The app also helps you keep track of all outstanding balances with
          friends. At a glance, you can see who owes you money and who you owe,
          making it easy to stay on top of your finances. No more awkward
          reminders or forgotten debts—Eat-N-Split keeps everything organized.
          You can also clear all dues with a friend at once, ensuring clean and
          simple transactions that help maintain good relationships. Adding new
          friends to your network is seamless, allowing you to quickly expand
          your circle for future outings and group expenses. When you’re done
          settling up and want to keep things tidy, Eat-N-Split gives you the
          option to remove friends from your list and clear any remaining tabs.
          This ensures your dashboard stays organized and clutter-free, so you
          can focus on enjoying time with your friends without any financial
          stress. With Eat-N-Split, managing shared expenses has never been
          easier. It offers a perfect blend of simplicity, clarity, and
          functionality, making it an ideal choice for anyone who frequently
          shares costs with friends. Enjoy the peace of mind that comes with
          knowing your finances are sorted and your friendships are kept
          stress-free.
        </p>{" "}
      </div>
    ),
  },
];
