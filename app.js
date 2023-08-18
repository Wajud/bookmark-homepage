const menuOpen = document.getElementById("menu-open");
const overlayMenu = document.getElementById("overlay-menu");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click" ,()=>{
    overlayMenu.style.top = "-7vh"
    document.querySelector("body").style.overflow = "hidden";
    menuOpen.style.display = "none";
    document.querySelector("header div.logo img").style.display = "none";
})

menuClose.addEventListener("click", ()=>{
    overlayMenu.style.top = "-123vh";
    document.querySelector("body").style.overflow = "visible";
    menuOpen.style.display = "block";
    document.querySelector("header div.logo img").style.display = "block";
})


//Questions Section
const questionsContainer = document.querySelector(".questions-container")
const answers = questionsContainer.querySelectorAll("p.answer");
const answerToggle = questionsContainer.querySelectorAll("img");

answerToggle.forEach(icon=>{
    icon.addEventListener("click", (e)=>{
        if(e.target.dataset.action=="open-answer"){
            // console.log(e.target.dataset.action)
          
            answerToggle.forEach(icon=>{
                icon.style.transform="rotate(0deg)";
                icon.dataset.action="open-answer"
            })

            e.target.style.transform="rotate(180deg)";
            
            answers.forEach(answer=>{
                answer.style.height = "0px";
                answer.style.overflow = "hidden";
                answer.classList.remove("animate-open-height");
    
               const questionContainer = e.target.parentElement.parentElement;
            
               const showAnswer = questionContainer.querySelector("p.answer");
               showAnswer.classList.remove("animate-close-height")
               showAnswer.classList.add("animate-open-height");  
    
            })

            e.target.dataset.action="close-answer"

        }

         else if(e.target.dataset.action=="close-answer")
         {
            // console.log(e.target.dataset.action)

            answerToggle.forEach(icon=>{
                icon.dataset.action="open-answer";
            })


            e.target.style.transform="rotate(0deg)"
            const questionContainer = e.target.parentElement.parentElement;
            const showAnswer = questionContainer.querySelector("p.answer");
            showAnswer.classList.remove("animate-open-height");
            showAnswer.style.height="0px";  
            showAnswer.style.overflow="hidden"
            showAnswer.classList.add("animate-close-height")

            e.target.dataset.action="open-answer";
         }
        
    })
   
})


//Email Section
const contactUs = document.getElementById("contact-us");

contactUs.addEventListener("click",()=>{
    
    const email = document.getElementById("email");
    emailAddress = email.value;
    const iconError = document.getElementById("icon-error");
    const emailRegex = /^(\w+)@([a-z\d]{2,10})\.([a-z]{2,10})(\.[a-z]{2,10})*$/
    // console.log(emailRegex.test(emailAddress));
    if(!emailRegex.test(emailAddress)){
        iconError.style.display="block";
        
        setTimeout(()=>{
            iconError.style.display="none";
        }, 2000)

        document.querySelector(".bg-light-blue .flex .email-section").style.backgroundColor="rgb(235, 103, 103)";

        document.querySelector(".email-section p").style.color='#fff';

    }

    else{
        
        document.querySelector(".bg-light-blue .flex .email-section").style.backgroundColor="hsl(231, 69%, 60%)";

        document.querySelector(".email-section p").style.color='hsl(231, 69%, 60%)';

    }
})
