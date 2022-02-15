import cryptoscreen from "../img/screen.png";
const Header = () => {
  return (
    <section className="header">
      <div className="blueblob"></div>
      <h1>What happens in blockchain, stays in blockchain.</h1>
      <p>
        You can’t ignore the blockchain anymore. You’d better start learning it.
        The time is now.
      </p>
      <div className="greenblob"></div>
      <div className="split">
        <div className="active">
          <button className="active">Get started</button>
        </div>
        <div className="outline">
          <button className="outline">Try for free</button>
        </div>
      </div>
      {/* <div className="screen">
        <img src={cryptoscreen} width="1200" height="600" alt="" />
      </div> */}
    </section>
  );
};

export default Header;