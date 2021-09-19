import MainContainer from "../../components/core/MainContainer";
import fetchPartners from "../../API/fetchPartners";
import PartnerLists from "../../components/PartnerLists";
import {partners} from "../../types/partner";

const Structure = ({partners}: partners) => {
    return (
        <div className={"body"}>
            <MainContainer>
                <PartnerLists partners={partners}/>
            </MainContainer>
        </div>
    );
};

export default Structure;

export async function getStaticProps() {
    const partners = fetchPartners();
    return {
        props: {
            partners,
        }
    }
}
