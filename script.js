const btnGenerate = document.querySelector("#generate");

btnGenerate.addEventListener("click", () => {
  const content = document.querySelector("#content");

  const options = {
    margin: [10, 10, 10, 10],
    filename: "test.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(options).from(content).save();
  console.log(options);
});
