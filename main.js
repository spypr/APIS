

const getRes=document.querySelector("button")

function log(evt) {
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/2/')
    .then(function(response) {
    console.log(response.data);
    let { residents } = response.data
    console.log(residents)
    for(i = 0; i < residents.length; i++){
        axios.get(residents[i]).then(dispRes)
    }

    });
}

function dispRes(residents) {
    const parent = document.querySelector('body')
    const child = document.createElement('h2')
    console.log(residents)
    child.innerHTML = residents.data.name
    parent.appendChild(child)
}


getRes.addEventListener("click", log)











