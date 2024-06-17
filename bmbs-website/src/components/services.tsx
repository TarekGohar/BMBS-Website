import ServiceCard from "@/components/service-card";

export default function Services() {
  return (
    <section id="services" className="px-8 mb-24">
      <div className="container mx-auto max-w-6xl px-6 py-12 mt-10 flex flex-col items-center justify-center">
        <div className="font-bold text-6xl text-pink-600">Services</div>
      </div>

      <div className="mb-12 flex flex-col lg:flex-row items-center lg:items-stretch space-y-10 justify-between lg:space-y-0 lg:space-x-12 max-w-6xl mx-auto">
        <ServiceCard
          title="Corporate"
          description="Combining a bespoke bar service with a highly trained professional staff, Brahm Mauer Bar Services ensures that the event is a success in both the eyes of the client as well as their guests."
          image="/images/corporate.jpg"
        />
        <ServiceCard
          title="Festivals"
          description="We elevate the VIP experience at Montréal's most renowned festivals. From the coldest festival in the world to the main stage at Osheaga, there is no festival too big or too small for Brahm Mauer and his team."
          image="/images/festival.jpg"
        />
        <ServiceCard
          title="Weddings"
          description="Recognized for making wedding dreams unforgettable realities. Our skilled mixologists will delight your guests with enticing cocktails and unparalleled service."
          image="/images/bar.jpg"
        />
      </div>
    </section>
  );
}
