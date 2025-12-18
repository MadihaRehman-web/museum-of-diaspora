import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-white text-6xl font-bold mb-4">404</h1>
        <p className="text-[#CACACA] text-lg mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/home")}
          className="bg-white text-black px-6 py-3 font-semibold rounded hover:bg-gray-200 transition corsor-pointer"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
