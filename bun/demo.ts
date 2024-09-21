// toplevel await ♥️

const response = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await response.json()

for (let i=0; i<Math.min(5, data.length); i++) {
    const file = Bun.file(`out_${i}.txt`);
    const writer = file.writer();
    writer.write(`Entry ${i}=${data[i].title}`);
    writer.end();
}
