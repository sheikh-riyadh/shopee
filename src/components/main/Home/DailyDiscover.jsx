const DailyDiscover = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-center p-5 bg-white border-b-4 border-primary uppercase font-medium text-primary">
        <h2>Daily Discover</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {[...Array(12).keys()].map((product) => (
          <div
            key={product}
            className="bg-white group border border-slate-200  hover:border-primary border-b-0">
            <img
              src="https://down-my.img.susercontent.com/file/80d1ce119eb6efbb2aad9f82d6921d57@resize_w450_nl.webp"
              alt="product"
            />
            <div>
              <div className="p-2 flex flex-col gap-3">
                <h2 className="text-sm">{`DESSINI ITALY Granite Aluminium Non Stick Casserole...`}</h2>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary font-semibold ">
                    Price: 250TK
                  </span>
                  <span className="text-xs">Sold: 2.5k</span>
                </div>
              </div>
              <div className="text-center text-white hidden group-hover:block relative w-full">
                <span className="bg-primary w-full absolute p-1 left-0">Find Similer</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyDiscover;
