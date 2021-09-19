import {useState} from "react";

import {NavbarLinks} from "../../entities/NavbarLinks";
import styles from "../../styles/Navbar.module.css";
import MyLink from "../MyLink";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const navbarClassName = [styles.navbar];
    let icon = '/icons/menu.svg';
    if (active) {
        navbarClassName.push(styles.active);
        icon = '/icons/cross.svg';
    }
    return (
        <div>
            <div className={styles.button} onClick={() => setActive(prevState => !prevState)}>
                <img className={styles.menu} src={icon} width={25} height={25}/>
            </div>
            <div className={navbarClassName.join(' ')}>
                {NavbarLinks.map((link) => (
                    <MyLink key={link.title} title={link.title} icon={link.svgPath} path={link.routePath}/>
                ))}
            </div>
        </div>
    );
};

export default Navbar;