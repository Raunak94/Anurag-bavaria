import founderImage from "../../assets/Founder_img.jpg";
export default function Founder() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12">
      {" "}
      <div className="mx-auto w-full max-w-7xl rounded-[32px] border border-violet-700/40 bg-slate-950 p-5 shadow-[0_40px_120px_-60px_rgba(139,92,246,0.85)] backdrop-blur-xl sm:p-6 lg:p-8">
        {" "}
        {/* Section Badge */}{" "}
        <div className="-mt-10 flex justify-center">
          {" "}
          <div className="rounded-full bg-violet-600 px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-violet-800/40 sm:text-sm sm:tracking-[0.24em]">
            {" "}
            Founder{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-2 lg:items-center">
          {" "}
          {/* Founder Image */}{" "}
          <div className="overflow-hidden rounded-[28px] border border-violet-700/40 bg-slate-900/80 p-3 shadow-xl shadow-slate-950/20 sm:p-4">
            {" "}
            <img
              src={founderImage}
              alt="Founder"
              className="h-72 w-full rounded-[24px] object-cover sm:h-96 lg:h-full"
            />{" "}
          </div>{" "}
          {/* Founder Details */}{" "}
          <div className="flex h-full flex-col justify-center rounded-[28px] border border-violet-700/40 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20 sm:p-6 lg:p-8">
            {" "}
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              {" "}
              Anurag Bavaria{" "}
            </h3>{" "}
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-violet-300 sm:text-sm sm:tracking-[0.24em]">
              {" "}
              Founder @ ACFR{" "}
            </p>{" "}
            <p className="mt-5 max-w-prose text-base leading-7 text-slate-300 sm:mt-6 sm:leading-8">
              {" "}
              With a foundation in product design and a passion for digital
              storytelling, Anurag leads the team to create landing pages that
              are both visually striking and strategically built to
              convert.{" "}
            </p>{" "}
            <div className="mt-8 space-y-6 text-slate-300">
              {" "}
              <div>
                {" "}
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-200 sm:text-sm sm:tracking-[0.18em]">
                  {" "}
                  Education{" "}
                </h4>{" "}
                <p className="mt-2 text-base leading-7">
                  {" "}
                  Behavioural Science Researcher{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-200 sm:text-sm sm:tracking-[0.18em]">
                  {" "}
                  Experience{" "}
                </h4>{" "}
                <p className="mt-2 text-base leading-7">
                  {" "}
                  Over 8 years of experience helping startups and brands launch
                  engaging, conversion-focused digital experiences.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
