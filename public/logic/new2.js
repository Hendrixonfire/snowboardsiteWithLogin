








const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');

    } else {
        entry.target.classList.remove('show');
    }
   });
});


const testimonialElements = document.querySelectorAll('.testimonialhidden');
testimonialElements.forEach((el) => observer.observe(el));
/*
const snowboardElements = document.querySelectorAll('.snowboarderhidden');
snowboardElements.forEach((el) => observer.observe(el));
*/
let snowboarder = document.getElementById('snowboardertwo');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    snowboarder.style.left = value + 'px';
    snowboarder.style.bottom = -(value)*0.4 + 'px';
});

const accordion =  document.querySelector(".accordion");
accordion.addEventListener('click',  (e) => {
const activePanel = e.target.closest(".accordion-panel");

if(!activePanel) 
 return;
toggleAccordion(activePanel);

});

/*

let isFunction = showGrid instanceof Function;
console.log(isFunction); 
*/

function toggleAccordion(panelToActivate) {
    const  buttons  = panelToActivate.parentElement.querySelectorAll("button");
    const contents  = panelToActivate.parentElement.querySelectorAll(".accordion-content");

   
    
    buttons.forEach((button)  =>  {
        button.setAttribute("aria-expanded", false);
    });

    contents.forEach((content)  =>  {
        content.setAttribute('aria-hidden', true);
    });

    panelToActivate
        .querySelector('button')
        .setAttribute("aria-expanded", true);

    panelToActivate
        .querySelector('.accordion-content')
        .setAttribute('aria-hidden', false);
}

//creating the user session objects

const myUserListObjJumping = {
    "session":"",
    "date":"",
    "name":[]
 }
 const myUserListObjJibbing = {
    "session":"",
    "date":"",
    "name":[]
 }
 const myUserListObjButtering = {
    "session":"",
    "date":"",
    "name":[]
 }   

let usersObj = [];

class User {
    constructor(name, session, date) {
      this.name = name;
      this.session = session;
      this.date = date;
    }

    addUser(inputName) {
      if (usersObj.some(e => e.name === `${inputName}`)){
      alert(`${inputName.charAt(0).toUpperCase()+inputName.slice(1)} already exist.Enter another name`)
                              
      return usersObj;
       
    } usersObj.push(this);
   
   }

/*
    addSession() {
      const sessionToRemove = usersObj.findIndex((session) => session === this);
      sessionToRemove === -1  ? usersObj.push(this) : usersObj.splice(sessionToRemove, 1);
     
      return usersObj;

      
    }
     */
    
}



function getUserName(inputValue, sessionObj)

{
 
  const inputElement = document.querySelector(inputValue);
  let inputName = inputElement.value.toLowerCase();
  console.log(typeof inputName);
  console.log(inputName.length);
  
 
  if (sessionObj.length < 1 && inputName)
  {
  
    const user = new User(`${inputName}`);
    console.table(user);
    user.addUser(inputName);
    
    console.table(usersObj);
  } 

  else if(inputName)
       { 
     
         const user = new User(`${inputName}`);
         console.table(user);
         user.addUser(inputName);
        
         console.log(usersObj);
      
      
       }
              else
              {
                alert("Enter the name");
              } 
           
            
}


 //open-close the grid div.(contains sessionDate and sessionType and joinButton)
 function showGrid(currentSession, inputValue)
 {
   const inputElement = document.querySelector(inputValue);
   let inputName = inputElement.value.toLowerCase();
   //isClicked = !isClicked;
   let element = document.getElementById(currentSession);
   if (usersObj.some(e => e.name === `${inputName}`)){
      isClicked = true;
   } else{
      isClicked = false;
   }
   element.style.display = (isClicked == true ) ? "grid" : "none";
 }  


//listening the session buttons
/*
document.getElementById('session-check-button-jumping')
 .addEventListener('click', () => {
  
    getUserName('.user-name-jumping','session-time-join-jumping', myUserListObjJumping);
 })

 document.getElementById('session-check-button-jibbing')
 .addEventListener('click', () => { 
    getUserName('.user-name-jibbing','session-time-join-jibbing', myUserListObjJibbing);
 })
 document.getElementById('session-check-button-buttering')
 .addEventListener('click', () => {  
    getUserName('.user-name-buttering','session-time-join-buttering', myUserListObjButtering);
 })
*/

document.getElementById('session-check-button-jumping')
 .addEventListener('click', () => {
  
    getUserName('.user-name-jumping', usersObj);
    showGrid('session-time-join-jumping', '.user-name-jumping')
 })

 document.getElementById('session-check-button-jibbing')
 .addEventListener('click', () => { 
    getUserName('.user-name-jibbing', usersObj);
    showGrid('session-time-join-jibbing', '.user-name-jibbing')
 })
 document.getElementById('session-check-button-buttering')
 .addEventListener('click', () => {  
    getUserName('.user-name-buttering', usersObj);
    showGrid('session-time-join-buttering', '.user-name-buttering')
 })

