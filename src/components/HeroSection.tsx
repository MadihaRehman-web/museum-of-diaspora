const HeroSection = ({ backGround, children, element }: any) => {
  return (
    <div
      className={`relative bg-no-repeat bg-cover ${
        element === "home" ? "h-screen" : "h-[60vh]"
      } `}
      style={{ backgroundImage: `url(${backGround})` }}
    >
      <div className="absolute bottom-[12%] left-[11%]">{children}</div>
    </div>
  );
};
export default HeroSection;
