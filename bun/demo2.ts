// automatic dependency resolution/installation
import { jsPDF } from "jspdf";

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const result = []
    return data.slice(0, 5).map(e => e.title)
}

const data = await fetchData()
data.forEach((title, index) => {
    const doc = new jsPDF();

    doc.text("Title:", 10, 10);
    doc.text(title, 10, 20);
    doc.save(`out_${index}.pdf`);
});