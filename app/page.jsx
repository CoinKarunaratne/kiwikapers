import Hero from "../components/Hero";
import Search from "../components/Search";
import Footer from "../components/Footer";

export default async function Home() {
  const data = await fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=NZ&apikey=GnNLAW6WezIxEyLqrr6G2tJAdJdkgggm"
  );

  const res = await data.json();
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
    </main>
  );
}
