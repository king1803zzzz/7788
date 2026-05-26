export async function POST(req: Request) {

try {

const formData = await req.formData()
const file = formData.get('file') as File

if (!file) {
return Response.json({ error: 'No file' }, { status: 400 })
}

const fileName = `${Date.now()}-${file.name}`

return Response.json({
success: true,
url: `https://your-r2-domain/${fileName}`
})

} catch (err) {

return Response.json({
error: 'Upload failed'
}, { status: 500 })

}

}
