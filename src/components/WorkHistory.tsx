"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import Link from "next/link";

export const WorkHistory = () => {
  return (
    <div>
      {timeline.map((item, index) => (
        <div
          className="flex flex-col md:flex-row gap-6 md:gap-10 my-20 relative items-start md:items-center"
          key={`timeline-${index}`}
        >
          <Paragraph className="w-full md:w-56 flex-shrink-0 text-left md:text-right md:pr-6 mb-2 md:mb-0">
            {item.date}
          </Paragraph>
          <div className="flex-1">
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg tracking-wider text-emerald-500"
            >
              <Link
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 hover:underline"
              >
                {item.company}
              </Link>
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>

            {item.responsibilities.map((responsibility, index) => (
              <Step key={responsibility}>{responsibility}</Step>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
