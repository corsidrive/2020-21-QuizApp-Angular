

## Inserimento del foglio di stile di Bootstrap

Installazione del css di Bootstrap tramite [**pacchetto npm**](https://www.npmjs.com/package/bootstrap)
 
```bash
$ npm install bootstrap --save
```

Adesso dentro la cartella **node_module** del progetto
possiamo trovare il file: **bootstrap.css**

    node_modules\bootstrap\dist\css\bootstrap.min.css

Aggiungiamo il file ai fogli di stile del progetto.

**file: angular.json**

```json   
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```

> Importante: RIAVVIARE 
>
> $ ng serve
>
> Bisogna ricompilare il codice

## Creazione di un componente

Creazione del MainHeader \<component>

```console
$ ng generate component MainHeader 
```

### Passaggio dati dal componente **padre** al componente **figlio**

**Input decorator**

*file: "src\app\app.component.html"*
```html
<main-header title="Quizz App"> </main-header>
```

*file: "src\app\main-header\main-header.component.ts"*
```java
@Input() public title:string
```
*file: "src\app\main-header\main-header.component.html"*
```html
<header>
    <div class="container border-bottom border-secondary">
        <h1 class="main-header_title display-2">
            {{title}}
        </h1>
        <p class="main-header__lead">{{lead}}</p>
    </div>
</header>
```


