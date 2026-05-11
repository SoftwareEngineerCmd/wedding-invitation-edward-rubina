export const EventCard = ({
  icon,
  title,
  time,
  place,
  address,
  href,
}: {
  icon: string;
  title: string;
  time: string;
  place: string;
  address: string;
  href: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center p-4 ">
      {/* Icon */}
      <div className="mb-5">
        <img src={icon} alt={title} className="w-16 sm:w-20 object-contain" />
      </div>

      {/* Title */}
      <p className="text-lg font-medium mb-1">{title}</p>

      {/* Time */}
      <p className="font-bold mb-4.5 text-primary text-xl">{time}</p>

      {/* Place */}
      <p className="font-semibold mt-1 text-primary text-xl">{place}</p>

      {/* Address */}
      <p className="text-md">{address}</p>

      {/* Button */}
      <div className="mt-5">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className=" btn-primary "
        >
          Ինչպես հասնել
        </a>
      </div>
    </div>
  );
};
