import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <Image src={item.img} width={260} height={160} alt="property image" className={styles.img}/>
      <span className={styles.cost}>{item.cost}</span>
      <h3 className={styles.title}>{item.title}</h3>
      <Link href="" className={styles.location}>
        {item.location}
      </Link>
      <span className={styles.propertyType}>
        {item.houseicon}
        {item.propertyType}
      </span>
      <span className={styles.area}>
        {item.areaicon}
        {item.dimentions}
      </span>
    </div>
  );
};
export default Card;
