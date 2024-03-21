import Nav from "../components/Nav";
import Search from "../components/Search";
import Chats from "../components/Chats";
function Sidebar () {
  return (
    <div className="sidebar">
      <Search />
      <Chats />
      <Nav />

    </div>
  );
}

export default Sidebar;