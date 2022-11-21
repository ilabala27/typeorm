import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';


export enum CurrentAddressOwnershipType{
    OWNED = 'owned',
    RENTED ='rented',
    PARENTALOWNED = 'parental owned'
};

export enum EducationalQualification{
    SSLC = 'sslc',
    HSC = 'hsc',
    BACHELORS = 'bachlor',
    MASTERS = 'master',
    DOCTORALPHD = 'doctoral/phd',
    

}
export enum  MaritalStatus {
    MARRIED = 'married',
    UNMARRIED ='unmarried'
}

export enum Mode_Of_Salary_Credit{
    BANKTRANSFERNEFT = 'bankTransfer/NEFT',
    CASH = 'cash',
    CHEQUE = 'cheque'
}


export class CreateUserDto{
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    DSA_CODE: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    Phone_number: Number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Name: String;

    // @IsNotEmpty()
    // @IsNumber()
    // @ApiProperty()
    // Date_of_birth: Number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Fathers_name: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    PAN_NO: String;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    AADHAAR_NO: Number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Mother_name: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    current_residence_address: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    landmark: String;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    area_pin_code: Number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({enum:['owned', 'rented', 'parental owned']})
    currentAddressOwnershipType: CurrentAddressOwnershipType;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    no_of_years_at_current_address: Number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    no_of_years_at_current_city: Number;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    personal_email: String;

    @IsNotEmpty()
    @ApiProperty({enum: ['sslc', 'hsc', 'bachelors', 'masters', 'doctoral/phd']})
    educational_qualification: EducationalQualification;

    
    @IsNotEmpty()
    @ApiProperty({enum:['married', 'unmarried']})
    marital_status: MaritalStatus;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name_of_spouse: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    net_in_hand_salary: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    gross_monthly_salary: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    current_company_name: String;

    @IsNotEmpty()
    @IsString() 
    @ApiProperty()
    current_company_address: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    company_landmark: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    current_company_area_pincode: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    designation: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    no_of_years_in_present_job: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    date_of_joining_current_company: String;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    office_landline_number: Number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    total_work_experience_in_years: String;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty()
    customer_office_emailid: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    bank_account_name: String;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    desired_required_loan_amount: Number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    purpose_of_loan: String;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name_of_a_relative: String;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    relative_phone_number: Number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name_of_a_field: String;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    friend_phone_number:Number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    friend_residence_address: String;

    @IsOptional()
    @IsString()
    @ApiProperty()
    CIDIL_score: String;

    @IsNotEmpty()
   @ApiProperty({enum:[ 'bankTransfer/NEFT', 'cash', 'cheque' ]})
    mode_of_salary_credit:Mode_Of_Salary_Credit;
}