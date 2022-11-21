const feedbackForm = document.getElementById('feedback-form')
const feedbackContent = document.getElementById('feedback-content')
const feedbackSuccess = document.getElementById('feedback-success')

feedbackForm.addEventListener('submit', function (e) {
    feedbackContent.classList.remove('show')
    feedbackSuccess.classList.add('show')
    e.preventDefault();
    feedbackForm.removeEventListener('submit')
});