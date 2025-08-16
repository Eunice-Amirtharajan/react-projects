const ShimmerUI = () => {
  return (
    <div className="shimmer-container">
      {Array(10).fill().map((_,index)=><div key={index} className="shimmer-card">Cards</div>)}
    </div>
  );
};

export default ShimmerUI;
