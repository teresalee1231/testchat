function Search () {
  return(
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='search for user'/>
      </div>
      <div className="userChat">
        <img src="/images/poppy.png" alt="poppy from trolls"/>
        <div className="userChatInfo">
          <span> Trols </span>
        </div>
      </div>
    </div>
  );
}

export default Search;