import React from "react";
import Link from "next/link";

import styles from "../../styles/Header.module.css";
import Icon from "../Icon";

const Header = () => {
    const iconProps = {
        styles: {
            active: styles.active,
            firstLayer: styles.firstLayer,
            secondLayer: styles.secondLayer,
            icon: styles.icon,
        },
        icon: '/icons/exit',
        width: 22,
        height: 22,
    };

    return (
        <div className={styles.header}>
            <Link href={"/"}>
                <img className={styles.logo} src={"/image/logo.png"}/>
            </Link>
            <div className={styles.content}>
                <div className={styles.event}>Мероприятия</div>
                <div className={styles.auth}>
                    <div className={styles.exit}>Выход</div>
                    <Icon {...iconProps} />
                </div>
            </div>
        </div>
    );
};

export default Header;