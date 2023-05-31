const firebaseConfig = {
    apiKey: "AIzaSyCEyaYbAh20xRoB7Ad3LEdikwrduUMahgs",
    authDomain: "tailor-project-8835a.firebaseapp.com",
    databaseURL: "https://tailor-project-8835a-default-rtdb.firebaseio.com",
    projectId: "tailor-project-8835a",
    storageBucket: "tailor-project-8835a.appspot.com",
    messagingSenderId: "433009987454",
    appId: "1:433009987454:web:66ec2328d6193397002d2f"
};


firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("Tailor-Project");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    
    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
               document.querySelector(".alert").style.display = "none";
             }, 3000);

    
             document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    });
};



const getElementVal = (id) => {
   return document.getElementById(id).value;
 };
