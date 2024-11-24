import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="text-black">Hello there! I&apos;m Mehul</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a BTech CSE Student with{" "}
        <Highlight>1 year of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Heading
        as="h2"
        className="text-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <Heading
        as="h2"
        className="text-black text-lg md:text-base lg:text-base mt-20 mb-4"
      >
        Check out more on{" "}
        <Link href="/projects" className="tracking-wide text-blue-400 ">
          Projects
        </Link>
      </Heading>
      <TechStack />
    </Container>
  );
}
