console.log("i am on");

//for getting name of the logged In user from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userName = urlParams.get('name');

//selecting the html tags
const name=document.getElementById('name');
const id=document.getElementById('id');
const motherN=document.getElementById('motherN');
const fatherN=document.getElementById('fatherN');
const rel=document.getElementById('rel');
const nationality=document.getElementById('nationality');
const department=document.getElementById('department');




fetch(`http://localhost:8000/api/student_info/${userName}/`)
  .then(response => response.json())
  .then(data => {
    name.value=data.name;
    fatherN.value=data.father_name;
    motherN.value=data.mother_name;
    rel.value=data.rel;
    nationality.value=data.nationality;
    department.value=data.dep;
    id.value=`C2220${data.id}`
    
  })
  .catch(error => {
    console.error('Error:', error);
  });