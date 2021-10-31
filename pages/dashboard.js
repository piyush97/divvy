import axios from "axios";
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import { nftaddress, nftmarketaddress } from "../config";
import { ThemeContext } from "../providers/ThemeProvider";

const CreatorDashboard = () => {
  const [nfts, setNfts] = useState([]);
  const [sold, setSold] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  const { mode } = useContext(ThemeContext);

  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      signer
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const data = await marketContract.fetchItemsCreated();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          sold: i.sold,
          image: meta.data.image,
        };
        return item;
      })
    );
    /* create a filtered array of items that have been sold */
    const soldItems = items.filter((i) => i.sold);
    setSold(soldItems);
    setNfts(items);
    setLoadingState("loaded");
  }
  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="px-20 py-10 text-3xl">No assets created</h1>;
  return (
    <div>
      <div className="p-4">
        <h2 className={`py-2 text-2xl ${mode === 'dark' ? 'text-white' : ''}`}>Items Created</h2>
        <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {nfts.map((nft, i) => (
            <div key={i} className="overflow-hidden border shadow rounded-xl">
              <img src={nft.image} className="rounded" />
              <div className="p-4 bg-black">
                <p className="text-2xl font-bold text-white">
                  Price - {nft.price} Matic
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4">
        {Boolean(sold.length) && (
          <div>
            <h2 className="py-2 text-2xl">Items sold</h2>
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              {sold.map((nft, i) => (
                <div
                  key={i}
                  className="overflow-hidden border shadow rounded-xl"
                >
                  <img src={nft.image} className="rounded" />
                  <div className="p-4 bg-black">
                    <p className="text-2xl font-bold text-white">
                      Price - {nft.price} Matic
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CreatorDashboard;
