import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    DSA_CODE: String;

    @Column({unique: true})
    Phone_number: Number;

    @Column()
    Name: String;

    @Column()
    Date_of_birth: Number;

    @Column()
    Fathers_name: String;

    @Column({unique: true})
    PAN_NO: String;

    @Column({unique: true})
    AADHAAR_NO: Number;

    @Column()
    Mother_name: String;

    @Column()
    current_residence_address: String;

    @Column()
    landmark: String;

    @Column()
    area_pin_code: Number;

    @Column()
    current_address_ownership_type: String;

    @Column()
    no_of_years_at_current_address: String;

    @Column()
    no_of_years_at_current_city: String;

    @Column({unique: true})
    personal_email: String;

    @Column()
    educational_qualification: Boolean;

    @Column()
    marital_status: Boolean;

    @Column()
    name_of_spouse: String;

    @Column()
    net_in_hand_salary: String;

    @Column()
    gross_monthly_salary: String;

    @Column()
    current_company_name: String;

    @Column()
    current_company_address: String;

    @Column()
    company_landmark: String;

    @Column()
    current_company_area_pincode: String;

    @Column()
    designation: String;

    @Column()
    no_of_years_in_present_job: String;

    @Column()
    date_of_joining_current_company: String;

    @Column()
    office_landline_number: Number;

    @Column()
    total_work_experience_in_years: String;

    @Column()
    customer_office_emailid: String;

    @Column()
    bank_account_name: String;

    @Column()
    desired_required_loan_amount: Number;

    @Column()
    purpose_of_loan: String;

    @Column()
    name_of_a_relative: String;

    @Column()
    relative_phone_number: Number;

    @Column()
    name_of_a_field: String;

    @Column()
    friend_phone_number: String;

    @Column()
    friend_residence_address: String;

    @Column()
    CIDIL_score: String;

    @Column()
    mode_of_salary_credit: Boolean;
}