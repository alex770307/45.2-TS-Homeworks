
import styles from './homePage.module.css'
import HomePageHomeworks from '../homePageHomeworks/HomePageHomeworks';



export default function HomePage():JSX.Element {
  return (
    <>
      <h2>alexs home page🏠</h2>
      <div className={styles.gridContainer}>
        <HomePageHomeworks />
      
        {/* <Link to="lesson-01">
          <div>Lesson 1</div>
        </Link> */}
      </div>
    </>
  );
}

