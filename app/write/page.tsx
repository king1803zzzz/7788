'use client'

import { useState } from 'react'
import Sidebar from "../../components/Sidebar"

export default function WritePage(){

const [title,setTitle] = useState('')
const [content,setContent] = useState('')
const [image,setImage] = useState<File | null>(null)

async function uploadImage(){

if(!image) return null

const formData = new FormData()
formData.append('file',image)

const res = await fetch('/api/upload',{
method:'POST',
body:formData
})

const data = await res.json()

return data.url
}

async function saveDiary(){

const imageUrl = await uploadImage()

console.log({
title,
content,
image:imageUrl
})

alert('已保存（示例版）')
}

return(
<main style={{display:'flex',minHeight:'100vh'}}>

<Sidebar />

<section style={{flex:1,padding:'30px'}}>

<div style={{maxWidth:'900px',margin:'0 auto'}}>

<div className="glass" style={{
padding:'30px',
borderRadius:'36px'
}}>

<h1 style={{fontSize:'42px'}}>写日记</h1>

<input
placeholder="标题"
value={title}
onChange={(e)=>setTitle(e.target.value)}
style={{
width:'100%',
padding:'18px',
background:'#111',
border:'1px solid #222',
borderRadius:'20px',
color:'white',
marginBottom:'20px'
}}
/>

<textarea
placeholder="今天发生了什么？"
value={content}
onChange={(e)=>setContent(e.target.value)}
style={{
width:'100%',
height:'50vh',
padding:'20px',
background:'#111',
border:'1px solid #222',
borderRadius:'24px',
color:'white',
lineHeight:'1.8',
fontSize:'16px'
}}
/>

<div style={{marginTop:'20px'}}>
<input
type="file"
accept="image/*"
onChange={(e)=>setImage(e.target.files?.[0] || null)}
/>
</div>

<button
onClick={saveDiary}
style={{
marginTop:'24px',
padding:'18px 30px',
background:'white',
border:'none',
borderRadius:'22px',
fontWeight:'bold'
}}
>
保存日记
</button>

</div>

</div>

</section>

</main>
)
}
