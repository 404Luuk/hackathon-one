const SettingsCard = () => {
  const cancelMembership = () => {
    // Check if person has a membership
    // Remove membership from account, fill with something like "none"
  };

  return (
    <div className="border w-[40%] p-5 rounded-md">
      <h3>Name: (name)</h3>
      <h3>Address: (address)</h3>
      <h3>Membership: (membership)</h3>
      <button className="bg-gray-200 p-4 py-2 rounded-md mt-5 hover:bg-gray-300">Cancel membership</button>
    </div>
  );
};

export default SettingsCard;
