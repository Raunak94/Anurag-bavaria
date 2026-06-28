export default function About() {
  return (
    <section className="h-[75vh] mt-8">
      <div className="m-auto h-full w-[90%] rounded-[32px] border border-violet-700/40 bg-slate-950 p-8 shadow-[0_40px_120px_-60px_rgba(139,92,246,0.85)]">
        <div className="-mt-12 flex justify-center">
          <div className="rounded-full bg-violet-600 px-6 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-violet-800/40">
            About
          </div>
        </div>
        <div className="mt-8 space-y-4 text-center text-sm leading-7 text-slate-300">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante, pulvinar convallis nulla nec, efficitur purus.
          </p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
          </p>
          <p>
            Enim facilisis gravida neque convallis a cras semper auctor neque
            vitae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Saepe magni culpa dolores nisi eius deserunt numquam maiores ad
            totam tempore assumenda, aliquam atque molestias error possimus
            fugiat, ex expedita nam.
          </p>
        </div>
      </div>
    </section>
  );
}
