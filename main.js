let words = document.querySelectorAll(".word");
words.forEach((word)=>{
 let letters = word.textContent.split("");
 word.textContent="";
 letters.forEach((letter)=>{
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
 });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex +1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex =  currentWordIndex ===maxWordIndex ? 0 : currentWordIndex +1;
};

 changeText();
 setInterval(changeText,3000);


 const navLinks = document.querySelectorAll('header nav a');
 const logoLinks = document.querySelector('.logo');
 const sections = document.querySelectorAll('section');
 const menuIcon = document.querySelector('#menu-icon');
 const navbar = document.querySelector('header nav');


menuIcon.addEventListener('click', () => {
 menuIcon.classList.toggle('fa-xmark');
 navbar.classList.toggle('active');
});

 const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');
   
    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
    link.classList.remove('active');
    });
    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
        });
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
 }

 navLinks.forEach((link, idx) => {
   link.addEventListener('click', () => {
   if(!link.classList.contains('active')) {
    activePage();
    link.classList.add('active');

     setTimeout(() => {
        sections[idx].classList.add('active');
     }, 1100);

   }
   });
 });

 logoLinks.addEventListener('click', () => {
    if(navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
         }, 1100);
    
    }
 });



 const resumeBtns = document.querySelectorAll('.resume-btn');
 resumeBtns.forEach((btn, idx)=> {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-details');
        resumeBtns.forEach(btn => {
        btn.classList.remove('active');
        });
        
        btn.classList.add('active');
        resumeDetails.forEach(details => {
            details.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
 });