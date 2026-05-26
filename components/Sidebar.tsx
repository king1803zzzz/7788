export default function Sidebar(){
return(
<aside className="glass" style={{
width:'260px',
padding:'30px',
height:'100vh',
position:'sticky',
top:0
}}>
<h1 style={{fontSize:'30px'}}>Diary</h1>

<div style={{marginTop:'40px',display:'flex',flexDirection:'column',gap:'12px'}}>
<a href="/" className="glass" style={{padding:'16px',borderRadius:'18px'}}>时间线</a>
<a href="/write" className="glass" style={{padding:'16px',borderRadius:'18px'}}>写日记</a>
</div>
</aside>
)
}
