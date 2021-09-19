export interface partner {
    id: number,
    username: string,
    photoUrl: string,
}

export type partnerObject = {
    partner: partner,
}

export type partnerList = Array<partner>;

export type partnerLists = Array<partnerList>;

export interface partners {
    partners: partnerLists,
}
