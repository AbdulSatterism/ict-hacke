import { FaCaretRight } from "react-icons/fa";

const cartInfo = [
  {
    id: "1",
    title: "Notice Board",
    img: "https://i.ibb.co/sR6Z532/15265409.png",
    topics: [
      "প্রজ্ঞাপন (স্মারক-৬৮, চাকরি স্থায়ীকরণ, প্রোগ্রামার ও সহকারী",
      "প্রোগ্রামার, তথ্য ও যোগায...",
      "অফিস আদেশ (দায়িত্ব বণ্টন)",
      " ২০২৪-২০২৫ অর্থবছরের বিজ্ঞপতি",
      "e-Tender For “Procurement of Food and Refreshment for Aspire to",
      "Innovate (a2i) Progr...",
      "অফিস আদেশ (অবমুক্তি, জনাব মির্জা মুরাদ হাসান বেগ, উপ-পরিচালক)",
    ],
  },
];
const NoticeCard = () => {
  return (
    <div className="grid gap-4 mb-4">
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

export default NoticeCard;
