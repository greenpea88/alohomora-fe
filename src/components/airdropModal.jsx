import { useEffect, useState } from "react";
import axios from "axios";

export default function AirdropModal({
  isOpen,
  setIsOpen,
  accountAddress,
  type,
}) {
  const [isReceived, setIsReceived] = useState(false);

  useEffect(() => {
    // 받은 여부 확인
    console.log("check receive");
    if (!isReceived) {
      // airdrop 진행
    }
  }, []);

  // accountAddress와 type을 한 번 더 확인하자!

  return (
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Congratulations random Internet user!
        </h3>
        <p className="py-4">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p>
        <div className="flex flex-col items-center min-h-screen">
          <button
            data-theme="bumbleBee"
            className="btn btn-secondary items-center"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
