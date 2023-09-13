"use client";

import { useState } from "react";
import MembershipCard from "../MembershipCard/MembershipCard";

const Membership = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button className="bg-gray-200 p-4 py-2 rounded-md mt-5 hover:bg-gray-300" onClick={() => toggleModal()}>
        Show membership card
      </button>
      {open && <MembershipCard toggleModal={toggleModal} />}
    </div>
  );
};

export default Membership;
