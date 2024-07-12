## Passaggi logici

### 1. Creazione dei post
- Definire un array `posts` contenente oggetti post, ognuno con un `id`, `content` e `likes`.

### 2. Memorizzazione dei post "Mi Piace"
- Creare un array `likedPosts` per memorizzare gli ID dei post ai quali l'utente ha messo il like.

### 3. Funzione `renderPosts`
- Questa funzione genera dinamicamente il contenuto del feed:
  - Pulisce il contenuto esistente.
  - Per ogni post, crea un elemento `div` e un pulsante "Mi Piace".

### 4. Funzione `handleLike`
- Gestisce il click sui pulsanti "Mi Piace":
  - Incrementa il contatore dei likes.
  - Cambia il colore del pulsante se il post è già stato apprezzato.
  - Rende di nuovo visibile il post aggiornato.

### 5. Event Listener
- Aggiungere un event listener al feed per rilevare i click sui pulsanti "Mi Piace" e chiamare la funzione `handleLike`.

## Istruzioni
1. Aprire `index.html` in un browser per visualizzare il feed.
2. Cliccare sui pulsanti "Mi Piace" per interagire con i post.
