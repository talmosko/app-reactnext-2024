const wait = (milliseconds) => {
  const start = Date.now();
  while (Date.now() - start < milliseconds) {}
};

const HeavyComponent = () => {
  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-pink-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-cyan-400",
  ];
  wait(200);

  const randomNumber = Math.random() * 1000;

  return (
    <div
      className={`flex flex-col gap-2 p-4 border border-black ${
        colors[Math.floor(randomNumber) % colors.length]
      } text-white text-center rounded-lg shadow-md text-sm`}
    >
      <span>Heavy Component</span>
      <span>{randomNumber.toFixed(2)}</span>
    </div>
  );
};

export default HeavyComponent;
