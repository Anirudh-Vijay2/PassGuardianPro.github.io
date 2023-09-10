const sendPin = (To, subject, pin) =>{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "passguardianpro@gmail.com",
        Password : "3CD0D6069E4DCD339A3176EFC4D8EFFD2991",
        To : To,
        From : "passguardianpro@gmail.com",
        Subject : subject,
        Body : pin
    }).then(
      message => alert("Email sent")
    );
}

const usrMAil = document.querySelector(".mailTExt");
document.querySelector('#pinSend').addEventListener('click', (e)=>{
  e.preventDefault()
  if(usrMAil.value != window.atob( localStorage.getItem('R$6mJ9wXz@Kp3tQ7'))){
    alert("Incorrect Email")
  }
  else{
    sendPin(usrMAil.value, "Pin recovery email from PassGuardianPro", `Your pin is: <b>${window.atob(localStorage.getItem('9$A7#pKxZ1Qn@vT3'))}</b>`)
  }
})