//Variables
const cssButton = document.getElementById('css');
const javascriptButton = document.getElementById('javascript');
const apiButton = document.getElementById('api');
const allButton = document.getElementById('all');
const portPics = document.getElementsByClassName('mypic');
const portOverlay = document.getElementsByClassName('overlay');
  //buttons
  //Images
  //caption/attribute

cssButton.addEventListener('click', () => {
  for(let i = 0; i < portPics.length; i ++) {
    let portItem = portPics[i];
    let overlaySelect = portOverlay[i];
    portItem.classList.remove('hidden');
    overlaySelect.classList.remove('hidden');
    if (portItem.dataset.filterType !== "css"){
      portItem.classList.add('hidden');
      overlaySelect.classList.add('hidden');
    }
  }
});
javascriptButton.addEventListener('click', () => {
  for(let i = 0; i < portPics.length; i ++) {
    let portItem = portPics[i];
    let overlaySelect = portOverlay[i];
    portItem.classList.remove('hidden');
    overlaySelect.classList.remove('hidden');
    if (portItem.dataset.filterType !== "javascript"){
      portItem.classList.add('hidden');
      overlaySelect.classList.add('hidden');
    }
  }
});
apiButton.addEventListener('click', () => {
  for(let i = 0; i < portPics.length; i ++) {
    let portItem = portPics[i];
    let overlaySelect = portOverlay[i];
    portItem.classList.remove('hidden');
    overlaySelect.classList.remove('hidden');
    if (portItem.dataset.filterType !== "api"){
      portItem.classList.add('hidden');
      overlaySelect.classList.add('hidden');
    }
  }
});
allButton.addEventListener('click', () => {
  for(let i = 0; i < portPics.length; i ++) {
    let portItem = portPics[i];
    let overlaySelect = portOverlay[i];
      portItem.classList.remove('hidden');
      overlaySelect.classList.remove('hidden');
  }
});
//portfolio filter

//for(let i = 0; i < portPics.length; i ++) {
//  let myPortPic = portPics[i];
//  console.log(myPortPic.attr("data-filter-type"));
//}

  //when the button is pressed
  //loop through available image data
  //add class of "hidden"

  //if "show all" button is clicked
  //remove all classes of hidden

  //**********Contact Button Modal ******

    //Variables
    const contactModal = document.getElementById('contactButton');
    const modalHTML = document.getElementById('contactForm');
    const overlay = document.getElementById('overlayInfo');
    const modalContainer = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');

    //display modal callback function
    function displayModal() {
      overlay.classList.remove("hidden");
    }

    contactModal.addEventListener('click', () =>{
      displayModal();
      });

    modalClose.addEventListener('click', ()=>{
      overlay.classList.add('hidden');
    });
      // **********Contact Validation*******

        //Variables

          //Name Field
          const nameField = document.getElementById('name');
          const popNameField = document.getElementById('popName');
          //email Field
          const emailField = document.getElementById('email');
          const popEmail = document.getElementById('popEmail');
          //message Field
          const messageField = document.getElementById('message');
          const popMessageField = document.getElementById('popMessage');
          //submit button
          const submit = document.getElementById('submit');
          const popSubmit = document.getElementById('popSubmit');

        //Instructions:
          //callback function to determine if a field has been filled out
    function sayValue(field){
      if (field.value === "") {
        return false;
      } else {
      return true;
      };
    }

        //click handler to advise user on if the form was successful or not
        submit.addEventListener('click', () => {
          //calls function to test input on each field, stores in a variable
          let name = sayValue(nameField);
          let email = sayValue(emailField);
          let message = sayValue(messageField);
          //if all fields are filled then let the user know the submission was made
          if (name === true && email === true && message === true){
            alert("Thanks " + `${nameField.value}` + "! Your message has been sent.");
            //Otherwise alert user to retry the form
          } else {
            alert("It looks like you're missing something in the contact form.");
          }
        });

        popSubmit.addEventListener('click', () => {
          //calls function to test input on each field, stores in a variable
          let name = sayValue(popNameField);
          let email = sayValue(popEmail);
          let message = sayValue(popMessageField);
          //if all fields are filled then let the user know the submission was made
          if (name === true && email === true && message === true){
            alert("Thanks " + `${popNameField.value}` + "! Your message has been sent.");
            //Otherwise alert user to retry the form
          } else {
            alert("It looks like you're missing something in the contact form.");
          }
        });
