# Quiz App

## Installazione

Per poter usare questo progetto:

```bash

$ git clone https://github.com/corsidrive/2020-21-QuizApp-angular.git

# Entro nella cartella del progetto
$ cd 2020-21-QuizApp-Angular

# recupero le dipendenze con npm
$ npm install

# avvio il server di sviluppo (http://localhost:4200)
$ ng serve

```


## [README.md delle cose fatte a lezione](./__docs__/README.angular.md)

## Materiali vari usati a lezione

- [Layout HTML di partenza della partita](./__docs__/index.html)
- [file JSON demo della *response* di Opentrivia DB](./__docs__/response.json)
- [Grafici e diagrammi vari](./__docs__/png/angular_quiz.component.png)

---

[Sito con del progetto Opentrivia DB](https://opentdb.com/)
- [Pagina per la creazione dell' API URL](https://opentdb.com/api_config.php)



```typescript
  providers: [
    GameService
  ],
```

# HTTPClient

Installazione

file: src/app/app.module.ts

```typescript
 
 imports: [
     BrowserModule,
     HttpClientModule 
  ],

```

file: game.service.ts

```typescript

  constructor(private httpClient:HttpClient) { 
      
      ```

utilizzo httpClient 

```js
 
 getResponse(){

        this.httpClient.get('https://opentdb.com/api.php?amount=10&type=multiple')
        .subscribe((responseHttp)=>{
            console.log("subscribe",responseHttp);
            })
    }
    
```
