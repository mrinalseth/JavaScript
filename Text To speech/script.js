const main = document.querySelector('main')
const voicesSelect = document.querySelector('#voices')
const textArea = document.querySelector('#text')
const readBtn = document.querySelector('#read')
const toggleBtn = document.querySelector('#toggle')
const closeBtn = document.querySelector('#close')
const textBox = document.querySelector('#text-box')

const data = [
    {
        image: "./img/angry.jpeg",
        text: "I'm angry"
    },
    {
        image: "./img/drink.jpeg",
        text: "i'm thirsty"
    },
    {
        image: "./img/food.jpeg",
        text: "I'm hungry"
    },
    {
        image: "./img/grandma.jpeg",
        text: "I want to meet grandma"
    },
    {
        image: "./img/happy.jpeg",
        text: "I'm verry happy today"
    },
    {
        image: "./img/home.jpeg",
        text: "I want to go home"
    },
    {
        image: "./img/hurt.jpeg",
        text: "I'm hurt"
    },
    {
        image: "./img/outside.jpeg",
        text: "I want to go outside"
    },
    {
        image: "./img/sad.jpeg",
        text: "I'm sad"
    },
    {
        image: "./img/scared.jpeg",
        text: "I'm scared"
    },
    {
        image: "./img/school.jpeg",
        text: "I'm going to school"
    },
    {
        image: "./img/tired.jpeg",
        text: "I'm tiered"
    }
]

data.forEach(createBox)

function createBox(item)
{
    const box = document.createElement('div');
    const {image, text} = item;

    box.classList.add('box');
    box.innerHTML = `<img src = "${image}" alt="${text}"/>
    <p class="info">${text}</p>
    `;
     box.addEventListener('click',() => {
        setTextMessage(text)
        speakText();
        box.classList.add('active')
        setTimeout(() => box.classList.remove('active', 800))
    });
    main.appendChild(box)
}

toggleBtn.addEventListener('click',()=>{
    textBox.classList.add('show')
});
closeBtn.addEventListener('click',()=>{
    textBox.classList.remove('show')
});

//Store voices
let voices = [];

function getVoices()
{
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.innerText =  `${voice.name} ${voice.lang}`;
        voicesSelect.appendChild(option)
    });
}
speechSynthesis.addEventListener('voiceschanged',getVoices)

getVoices()



const message = new SpeechSynthesisUtterance();
 function setTextMessage(text)
 {
     message.text = text
 }

 function speakText()
 {
     speechSynthesis.speak(message)
 }


 readBtn.addEventListener('click',() => {
     a(textArea.value);
     b()
 })

 function a(qwerty){
     message.text = qwerty
 }

 function b(){
     speechSynthesis.speak(message)
 }

 voicesSelect.addEventListener('change',e => {
    message.voice = voices.find(voice => voice.name === e.target.value)
 })