  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCjN2bN37wXC7X03jv4oGqZ7CrheJ8h4UI",
    authDomain: "apptomindia-cfc52.firebaseapp.com",
    databaseURL: "https://apptomindia-cfc52-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "apptomindia-cfc52",
    storageBucket: "apptomindia-cfc52.appspot.com",
    messagingSenderId: "722936453273",
    appId: "1:722936453273:web:36aec8746413d2caec0008",
    measurementId: "G-R3YR4JVVQG"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


//firebase.initializeApp(firebaseConfig);
console.log(firebase)

// referance

let contactInfo = firebase.database().ref("user");


document.getElementById("contactform1").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    // Get Values
    var name = getInputVal('name');
    var mail = getInputVal('email');
    var compnay = getInputVal('company');
    var phone = getInputVal('phone');
    var msg = getInputVal('message');
    

    saveContactInfo(name, mail, msg, phone,compnay);
    


    document.querySelector(".alert").style.display='none';

    setTimeout(function(){
    document.querySelector(".alert").style.display='block';

    },3000);

    document.getElementById('contactform1').reset();

    sendEmail(name, mail, msg, phone,compnay);

    
}

// function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

// save infos to firbase

function saveContactInfo(name, mail, msg, phone,compnay){
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: mail,
        message: msg,
        Phone : phone,
        compnay : compnay,
    });

    retriveInfos();

}


//retrive data
function retriveInfos(){
    let ref = firebase.database().ref("user");
    ref.on("value", gotData);   
}

function gotData(data){
    let info = data.val();
    let keys = Object.keys(info);

    for(let i= 0; i < keys.length; i++){
        let infoData = keys[i];
        let name = info[infoData].name;
        let email = info[infoData].email;
        let message = info[infoData].message;
        let phone = info[infoData].phone;
        let compnay = info[infoData].compnay;
        console.log(name,email,message,phone,compnay);

    
    }
}


retriveInfos();

function sendEmail(name, email, message, phone,compnay){
  Email.send({
      Host: "smtp.gmail.com",

      Username: 'amanvishen46@gmail.com',
      Password: "wlokhjypuqavqjhb",
      To: 'batrapalak199@gmail.com',
      From:'amanvishen46@gmail.com',
      Subject: `${name} sent you a message`,
      Body: `Name: ${name}<br/> Email: ${email} <br/> Message: ${message}<br/> Phone Number: ${phone} <br/> Company: ${compnay}`,
  }).then((message)=>alert("mail sent successfully"))
}
