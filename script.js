const quotes=[
    "Focus on making yourself feel excited powerfu Imagine yourself destroying goals with ease",
    "Find a person who is as successful as you like to be ask them what to do do it and work hard",
    "Your mind must be stronger than your feelings",
    "If you have a mind that you can't control you're never going to be a king",
    "Success is the only option",
    "You are viewing yourself as a short man! Walk up and be THE man",
    "I could never stop fighting even if I lost 100 fights because I’m not built to live a normal existence",

]
// console.log(quotes)
const usedIndexes = new Set()//set in javascript unic collections of elements
const quoteTag=document.getElementById("quote")
 

    function generateQuote(){
        if(usedIndexes.size >= quotes.length){
            usedIndexes.clear()
        }

        while(true){
            const randomEl=Math.floor(Math.random() * quotes.length)
            if(usedIndexes.has(randomEl)) continue

       
        const quote=quotes[randomEl]
        quoteTag.innerHTML=quote
        usedIndexes.add(randomEl)
        break
     

}
}
