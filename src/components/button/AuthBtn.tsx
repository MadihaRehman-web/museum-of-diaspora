type authBtnType = {
  label: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
};

const AuthBtn: React.FC<authBtnType> = ({ label, clickHandler }) => {
  return (
    <button
      className="bg-white text-black font-semibold font-noto text-base leading-6 min-w-50 py-3 block ml-auto cursor-pointer"
      onClick={clickHandler}
    >
      {label}
    </button>
  );
};

export default AuthBtn;
