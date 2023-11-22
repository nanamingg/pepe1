const Home = () => {
  return (
    <div className="bg-[#4c9540]">
      <div className="flex flex-col mx-auto relative mt-1">
        <img src="./images/111.webp" className="absolute z-10 opacity-20" />
        <div className=" flex items-center text-white text-2xl font-comportaa w-full justify-center z-20">
          <div className="pl-10 order-1 ml-10 ">
            <div className="flex items-center">
              <div className="ml-4 flex items-center h-[483px]">
                <div className="w-[600px]">
                  <h3 className="text-left text-5xl mb-10 -mt-40">
                    10SCAM pepe
                  </h3>
                  <h5 className="text-left text-3xl -mb-10">
                    the most memeable memecoin in existence. The dogs have had
                    their day, it’s time for Pepe to take reign.
                  </h5>
                </div>

                <div className="flex flex-wrap ">
                  <div className="flex items-center ml-auto">
                    <img
                      src="./images/2.webp"
                      alt="2"
                      style={{
                        width: "476px",
                        height: "483px",
                        marginLeft: "15px",
                        marginRight: "15px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mb-10 w-[580px] mx-10 -mt-40">
              <div className="w-[80px] h-[80px] flex mb-10 ">
                <img
                  src="./images/twitter.webp"
                  style={{ marginRight: "15px" }}
                />
                <img src="./images/tel.webp" style={{ marginRight: "15px" }} />
                <img
                  src="./images/dextools.webp"
                  style={{ marginRight: "15px" }}
                />
                <img
                  src="./images/etherscan.webp"
                  style={{ marginRight: "15px" }}
                />
                <img src="./images/cm c.webp" style={{ marginRight: "15px" }} />
                <img
                  src="./images/uniswap.webp"
                  style={{ marginRight: "15px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-50 justify-center ">
        <div className="flex">
          <div className="text-white border bg-opacity-30 flex rounded-full gap-2 py-[10px] px-10 w-[317px] h-[54px] mr-5 mb-5">
            <span className="flex-grow text-center ml-10">gemini</span>
            <div className="flex items-center">
              <img
                src="./images/gemini.webp"
                style={{ width: "43px", height: "42px" }}
                className="ml-auto"
              />
            </div>
          </div>

          <div className="text-white border bg-opacity-30 flex rounded-full gap-2 py-[10px] px-10 w-[317px] h-[54px] mr-5 mb-5">
            <span className="flex-grow text-center ml-10">binance</span>
            <div className="flex items-center">
              <img
                src="./images/bi.webp"
                style={{ width: "34px", height: "34px" }}
                className="ml-auto"
              />
            </div>
          </div>

          <div className="text-white border bg-opacity-30 flex rounded-full gap-2 py-[10px] px-10 w-[317px] h-[54px] mr-5 mb-5">
            <span className="flex-grow text-center ml-10">kucoin</span>
            <div className="flex items-center">
              <img
                src="./images/kucoin-logo.webp"
                style={{ width: "29px", height: "29px" }}
                className="ml-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="text-white border bg-opacity-30 flex rounded-full gap-2 py-[10px] px-10 w-[317px] h-[54px] mr-5 mb-5">
            <span className="flex-grow text-center ml-10">huobi</span>
            <div className="flex items-center">
              <img
                src="./images/huo.webp"
                style={{ width: "34px", height: "34px" }}
                className="ml-auto"
              />
            </div>
          </div>
          <div className="text-white border bg-opacity-30 flex rounded-full gap-2 py-[10px] px-10 w-[317px] h-[54px] mr-5 mb-5">
            <span className="flex-grow text-center ml-10">bybit</span>
            <div className="flex items-center">
              <img
                src="./images/Bybit.webp"
                style={{ width: "34px", height: "34px" }}
                className="ml-auto"
              />
            </div>
          </div>
          <div className="text-white border bg-opacity-30 flex rounded-full gap-2 py-[10px] px-10 w-[317px] h-[54px] mr-5 mb-5">
            <span className="flex-grow text-center ml-10">crypto.com</span>
            <div className="flex items-center">
              <img
                src="./images/crycom.webp"
                style={{ width: "34px", height: "34px" }}
                className="ml-auto"
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="text-white border bg-opacity-30 flex rounded-full gap-2 py-[10px] px-10 w-[317px] h-[54px] mr-5 mb-5">
              <span className="flex-grow text-center ml-10">bitget</span>
              <div className="flex items-center">
                <img
                  src="./images/bitget.webp"
                  style={{ width: "29px", height: "29px" }}
                  className="ml-auto"
                />
              </div>
            </div>
            <div className="text-white border bg-opacity-30 flex rounded-full gap-2 py-[10px] px-10 w-[317px] h-[54px] mr-5 mb-5">
              <span className="flex-grow text-center ml-10">okx</span>
              <div className="flex items-center">
                <img
                  src="./images/m2.webp"
                  style={{ width: "34px", height: "34px" }}
                  className="ml-auto"
                />
              </div>
            </div>
            <div className="text-white border bg-opacity-30 flex rounded-full gap-2 py-[10px] px-10 w-[317px] h-[54px] mr-5 mb-5">
              <span className="flex-grow text-center ml-10">bingx japan</span>
              <div className="flex items-center">
                <img
                  src="./images/bx.webp"
                  style={{ width: "34px", height: "34px" }}
                  className="ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
