import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  OrthographyPage,
  TextToAudioPage,
  ImageGenerationPage,
  AudioToTextPage,
  AssistantPage,
  ProsConsPage,
  ProsConsStreamPage,
  TranslatePage,
  ImageTunningPage,
} from "../pages";
import { DashboardLayout } from "../layouts/DashboardLayout";

export interface MenuRoute {
  to: string;
  icon: string;
  title: string;
  description: string;
  component: React.ReactElement;
}

export const menuRoutes: MenuRoute[] = [
  {
    to: "/orthography",
    icon: "fa-solid fa-spell-check",
    title: "Ortography",
    description: "Fix Orthograpy",
    component: <OrthographyPage />,
  },
  {
    to: "/pros-cons",
    icon: "fa-solid fa-code-compare",
    title: "Pros & Cons",
    description: "Compare pros and cons",
    component: <ProsConsPage />,
  },
  {
    to: "/pros-cons-stream",
    icon: "fa-solid fa-water",
    title: "As stream",
    description: "With stream message",
    component: <ProsConsStreamPage />,
  },
  {
    to: "/translate",
    icon: "fa-solid fa-language",
    title: "Translate",
    description: "Translate to othe languages",
    component: <TranslatePage />,
  },
  {
    to: "/text-to-audio",
    icon: "fa-solid fa-podcast",
    title: "Text to audio",
    description: "Convert text to audio",
    component: <TextToAudioPage />,
  },
  {
    to: "/image-generation",
    icon: "fa-solid fa-image",
    title: "Images",
    description: "Generate Images",
    component: <ImageGenerationPage />,
  },
  {
    to: "/image-tunning",
    icon: "fa-solid fa-wand-magic",
    title: "Edita images",
    description: "Continuos generation",
    component: <ImageTunningPage />,
  },
  {
    to: "/audio-to-text",
    icon: "fa-solid fa-comment-dots",
    title: "Audio to texto",
    description: "Convert audio to text",
    component: <AudioToTextPage />,
  },
  {
    to: "/assistant",
    icon: "fa-solid fa-user",
    title: "Assistant",
    description: "Assistant information",
    component: <AssistantPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      ...menuRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: "",
        element: <Navigate to={menuRoutes[0].to} />,
      },
    ],
  },
]);
