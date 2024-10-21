let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('div nav a')
window.onscroll=()=>{
    section.forEach(()=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset && top<offset+height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('div nav a[href *='+id']').classList.add('active')
            })
        }
    })
}