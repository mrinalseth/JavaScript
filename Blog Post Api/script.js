const postContainer = document.querySelector('#post-container')
const loading = document.querySelector('.loader')
const filter = document.querySelector('#filter')

let limit = 5;
let page = 1;

function getPosts()
{
    const res = fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    .then(res => res.json())
    .then(res => res.forEach(post =>{
            var a = document.createElement('div');
            a.classList.add('post');
            var b = document.createElement('div')
            b.innerText = post.id
            b.classList.add('number')
            a.appendChild(b);
            var c = document.createElement('div')
            c.classList.add = 'post-info'
            a.append(c)
            var d = document.createElement('h2')
            d.classList = 'post-title'
            d.innerText = post.title
            c.append(d)
            var e = document.createElement('p')
            e.classList.add = 'post-body'
            e.innerText = post.body
            c.append(e)
            postContainer.appendChild(a)
    }))
}

getPosts()

window.addEventListener('scroll',()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight - 5){
        showLoading();
    }
})

function showLoading(){
    loading.classList.add('show');
    setTimeout(()=>{
        loading.classList.remove('show')
        setTimeout(()=>{
            page++;
            getPosts()
        },300)
    },1000)
}


function filterPosts(e){
    const term = e.target.value.toUpperCase()
    const posts = document.querySelectorAll('.post')
    posts.forEach(post => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post p').innerText.toUpperCase();
        if(title.indexOf(term) > -1 || body.indexOf(term) > -1){
            post.style.display = 'flex';
        }else{
            post.style.display = 'none'
        }
    })
}

filter.addEventListener('input',filterPosts)

