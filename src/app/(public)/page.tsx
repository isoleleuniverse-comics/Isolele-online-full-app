import type { Metadata } from "next";
import { HomePage } from "@/features/home/ui/home-page";

export const metadata: Metadata = {
  title: "African Comics and African Games Universe",
  description:
    "Discover ISOLELE, the home of African comic storytelling and African games inspired by Kongo mythology and cultural heritage.",
};

export default function Page() {
  return <HomePage />;
}
 
