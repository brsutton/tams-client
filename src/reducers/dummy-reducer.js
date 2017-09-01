import $ from 'jquery';

export default function(){
    var users=[];

    $.ajax({
        url: "http://10.27.12.24:8080/users",
        error: function (e) {
            console.dir(e);
        },
        success: function (data) {
            users = data;
        },
        async:false
    });
    
      return (
        users
    );
}