import Container from "./core/Container";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const statsData = [
  {
    id: 1,
    icon: <FaBoxOpen className="text-white" size={36} />, // box icon
    number: "1,289",
    label: "Completed Delivery",
  },
  {
    id: 2,
    icon: <FaUsers className="text-white" size={36} />, // users with stars
    number: "745",
    label: "Satisfied Clients",
  },
  {
    id: 3,
    icon: <AiOutlineStar className="text-white" size={36} />, // award/star icon
    number: "68",
    label: "Awards Winner",
  },
  {
    id: 4,
    icon: <MdGroups className=" text-white" size={36} />, // team/group icon
    number: "46",
    label: "Team Members",
  },
];

export default function Stats() {
  return (
    <section
      aria-label="company stats"
      className="relative w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/logo.png')" }}
    >
      {/* dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/70" />

      <Container>
        <div className="relative z-10 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 items-center">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className="flex items-center md:items-end gap-6 md:gap-8 justify-start"
              >
                <div className="p-3 rounded-full bg-white/6 flex items-center justify-center">
                  {stat.icon}
                </div>

                {/* diagonal slash/divider */}
                <div className="w-1.5 h-12 bg-white/60 transform rotate-12 -translate-y-1" />

                <div>
                  <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-white/90 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
