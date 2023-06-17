let admissionDataUpload=(e)=>{
    e.preventDefault();
    let studentData={
        name: `${e.target.firstName.value} ${e.target.lastName.value}`,
        father_name:`${e.target.fatherName.value}`,
        mother_name:`${e.target.motherName.value}`,
        email:`${e.target.email.value}`,
        phone:parseInt(e.target.number.value),
        dep:`${e.target.Deparment.value}`,
        gender:`${e.target.gender.value}`,
        adress:`${e.target.address.value}`,
        nationality:`${e.target.Nationality.value}`,
        rel:`${e.target.religion.value}`
    }
    console.log(studentData);
    fetch('http://localhost:8000/api/student_info/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Server response message
        location.href="/Landing_Page/landingPage.html";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}