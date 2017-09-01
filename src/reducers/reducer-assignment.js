import $ from 'jquery';

export default function(){
    var assignments=[];

    $.ajax({
        url: "http://10.27.12.24:8080/assignments",
        error: function (e) {
            console.dir(e);
        },
        success: function (data) {
            assignments = data;
        },
        async:false
    });
    
      return (
        assignments
    );
}