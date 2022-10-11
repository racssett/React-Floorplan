import Sink from "./Sink";

function Bath(props) {
    return (
      <div id="room">
        <h3>{props.size} Bathroom</h3>
        <Sink />
      </div>
    );
  }
  
  export default Bath;