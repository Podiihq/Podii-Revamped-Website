const toggleButton1 = document.getElementById('toggleButton1');
const collapsibleContent = document.getElementById('collapsibleContent');

toggleButton1.addEventListener('click', () => {
    if (collapsibleContent.style.display === 'none' || collapsibleContent.style.display === '') {
        collapsibleContent.style.display = 'block';
    } else {
        collapsibleContent.style.display = 'none';
    }
});

const toggleButton2 = document.getElementById('toggleButton2');
const collapsibleContent2 = document.getElementById('collapsibleContent2');

toggleButton2.addEventListener('click', () => {
    if (collapsibleContent2.style.display === 'none' || collapsibleContent2.style.display === '') {
        collapsibleContent2.style.display = 'block';
    } else {
        collapsibleContent2.style.display = 'none';
    }
});

const toggleButton3 = document.getElementById('toggleButton3');
const collapsibleContent3 = document.getElementById('collapsibleContent3');

toggleButton3.addEventListener('click', () => {
    if (collapsibleContent3.style.display === 'none' || collapsibleContent3.style.display === '') {
        collapsibleContent3.style.display = 'block';
    } else {
        collapsibleContent3.style.display = 'none';
    }
});

