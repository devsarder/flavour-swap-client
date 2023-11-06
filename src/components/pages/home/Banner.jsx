import bannerImg from "../../../assets/images/13763339_5312659.jpg";
const Banner = () => {
  return (
    <div className=" h-[400px] my-7  ">
      <div className="relative h-full">
        <img
          className="h-full transform transition-all hover:scale-105  w-full object-cover rounded-lg"
          src={bannerImg}
          alt=""
        />
        <div className="absolute  bg-gradient-to-r from-[#8a3131] to-[rgba(21, 21, 21, 0.00) 100%)]-full text-white  top-1/2 pl-10">
          <div>
            <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-700">
              Working Together <br /> To Feed Our Neighbors
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
