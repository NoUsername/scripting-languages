// deno run --allow-read --allow-env --allow-net --allow-write demo.ts
// toplevel await ♥️

const response = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await response.json()

const encoder = new TextEncoder();
for (let i=0; i<Math.min(5, data.length); i++) {
    console.log(`Entry ${i}=${data[i].title}`)
    Deno.writeFileSync(`out_${i}.txt`, encoder.encode(data[i].title));
}
