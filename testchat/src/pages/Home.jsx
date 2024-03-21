import Chatbox from '../components/Chatbox';
import Chats from '../components/Chats';
import Input from '../components/Input';
import Messages from '../components/Messages';
import Nav from '../components/Nav';
import Search from '../components/Search';
import Sidebar from '../components/Sidebar';

function Home () {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
}

export default Home;