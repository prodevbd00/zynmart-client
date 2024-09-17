import toast from "react-hot-toast";

const HomePage = () => {
  return (
    <div>
      <h1>this is our home page</h1>
      <button onClick={() => toast.success("wow it's working!")}>
        click me to notify
      </button>
    </div>
  );
};

export default HomePage;
