import Card from "@/components/core/Card";
import Container from "@/components/core/Container";
import {
  FaBriefcase,
  FaPlane,
  FaUserFriends,
  FaUniversity,
  FaIdCard,
} from "react-icons/fa";
import {
  MdWork,
  MdAirplaneTicket,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsBuilding } from "react-icons/bs";
import { RiVisaLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";

export default function Services() {
  const servicesOfferedData = [
    {
      id: 1,
      icon: <FaBriefcase className="text-2xl text-gray-700" />,
      title: "Business Invitation",
      description:
        "Opening a business in Ukraine is a great investment with high potential for local sales, import/export, and affordable, large warehouses. The market offers growth opportunities, and the cost of doing business...",
    },
    {
      id: 2,
      icon: <FaPlane className="text-2xl text-blue-500" />,
      title: "Tourist Invitation",
      description:
        "We provide official tourist visa invitation letters for single, double, or multi–entry visas (up to 90 days). To get a visa, submit your application at the Ukrainian embassy with the invitation letter included.",
    },
    {
      id: 3,
      icon: <FaUserFriends className="text-2xl text-green-600" />,
      title: "Private Invitation",
      description:
        "A Private (Guest) invitation for a foreigner is the ground for processing a Private visa Type‘C’ short term. Suitable for those who wish to visit Ukraine for the purpose of reunification with family and friends.",
    },
    {
      id: 4,
      icon: <FaUniversity className="text-2xl text-indigo-600" />,
      title: "Study Invitation",
      description:
        "Ukrainian universities have a high-quality education. A lot of universities have courses in English or preparatory faculty for studying Russian or Ukrainian. Furthermore, English and French languages.",
    },
    {
      id: 5,
      icon: <FaIdCard className="text-2xl text-gray-600" />,
      title: "Temporary Residence Permit",
      description:
        "A Temporary Residence permit is a document that proves the identity of a foreigner or a stateless person to clarify that it's holder has legal grounds to reside temporarily in the territory of Ukraine.",
    },
    {
      id: 6,
      icon: <MdWork className="text-2xl text-orange-600" />,
      title: "Work Permit",
      description:
        "The fastest, most reliable legal way to migrate to Ukraine is by becoming the owner of a Ukrainian company. This provides residency rights and business opportunities under Ukrainian law.",
    },
    {
      id: 7,
      icon: <RiVisaLine className="text-2xl text-cyan-600" />,
      title: "e-Visa",
      description:
        "Applying for an e–visa through our service has lots of advantages. No need to make an appointment or present original documents to the Embassy or Consular Office, however, e–visa can be obtained easily anywhere with an internet connection.",
    },
    {
      id: 8,
      icon: <BsBuilding className="text-2xl text-gray-700" />,
      title: "Company Formation",
      description:
        "We offer full services for LLC registration in Ukraine, handling all necessary paperwork and procedures to establish your company legally and efficiently.",
    },
    {
      id: 9,
      icon: <MdAirplaneTicket className="text-2xl text-blue-400" />,
      title: "Air Ticket Reservation",
      description:
        "The main use of a dummy ticket is to apply for visas. Most embassies ask for a flight reservation during the visa application process. Dummy tickets are also used as proof of return to show at the immigration while travelling.",
    },
    {
      id: 10,
      icon: <BiWorld className="text-2xl text-green-700" />,
      title: "Schengen Visa",
      description:
        "A Schengen visa is a short stay visa allowing its holder to circulate in the Schengen area. The Schengen area covers 26 countries (Schengen States) without border controls between them.",
    },
    {
      id: 11,
      icon: <GiTakeMyMoney className="text-2xl text-yellow-600" />,
      title: "Driver's License",
      description:
        "If you are going to get the Ukraine drivers license, you should pass two state exams theory (computer test at DAI) and driving practice. You may study at any of the driving schools or with a private coach. It usually takes 2 months.",
    },
    {
      id: 12,
      icon: <MdOutlineHealthAndSafety className="text-2xl text-red-600" />,
      title: "Insurance for nomads",
      description:
        "We provide travel medical insurance for people worldwide while they are outside their home country. This coverage ensures access to healthcare during international travel.",
    },
  ];

  return (
    <div className="bg-gray-800 py-4">
      <Container>
        <div aria-label="services section" className="p-6">
          <div className="mx-auto text-4xl font-black text-center mb-4 text-white">
            Services
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4">
            {servicesOfferedData.map((serviceOffered) => {
              return (
                <Card
                  key={serviceOffered.id}
                  icon={serviceOffered.icon}
                  title={serviceOffered.title}
                  customClasses="bg-white"
                >
                  <div className="p-6 flex flex-col items-center justify-start min-h-36">
                    <div className="mt-2 text-sm text-gray-700 text-center">
                      {serviceOffered.description}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
