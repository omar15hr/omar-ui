import * as React from "react"

import { CodeBlock } from "@/app/doc/_components/codeBlock"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/doc/_components/tabs"


import { Breadcrumbs } from "./_components/breadcrumbs"
import { CodeBlockWrapper } from "./_components/codeBlockWrapper"

export default function GetStartedPage() {
  const tailwindConfig = `@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme {
  /* Colors: Dark mode */
  --color-dark-50: hsl(0 0% 8.5%);
  --color-dark-100: hsl(0 0% 11.0%);
  --color-dark-200: hsl(0 0% 13.6%);
  --color-dark-300: hsl(0 0% 15.8%);
  --color-dark-400: hsl(0 0% 17.9%);
  --color-dark-500: hsl(0 0% 20.5%);
  --color-dark-600: hsl(0 0% 31.2%);
  --color-dark-700: hsl(0 0% 43.9%);
  --color-dark-800: hsl(0 0% 49.4%);
  --color-dark-900: hsl(0 0% 62.8%);
  --color-dark-950: hsl(0 0% 93.0%);
  /* Colors: Light mode */
  --color-light-50: hsl(0 0% 99.0%);
  --color-light-100: hsl(0 0% 97.3%);
  --color-light-200: hsl(0 0% 95.1%);
  --color-light-300: hsl(0 0% 93.0%);
  --color-light-400: hsl(0 0% 90.9%);
  --color-light-500: hsl(0 0% 88.3%);
  --color-light-600: hsl(0 0% 77.6%);
  --color-light-700: hsl(0 0% 65.9%);
  --color-light-800: hsl(0 0% 60.4%);
  --color-light-900: hsl(0 0% 43.5%);
  --color-light-950: hsl(0 0% 9.0%);
}`

  const codeInstall = `motion tailwindcss lucide-react clsx tailwind-merge`

  return (
    <>
      <div className="space-y-8">
        <div className="space-y-4">
          <Breadcrumbs groupName="Get Started" currentPage="Introduction" />
          <div className="space-y-3.5">
            <h1
              data-table-content="Introduction"
              data-level="1"
              className="text-light-950 dark:text-dark-950 text-3xl font-bold -tracking-wide"
            >
              Introduction
            </h1>
            <p className="text-light-900 dark:text-dark-900 text-[16px] leading-relaxed font-normal">
              OmarUI is a collection of beautifully designed components with
              smooth animations built with React, Tailwind CSS, and Motion.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2
            data-table-content="Installation"
            data-level="2"
            className="text-light-950 dark:text-dark-950 text-2xl font-bold"
          >
            Installation
          </h2>
          <p className="text-light-900 dark:text-dark-900 text-[16px] leading-relaxed">
            To use SmoothUI components, you will need to install the following
            dependencies:
          </p>

          <Tabs defaultValue="npm">
            <TabsList>
              <TabsTrigger
                value="npm"
                className="data-[state=active]:border-none data-[state=active]:bg-green-600/5 data-[state=active]:text-green-700 data-[state=active]:shadow-none dark:data-[state=active]:bg-green-600/10 dark:data-[state=active]:text-green-400"
              >
                npm
              </TabsTrigger>
              <TabsTrigger
                value="pnpm"
                className="data-[state=active]:border-none data-[state=active]:bg-green-600/5 data-[state=active]:text-green-700 data-[state=active]:shadow-none dark:data-[state=active]:bg-green-600/10 dark:data-[state=active]:text-green-400"
              >
                pnpm
              </TabsTrigger>
              <TabsTrigger
                value="yarn"
                className="data-[state=active]:border-none data-[state=active]:bg-green-600/5 data-[state=active]:text-green-700 data-[state=active]:shadow-none dark:data-[state=active]:bg-green-600/10 dark:data-[state=active]:text-green-400"
              >
                yarn
              </TabsTrigger>
              <TabsTrigger
                value="bun"
                className="data-[state=active]:border-none data-[state=active]:bg-green-600/5 data-[state=active]:text-green-700 data-[state=active]:shadow-none dark:data-[state=active]:bg-green-600/10 dark:data-[state=active]:text-green-400"
              >
                bun
              </TabsTrigger>
            </TabsList>
            <TabsContent value="npm">
              <CodeBlock
                code={codeInstall}
                fileName="Terminal"
                installCommand="npm install"
                lang="shell"
              />
            </TabsContent>
            <TabsContent value="pnpm">
              <CodeBlock
                code={codeInstall}
                fileName="Terminal"
                installCommand="pnpm install"
                lang="shell"
              />
            </TabsContent>
            <TabsContent value="yarn">
              <CodeBlock
                code={codeInstall}
                fileName="Terminal"
                installCommand="yarn add"
                lang="shell"
              />
            </TabsContent>
            <TabsContent value="bun">
              <CodeBlock
                code={codeInstall}
                fileName="Terminal"
                installCommand="bun add"
                lang="shell"
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2
            data-table-content="Color System"
            data-level="2"
            className="text-light-950 dark:text-dark-950 text-2xl font-bold"
          >
            Color System
          </h2>
          <p className="text-light-900 dark:text-dark-900 text-[16px] leading-relaxed">
            SmoothUI uses a carefully crafted color system with both light and
            dark variants. Add these colors to your tailwind.config.ts:
          </p>
          <CodeBlockWrapper
            expandButtonTitle="Expand"
            className="my-6 overflow-hidden rounded-md"
          >
            <CodeBlock code={tailwindConfig} fileName="global.css" lang="css" />
          </CodeBlockWrapper>
        </div>

        <div className="space-y-4">
          <h2
            data-table-content="Usage Tips"
            data-level="2"
            className="text-light-950 dark:text-dark-950 text-2xl font-bold"
          >
            Usage Tips
          </h2>
          <div className="space-y-3">
            <p className="text-light-900 dark:text-dark-900 text-[16px] leading-relaxed">
              Here are some tips to get the most out of OmarUI components:
            </p>
            <ul className="text-light-900 dark:text-dark-900 list-disc space-y-2 pl-6 text-[16px]">
              <li>
                All components support both light and dark modes out of the box
              </li>
              <li>Use the provided color system for consistent theming</li>
              <li>Components are built with motion for smooth animations</li>
              <li>Each component can be customized using Tailwind classes</li>
              <li>
                Check individual component documentation for specific
                customization options
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}