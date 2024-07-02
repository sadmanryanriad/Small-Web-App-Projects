function calculateTotal() {
    let amounts = document.querySelectorAll(
        "table tr:not(.table_heading):not(.total) td:nth-child(2)"
    );
    let total = 0;

    amounts.forEach((amount) => {
        total += parseInt(amount.innerText.replace(/,/g, ""));
    });

    document.getElementById("totalAmount").innerText = total.toLocaleString();
}

document.addEventListener("DOMContentLoaded", () => {
    calculateTotal();
    document.getElementById("saveAsPdf").addEventListener("click", () => {
        saveTableAsPDF();
    });
});

function saveTableAsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Load autoTable plugin
    doc.autoTable({
        html: '#moneyTable',
        theme: 'striped',
        headStyles: { fillColor: [128, 128, 128] },
        alternateRowStyles: { fillColor: [240, 240, 240] },
        styles: { font: 'helvetica', fontSize: 12, cellPadding: 8 },
    });

    doc.save('table.pdf');
}
