# MovieFinder

Benvenuto su MovieFinder, un'applicazione web costruita con React che permette agli utenti di cercare film e visualizzare informazioni dettagliate. Il progetto è stato creato per dimostrare la competenza nell'utilizzo di React, React Router e l'integrazione di API esterne.

L'interfaccia è stilizzata con un tema scuro moderno, ispirato a piattaforme di streaming come Netflix.

---

## Caratteristiche (Features)

* **Ricerca Film:** Cerca film per titolo utilizzando l'API di The Movie Database (TMDb).
* **Griglia Risultati:** Visualizza i risultati della ricerca in una griglia responsive che mostra la locandina e la data di uscita di ogni film.
* **Pagine di Dettaglio:** Clicca su un film per navigare in una pagina dedicata con informazioni complete, inclusa trama, valutazione, tagline e poster ad alta risoluzione.
* **Routing Client-Side:** Un'esperienza utente fluida e veloce da Single Page Application (SPA), gestita da React Router.
* **Design Moderno:** Un'interfaccia scura (Dark Mode) stilizzata con CSS moderno, font personalizzati e variabili CSS per un look coerente.

---

## Tecnologie Utilizzate

Questo progetto è stato costruito utilizzando le seguenti tecnologie:

* **React:** Per la costruzione dell'interfaccia utente.
* **React Hooks:** Utilizzo di `useState` per la gestione dello stato locale e `useEffect` per l'esecuzione di "side effects" (chiamate API).
* **React Router DOM:** Per la gestione della navigazione e del routing client-side (`<Routes>`, `<Route>`, `<Link>`, `useParams`).
* **Vite:** Come build tool e server di sviluppo.
* **Fetch API (Browser):** Per effettuare chiamate asincrone all'API di The Movie Database (TMDb).
* **Variabili d'Ambiente:** Utilizzo di `.env.local` (gestito da Vite) per memorizzare in modo sicuro la chiave API.
* **CSS Moderno:** Styling personalizzato (no-framework) con Flexbox, CSS Grid, Custom Properties (Variabili) e transizioni.

---

## Installazione e Avvio Locale

Per eseguire questo progetto in locale sul tuo computer, segui questi passaggi:

1.  **Clona il repository:**
    ```bash
    git clone https://github.com/AlessioCom99/movie-finder.git
    ```

2.  **Entra nella cartella del progetto:**
    ```bash
    cd movie-finder
    ```

3.  **Installa le dipendenze:**
    ```bash
    npm install
    ```

4.  **Ottieni una Chiave API:**
    Questo progetto richiede una chiave API gratuita da **The Movie Database (TMDb)**.
    * Crea un account su [themoviedb.org](https://www.themoviedb.org/).
    * Vai nelle impostazioni del tuo account, nella sezione "API", e richiedi una chiave (v3 auth).

5.  **Crea il file `.env.local`:**
    Crea un file chiamato `.env.local` nella cartella principale del progetto e aggiungi la tua chiave API:
    ```
    VITE_TMDB_API_KEY=LA_TUA_CHIAVE_API_QUI
    ```

6.  **Avvia il server di sviluppo:**
    ```bash
    npm run dev
    ```

L'applicazione sarà ora in esecuzione su `http://localhost:5174`.

---

## Attribuzione

Questo prodotto utilizza l'API di TMDb ma non è approvato o certificato da TMDb.