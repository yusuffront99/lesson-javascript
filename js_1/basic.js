function loadContent(){
    var xhr = new XMLHttpRequest();
    var url = 'https://animechan.vercel.app/api/random';

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('show').innerHTML = this.responseText;
            xhr.open("GET", url, true);
            xhr.send();
        }
    }
}