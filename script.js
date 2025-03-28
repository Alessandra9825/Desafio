document.getElementById('grupoForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const nomes = [
    document.getElementById('nome1').value,
    document.getElementById('nome2').value,
    document.getElementById('nome3').value,
    document.getElementById('nome4').value,
    document.getElementById('nome5').value,
  ];

  const historia = document.getElementById('historia').value;

  const payload = {
    names: nomes,
    message: historia
  };

  try {
    const response = await fetch('https://fsdt-contact.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert("Formulário enviado com sucesso!");
      this.reset(); // limpa o formulário após envio
    } else {
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro ao enviar o formulário. Verifique sua conexão.");
  }
});
