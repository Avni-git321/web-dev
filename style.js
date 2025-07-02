document.getElementById('add-note').addEventListener('click', function() {
  const title = document.getElementById('note-title').value;
  const content = document.getElementById('note-content').value;

  if (title && content) {
    const note = {
      title: title,
      content: content
    };

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));

    displayNotes();
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
  } else {
    alert('Please enter both title and content');
  }
});

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = '';

  notes.forEach(function(note, index) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>`;
    notesList.appendChild(noteDiv);
  });
}

// Display notes on page load
displayNotes();
