import { FC } from "react";
import QRCode from "react-qr-code";

interface MembershipCardProps {
  toggleModal: () => void;
}

const MembershipCard: FC<MembershipCardProps> = ({ toggleModal }) => {
  return (
    <div className="w-screen h-screen top-0 left-0 absolute bg-black/20 flex items-center justify-center">
      <div className="bg-white w-[600px] h-[400px] p-5">
        <div className="flex justify-between border-b">
          <h1>Membership card</h1>
          <button className="bg-gray-200 px-2 rounded-[50%] mb-4" onClick={() => toggleModal()}>
            X
          </button>
        </div>
        <div className="mt-4">
          <h3>Name: ()</h3>
          <QRCode value="access granted" style={{ height: "150px", width: "150px" }} />
          <h3>(membership type)</h3>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
