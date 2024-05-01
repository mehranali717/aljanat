import { Header, Sidebar, styles } from "../ui";
const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <div className={styles.contentInner}>
        {children}
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
