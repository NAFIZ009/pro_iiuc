// for tracking the user authentication
var loggedIn = false;

//check if the user is already logged in. if not the user cant go to the home page,the user will be directed to the login page
let checkingLoggedIn =e=>{
    if(loggedIn){
        e.target.href="/Pages/Home_Page/homePage.html";
    }else{
        e.target.href="/Pages/Login_Page/loginPage.html";
    }
}

// login functionality
let authenticatingFetch=(e)=>{
    e.preventDefault();
    target=e.target;
    let username=target.username.value;
    let password=target.password.value;
    //through this we are connected to the server and database for authenticate user
    fetch(`http://localhost:8000/api/credentials/?username=${username}&password=${password}`)
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log(data.message);
        if(data.message=="Credentials are valid.")
        {
            // if the password is valid it will be directed to the user to the home page
            loggedIn = true;
            location.href=`/Pages/Home_Page/homePage.html?name=${username}`;
        }else{
            //if the password is invalid
            console.log("Credentials are not valid");
        }
    })
}

