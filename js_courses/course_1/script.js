// const mhs = ['ahmad', 'sholeh', 'indra'];

// // for(let i = 0; i < mhs.length; i++){
// //     console.log(mhs[i]);
// // }

// mhs.forEach(m => console.log(m));

// function getData(url, success, error){
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response)
//             }else if(xhr.status === 404){
//                 error(xhr.response)
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send()
// }
// let run = getData('data.json', result =>{
//     let data = JSON.parse(result);
//     data.forEach(m => console.log(m.nama))
// })


function run(){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                let obj = JSON.parse(this.responseText)
                obj.forEach(m => console.log(m.name+" "+m.age))
            }else{
            console.log("gagal")
            }   
        }
    }
    xhr.open('get','data.json', true);
    xhr.send()
}