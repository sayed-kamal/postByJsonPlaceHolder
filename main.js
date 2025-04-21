// create Elements:-
let container = document.querySelector('.container');

fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(res =>res.json())
.then(data => {
    data.forEach((pos) =>{
        // Add Element:-
        let main_div = document.createElement('div');
        main_div.classList.add('main');

        let name_h4 = document.createElement('h4');
        name_h4.classList.add('person');

        let h4_text = document.createTextNode(pos.name)
        name_h4.appendChild(h4_text)

        let body_p = document.createElement('p');
        let body_text = document.createTextNode(pos.body)
        body_p.appendChild(body_text)

        main_div.appendChild(name_h4);
        main_div.appendChild(body_p);

        container.appendChild(main_div)
    })
})

