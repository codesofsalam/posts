const StyledHeading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
      <div className="relative p-8 text-center">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg transform -rotate-1"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg transform rotate-1"></div>

        <div className="relative bg-black/40 backdrop-blur-md p-8 rounded-lg shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-wide leading-relaxed">
            Who Thinks They&apos;re
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-transparent bg-clip-text tracking-wide leading-relaxed py-3">
            &quot;Not Good Enough&quot;
          </h1>

          <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400 rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-400 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default StyledHeading;
