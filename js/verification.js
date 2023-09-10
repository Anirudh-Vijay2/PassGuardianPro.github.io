const sendCodeBtn = document.querySelector('#verify');
const deleteBtn = document.querySelector('#delete');
const mail = document.querySelector('#recoemial');
const OTP = document.querySelector('#verificationCode');
let OTPcode;
const sendOTP = (pin, name) =>{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "passguardianpro@gmail.com",
        Password : "3CD0D6069E4DCD339A3176EFC4D8EFFD2991",
        To : window.atob(localStorage.getItem('R$6mJ9wXz@Kp3tQ7')),
        From : "passguardianpro@gmail.com",
        Subject : " PassGuardianPro Verification Code",
        Body : `
        Dear PassGuardianPro User,
        <br>
        <br>
        Thank you for choosing PassGuardianPro as your trusted password manager. To ensure the security of your account, we are implementing a verification process.
        <br>
        Please find your verification code below:<br>
        <b>Verification Code: ${pin}</b>
        <br>
        <br>
        To complete the verification process, please log in to your PassGuardianPro account and enter the provided code in the designated verification section. This step is crucial in enhancing the security of your account and protecting your sensitive information.
        If you did not request this verification code or believe your account security may be compromised, please contact our support team immediately at passguardianpro@gmail.com. We take the security of your data seriously and will assist you promptly.
        Thank you for your continued trust in PassGuardianPro. We are committed to providing you with the best password management experience and ensuring your data remains safe and secure.
        <br>
        <br>
        Best regards,<br>
        Anirudh Vijay<br>
        PassGuardianPro Team<br>
        `
    }).then(
      alert(`Verification code sent to ${mail.value}`)
    );
}

sendCodeBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(mail.value == ''){
        alert('Please complete the fields');
    }
    else if(localStorage.getItem('9$A7#pKxZ1Qn@vT3') == null || localStorage.getItem('R$6mJ9wXz@Kp3tQ7') == null){
        alert("First set pin and email")
    }
    else if(mail.value != window.atob(localStorage.getItem('R$6mJ9wXz@Kp3tQ7'))){
        alert(`Email is not correct`);
    }
    else{
        const min = 1000;
        const max = 9999;
        OTPcode = Math.floor(Math.random() * (max - min + 1)) + min;
        sendOTP(OTPcode, "anirudh")
        sendCodeBtn.style.display='none'
        document.querySelector('#success').innerHTML="Email sent successfully"
        deleteBtn.style.display='block'
    }
})

deleteBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(OTP.value == OTPcode){
        localStorage.clear()
        document.querySelector('#success').innerHTML="Verification done and all data deleted successfully. We will redirect you to the home page.";
        setTimeout(()=>window.location.href= '../index.html', 1000)
    }
    else{
        alert("Invalid OTP")
    }
})