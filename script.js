fetch('faq.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('faq-container');
    container.innerHTML = ''; // leeren

    data.forEach(entry => {
      const item = document.createElement('div');
      item.classList.add('faq-item');

      const question = document.createElement('button');
      question.classList.add('faq-question');
      question.textContent = entry.question;

      const answer = document.createElement('div');
      answer.classList.add('faq-answer');
      answer.textContent = entry.answer;

      question.onclick = () => {
        answer.classList.toggle('visible');
      };

      item.appendChild(question);
      item.appendChild(answer);
      container.appendChild(item);
    });
  })
  .catch(err => {
    document.getElementById('faq-container').innerHTML = '<p>Fehler beim Laden der FAQ.</p>';
    console.error(err);
  });
