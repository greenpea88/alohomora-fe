import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import { ethers } from "ethers";
import AirDropModal from "./components/airdropModal";
import {
  HeadlessModal,
  HeadlessModalMountThenOpen,
} from "./components/HeadlessModal";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [accountAddress, setAccountAddress] = useState("");
  const [type, setType] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [validAddress, setValidAddress] = useState(false);

  const [isHeadlessModalOpen, setIsHeadlessModalOpen] = useState(false);
  const [isHeadlessModalMounted, setIsHeadlessModalMounted] = useState(false);

  useEffect(() => {
    // page에 접근할 때 query param으로 들어온 값을 읽음
    console.log(searchParams.get("type"));
    setType(searchParams.get("type"));
  }, []);

  const handleTextChange = (e) => {
    setIsLoading(true);
    setAccountAddress(e.target.value);
  };

  async function handleButtonClick() {
    console.log("button clicked");
    setIsOpen(true);
    console.log({ isOpen });
  }

  const checkIsRegistered = useCallback(
    debounce(async (accountAddress) => {
      console.log({ accountAddress });
      const validAddress = ethers.utils.isAddress(accountAddress);
      console.log({ validAddress });
      setValidAddress(validAddress);
      if (validAddress) {
        const res = await axios.get(
          "https://api.mumbai.croffle.me/api/v1/public/wallets/is-registered",
          {
            params: { accountAddress },
          }
        );
        const isRegistered = res.data.data.isRegistered;
        console.log({ isRegistered });
        setIsRegistered(isRegistered);
      }
      setIsLoading(false);
    }, 1000),
    []
  );

  useEffect(() => {
    checkIsRegistered(accountAddress);
  }, [accountAddress]);

  return (
    <div
      className="flex flex-col items-center min-h-screen"
      style={{
        backgroundColor: "#282c34",
      }}
    >
      <div className="w-full max-w-xs form-control">
        <label className="label"></label>
        <input
          type="text"
          placeholder="KONKRIT 주소를 입력해주세요"
          className="w-full max-w-xs input input-bordered"
          onChange={handleTextChange}
          value={accountAddress}
        />
        <label className="label">
          <span className="text-white label-text-alt">
            {accountAddress ? (
              <>
                {isLoading ? (
                  <div>주소를 확인하고 있어요.</div>
                ) : !validAddress ? (
                  <div>올바른 지갑 주소가 아닙니다.</div>
                ) : isRegistered ? (
                  <div>KONKRIT 주소입니다.</div>
                ) : (
                  <div>KONKRIT 주소를 입력해주세요.</div>
                )}
              </>
            ) : null}
          </span>
        </label>
      </div>
      <button
        data-theme="bumblebee"
        className="btn btn-secondary btn-wide"
        onClick={handleButtonClick}
        disabled={!isRegistered}
      >
        에어드랍 받기
      </button>
      {isOpen && <AirDropModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <hr />
      <div className="p-4">
        <button
          type="button"
          onClick={() => setIsHeadlessModalOpen(true)}
          className="px-4 py-2 mr-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open HeadlessModal
        </button>

        <button
          onClick={() => setIsHeadlessModalMounted((v) => !v)}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Mount HeadlessModal
        </button>
      </div>
      <HeadlessModal
        isOpen={isHeadlessModalOpen}
        setIsOpen={setIsHeadlessModalOpen}
      />
      {isHeadlessModalMounted && <HeadlessModalMountThenOpen />}
    </div>
  );
}

export default App;
