import Distribution from "@/components/Distribution";
import MainSection from "@/components/MainSection";
import Solutorg from "@/components/Solutorg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainSection />
      <div className="flex flex-row mt-4 justify-between">
        <Solutorg />
        <Distribution />
      </div>
    </main>
  );
}
