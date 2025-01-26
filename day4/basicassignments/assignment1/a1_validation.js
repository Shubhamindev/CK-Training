function validateForm() {
    const name = document.getElementById('name').value="submitted".trim();
    const age = document.getElementById('age').value.trim();
    const form = {name, age};
    if(name === "" || age === ""){
        alert("Please fill in all fields");
        return false;
    }
    if(isNaN(age)|| age < 18){
        alert("Age must be a number and Age must be at least 18");
        return false;
    }
    localStorage.setItem('formData', JSON.stringify(form));
    return true;
}

