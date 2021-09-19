import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

import styles from "../styles/MyLink.module.css";
import {buildActiveClassName} from "../utils/buildActiveClassName";
import Icon from "./Icon";

type myLinkProps = {
    title: string;
    icon: string;
    path: string;
}

const MyLink = (props: myLinkProps) => {
    const router = useRouter();
    const active = router.pathname === props.path;
    const iconProps = {
        styles: {
            active: styles.active,
            firstLayer: styles.firstLayer,
            secondLayer: styles.secondLayer,
            icon: styles.icon,
        },
        icon: props.icon,
        width: 25,
        height: 25,
        active: active,
    };

    return (
        <div className={styles.linkContainer}>
            <Link href={props.path}>
                <div className={styles.link}>
                    <div className={buildActiveClassName(styles.chosen, styles.active, active)}/>
                    <Icon {...iconProps} />
                    <div className={buildActiveClassName(styles.title, styles.active, active)}>
                        {props.title}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MyLink;