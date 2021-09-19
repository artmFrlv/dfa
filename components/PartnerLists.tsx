import PartnerList from "./PartnerList";
import styles from "../styles/PartnerLists.module.css";
import {partners} from "../types/partner";

const PartnerLists = ({partners}: partners) => {
    return (
        <div className={styles.partnerLists}>
            <h1 className={styles.text}>
                Моя структура
            </h1>
            <div className={styles.partners}>
                {partners.map((list, i) =>
                    <PartnerList key={i} partnerList={list} payoutRate={i + 1}/>
                )}
            </div>
        </div>
    );
};

export default PartnerLists;