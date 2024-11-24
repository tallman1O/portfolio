import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Mehul Uttam",
  description:
    "Mehul Uttam is a developer, designer and a tech savvy. He is a student, digital nomad and works remotely.",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="text-black">About Me</Heading>
      <About />
    </Container>
  );
}
