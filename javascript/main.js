/*Javascript code CV downloaden*/
document.getElementById('download-cv').addEventListener('click', e => {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = '../assets/Zainab-Guman-CV.pdf'; 
    link.download = 'Zainab-Guman-CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
/*Javascript code CV downloaden*/
