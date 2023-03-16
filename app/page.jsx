import Hero from "../components/Hero";
import Search from "../components/Search";
import Footer from "../components/Footer";
import FollowCursor from "@/components/FollowCursor";

export default function Home() {
  return (
    <main className="overflow-y-scroll overflow-x-hidden bg-[#252525]">
      <section className="h-screen w-screen">
        <Hero />
      </section>
      <section id="search" className="w-screen min-h-screen overflow-scroll">
        <Search />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <FollowCursor />
    </main>
  );
}
