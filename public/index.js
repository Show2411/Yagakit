const checks = document.querySelectorAll(".check");
const sudo = document.querySelectorAll(".mean");
// const gems = document.querySelectorAll(".price");
const pic = document.querySelectorAll('[alt]');
    
    for(let i = 0; i < checks.length; i++) {
        checks[i].addEventListener("click", () => {
            console.log(checks[i]);
        const game = sudo[i].innerHTML;
        const meme = pic[i].src;
            const dataArray = [meme, game];
    const encodedData = encodeURIComponent(JSON.stringify(dataArray));
    const url = `details.html?data=${encodedData}`;
    window.location.href = url;
    })
    }

    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('data');
    if(encodedData){
    const retrievedArray = JSON.parse(decodeURIComponent(encodedData));
    // console.log(retrievedArray);
    const bell = document.getElementById("bello");
    const pic = document.getElementById("pic");
    pic.src = retrievedArray[0];
    bello.innerHTML = retrievedArray[1];
    function buy() {
        let number = "2348130593344";
        let picture = retrievedArray[0];
        let pro_name = retrievedArray[1];
        let message = "Hi Yagakits, I'd love to get this from here."

        var URL = "https://wa.me/" + number + "?text="
        +picture+ "%0a"
        +pro_name+ "%0a"
        +message+ "%0a%0a";
        window.open(URL, '_blank').focus();
    }
    }
    