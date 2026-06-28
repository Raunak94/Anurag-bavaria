import { useEffect, useRef, useState } from "react";

const formatDate = (year, month, day) => {
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const firstDayOfMonth = new Date(calendarYear, calendarMonth, 1).getDay();
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();

  const handleSelectDate = (day) => {
    setDate(formatDate(calendarYear, calendarMonth, day));
    setIsCalendarOpen(false);
  };

  const prevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear((year) => year - 1);
    } else {
      setCalendarMonth((month) => month - 1);
    }
  };

  const nextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear((year) => year + 1);
    } else {
      setCalendarMonth((month) => month + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Contact request from ${name || "visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\nDate: ${date}\n\nMessage:\n${message}`;
    window.location.href = `mailto:raunak.gaggar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto grid min-h-full max-w-[1370px] gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="flex h-full flex-col rounded-[32px] border border-violet-700/40 bg-slate-950 p-8 shadow-[0_40px_120px_-60px_rgba(139,92,246,0.85)] backdrop-blur-xl">
          <div className="-mt-12 flex justify-center">
            <div className="rounded-full bg-violet-600 px-6 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-violet-800/40">
              Contact
            </div>
          </div>

          <div className="mt-10 flex h-full flex-col justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 text-slate-200"
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-100"
                >
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-3xl border border-violet-600/50 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-100"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-3xl border border-violet-600/50 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Write your message here"
                  className="w-full rounded-3xl border border-violet-600/50 bg-slate-950/80 px-4 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div className="space-y-2 relative" ref={pickerRef}>
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-slate-100"
                >
                  Select date
                </label>
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen((open) => !open)}
                  className="w-full rounded-3xl border border-violet-600/50 bg-slate-950/80 px-4 py-3 text-left text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {date || "Click to select a date"}
                </button>

                {isCalendarOpen && (
                  <div className="absolute left-0 top-full mt-3 w-full rounded-3xl border border-white/10 bg-slate-900 p-4 text-slate-100 shadow-2xl shadow-slate-950/40">
                    <div className="mb-3 flex items-center justify-between text-sm text-slate-200">
                      <button
                        type="button"
                        onClick={prevMonth}
                        className="rounded-full p-2 hover:bg-slate-800"
                      >
                        &lt;
                      </button>
                      <div className="font-semibold">
                        {monthNames[calendarMonth]} {calendarYear}
                      </div>
                      <button
                        type="button"
                        onClick={nextMonth}
                        className="rounded-full p-2 hover:bg-slate-800"
                      >
                        &gt;
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-400">
                      {dayNames.map((day) => (
                        <div key={day} className="py-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 grid grid-cols-7 gap-1 text-center text-sm">
                      {Array.from({ length: firstDayOfMonth }).map(
                        (_, index) => (
                          <div key={`blank-${index}`} className="py-2" />
                        ),
                      )}
                      {Array.from({ length: daysInMonth }).map((_, index) => {
                        const day = index + 1;
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => handleSelectDate(day)}
                            className="rounded-full px-2 py-2 transition hover:bg-violet-600 hover:text-white"
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex w-full max-w-[200px] items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        <div className="flex h-full flex-col rounded-[32px] border border-violet-700/40 bg-slate-950 p-5 shadow-[0_40px_120px_-60px_rgba(139,92,246,0.85)] backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="-mt-12 flex justify-center">
            <div className="rounded-full bg-violet-600 px-6 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-violet-800/40">
              Our Location
            </div>
          </div>

          <div className="mt-4 flex h-full flex-col rounded-[28px] border border-violet-700/40  shadow-xl shadow-slate-950/20">
            <div className="mb-4 rounded-3xl bg-slate-950/70 p-4 text-center text-sm font-semibold text-slate-100">
              Our Location
            </div>

            <div className="mb-4 rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">
                Anurag Bavaria &amp; Co.
              </p>
              <p>Mangalam Shradha, Residency Road</p>
              <p>Nagpur, Maharashtra, India</p>
              <a
                href="https://www.google.com/maps?q=21.142015380535764,79.09871447525974&z=17"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-cyan-300 hover:underline"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="h-[45vh] flex-1 overflow-hidden rounded-3xl border border-white/10 md:h-[58vh]">
              <iframe
                title="Google Maps location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2608400714826!2d79.09871447525974!3d21.142015380535764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0b71dbda8e7%3A0xde1b210d26fa5f21!2sMangalam%20Shradha!5e0!3m2!1sen!2sin!4v1782658265010!5m2!1sen!2sus"
                className="h-full w-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
