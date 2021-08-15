let agreement = confirm("Bu son topish o'yini, men 20 gacha bo'lgan bir son o'ylayman siz uni topishga urinib ko'rasiz\n\nAgar rozi bo'lsangiz boshlaymiz bo'lmasa xayrlashamiz :((")

if(!agreement) {
    window.location.href = "https://fulfiledu.uz/"
}

let trys = 0

let number = Math.round(Math.random() * 20)

let answer = prompt("Son nechchi deb o'ylaysiz aka?");

if(!answer) {
    alert("Biron son kiritmasayiz bomaydi :] ")
}

if(Number(answer) != answer) {
    answer = prompt("Son kiriting iltimos")
};

while(true) {
    if(answer > number) {
        answer = prompt("Aka man o'ylagan son bundan kichikroq edi :(\n\nQayta urinib ko'ring")
        trys+=1
    } else if(answer < number) {
        answer = prompt("Aka man o'ylagan son bundan kattaroq lekin :(\n\nQayta urinib ko'ring")
        trys+=1
    } else
        break
}

alert(`Tabriklayman aka mani yutib qoydiz man rostdan ham ${number} sonini o'ylagandim\n\nMani ${trys} ta urinishda yutdiz lekin\n\nBarakalla!!!`)



