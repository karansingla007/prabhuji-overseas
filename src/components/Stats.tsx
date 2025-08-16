import Container from "./core/Container";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const statsData = [
  {
    id: 1,
    icon: <FaBoxOpen className="text-white" size={32} />, // box icon
    number: "1,289",
    label: "Completed Delivery",
  },
  {
    id: 2,
    icon: <FaUsers className="text-white" size={32} />, // users with stars
    number: "745",
    label: "Satisfied Clients",
  },
  {
    id: 3,
    icon: <AiOutlineStar className="text-white" size={32} />, // award/star icon
    number: "68",
    label: "Awards Winner",
  },
  {
    id: 4,
    icon: <MdGroups className=" text-white" size={32} />, // team/group icon
    number: "46",
    label: "Team Members",
  },
];

export default function Stats() {
  return (
    <div className="bg-gray-700 text-white mb-2 border">
      <Container>
        <div aria-label="stats section" className="my-8 text-white block">
          <div className="flex flex-wrap justify-around items-center py-8">
            {statsData.map((stat) => (
              <div className="flex items-center gap-4" key={stat.id}>
                <div>{stat.icon}</div>
                <div className="text-4xl font-bold mx-2">/</div>
                <div>
                  <div className="text-3xl font-bold">{stat.number}</div>
                  <div className="text-lg font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
