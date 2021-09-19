import Navbar from "./Navbar";
import Header from "./Header";
import styles from "../../styles/MainContainer.module.css";

type mainContainerProps = {
    children: React.ReactNode,
}

const MainContainer = ({children}: mainContainerProps) => {
    return (
        <div className={styles.mainContainer}>
            <Header />
            <div className={styles.content}>
                <Navbar />
                <div className={styles.layout}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainContainer;