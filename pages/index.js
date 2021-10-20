import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "React";
import Market from "../artifacts/contracts/Market.sol/Market.json";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
/**
 *  Home page
 *
 * @author Piyush Mehta
 *
 * @return {*}
 */
const Home = () => {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    loadNFTs();
  }, []);

  const loadNFTs = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    const data = await marketContract.fetchMarketItems();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i, tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnit(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState(false);
  };

  if (loadingState === true && !nfts.length)
    return (
      <h1 className="px-20 py-10 text-3xl">No items in the Marketplace</h1>
    );

  return (
    <>
      <Head>
        <title>Divvy</title>
        <meta name="description" content="Made by Piyush Mehta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
