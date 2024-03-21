import Messages from "../components/Messages";
import Input from "../components/Input";

function Chatbox () {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span> Trols </span>
        {/* change these to real icons */}
        <div className="chatIcons">
          <img src="images/poppy.png" alt="poppy from trolls"/>
          <img src="images/poppy.png" alt="poppy from trolls"/>
          <img src="images/poppy.png" alt="poppy from trolls"/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chatbox;