function Card({ children }) {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md space-y-6 text-sm">
      <h1 className="text-xl font-bold">My app</h1>
      <p>
        Choose an rendering option, type in the input, and see what happens.
      </p>
      {children}
    </div>
  );
}

export default Card;
