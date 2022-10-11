import Sink from "./Sink";
import Oven from "./Oven";

function Kitchen(props) {
  return (
    <div id="room">
      <h3>Kitchen</h3>
      <Oven />
      <Sink />
    </div>
  );
}

export default Kitchen;