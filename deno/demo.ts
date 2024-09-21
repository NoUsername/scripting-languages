// deno run --allow-read --allow-env --allow-net demo.ts
// toplevel await ♥️

const response = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await response.json()

for (let i=0; i<Math.min(5, data.length); i++) {
    console.log(`Entry ${i}=${data[i].title}`)
}
