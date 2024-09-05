import sidefolioAtomicBlog from "public/images/sidefolioAtomicBlog.svg";
import sidefolioAtomicBlog2 from "public/images/sidefolioAtomicBlog-2.svg";
import sidefolioEatNsplit from "public/images/sidefolio-eatNsplit.svg";
import sidefolioEatNsplit2 from "public/images/sidefolio-eatNsplit-2.svg";

export const products = [
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
