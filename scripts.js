function toggleMenu() {
    const menu = document.getElementById('dashboardMenu');
    menu.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', function() {
    const typingEffectElement = document.getElementById('typing-effect');
    const roles = [
        'Front End Developer',
        'Back End Developer',
        'Software Developer',
        'Android Developer',
        'Web Developer'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deleteSpeed = 50;
    let pauseBetweenRoles = 1000;

    function type() {
        const currentRole = roles[roleIndex];
        if (charIndex < currentRole.length && !isDeleting) {
            typingEffectElement.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (charIndex === currentRole.length && !isDeleting) {
            isDeleting = true;
            setTimeout(type, pauseBetweenRoles);
        } else if (charIndex > 0 && isDeleting) {
            typingEffectElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deleteSpeed);
        } else if (charIndex === 0 && isDeleting) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});