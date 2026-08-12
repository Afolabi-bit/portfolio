export default function handleResumeDownload() {
  const link = document.createElement("a");

  link.href = "/resume/Afolabi-Joseph.pdf";
  link.setAttribute("download", "Afolabi-Joseph.pdf");

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  return;
}
