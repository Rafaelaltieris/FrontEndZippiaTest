document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const searchInput = document.getElementById('searchInput');
    const usersTableBody = document.querySelector('#usersTable tbody');
  
    // Função para buscar usuários da API
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Falha na requisição.');
        const users = await response.json();
        renderTable(users);
      } catch (error) {
        alert('Erro: ' + error.message);
      }
    }
  
    function renderTable(users) {
      usersTableBody.innerHTML = '';
      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.address.city}</td>
          <td>${user.company.name}</td>
        `;
        usersTableBody.appendChild(row);
      });
    }
  
    fetchButton.addEventListener('click', fetchUsers);
  
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      const rows = usersTableBody.getElementsByTagName('tr');
      Array.from(rows).forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        row.style.display = name.includes(filter) ? '' : 'none';
      });
    });
  });