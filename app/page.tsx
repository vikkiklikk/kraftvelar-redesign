import MainSection from "@/components/MainSection";
import Distribution from "@/components/Distribution";
import Solutorg from "@/components/Solutorg";
import VoruUrval from "@/components/VoruUrval";
import Tilkynningar from "@/components/Tilkynningar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainSection />
      <div className="flex flex-row mt-4 justify-between gap-4">
        <div className="w-1/2">
          <Distribution />
        </div>
        <div className="w-1/2">
          <Solutorg />
        </div>
      </div>
      <div className="flex flex-row w-full mt-4 justify-between gap-4">
        <div className="w-1/2 h-[644px]">
          <VoruUrval />
        </div>
        <div className="w-1/2  h-[644px]">
          <Tilkynningar />
        </div>
      </div>
    </main>
  );
}
