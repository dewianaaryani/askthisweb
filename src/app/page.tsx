import { PlaceHolderAndVanish } from "@/components/PlaceHolderAndVanish";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <HeroHighlight>
        <div  className="flex flex-col items-center justify-center sm:mb-6 px-4 sm:px-6 lg:px-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:leading-tight lg:leading-normal">
            Want to know about a website? <Highlight>Copy and Paste</Highlight> here
          </h1>

          {/* Adjust PlaceHolderAndVanish container to be responsive */}
          <div className="w-full max-w-md sm:max-w-xl px-3 sm:px-8">
            <PlaceHolderAndVanish />
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
}
