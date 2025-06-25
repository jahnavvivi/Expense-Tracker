const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-n-1 dark:bg-n-10 p-6 rounded-2xl shadow-md shadow-n-3 dark:shadow-n-8 border border-n-3/50 dark:border-n-7/50">
      <div
        className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl `}
      >
        {icon}
      </div>

      <div>
        <h6 className="text-sm text-gray-500 dark:text-gray-200 mb-1">{label}</h6>
        <span className="text-[22px]">₹{value}</span>
      </div>
    </div>
  );
};

export default InfoCard;
