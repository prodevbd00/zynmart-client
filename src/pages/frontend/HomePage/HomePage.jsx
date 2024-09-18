import toast from "react-hot-toast";
import BrandsClient from "../../../components/frontComponents/BrandsClients/BrandsClient";

const HomePage = () => {
  return (
    <div>
      <h1>this is our home page</h1>
      <button onClick={() => toast.success("wow it's working!")}>
        click me to notify
      </button>
      <BrandsClient></BrandsClient>
      
    </div>
  );
};

export default HomePage;
