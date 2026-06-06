const downloadBtn = document.getElementById('download-cv') as HTMLAnchorElement;

downloadBtn.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = '../assets/Zainab-Guman-CV.pdf';
    link.download = 'Zainab-Guman-CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
