document.addEventListener('DOMContentLoaded', function () {
    const keyProblemsSection = document.querySelector('.key-problems-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                keyProblemsSection.classList.add('visible');
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(keyProblemsSection);
});
function openTab(event, tabId) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

