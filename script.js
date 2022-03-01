// this will prompt email address from users and check whether valid or not

let re = /^([a-z0-9]\.?)+[^\.]@([a-z]\.?)+[^\.]$/;

let email = prompt("Enter your email address:");

if(re.test(email)){
    alert("Valid address!");
}
else{
    alert("Enter a valid email address!");
}