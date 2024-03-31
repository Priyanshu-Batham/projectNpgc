function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        batch : document.getElementById("batch").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    // basically these values will be sent to email js through form and it will email that to us

    // service id , template id
    emailjs.send("service_6fmt3ea" , "template_hhkrvcd" , parms).then(alert("Complaint Sent"));   
   
}