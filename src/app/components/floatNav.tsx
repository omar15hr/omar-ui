import Link from "next/link";
import { Component, Github } from "lucide-react";

import { ThemeSwitch } from "@/app/components/themeSwitch";
import ToastChangelog from "@/app/components/toastChangelog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/tooltip";

export function FloatNav() {
  return (
    <nav
      className="border-light-900/20 bg-light-50/70 text-light-950 dark:border-dark-900/20 dark:bg-dark-50/50 dark:text-dark-950 fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center justify-center gap-2 rounded-full border px-4 py-2 bg-blend-luminosity shadow-xs backdrop-blur-xl transition"
      aria-label="Floating Navigation"
    >
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://www.linkedin.com/in/omar-alejandro-hernandez-diaz/"
              aria-label="Visit X Profile of educalvolpz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-auto w-auto cursor-pointer items-center justify-center gap-4 p-1"
            >
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                className="fill-light-950 dark:fill-dark-950 hover:fill-green-300 dark:hover:fill-green-500"
                viewBox="0 0 256 256"
              >
                <path
                  d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                  fill="light-950"
                />
              </svg>
            </Link>
          </TooltipTrigger>
          <TooltipContent className="dark:bg-dark-300 bg-light-50 border-light-500 dark:border-dark-500 rounded-full border px-4 py-2 text-xs shadow-xs">
            <p>Follow me on Linkedin</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://github.com/omar15hr/omar-ui"
              aria-label="Visit GitHub Repository"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-auto w-auto cursor-pointer items-center justify-center gap-4 p-1 hover:text-green-500"
            >
              <Github size={20} aria-hidden="true" />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="dark:bg-dark-300 bg-light-50 border-light-500 dark:border-dark-500 rounded-full border px-4 py-2 text-xs shadow-xs">
            <p>GitHub</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/doc"
              aria-label="Documentation"
              className="flex h-auto w-auto cursor-pointer items-center justify-center gap-4 p-1 hover:text-green-500"
            >
              <Component size={20} aria-hidden="true" />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="dark:bg-dark-300 bg-light-50 border-light-500 dark:border-dark-500 rounded-full border px-4 py-2 text-xs shadow-xs">
            <p>Documentation</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <ToastChangelog />
          </TooltipTrigger>
          <TooltipContent className="dark:bg-dark-300 bg-light-50 border-light-500 dark:border-dark-500 rounded-full border px-4 py-2 text-xs shadow-xs hover:fill-green-300 dark:hover:fill-green-500">
            <p>Latest Changes</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <ThemeSwitch />
          </TooltipTrigger>
          <TooltipContent className="dark:bg-dark-300 bg-light-50 border-light-500 dark:border-dark-500 rounded-full border px-4 py-2 text-xs shadow-xs hover:fill-green-500 dark:hover:fill-green-500">
            <p>Theme Switcher</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
}
