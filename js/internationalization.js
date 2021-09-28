
function changeLanguage(e){
    console.log('changin language...')
    let lang = e.target.id;

    let file = 'i18n/'+lang.substring(3,5)+'.json'

    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        console.log(rawFile)
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            let i18n = JSON.parse(rawFile.responseText);
            const elements = document.querySelectorAll("[data-i18n]");    
            const replaceText = (el) => { 
                const key = el.getAttribute('data-i18n');
                el.innerText = i18n[key] || key;
            }    
            elements.forEach(el => replaceText(el));
        }
    }
    rawFile.send(null);    
}

document.getElementById("i18es").addEventListener("click", changeLanguage);
document.getElementById("i18en").addEventListener("click", changeLanguage);

document.getElementById("i18en").click()

