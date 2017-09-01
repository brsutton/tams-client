import $ from 'jquery';
import  urls from '../urls'
export default function(){
    var users=[];
    alert(urls.USERS);
    $.ajax({
        url: 'http://10.27.12.24:8080/users',
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