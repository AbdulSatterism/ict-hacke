import { FaCaretRight } from "react-icons/fa";

const linkInfo = [
  {
    id: "1",
    title: "e-Services",
    topics: [
      "President's Office",
      "Prime Minister's Office",
      "Cabinet Division",
      "Bangladesh Karmachari Kallyan Board (BKKB)",
      "National Skills Development Authority",
      "Primary Digital Content",
      "National Portal",
    ],
  },
  {
    id: "2",
    title: "National Enterprise",
    topics: [
      " Web Mail",
      "Online Application",
      " National Enterprise Architecture",
      " CIRT",
      "Online Recruitment System",
      "One Stop Service (OSS) (Bangladesh Hi-Tech Park Authority)",
    ],
  },
  {
    id: "3",
    title: "ICT Services",
    topics: [
      " Web Mail",
      "Online Application",
      " National Enterprise Architecture",
      " CIRT",
      "Online Recruitment System",
      "One Stop Service (OSS) (Bangladesh Hi-Tech Park Authority)",
    ],
  },
];
const LinkCard = () => {
  return (
    <div className="grid  gap-4 my-4">
      {linkInfo?.map((info) => (
        <div className="p-2 h-full bg-base-100">
          <h1 className="text-2xl font-bold mb-4 text-center text-[#2685e4]">
            {info.title}
          </h1>
          <div className="flex p-4 gap-4 items-center">
            <div>
              {info.topics.map((tp) => (
                <p className="flex text-[16px] items-center gap-4 my-2">
                  {" "}
                  <FaCaretRight className="text-[#2685e4]" />
                  {tp}
                </p>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center p-1 px-4 border shadow-sm  rounded-md text-white bg-[#184d81]"
          >
            More
          </button>
        </div>
      ))}
    </div>
  );
};

export default LinkCard;
