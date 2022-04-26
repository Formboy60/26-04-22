document.querySelector("footer").addEventListener('click', e => {

    console.log(e.target.className )
    if(e.target.className == "chat" ){
        document.location = "../second/index.html"
    }
})