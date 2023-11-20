import React from "react";

const Header = () => {
  return (
    <header
      className=""
      style={{
        backgroundColor: "#039112",
        fontSize: "23px",
        fontWeight: "bold",
      }}
    >
      <div className="container flex justify-center items-center font-comportaa text-white h-full">
        <div className="flex items-center">
          <div className="w-136 h-30 py-6 pr-6">
            <img
              src="./images/pepetitle.webp"
              alt="pepetitle"
              style={{ width: "211px", height: "68px" }}
            />
          </div>
          <ul className="hidden lg:flex ml-6">
            <li className="header-menu mr-6">home</li>
            <li className="header-menu mr-6">about</li>
            <li className="header-menu mr-6">how to buy</li>
            <li className="header-menu mr-6">bridge</li>
            <li className="header-menu mr-6">tokenomics</li>
            <li className="header-menu mr-6">roadmap</li>
          </ul>
          <button
            className="header-menu px-4 py-2 rounded-full border text-sm"
            style={{ borderColor: "#fff", borderRadius: "20px" }}
          >
            buy now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
