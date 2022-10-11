import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const FloorPlan = (props) => {
  return (
    <div id="house">
      <Bath size ="Full" />
      <Bedroom bedNum ="1" />
      <Bedroom bedNum ="2" />
      <Bath size ="Half" />
      <Bedroom bedNum ="3" />
      <Kitchen />
      <LivingRoom />
    </div>
  )
}

export default FloorPlan