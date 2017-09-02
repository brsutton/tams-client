import $ from 'jquery';
import  urls from '../urls'
export default function(){
   /* var batches=[];
   $.ajax({
        url: 'http://10.27.12.24:8080/listBatches',
        error: function (e) {
            console.dir(e);
        },
        success: function (data) {
            batches = data;
        },
        async:false
        
    });
    
    return batches;*/
    return[
        {
            id: 0,
            batchName: "Adv Java",
            createdBy: 1,
            createDate: "2017-08-30",
            modifiedBy: 1,
            modifiedDate: "2017-08-31",
            statusId: 0
        },
        {
            id: 1,
            batchName: "Aws Batch",
            createdBy: 1,
            createDate: "2017-08-30",
            modifiedBy: 1,
            modifiedDate: "2017-08-30",
            statusId: 1
        }
    ]
}