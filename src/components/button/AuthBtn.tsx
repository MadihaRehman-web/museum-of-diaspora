type authBtnType = {
  label: string;
};

const AuthBtn: React.FC<authBtnType> = ({ label }) => {
  return (
    <button className="bg-white text-black font-semibold font-noto text-base leading-6 min-w-50 py-3 block ml-auto cursor-pointer">
      {label}
    </button>
  );
};

export default AuthBtn;
