import dataMock from "../entities/myStructureMock";
import {partnerLists} from "../types/partner";

export default function fetchPartners(): partnerLists{
    // мокаем данные(список партнеров)
    return dataMock;
}