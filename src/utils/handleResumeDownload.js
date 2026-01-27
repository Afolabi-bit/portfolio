export default function handleResumeDownload() {
  const link = document.createElement("a");

  link.href = "/resume/afolabijoseph.pdf";
  link.setAttribute("download", "AfolabiJoseph.pdf");

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  return;
}
