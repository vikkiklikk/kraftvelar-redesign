import Distribution from "@/components/Distribution";
import MainSection from "@/components/MainSection";
import Umbod from "@/components/Umbod";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainSection />
      <Distribution />
      <Umbod />
    </main>
  );
}
