import corporate_advisory from "../../assets/corporate_commercial_advisory.jpg";
import funding from "../../assets/funding_advisory.jpg";
import intecual from "../../assets/intectual.jpg";
import data_privacy from "../../assets/dataprivacy.jpg";
import media from "../../assets/media.jpg";
import despute from "../../assets/dispute.jpg";
import { motion } from "framer-motion";
export default function Practice() {
  const cards = [
    {
      title: "Corporate and Commercial Advisory",
      img: corporate_advisory,
    },
    {
      title: "Funding and Transactions Advisory",
      img: funding,
    },
    {
      title: "Intellecual Property and Brand Protection",
      img: intecual,
    },
    {
      title: "Data Privacy and Regularory Compliance",
      img: data_privacy,
    },
    {
      title: "Entertainment, Media and Technology",
      img: media,
    },
    {
      title: "Despute Resolution",
      img: despute,
    },
  ];

  return (
    <section className="px-6 py-45">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Our Practice Areas
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cards.slice(0, 6).map((c) => (
            <motion.article
              key={c.title}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
