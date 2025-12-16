const HeroSection = ({ backGround, children, element }: any) => {
  return (
    <div
      className={`relative bg-no-repeat bg-cover ${
        element === "home" ? "h-screen" : "h-[60vh]"
      } `}
      style={{ backgroundImage: `url(${backGround})` }}
    >
      <div className="absolute sm:bottom-[12%] sm:left-[11%] left-5 bottom-10">
        {children}
      </div>
    </div>
  );
};
export default HeroSection;
