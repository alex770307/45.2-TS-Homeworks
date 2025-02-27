import styles from "./profileCard.module.css";

interface IProfileCardProps {
  avatar: string;
  firstname: string;
  lastname: string;
  profession: string;
  hobby: string;
}

export default function ProfileCard({
  avatar,
  firstname,
  lastname,
  profession,
  hobby,
}: IProfileCardProps) {
  return (
    <div className={styles["profile-card"]}>
      <img src={avatar} alt={`${firstname} ${lastname}`} />
      <p>Name: {firstname} {lastname}</p>
      <p>Profession: {profession}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
}