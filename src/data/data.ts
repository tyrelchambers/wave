export interface Data {
  name: string;
  description?: string;
  url: string;
  tags: Tags[];
  plans: string[];
  integrations?: Integrations[];
  image?: string;
}

export type Tags = "components" | "themes" | "templates" | "color generator";

export type Integrations =
  | "react"
  | "next.js"
  | "vue"
  | "nuxt"
  | "svelte"
  | "angular"
  | "astro"
  | "remix"
  | "meteor.js"
  | "gatsby"
  | "solidjs"
  | "qwik"
  | "laravel"
  | "symfony"
  | "rails"
  | "pheonix"
  | "django"
  | "flask"
  | "blazor"
  | "html"
  | "css"
  | "chakra ui"
  | "alpine.js";

const data: Data[] = [
  {
    name: "Flowbite",
    description:
      "Start developing with an open-source library of over 600+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
    url: "https://flowbite.com/blocks/",
    tags: ["components"],
    plans: ["free", "paid"],
    integrations: [
      "react",
      "next.js",
      "vue",
      "nuxt",
      "svelte",
      "angular",
      "astro",
      "remix",
      "meteor.js",
      "gatsby",
      "solidjs",
      "qwik",
      "laravel",
      "symfony",
      "rails",
      "pheonix",
      "django",
      "flask",
      "blazor",
    ],
    image: "/data/images/flowbite-logo.png",
  },
  {
    name: "HyperUI",
    description:
      "HyperUI is a collection of free Tailwind CSS components that can be used in your next project. With a range of components, you can build your next marketing website, admin dashboard, eCommerce store and much more.",
    url: "https://www.hyperui.dev/",
    integrations: ["html", "vue", "react"],
    tags: ["components"],
    plans: ["free"],
  },
  {
    name: "DaisyUI",
    description:
      "daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever.",
    integrations: ["html", "css"],
    tags: ["components", "themes", "templates"],
    url: "https://daisyui.com/",
    plans: ["free"],
    image: "/data/images/daisyui.png",
  },
  {
    name: "Tailwind UI",
    description:
      "Tailwind UI is an open source UI components library for React, Vue, Angular, Solid, and more.",
    url: "https://tailwindui.com/",
    tags: ["components", "themes", "templates"],
    plans: ["free", "paid"],
    integrations: ["react", "vue", "html"],
    image: "/data/images/tailwindui.png",
  },
  {
    name: "HorizonUI",
    description:
      "Start building your dashboard with Horizon UI, the popular Free React Admin Templates provider for Chakra UI, NextJS, and Tailwind CSS!",
    url: "https://horizon-ui.com/",
    tags: ["components", "themes", "templates"],
    plans: ["free", "paid"],
    integrations: ["chakra ui", "react", "next.js"],
    image: "/data/images/horizonui.png",
  },
  {
    name: "FloatUI",
    description: "Build and ship fast with Tailwind CSS UI components",
    url: "https://floatui.com/",
    integrations: ["html", "react", "vue", "svelte"],
    tags: ["components", "templates"],
    plans: ["free"],
    image: "/data/images/floatui.svg",
  },
  {
    name: "Tailgrids",
    description:
      "Tailwind CSS UI components, blocks, sections, and templates crafted for web apps, marketing, e-commerce, dashboards, and more — Browse and effortlessly copy-paste from over 500 components and templates to craft high-quality, custom Tailwind CSS websites without coding or designing from scratch. Now available for HTML, React, Vue, and Figma!",
    integrations: ["html", "react", "vue", "alpine.js"],
    tags: ["components", "templates", "themes"],
    plans: ["free", "paid"],
    url: "https://tailgrids.com/",
    image: "/data/images/tailgrids.svg",
  },
  {
    name: "NextUI",
    description:
      "NextUI is a UI library for React that helps you build beautiful and accessible user interfaces. Created on top of Tailwind CSS and React Aria.",
    integrations: ["next.js", "remix", "astro"],
    tags: ["components"],
    plans: ["free"],
    url: "https://nextui.org/",
  },
  {
    name: "UI Colors",
    description: "Tailwind CSS Color Generator",
    url: "https://uicolors.app",
    tags: ["color generator"],
    plans: ["free"],
  },
  {
    name: "Shadcn/ui",
    description:
      "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    url: "https://ui.shadcn.com/",
    tags: ["components"],
    integrations: ["react"],
    plans: ["free"],
  },
];

export default data;
