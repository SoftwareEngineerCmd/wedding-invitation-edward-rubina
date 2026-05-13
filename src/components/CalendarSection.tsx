import Ring from "../assets/ring.svg";

interface CalendarDay {
  label: string;
  value: number | string;
  active?: boolean;
}

interface CalendarSectionProps {
  title: string;
  days: CalendarDay[];
  className?: string;
}

export const CalendarSection = ({
  title,
  days,
  className,
}: CalendarSectionProps) => {
  return (
    <section
      className={`w-full flex justify-center py-6 sm:py-8 md:py-10 ${className || ""}`}
    >
      <div className="flex flex-col items-center w-full px-4">
        {/* Title */}
        <h2 className="mb-6 sm:mb-8 md:mb-12 text-[24px] sm:text-[32px] md:text-[42px] italic text-[#d7c3a5] text-center armAllegroU">
          {title}
        </h2>

        {/* TABLE */}
        <div className="w-full max-w-6xl ">
          <table className="w-full border-collapse">
            {/* HEADER */}
            <thead>
              <tr>
                {days.map((day, index) => (
                  <th
                    key={`${day.label}-${index}`}
                    className="text-center text-[12px] sm:text-[18px] md:text-[30px] lg:text-[42px] italic font-serif text-black py-2 sm:py-4 md:py-6 armAllegroU"
                  >
                    {day.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              <tr>
                {days.map((day, index) => (
                  <td
                    key={`${day.value}-${index}`}
                    className="relative text-center py-2 sm:py-3 md:py-4"
                  >
                    <div className="relative flex items-center justify-center mx-auto w-9 h-9 sm:w-13 sm:h-13 md:w-19 md:h-19 lg:w-22.5 lg:h-22.5">
                      {day.active && (
                        <>
                          {/* Ring */}
                          <img
                            src={Ring}
                            alt="ring"
                            className="absolute -top-2 sm:-top-3 md:-top-5 left-0 w-8 sm:w-12 md:w-16 lg:w-20 pointer-events-none select-none swing"
                          />
                        </>
                      )}

                      <span
                        className={`text-[18px] sm:text-[28px] md:text-[42px] lg:text-[52px] font-light ${
                          day.active ? "text-[#d7c3a5]" : "text-black"
                        }`}
                      >
                        {day.value}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
