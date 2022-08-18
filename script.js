
let books = [
    {
        id: 1,
        name: 'Гарри Поттер',
        author: 'Author',
        price: '100',
    },
    {
        id: 2,
        name: 'Биология',
        author: 'Author',
        price: '50',
    },
    {
        id: 3,
        name: 'Геометрия',
        author: 'Author',
        price: '80',
    },
    {
        id: 4,
        name: 'Ман ва пул',
        author: 'Author',
        price: '120',
    },
    {
        id: 5,
        name: 'Думай и богатей',
        author: 'Author',
        price: '100',
    },
    {
        id: 6,
        name: 'Принц Персии',
        author: 'Author',
        price: '108',
    },
    {
        id: 7,
        name: 'Бедный папа - богатый папа',
        author: 'Author',
        price: '100',
    },
    {
        id: 8,
        name: 'Самодисциплина',
        author: 'Author',
        price: '120',
    },
    {
        id: 9,
        name: '7 навыков высокоэффективный людей',
        author: 'Author',
        price: '700',
    },
    {
        id: 10,
        name: "You don't know JS",
        author: 'Author',
        price: '100',
    },
    {
        id: 11,
        name: 'CSS3',
        author: 'Author',
        price: '140',
    },
    {
        id: 12,
        name: 'React-быстрый фреймворк',
        author: 'Author',
        price: '1000',
    },
    {
        id: 13,
        name: 'Мёртвые души',
        author: 'Author',
        price: '300',
    },
    {
        id: 14,
        name: 'Dead inside',
        author: 'Author',
        price: '200',
    },
    {
        id: 15,
        name: 'Мартин Идэн',
        author: 'Author',
        price: '150',
    },
    {
        id: 16,
        name: 'Доктор Стрейндж',
        author: 'Author',
        price: '100',
    },
]
let input = document.querySelector('.bookn');




let creator = (obj) => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    let bookName = document.createElement("h1");
    bookName.innerHTML=obj.name;
    div.appendChild(bookName);
    let bookAuthor = document.createElement("span");
    bookAuthor.innerHTML=obj.author;
    div.appendChild(bookAuthor);
    let bookPrice = document.createElement("span");
    bookPrice.innerHTML=obj.price;
    div.appendChild(bookPrice);
    console.log(bookName,bookAuthor,bookPrice)
    
}

let btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    let findBook = books.filter((item) => {
    return item.name.includes(input.value);
})
    for(let i=0;i<findBook.length;i++){
    creator(findBook[i])
}
})