// Spell Check Start Code

// Global Variables
let dictionary;
let aliceWords;
let startTime;
let endTime;
let verdict;

// Load Data Files into Global Variables
loadDictionary();
loadAliceText();

document.getElementById("run-btn").addEventListener("click", startingSearch);

// Functions for part A

function startingSearch(){
    let whichPart = document.getElementById("part-select").value;
    let searchType = document.getElementById("algorithm-select").value;

    if (whichPart == "userCheck"){
        // Part A: User Word Check
        let word = prompt("please enter a word");
        if(searchType = "linear"){
            // linear
            startTime = performance.now();
            verdict = linearSearch(dictionary, word);
            endTime = performance.now(); 
        } else{
            // binary
            startTime = performance.now();
            verdict = binarySearch(dictionary, word);
            endTime = performance.now();
        }
        // Sends back results of part A and clears part B results if theres any from a previous check
        document.getElementById("userSearch-results").innerHTML = verdict;
        document.getElementById("aliceSearch-results").innerHTML = "----";
    } else {
        // Part B: Alice in Wonderland Word Check
        let count = 0;
        if (searchType = "linear"){
            // linear
            startTime = performance.now();
            for(let i = 0; i < aliceWords.length; i++){
                let index = linearSearch(dictionary, aliceWords[i]);
                
                if (index == false){
                    console.log(aliceWords[i]);
                    count++;
                }
            }
            endTime = performance.now();
        } else {
            // binary
            startTime = performance.now();
            for(let i = 0; i < aliceWords.length; i++){
                let index = binarySearch(dictionary, aliceWords[i]);
                
                if (index == false){
                    console.log(aliceWords[i]);
                    count++;
                }
            }
            endTime = performance.now();
        }
        // Sends back results of part B and clears part A results if theres any from a previous check
        document.getElementById("aliceSearch-results").innerHTML = count++;
        document.getElementById("userSearch-results").innerHTML = "----";
    }
    // Sends back time of search, code applies to both parts
    document.getElementById("search-time").innerHTML = endTime - startTime;
}

// Template functions for linear and binary search

function linearSearch (anArray, item){
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            return true;
        }
    }
 
    return false;
}


function binarySearch (anArray, item){
    let LI = 0;
    let UI = anArray.length - 1;
 
    while (LI <= UI) {
        let MI = Math.floor((LI + UI)/2);
        if (item == anArray[MI]){
            return true;
        } else if (item < anArray[MI]) {
            UI = MI - 1;
        } else {
            LI = MI + 1;
        }
    }
 
    return false;
}
