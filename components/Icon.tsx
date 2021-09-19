import {buildIconPath} from "../utils/buildIconPath";
import {buildActiveClassName} from "../utils/buildActiveClassName";

type iconProps = {
    styles: {
        icon: string,
        firstLayer: string,
        secondLayer: string,
        active: string,
    };
    icon: string,
    width: number;
    height: number;
    active?: boolean;
}

const Icon = (props: iconProps) => {
    return (
        <div className={props.styles.icon}>
            <img
                className={props.styles.firstLayer}
                width={25}
                height={25}
                src={buildIconPath(props.icon, true)}
            />
            <img
                className={buildActiveClassName(props.styles.secondLayer, props.styles.active, props.active)}
                width={25}
                height={25}
                src={buildIconPath(props.icon, false)}
            />
        </div>
    );
};

export default Icon;