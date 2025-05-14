const Categories = () => {
  return (
    <div className="bg-white rounded-sm">
      <div className="p-5 uppercase font-semibold">
        <h2>Categories</h2>
      </div>

      <div className="grid grid-cols-10">
        {[...Array(20).keys()].map((category) => (
          <div key={category} className={`flex flex-col items-center justify-center border border-slate-200 border-b-0 border-l-0 p-2 hover:shadow-lg duration-300 ${category+1==10 || category+1 == 20?'border-r-0':undefined} `}>
            <img className="" src="https://down-my.img.susercontent.com/file/7ea3e07f2e6f57272c6641e4ce3f1632@resize_w320_nl.webp" alt="category" />
            <h1 className="text-xs">Mobile Accessories</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
