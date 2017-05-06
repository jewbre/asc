interface ItemApiResponse {
    id : number;
    name : string;
    details : string;
    category : CategoryApiResponse;
    isChecked : boolean;
    isBought : boolean;
}