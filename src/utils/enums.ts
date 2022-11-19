// export enum CurrentAddressOwnershipType{
//     OWNED = 'owned',
//     RENTED ='rented',
//     PARENTALOWNED = 'parental owned'
// }
// export const AddressType = () =>{
//     return CurrentAddressOwnershipType;
// };

// export enum EducationalQualification{
//     SSLC = 'sslc',
//     HSC = 'hsc',
//     BACHELORS = 'bachlor',
//     MASTERS = 'master',
//     DOCTORALPHD = 'doctoral/phd',
    

// }
// export const Qualification = ()=>{
//     return   EducationalQualification;
// };

export enum  Status {
    MARRIED = 'married',
    UNMARRIED ='unmarried'
}
export const MartialStatus = () =>{
    return Status;
}

export enum mode_of_salary_credit{
    BANKTRANSFERNEFT = 'bankTransfer/NEFT',
    CASH = 'cash',
    CHEQUE = 'cheque'
}
export const ModeOfSalary = () =>{
    return mode_of_salary_credit;
};
