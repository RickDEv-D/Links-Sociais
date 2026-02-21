 🌗 DevLinks – Página de Links com Dark/Light Mode

Projeto desenvolvido em **HTML, CSS e JavaScript puro**, com foco em estudo de fundamentos de front-end, manipulação de DOM e alternância de tema (Dark / Light Mode).


📌 Sobre o Projeto

O **DevLinks** é uma página simples de links pessoais (estilo Linktree), onde é possível:

* 👤 Exibir foto de perfil
* 🔗 Listar links personalizados
* 🌙 Alternar entre modo escuro e claro
* 🎨 Alterar dinamicamente cores, background e imagem de perfil
* 📱 Layout responsivo

O projeto utiliza **variáveis CSS**, manipulação de classes no `<html>` e troca dinâmica de imagens via JavaScript.



## 🚀 Tecnologias Utilizadas

* **HTML5**
* **CSS3**

  * Variáveis CSS (`:root`)
  * `backdrop-filter`
  * `transition`
  * Flexbox
* **JavaScript (Vanilla JS)**

  * Manipulação de DOM
  * `classList.toggle()`
  * Alteração dinâmica de atributos
* **Ionicons**
* **Google Fonts (Inter)**

📂 Estrutura do Projeto
```
Estudo/
│
├── index.html
├── estyle.css
├── script.js
│
└── assets/
    ├── avatar.png
    ├── avatar-light.png
    ├── bg-desktop.jpg
    ├── bg-desktop-light.jpg
    ├── bg-mobile.jpg
    ├── bg-mobile-light.jpg
    ├── MoonStars.svg
    └── Sun.svg
```



 🎨 Funcionamento do Tema (Dark / Light)

O projeto utiliza uma abordagem moderna baseada em:

1️⃣ Variáveis CSS

No `:root` são definidas variáveis padrão (modo escuro):

```css
:root {
  --text-color: white;
  --bg--url: url(/assets/bg-desktop.jpg);
  --swith-bg-url: url(/assets/MoonStars.svg);
}


Quando a classe `.light` é adicionada ao `<html>`, os valores são sobrescritos:

```css
.light {
  --text-color: black;
  --bg--url: url(/assets/bg-mobile-light.jpg);
  --swith-bg-url: url(/assets/Sun.svg);
}
```



### 2️⃣ Alternância via JavaScript

No `script.js`:

```javascript
function ToggleMode(){
   const html = document.documentElement;
   html.classList.toggle('light');

   const img = document.querySelector(".profile img");

   if(html.classList.contains("light")){
       img.setAttribute("src", "./assets/avatar-light.png");
   } else {
       img.setAttribute("src","./assets/avatar.png");
   }
}
```

✔ O script:

* Alterna a classe `light`
* Troca a imagem de perfil
* Atualiza automaticamente cores e background



## 🧠 Conceitos Trabalhados

* Manipulação do DOM
* Estrutura semântica HTML
* Organização de projeto front-end
* CSS moderno com variáveis
* Transições suaves
* Controle de tema dinâmico
* Estrutura responsiva básica



## 📱 Responsividade

* Layout centralizado com `max-width: 360px`
* Uso de `flexbox`
* Background adaptável
* Estrutura otimizada para mobile

---

## 🔥 Possíveis Melhorias Futuras

* Salvar tema no `localStorage`
* Adicionar animações mais elaboradas
* Melhorar responsividade com media queries
* Transformar em componente reutilizável
* Implementar versão com React ou Next.js
* Adicionar painel administrativo para edição de links


## ▶ Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/devlinks.git
```

2. Abra o arquivo `index.html` no navegador.

Ou utilize extensão **Live Server** no VSCode.



## 💡 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Praticar fundamentos de front-end
* Entender alternância de temas
* Treinar manipulação de classes
* Trabalhar com variáveis CSS
* Melhorar organização de código



## 👨‍💻 Autor

Desenvolvido por **Ricardo Costa**
Feito com ❤️ e dedicação aos estudos de front-end.



