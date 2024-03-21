function Input() {
  return(
    <div className="input">
      <input type="text" placeholder="Type something"/>
      <div className="send">
        <img src="/images/poppy.png" alt="poppy from trolls"/>
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src="/images/poppy.png" alt="poppy from trolls" />
        </label>
        <button> Trols </button>
      </div>
  </div>
  );


}

export default Input;