import * as https from 'node:https';
import * as fs from 'node:fs';

function get(url) {
  return new Promise((resolve) => {
    https
    .get(url, res => {
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
          resolve(parsedData);
        } catch (e) {
          console.error(e.message);
        }
      });
    });
  });
}

async function main() {
  const data = await get('https://jsonplaceholder.typicode.com/posts')
  data.slice(0, 5).forEach((element, idx) => {
    fs.writeFileSync(`result_${idx}.txt`, `Title: ${element.title}`)
  });
}

main()
