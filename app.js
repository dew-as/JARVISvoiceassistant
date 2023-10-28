const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text)

    text_speak.rate = 1
    text_speak.volume = 1
    text_speak.pitch = 2
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day = new Date()
    let hour = day.getHours()
    if(hour>=0 && hour<12){
        speak("Good Morning Sir!")
    }else if(hour>=12 && hour<=17){
        speak("Good Afternoon Master!")
    }else{
        speak("Good Evening Boss!")
    }
}
window.addEventListener('load',() => {
    speak("Initializing JARVIS...")
    wishMe()
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex
    const transcript = event.results[currentIndex][0].transcript
    content.textContent = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener('click',() => {
    content.textContent = "Listening..."
    recognition.start()
})
function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak('Hello Sir, How May I Help You')
    }else if(message.includes('who are you') || message.includes('your name')){
        speak('I am JARVIS,Your virtual assistant,Your good name please')
    }else if(message.includes('my name') || message.includes('i am')){
        speak('Thats hears good')
    }else if(message.includes('open google')){
        window.open('https://www.google.com/')
        speak('Opening Google')
    }else if(message.includes('open youtube')){
        window.open('https://www.youtube.com/')
        speak('Opening Youtube')
    }else if(message.includes('open instagram')){
        window.open('https://www.instagram.com/')
        speak('Opening Instagram')
    }else if(message.includes('open facebook')){
        window.open('https://www.facebook.com/')
        speak('Opening Facebook')
    }else if(message.includes('open github')){
        window.open('https://github.com/dew-as')
        speak('Opening Github')
    }else if(message.includes('open portfolio')){
        window.open('https://dew-as.github.io/Portfolio/')
        speak('Opening Portfolio')
    }else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('what about')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank")
        const finalText = "This is what i found on internet regarding " + message
        speak(finalText)
    }else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,"_blank")
        const finalText = "This is what i found on wikipedia regarding " + message
        speak(finalText)
    }else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = 'Now the time is ' + time
        content.textContent = finalText
        speak(finalText)
    }else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date
        content.textContent = finalText
        speak(finalText)
    }else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date
        content.textContent = finalText
        speak(finalText)
    }else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator"
        speak(finalText)
    }else if(message.includes('vs code')) {
        window.open('vscode://')
        const finalText = "Opening Visual Studio Code"
        speak(finalText)
    }else {
        window.open(`https://www.google.com/search?q=${message.replace(" ","+")}`,"_blank")
        const finalText = "Ifound some information for " + message + " on google"
        speak(finalText)
    }
}