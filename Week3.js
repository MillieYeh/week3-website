let src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json";

fetch(src)
.then(function(response){
    return response.json();
})
.then(function(result){
    let container = document.createElement('div');
    document.body.appendChild(container);
    container.setAttribute("class", "container");

    let container_top = document.createElement('div');
    container.appendChild(container_top);
    container_top.setAttribute("class", "container_top");

    for(let i = 0; i < 2; i++){
        let top = document.createElement('div');
        container_top.appendChild(top);
        top.setAttribute("class", "top");

        let img_1 = document.createElement('img');
        top.appendChild(img_1);
        img_1.setAttribute("class", "img_1");

        let myString = result.result.results[i].file;
        let splits = myString.split(['https']);
        let src = `https${splits[1]}`;
        img_1.setAttribute("src", src);

        let titlename_1 = document.createElement('div');
        top.appendChild(titlename_1);
        titlename_1.setAttribute("class", "titlename_1");
        titlename_1.textContent = result.result.results[i].stitle;
    }

    let container_below = document.createElement('div');
    container.appendChild(container_below);
    container_below.setAttribute("class", "container_below");

    for(let i = 2; i < 10; i++){
        let below = document.createElement('div');
        container_below.appendChild(below);
        below.setAttribute("class", "below");

        let img_2 = document.createElement('img');
        below.appendChild(img_2);
        img_2.setAttribute("class", "img_2");

        let myString = result.result.results[i].file;
        let splits = myString.split(['https']);
        let src = `https${splits[1]}`;
        img_2.setAttribute("src", src);

        let titlename_2 = document.createElement('div');
        below.appendChild(titlename_2);
        titlename_2.setAttribute("class", "titlename_2");
        titlename_2.textContent = result.result.results[i].stitle;
    }

    
})
