import { Container, Grid } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import BannerSection from "../../components/BannerSection";
import CommentSection from "../../components/Comments";
import CountdownSection from "../../components/CountdownSection";
import InfoSection from "../../components/InfoSection";
import ThePieChart from "../../components/ThePieChart";
import { useAppContext } from "../../hooks";
import Web3 from "web3";
import { icoAbi, icoAddress, tokenAbi, chainId } from "../../config";

export default function IcoPage() {
  const web3 = new Web3(Web3.givenProvider);

  const icoContract = new web3.eth.Contract(icoAbi, icoAddress);
  const [tokenAddress, setTokenAddress] = useState();
  const [tokenName, setTokenName] = useState();
  const [tokenSymbol, setTokenSymbol] = useState();
  const [tokenDecimals, setTokenDecimals] = useState();
  const [tokenSupply, setTokenSupply] = useState();
  const [tokenPrice, setTokenPrice] = useState();
  const [tokenOffered, setTokenOffered] = useState();
  const [tokenStartTime, setTokenStartTime] = useState();
  const [tokenEndTime, setTokenEndTime] = useState();
  const [data1, setData] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [cap, setCap] = useState();
  const [contributor, setContributor] = useState();
  const [BNBInvestment, setBNBInvestment] = useState();
  const [tokenInvestment, settokenInvestment] = useState();
  const [BNBgenerated, setBNBGenerated] = useState();
  const [address, SetAddress] = useState();
  const [connected, SetConnected] = useState();
  const [toggle, setToggle] = useState();

  useEffect(() => {
    //  connect()

    async function abc() {
      await Web3.givenProvider.enable();
      const addresses = await web3.eth.getAccounts();
      const addressA = addresses[0];
      SetAddress(addressA);

      const dataAA = await icoContract.methods.getData().call((e, r) => {
        setTokenAddress(r.Token);
        setTokenName(r.tokenName);
        setTokenSymbol(r.tokenSymbol);
        setTokenDecimals(Number(r.tokenDecimal));
        setTokenSupply(r.tokenTotalSupply);
        setTokenPrice(r.tokenPrice);
        setTokenOffered(r.tokensOffered);
        setTokenStartTime(r.openingTime * 1000);
        setTokenEndTime(r.closingtime * 1000);
        setMin(r.minBuy / 1000000000000000000);
        setMax(r.maxBuy / 1000000000000000000);
        setCap(r.hardCap / 1000000000000000000);
        setContributor(r.contributors);
        setBNBGenerated(r.BNBcollected / 1000000000000000000);
      });

      const Data = await icoContract.methods.getArray().call((e, r) => {
        setData(r);
      });
      const BNB = await icoContract.methods
        .BNBinvested(addressA)
        .call((e, r) => {
          setBNBInvestment(r / 1000000000000000000);
        });
      const tokenInv = await icoContract.methods
        .tokenInvested(addressA)
        .call((e, r) => {
          settokenInvestment(r);
        });
    }
    abc();
  }, [toggle, address]);

  if (window.ethereum?.networkVersion !== chainId) {
    try {
      window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(chainId) }],
      });
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (err.code === 4902) {
        window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainName: "BSC Testnet",
              chainId: web3.utils.toHex(chainId),
              nativeCurrency: { name: "BSCTest", decimals: 18, symbol: "TBNB" },
              rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
            },
          ],
        });
      }
    }
  }

  // async function connect(){
  //   // const web3 = new Web3(Web3.givenProvider)
  //   // const addresses = await web3.eth.getAccounts()
  //   // setAddress(addresses[0])
  //   // console.log("addresses",addresses)
  //   if (window.ethereum.networkVersion !== chainId) {
  //     try {
  //       await window.ethereum.request({
  //         method: 'wallet_switchEthereumChain',
  //         params: [{ chainId: web3.utils.toHex(chainId) }],
  //       });
  //     } catch (err) {
  //         // This error code indicates that the chain has not been added to MetaMask.
  //       if (err.code === 4902) {
  //         await window.ethereum.request({
  //           method: 'wallet_addEthereumChain',
  //           params: [
  //             {
  //               chainName: 'BSC Testnet',
  //               chainId: web3.utils.toHex(chainId),
  //               nativeCurrency: { name: 'BSCTest', decimals: 18, symbol: 'TBNB' },
  //               rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  //             },
  //           ],
  //         });
  //       }

  //     }
  //   }

  // try {
  //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

  // } catch (error) {
  //   if (error.code === 4001) {
  //     // User rejected request
  //   }

  // }

  // }

  window.ethereum?.on("chainChanged", (r) => {
    var counter = 0;
    if (counter == 0) {
      setToggle(!toggle);
      counter++;
    }
  });

  const { isSmall } = useAppContext();

  return (
    <div>
      <BannerSection
        address={address}
        SetAddress={SetAddress}
        connected={connected}
        setConnected={SetConnected}
      />
      <Container sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            {isSmall && (
              <CountdownSection
                tokenEndTime={tokenEndTime}
                min={min}
                max={max}
                cap={cap}
                contributor={contributor}
                BNBInvestment={BNBInvestment}
                tokenInvestment={tokenInvestment}
                tokenSymbol={tokenSymbol}
                price={tokenPrice}
                tokenDecimal={tokenDecimals}
                BNBgenerated={BNBgenerated}
                address={address}
                toggle={toggle}
                setToggle={setToggle}
              />
            )}
            <InfoSection
              tokenAddress={tokenAddress}
              tokenName={tokenName}
              tokenSymbol={tokenSymbol}
              tokenDecimals={tokenDecimals}
              tokenSupply={tokenSupply}
              tokenPrice={tokenPrice}
              tokenOffered={tokenOffered}
              tokenStartTime={tokenStartTime}
              tokenEndTime={tokenEndTime}
            />
            {isSmall && (
              <ThePieChart data1={data1} BNBgenerated={BNBgenerated} />
            )}
            <CommentSection />
          </Grid>

          <Grid item md={4} xs={12}>
            {!isSmall && (
              <CountdownSection
                tokenEndTime={tokenEndTime}
                min={min}
                max={max}
                cap={cap}
                contributor={contributor}
                BNBInvestment={BNBInvestment}
                tokenInvestment={tokenInvestment}
                tokenSymbol={tokenSymbol}
                price={tokenPrice}
                tokenDecimal={tokenDecimals}
                BNBgenerated={BNBgenerated}
                address={address}
                toggle={toggle}
                setToggle={setToggle}
              />
            )}

            {!isSmall && (
              <ThePieChart data1={data1} BNBgenerated={BNBgenerated} />
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
