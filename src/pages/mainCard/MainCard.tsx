import { FaCaretRight } from "react-icons/fa";

const cartInfo = [
  {
    id: "1",
    title: "About us",
    img: "https://i.ibb.co/KDWLDmh/921347.png",
    topics: [
      "Vision & Mission",
      "Organogram",
      "Officers/Staff",
      "Work Distribution",
    ],
  },
  {
    id: "2",
    title: "Notice/Circular",
    img: "https://i.ibb.co/xF0m2bz/8003308.png",
    topics: [
      "Notification/Circular",
      " Office orders/ Government Orders (GO)",
      "No Objection Certificate (NOC)",
      "News Notifications",
      " Tender/Recruitment Notice",
    ],
  },
  {
    id: "3",
    title: "Citizen e-Services",
    img: "https://i.ibb.co/vLMtvF9/2400317.png",
    topics: [
      " Donation in ICT Innovation",
      "Fellowship & Scholarship",
      " Hi-Teck Park One Stop Service",
      "Other e-Service",
    ],
  },
  {
    id: "4",
    title: "Annual Performance Management",
    img: "https://i.ibb.co/vd3v0Wq/10521278.png",
    topics: [
      "Guidelines/Circulars/APA",
      "Team/Focal Point",
      "Annual Performance Agreement & Result",
      "Monitoring and evaluation report",
      "APAMS software link",
    ],
  },
  {
    id: "5",
    title: "Right to Information",
    img: "https://i.ibb.co/Hxbf9X6/4529307.png",
    topics: [
      " Designated, Officer & Appellate Authority",
      "Application and appeal forms",
      "Self Expressible Information/Progress Report",
      "Laws/Rules/Workplan/Reports/",
    ],
  },
  {
    id: "6",
    title: "Innovative Activities",
    img: "https://i.ibb.co/tXd7M58/17378330.png",
    topics: [
      "Innovation Team",
      "Innovation Idea",
      "Innovation Work Plan/Publication",
      "Piloting Project",
    ],
  },
  {
    id: "7",
    title: "Budget & Projects",
    img: "https://i.ibb.co/9hsWmdY/16507147.png",
    topics: [
      "Annual Procurement Plan",
      "Budget & MTBF Budget",
      "Budget Reports/ Office Orders",
      "Important Implemented Projects",
    ],
  },
  {
    id: "8",
    title: "Miscellaneous",
    img: "https://i.ibb.co/N9rhf25/8463064.png",
    topics: [
      " Miscellaneous",
      "Different Forms",
      "Best Practice",
      "ICT Related Award",
      "Different Committee",
    ],
  },
  {
    id: "9",
    title: "Policies & Publications",
    img: "https://i.ibb.co/sR6Z532/15265409.png",
    topics: [
      "Policy",
      "Laws & Regulations/Guidelines & Strategies",
      "Publications & Annual Report",
      "Others Report",
    ],
  },
];

const MainCard = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
      {cartInfo?.map((info) => (
        <div
          data-aos="zoom-in"
          className="p-2  bg-base-100 h-full shadow-xl border-b-4 border-r-4 rounded-br-lg border-b-[#184d81] border-r-[#184d81]"
        >
          <h1 className="text-2xl font-bold mb-4 text-[#2685e4]">
            {info.title}
          </h1>
          <div className="flex p-4 gap-4 items-center">
            <img className="w-28" src={info.img} alt="" />

            <div>
              {info.topics.map((tp) => (
                <p className="flex text-[16px] items-center gap-2">
                  {" "}
                  <FaCaretRight className="text-[#2685e4]" />
                  {tp}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCard;
