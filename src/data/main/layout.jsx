import {
  FaBoxOpen,
  FaExclamationCircle,
  FaHeart,
  FaListAlt,
  FaReply,
  FaShoppingBasket,
  FaShoppingCart,
  FaStar,
  FaThumbsUp,
  FaUserCircle,
} from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { PiSlideshowFill } from "react-icons/pi";

export const layout = {
  admin_left_side: [
    {
      name: "Dashboard",
      icon: <MdWindow />,
      link: "/dashboard",
    },
    {
      name: "Order",
      icon: <FaShoppingCart />,
      link: "manage-order",
    },
    {
      name: "Add Product",
      icon: <FaBoxOpen />,
      link: "add-product",
    },
    {
      name: "Add Banner",
      icon: <PiSlideshowFill />,
      link: "add-banner",
    },
    {
      name: "Edit Profile",
      icon: <FaUserCircle />,
      link: "edit-profile",
    },

    {
      name: "Add Category",
      icon: <FaListAlt />,
      link: "add-category",
    },
    {
      name: "My Cart",
      icon: <FaShoppingBasket />,
      link: "my-cart",
    },
    {
      name: "My Reviews",
      icon: <FaStar />,
      link: "my-reviews",
    },
    {
      name: "My Report",
      icon: <FaExclamationCircle />,
      link: "my-report",
    },
    {
      name: "Feedback",
      icon: <FaThumbsUp />,
      link: "feedback",
    },
    {
      name: "Back to Home",
      icon: <FaReply />,
      link: "/",
    },
  ],
};
