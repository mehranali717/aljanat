import { MenuLinks } from "..";
import styles from "./sidebar.module.css";
import { MdContacts, MdDashboard, MdHelpCenter, MdMoney, MdReport, MdSettings } from "react-icons/md";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Agents",
        path: "/dashboard/agents",
        icon: <MdContacts />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdMoney />,
      },
      {
        title: "reports",
        path: "/dashboard/reports",
        icon: <MdReport />,
      },
    ],
  },
  {
    title: "User",
    list: [
      { title: "Setting", path: "dashboard/setting", icon: <MdSettings /> },
      { title: "help", path: "dashboard/help", icon: <MdHelpCenter /> },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.title}>
            <span className={styles.category}>{item.title}</span>
            {item.list.map((listItem) => (
              <MenuLinks item={listItem} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
