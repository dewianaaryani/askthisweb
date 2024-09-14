import { PlaceHolderAndVanish } from "@/components/PlaceHolderAndVanish";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroHighlight>
        <h1 className="text-4xl font-bold text-center px-96">
          Want to know about a website? <Highlight>Copy and Paste</Highlight> here
        </h1>
        
        <PlaceHolderAndVanish />
      </HeroHighlight>
    </div>
  );
}
