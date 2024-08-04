import MainSection from "@/components/MainSection";
import Distribution from "@/components/Distribution";
import Solutorg from "@/components/Solutorg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainSection />
      <div className="flex flex-row mt-4 justify-between gap-4">
        <div className="w-1/2">
          <Solutorg />
        </div>
        <div className="w-1/2">
          <Distribution />
        </div>
      </div>
    </main>
  );
}
