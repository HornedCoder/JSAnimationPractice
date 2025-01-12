console.log('Script starting...');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Response received:', response.status); // Debug log
    if (!response.ok) {
      throw new Error(`Network didn't respond. Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data =>data.forEach(element => {console.log(element.title)
    
  }))
  .catch(error => console.error('Error:', error));
