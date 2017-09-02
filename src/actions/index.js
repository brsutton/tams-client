import $ from 'jquery';
/*
All action listeners go here.
*/
//Register user
export const RegisterUser = (user) =>{
    console.log(user.firstName);
    //10.27.12.24
    $.ajax('http://localhost:8080/users', {
        method: 'POST',
        contentType : 'application/json',
        dataType : 'json',
        data: JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            contact: user.contact,
            password: user.password,
            email: user.email,
            roleId: user.roleId,
            batchId: user.batchId
        })
      }).then(function(data) {
        console.log(data);
      });

    return{
        type:"REGISTER_USER",
        payload:user
    }
}