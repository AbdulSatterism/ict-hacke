const cardInfo = [
  {
    id: "1",
    name: "Abdul Satter",
    title: "Advisor",
    image: "https://i.ibb.co/JCg3DL2/myImage.jpg",
  },
  {
    id: "2",
    name: "Mr. Jon",
    title: "Secretary",
    image: "https://i.ibb.co/Wsg3rGT/teacher1.jpg",
  },
];

const SIdeCard = () => {
  return (
    <div className="grid gap-4">
      {cardInfo.map((item) => (
        <div  className=" p-2 h-full bg-base-100  ">
          <figure className="p-4">
            <img src={item.image} alt={item.name} className="h-80 w-full" />
          </figure>
          <div className=" mb-4 items-center text-center">
            <h2 className="text-3xl text-[#184d81]">{item.name}</h2>
            <h3 className="text-2xl text-[#2685e4]">{item.title}</h3>
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

export default SIdeCard;
