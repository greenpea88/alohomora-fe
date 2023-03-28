import React, { useEffect } from "react";
import { useState } from "react";
import LoadingModal from "./components/loadingModal";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [accountAddress, setAccountAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [type, setType] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // page에 접근할 때 query param으로 들어온 값을 읽음
    console.log(searchParams.get("type"));
    setType(searchParams.get("type"));
  }, []);

  async function checkWalletAddr() {}

  async function handleButtonClick() {
    setIsLoading(true);
    setIsOpen(true);

    // make an API call or any async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
  }

  return (
    <div
      className="flex flex-col items-center min-h-screen"
      style={{
        backgroundColor: "#282c34",
      }}
    >
      <div className="form-control w-full max-w-xs">
        <label className="label"></label>
        <input
          type="text"
          placeholder="KONKRIT 주소를 입력해주세요"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt text-white">
            입력 account address에 대한 verify 결과 작성 예정
            {isLoading ? (
              <div class="flex space-x-2 animate-pulse">
                <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
              </div>
            ) : (
              <div>로딩 중 아님</div>
            )}
          </span>
        </label>
      </div>
      <button
        data-theme="bumblebee"
        className="btn btn-secondary btn-wide"
        onClick={handleButtonClick}
      >
        에어드랍 받기
      </button>
      <LoadingModal
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default App;
