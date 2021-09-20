import Image from 'next/image';

import styles from '../styles/Partner.module.css';
import {partnerObject} from "../types/partner";

const Partner = ({partner}: partnerObject) => {
    return (
        <div className={styles.partnerInfo}>
            <Image className={styles.avatar} src={partner.photoUrl} width={25} height={25}/>
            <div className={styles.partnerUsername}>
                {partner.username}
            </div>
        </div>
    );
};

export default Partner;