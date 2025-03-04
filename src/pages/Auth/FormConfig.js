
const FormConfig = {
    login: {
        title: "Login",
        fields: [
            {
                name: "email",
                type: "email",
                label: "Email",
                placeholder: "Enter your email",
                required: true,
            },
            {
                name: "password",
                type: "password",
                label: "Password",
                placeholder: "Enter your password",
                required: true,
            },
        ],
        submitButton: {
            text: "Login",
        },
    },
    signup: {
        title: "Signup",
        fields: [
            {
                name: "firstName",
                type: "text",
                label: "First Name",
                placeholder: "Enter your first name",
                required: true,
                minLength: 2,
                maxLength: 30,
            },
            {
                name: "lastName",
                type: "text",
                label: "Last Name",
                placeholder: "Enter your last name",
                required: true,
                minLength: 2,
                maxLength: 30,
            },
            {
                name: "phoneNo",
                type: "number",
                label: "Phone Number",
                placeholder: "Enter your phone number",
                required: true,
                pattern: "\\d{10}",
            },
            {
                name: "email",
                type: "email",
                label: "Email",
                placeholder: "Enter your email",
                required: true,
            },
            {
                name: "gender",
                type: "radio",
                label: "Gender",
                options: [
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" }
                ],
                required: true,
            },
            {
                name: "state",
                type: "dropdown",
                label: "State",
                options: [
                    { label: "Select State", value: "Select State" },
                    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
                    { label: "Assam", value: "Assam" },
                    { label: "Bihar", value: "Bihar" },
                    { label: "Chhattisgarh", value: "Chhattisgarh" },
                    { label: "Goa", value: "Goa" },
                    { label: "Gujarat", value: "Gujarat" },
                    { label: "Haryana", value: "Harayana" },
                    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
                    { label: "Jharkhand", value: "Jharkhand" },
                    { label: "Karnataka", value: "Karnataka" },
                    { label: "Kerala", value: "Kerala" },
                    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
                    { label: "Maharashtra", value: "Maharashtra" },
                    { label: "Manipur", value: "Manipur" },
                    { label: "Meghalaya", value: "Meghalaya" },
                    { label: "Mizoram", value: "Mizoram" },
                    { label: "Nagaland", value: "Nagaland" },
                    { label: "Odisha", value: "Odisha" },
                    { label: "Punjab", value: "Punjab" },
                    { label: "Rajasthan", value: "Rajasthan" },
                    { label: "Sikkim", value: "Sikkim" },
                    { label: "Tamil Nadu", value: "Tamil Nadu" },
                    { label: "Telangana", value: "Telangana" }
                ],
                required: true,
            },
            
            {
                name: "address",
                type: "textarea",
                label: "Address",
                placeholder: "Enter your address",
                required: false,
                maxLength: 100,
            },
            {
                name: "password",
                type: "password",
                label: "Password",
                placeholder: "Enter your password",
                required: true,
                minLength: 6,
                maxLength: 20,
            },
            {
                name: "confirmPassword",
                type: "password",
                label: "Confirm Password",
                placeholder: "Confirm your password",
                required: true,
            },
            {
                name: "terms",
                type: "checkbox",
                label: "I agree to the Terms & Conditions",
                required: true,
            },
        ],
        submitButton: {
            text: "Signup",
        },
    },
};

export default FormConfig;