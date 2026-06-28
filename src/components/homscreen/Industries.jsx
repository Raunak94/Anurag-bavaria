import startup from "../../assets/startup.jpg";
import AI from "../../assets/AI.jpg";
import fintech from "../../assets/fintech.jpg";
import ecom from "../../assets/ecommerce.jpg";
import media from "../../assets/media_entertainment.jpg";
import social from "../../assets/socialmedia.jpg";
import gaming from "../../assets/gaming.jpg";
import venture from "../../assets/venture.jpg";
export default function Practice() {
  const cards = [
    {
      title: "Startups and Emerging Ventures",
      img: startup,
    },
    {
      title: "Technolgies, AI and SaaS",
      img: AI,
    },
    {
      title: "Fintech and Blockchain",
      img: fintech,
    },
    {
      title: "E-Commerce and Consumer Brands",
      img: ecom,
    },
    {
      title: "Media Entertainment and Content Creators",
      img: media,
    },
    {
      title: "Social Media and Digital Platforms",
      img: social,
    },
    {
      title: "Gaming and Esports",
      img: gaming,
    },
    {
      title: "Venture Capital, Private Equity and Investment Funds",
      img: venture,
    },
  ];

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {cards.slice(0, 8).map((c) => (
            <article
              key={c.title}
              className="rounded-xl border border-white/10 bg-slate-900 p-4 text-center"
            >
              <img
                src={c.img}
                alt={c.title}
                className="mx-auto mb-4 h-32 w-full rounded-md object-cover"
              />
              <h3 className="mb-2 text-lg font-semibold text-white">
                {c.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
