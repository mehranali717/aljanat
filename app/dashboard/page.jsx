import { fakeData } from "../fakedata";
import { Card, styles } from "../ui";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      {fakeData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Dashboard;