//listening the join buttons
document.getElementById('session-join-button-jumping-one')
 .addEventListener('click', () => {
    joined('session-join-button-jumping-one', '#session-join-date-jumping-one', '#session-join-type-jumping-one', myUserListObjJumping);
 })

 document.getElementById('session-join-button-jumping-two')
 .addEventListener('click', () => { 
    joined('session-join-button-jumping-two', '#session-join-date-jumping-two', '#session-join-type-jumping-two', myUserListObjJumping);
 })
 document.getElementById('session-join-button-jumping-three')
 .addEventListener('click', () => {  
    joined('session-join-button-jumping-three', '#session-join-date-jumping-three', '#session-join-type-jumping-three', myUserListObjJumping);
 })
 document.getElementById('session-join-button-jibbing-one')
 .addEventListener('click', () => {
    joined('session-join-button-jibbing-one', '#session-join-date-jibbing-one', '#session-join-type-jibbing-one', myUserListObjJibbing);
 })

 document.getElementById('session-join-button-jibbing-two')
 .addEventListener('click', () => { 
    joined('session-join-button-jibbing-two', '#session-join-date-jibbing-two', '#session-join-type-jibbing-two', myUserListObjJibbing);
 })
 document.getElementById('session-join-button-jibbing-three')
 .addEventListener('click', () => {  
    joined('session-join-button-jibbing-three', '#session-join-date-jibbing-three', '#session-join-type-jibbing-three', myUserListObjJibbing);
 })
 document.getElementById('session-join-button-buttering-one')
 .addEventListener('click', () => {
    joined('session-join-button-buttering-one', '#session-join-date-buttering-one', '#session-join-type-buttering-one', myUserListObjButtering);
 })

 document.getElementById('session-join-button-buttering-two')
 .addEventListener('click', () => { 
    joined('session-join-button-buttering-two', '#session-join-date-buttering-two', '#session-join-type-buttering-two', myUserListObjButtering);
 })
 document.getElementById('session-join-button-buttering-three')
 .addEventListener('click', () => {  
    joined('session-join-button-buttering-three', '#session-join-date-buttering-three', '#session-join-type-buttering-three', myUserListObjButtering);
 })
//adding type and date to session object and changing innerHTML inside the join buttons.
 let isClicked = false;

 function joined(joinButton, joinDate, joinType, sessionObj){
   isClicked = !isClicked;
   document.getElementById(joinButton).innerHTML = (isClicked == true ) ? 'Joined' : 'Join';
   const sessionDateElement = document.querySelector(joinDate).innerText;
   const sessionTypeElement = document.querySelector(joinType).innerText;
   sessionObj.date = sessionDateElement;
   sessionObj.session = sessionTypeElement;
   console.table(sessionObj);
 
 }




 
//adding the user name in to the session object(on 1 of 3 accordion types.(sessions))
/*
function getUserName(inputValue, currentSession, sessionObj)

{
  let noSameNames = true;
  const inputElement = document.querySelector(inputValue);
  let inputName = inputElement.value.toLowerCase();
  console.log(typeof inputName);
  console.log(inputName.length);
  
  
  showGrid(currentSession);
 
  console.log(noSameNames);
  
 
 
  if (sessionObj.name.length < 1 && inputName)
  {
    sessionObj.name.push(inputName);
  } 

  else if(inputName)
       { 
        
          for (let i=0; i < sessionObj.name.length; i++) 
         
          if (inputName === sessionObj.name[i]) 
           {
             alert("Name already exist:Enter another name please!");
             noSameNames = false;
           } 
               if (noSameNames)
               {
    
                sessionObj.name.push(inputName);
     
               } 
       }
              else
              {
                alert("Enter the name");
              } 
              console.table(sessionObj);
              console.table(sessionObj.name);
}
*/



document.querySelectorAll('.media-element img').forEach(img  =>  {
    img.addEventListener("click", function(){
   
      console.log(img.src);
     
      document.getElementById("selected-item-image-id").src = img.src;
      console.log('clicked');
      let target = document.getElementById('js-media--card');
      let target2 = document.querySelector('.selected-item-grid');
      target2.setAttribute('style', 'display:grid');
      target.scrollIntoView();
    
      
    })
})

document.getElementById('selected-item-button-grid') 
 .addEventListener("click", function(){
   let target2 = document.querySelector('.selected-item-grid');
   target2.setAttribute('style', 'display:none');
})

