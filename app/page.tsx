import Sidebar from "../components/Sidebar"

const diary = [
{
id:1,
title:'东京',
content:'今天东京下雨了。',
image:'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200',
date:'2026/05/26'
}
]

export default function Home(){
return(
<main style={{display:'flex',minHeight:'100vh'}}>

<div style={{display:'none'}} />

<Sidebar />

<section style={{flex:1,padding:'30px'}}>
<div style={{maxWidth:'900px',margin:'0 auto'}}>

<h1 style={{fontSize:'44px'}}>时间线</h1>

<div style={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'30px'}}>

{diary.map(item=>(
<div key={item.id} className="glass" style={{
padding:'24px',
borderRadius:'30px'
}}>
<div style={{color:'#777'}}>{item.date}</div>

<h2 style={{fontSize:'30px'}}>{item.title}</h2>

<p style={{lineHeight:'1.8',color:'#ddd'}}>
{item.content}
</p>

<img
src={item.image}
style={{
width:'100%',
marginTop:'20px',
borderRadius:'24px'
}}
/>

</div>
))}

</div>

</div>
</section>

</main>
)
}
