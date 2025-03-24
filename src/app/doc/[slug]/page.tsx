import fs from "fs";
import path from "path";
import { promisify } from "util";
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/app/doc/_components/breadcrumbs";
import { CodeBlock } from "@/app/doc/_components/codeBlock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/doc/_components/tabs";
import { components } from "@/app/doc/data/components";

import { ComponentView } from "../_components/componentView";
import { CodeBlockWrapper } from "../_components/codeBlockWrapper";

export async function generateStaticParams() {
  const component = components.map((component) => ({
    slug: component.slug,
  }));

  return component;
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  const component = components.find(
    (component) => component.slug === params.slug
  );

  if (!component) {
    return;
  }

  const { componentTitle, slug } = component;

  return {
    title: componentTitle,
    description: `Navigate to ${componentTitle} component, which will make your application smooth .`,
    openGraph: {
      title: `OmarUI — ${componentTitle}`,
      description: `Navigate to ${componentTitle} component, which will make your application smooth`,
      type: "website",
      url: `https://smoothui.dev/doc/${slug}`,
      images: [
        {
          width: 1920,
          height: 1080,
          url: `/api/og?title=${componentTitle}`,
          alt: "OmarUI cover",
        },
      ],
    },
    twitter: {
      title: `SmootUI — ${componentTitle}`,
      description: `Navigate to ${componentTitle} component, which will make your application smooth.`,
      card: "summary_large_image",
      images: [
        {
          width: 1920,
          height: 1080,
          url: `/api/og?title=${componentTitle}`,
          alt: "SmoothUI cover",
        },
      ],
    },
  };
}

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);

  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8"
  );

  return fileContent;
}

export default async function ComponentPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const component = components.find(
    (component) => component.slug === params.slug
  );

  if (!component) {
    notFound();
  }

  const filePath = `./src/app/doc/_components/ui/${component.componentTitle.replace(
    /\s+/g,
    ""
  )}.tsx`;

  const code = await readFilePath(filePath);

  const cnPath = `./src/app/utils/cn.ts`;
  const cnCode = await readFilePath(cnPath);

  return (
    <main className="my-2 xl:mb-24">
      <div className="space-y-10">
        <div className="space-y-4">
          <Breadcrumbs
            backLink="/doc"
            groupName="Components"
            currentPage={component.componentTitle}
          />
          <h1
            data-table-content="Introduction"
            data-level="1"
            className="text-light-950 dark:text-dark-950 text-3xl font-bold -tracking-wide"
          >
            {component.componentTitle}
          </h1>
          <p className="text-light-900 dark:text-dark-900 text-sm">
            {component.info}
          </p>
        </div>
        <div className="space-y-6">
          <ComponentView>
            {component.componentUi &&
              React.createElement(component.componentUi)}
          </ComponentView>
          <h3 data-table-content="Manual install" data-level="3">
            Manual install
          </h3>
          {component.download && (
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
                  code={component.download}
                  fileName="Terminal"
                  installCommand="npm install"
                  lang="shell"
                />
              </TabsContent>
              <TabsContent value="pnpm">
                <CodeBlock
                  code={component.download}
                  fileName="Terminal"
                  installCommand="pnpm install"
                  lang="shell"
                />
              </TabsContent>
              <TabsContent value="yarn">
                <CodeBlock
                  code={component.download}
                  fileName="Terminal"
                  installCommand="yarn add"
                  lang="shell"
                />
              </TabsContent>
              <TabsContent value="bun">
                <CodeBlock
                  code={component.download}
                  fileName="Terminal"
                  installCommand="bun add"
                  lang="shell"
                />
              </TabsContent>
            </Tabs>
          )}

          {component.cnFunction && (
            <CodeBlock code={cnCode} fileName="utils/cn.ts" lang="typescript" />
          )}
          {component.customCss && (
            <CodeBlock
              code={component.customCss}
              fileName="global.css"
              lang="css"
            />
          )}
          <CodeBlockWrapper
            expandButtonTitle="Expand"
            className="my-6 overflow-hidden rounded-md"
          >
            <CodeBlock
              code={code}
              fileName={`${component.componentTitle.replace(/\s+/g, "")}.tsx`}
            />
          </CodeBlockWrapper>
        </div>
      </div>
    </main>
  );
}
