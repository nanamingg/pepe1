const Header = () => {
  return (
    <header
      className="header-container"
      style={{
        backgroundColor: "#4c9540",
        fontSize: "20px",
        fontWeight: "bolder",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.9)",
      }}
    >
      <div className="  flex font-comportaa text-white h-full">
        <div className="flex items-center mx-auto">
          <div className="py-10 pb-15 pr-15">
            <img
              src="./images/pepetitle.webp"
              alt="pepetitle"
              style={{ width: "211px", height: "68px" }}
            />
          </div>
          <ul className="lg:flex ml-6">
            <button className="ml-6 mr-6">home</button>
            <button className="mr-6">about</button>
            <button className="mr-6">how to buy</button>
            <button className="mr-6">bridge</button>
            <button className="mr-6">tokenomics</button>
            <button className="mr-6">roadmap</button>
          </ul>
          <button
            className="px-8 py-2 rounded-full border ml-10"
            style={{ borderColor: "#fff", borderRadius: "30px" }}
          >
            buy now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
