function downloadPdf() {
	const link = document.createElement('a');
	link.href = "/Portfolio/Alen-Joby-CV.pdf"; //file path
	link.download = "Alen-Joby-CV.pdf"; //desired download filename
	link.click();
  }