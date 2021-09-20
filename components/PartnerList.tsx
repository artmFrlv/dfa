import Partner from "./Partner";
import styles from "../styles/PartnerList.module.css";

const PartnerList = ({partnerList, payoutRate}) => {
    return (
        <div className={styles.partnerList}>
            <div className={styles.caption}>
                <div className={styles.largeSizeFont}>
                    <span>{payoutRate}</span>
                    <span style={{marginLeft: '50px'}}>{partnerList.length}</span>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.smallSizeFont}>
                    <div>Уровень выплат</div>
                    <div>Активных партнеров</div>
                </div>
            </div>
            <div className={styles.partners}>
                {partnerList.map(partner =>
                    <Partner key={partner.id} partner={partner}/>
                )}
            </div>
        </div>
    );
};

export default PartnerList;