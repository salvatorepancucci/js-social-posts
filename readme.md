Passaggi Logici

1. Creare un array vuoto likedPosts per memorizzare gli ID dei post ai quali è stato messo il like.

2. Impostare l'evento DOMContentLoaded:
  > Utilizzare document.addEventListener per eseguire una funzione quando il DOM è completamente caricato.
    All'interno di questa funzione, chiamare renderPosts per creare e aggiungere i post al container.
    Aggiungere un event listener al container per gestire i click sul pulsante "Mi Piace".

3. Funzione per renderizzare i post:
  > Creare la funzione renderPosts che itera attraverso l'array posts e crea gli elementi del DOM per ogni post.
    Per ogni post, chiamare createPostElement per creare l'elemento del post e aggiungerlo al container.

4. Funzione per creare gli elementi del post:
  > Creare la funzione createPostElement che genera il markup HTML per un singolo post utilizzando le informazioni del post.
    Ritorna l'elemento del post creato.

5. Funzione per gestire il like:
  > Creare la funzione toggleLike che gestisce il click sul pulsante "Mi Piace".
    Cambiare lo stato del like (aggiungendo o rimuovendo il like) e aggiornare il contatore dei likes e la classe CSS del bottone.
    Aggiungere o rimuovere l'ID del post dall'array likedPosts.

6. Funzione per ottenere le iniziali del nome:
  > Creare la funzione getInitials che ritorna le iniziali del nome dell'autore.

7. Funzione per calcolare il tempo trascorso:
  > Creare la funzione timeAgo che calcola e ritorna il tempo trascorso dalla data del post in un formato leggibile.