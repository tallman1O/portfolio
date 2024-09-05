"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import AboutImage from "../../public/images/aboutme.svg";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 my-10">
        <motion.div
          key={AboutImage}
          initial={{
            opacity: 0,
            y: -50,
            rotate: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: -3,
          }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <Image
            src={AboutImage}
            width={200}
            height={400}
            alt="about"
            className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-full hover:rotate-0 transition duration-200"
          />
        </motion.div>
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Mehul Uttam – a tech enthusiast, a coding
          adventurer, and a lifelong learner. Welcome to my digital space!
        </Paragraph>
        <Paragraph className=" mt-4">
          From the moment I wrote my first line of code, I was hooked. I love
          the thrill of transforming ideas into interactive and intuitive
          digital experiences. As a developer, I find joy in creating software
          that’s not just functional but also delightful to use—merging clean
          code with captivating design.
        </Paragraph>

        <Paragraph className=" mt-4">
          But my journey is more than just zeros and ones. I&apos;m a team
          player who thrives in collaborative environments, especially
          hackathons, where I can combine creativity and logic with fellow
          innovators to build something remarkable. I believe that the best
          solutions come from a mix of different perspectives and skills, and I
          always seek to learn from others while sharing my own knowledge.
        </Paragraph>
        <Paragraph className=" mt-4">
          Beyond development, I’ve ventured into the ever-evolving world of
          machine learning and cybersecurity. I enjoy exploring how data shapes
          decisions and how algorithms can learn and adapt. At the same time,
          I’m fascinated by how systems can be secured against evolving threats,
          always staying one step ahead of potential vulnerabilities.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this space, I want to share my journey, experiences, and the
          projects I’m passionate about. Whether you’re a developer looking for
          fresh perspectives, a cybersecurity enthusiast diving deep into the
          digital defense world, or someone who appreciates the intersection of
          form and function, there’s a little bit of everything here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Join me as we navigate the exciting world of technology, teamwork, and
          creativity together. Thank you for stopping by, and I look forward to
          what we can discover together on this incredible adventure.
        </Paragraph>
      </div>
    </div>
  );
}
