const saveBtn = document.querySelector('#saveBtn');
const pin = localStorage.getItem('9$A7#pKxZ1Qn@vT3');
const pswd = document.querySelector('#password');
const website = document.querySelector('#website');
const usrname = document.querySelector('#username');
const viewpswd = document.querySelector('#viewPasswords');
const pjson = JSON.parse(localStorage.getItem('Y#5gN2zR@Wp8sF1K')) || [];
saveBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(website.value == '' || usrname.value == '' || pswd.value == ''){
        alert("Please fill all fields")
    }
    else if (pin == null) {
        alert('Please set pin')
    }
    else {
        pjson.push({
            Webiverse: window.btoa(website.value),
            IdentityBlend: window.btoa(usrname.value),
            SecretKey: window.btoa(pswd.value)
        });
        localStorage.setItem('Y#5gN2zR@Wp8sF1K', JSON.stringify(pjson));
        loadPasswords()
        dele()
    }
})

// The value of pjson is from localstorage
const loadPasswords = () => {
    document.querySelector('#savedPassFields').innerHTML = ''
    pjson.forEach((element, index) => {
        document.querySelector('#savedPassFields').innerHTML += `
            <tr>
                <td>${index+1}</td>
                <td><div class="Titems"><p>${window.atob(element.Webiverse)}</p> <span class="textCopy"> <i class='bx bxs-copy' onclick="copy('${element.Webiverse}')" style="margin-left: 20px;"></i></span></div></td>
                <td><div class="Titems"><p>${window.atob(element.IdentityBlend)}</p> <i class='bx bxs-copy' onclick="copy('${element.IdentityBlend}')" style="margin-left: 20px;" data-toggle="popover" data-placement="top" title="Popover Title" data-content="Popover content goes here."></i> </div> </td>
                <td><div class="Titems"><p>${window.atob(element.SecretKey)}</p> <i class='bx bxs-copy' onclick="copy('${element.SecretKey}')" data-toggle="popover" data-placement="top" title="Popover Title" data-content="Popover content goes here."></i> </div> </td>
                <td><button class="DeleteBtn">Delete</button></td>
            </tr>
        `;
    });
}
loadPasswords()


const copy = (textInfos) => {
    navigator.clipboard.writeText(window.atob(textInfos))
}

viewpswd.addEventListener('click', () => {
    let pinc = prompt("Enter Your Pin");
    if (pinc == window.atob(localStorage.getItem('9$A7#pKxZ1Qn@vT3'))) {
        document.querySelector('.password-box').style.display = 'block';
    }
    else {
        alert(`Incorrect PIN`)
    };
});

const dele = () => {
    const dltbtns = document.querySelectorAll('.DeleteBtn');
    dltbtns.forEach((crr, i) => {
        crr.addEventListener('click', () => {
            pjson.splice(i, 1);
            localStorage.setItem('Y#5gN2zR@Wp8sF1K', JSON.stringify(pjson));
            loadPasswords();
            dele()
        });
    });
}
dele()

