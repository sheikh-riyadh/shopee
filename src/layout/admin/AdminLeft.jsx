import { Link, useLocation } from "react-router";
import { layout } from "../../data/main/layout";

const AdminLeft = () => {
  const { pathname } = useLocation();
  return (
    <aside className="flex flex-col gap-2 fixed h-[calc(100vh-125px)] overflow-y-auto bar-hidden">
      <div className="">
        <div className="flex flex-col gap-1 sticky top-0">
          <figure>
            <img
              className="rounded-full h-10"
              src="https://down-my.img.susercontent.com/file/my-11134226-7ras9-m9ordh9mxtz4a2_tn"
              alt="user"
            />
          </figure>
          <div className="flex flex-col">
            <span className="font-semibold">sheikhriyadh</span>
            <Link className="text-sm">Edit Profile</Link>
          </div>
        </div>
      </div>
      <hr className="text-slate-200" />
      <div className="relative z-0">
        <div className={`overflow-y-auto bar-hidden duration-300`}>
          <div className="flex flex-col gap-2 h-full">
            {layout.admin_left_side?.map(({ name, icon, link }) => (
              <Link
                className={`flex items-center gap-3 py-2 duration-200 text-sm text-black ${
                  pathname == `/dashboard/${link}` || pathname === link
                    ? "text-primary"
                    : undefined
                }`}
                to={`${link}`}
                title={name}
                key={name}
              >
                <span className="text-xl">{icon}</span>
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminLeft;
