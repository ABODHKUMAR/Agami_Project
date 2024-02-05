export const Data=function outerFunction(date,hoursWorked,employeeId,timesheetId) {
const date1=date;
const hoursWorked1=hoursWorked;
const employeeId1=employeeId;
const timesheetId1=timesheetId ;
   return function innerFunction() {
      console.log("")
   }
}

document.addEventListener('DOMContentLoaded',function(){
    const timesheetForm = document.getElementById('timesheetForm');
    const employeeIdInput = document.getElementById('employeeId');
    const timesheetIdInput = document.getElementById('timesheetId');

    timesheetForm.addEventListener('submit',async function(event){
        const fd = new FormData(timesheetForm);
        const data= fd.get('date');
        const hoursWorked = fd.get('hoursWorked');


        const employeeId = employeeIdInput.value;
        const timesheetId = timesheetIdInput.value;

       outerFunction(data,hoursWorked,employeeId,timesheetId)
       
    } )
})