import { Avatar } from "@/shared/ui/avatar";
import { Banner } from "@/shared/ui/banner";
import { CardsGrid } from "@/widgets/cardsGrid";
import { Contacts } from "@/widgets/contacts";

export default function Home() {
  return (
    <div className="w-[100%] h-[100%] gap-5">
      <header className="w-[100%]">
        <Banner />
        <section className="user-section container mx-auto -mt-20 flex">
          <Avatar />
          <Contacts />
        </section>
      </header>
      <main className="w-[100%] h-[100%]">
        <CardsGrid />
      </main>
    </div>
  );
}
