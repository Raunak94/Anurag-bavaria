import { useEffect, useState } from "react";

const topics = [
  "technology",
  "business",
  "science",
  "health",
  "entertainment",
  "sports",
  "Law",
];

export default function Insights() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [topic, setTopic] = useState("technology");

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    setTopic(randomTopic);

    try {
      const response = await fetch(
        `https://saurav.tech/NewsAPI/top-headlines/category/${encodeURIComponent(randomTopic)}/in.json`,
      );

      if (!response.ok) {
        throw new Error("Unable to fetch news. Please check your network.");
      }

      const data = await response.json();
      const fetchedArticles = data.articles || [];

      if (!Array.isArray(fetchedArticles) || fetchedArticles.length === 0) {
        throw new Error("No news available for this topic. Try again.");
      }

      setArticles(fetchedArticles.slice(0, 6));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="px-6 py-45">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-violet-700/40 bg-slate-950 p-8 shadow-xl shadow-slate-950/20 text-slate-100">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
              Insights
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white">
              Latest headlines
            </h1>
            <p className="mt-2 text-slate-400">
              Showing stories for "{topic}". Refresh or click the button to load
              new news.
            </p>
          </div>
          <button
            onClick={fetchNews}
            className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            {loading ? "Loading..." : "Generate new news"}
          </button>
        </div>

        {error ? (
          <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-6 text-red-200">
            {error}
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {articles.length === 0 && !loading ? (
              <div className="rounded-3xl border border-dashed border-slate-700/60 bg-slate-900/80 p-8 text-slate-400">
                No news available. Try again in a moment.
              </div>
            ) : (
              articles.map((article, index) => (
                <article
                  key={article.url || index}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20"
                >
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="mb-5 h-48 w-full rounded-3xl object-cover"
                    />
                  )}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-violet-300">
                      <span>{article.source?.name || "Unknown source"}</span>
                      <span>•</span>
                      <span>
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                      {article.title}
                    </h2>
                    <p className="text-slate-300 leading-7">
                      {article.description ||
                        article.content ||
                        "No description available."}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-100"
                    >
                      Read full story
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
