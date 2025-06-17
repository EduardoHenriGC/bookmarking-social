# 📚 Laravel + PrimeVue Project

![Laravel](https://img.shields.io/badge/Laravel-v12-%23f9322c)
![Inertia.js](https://img.shields.io/badge/Inertia.js-v2-%236b46c1)
![Vue.js](https://img.shields.io/badge/Vue.js-v3.5-%2342b883)
![PrimeVue](https://img.shields.io/badge/PrimeVue-v4-%2310b981)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-%230284c7)

Projeto base utilizando [Laravel](https://laravel.com/docs/master), [Inertia.js](https://inertiajs.com/), [Vue 3](https://vuejs.org/), [PrimeVue](https://primevue.org/) e [Tailwind CSS](https://tailwindcss.com/).

---

## 🚀 Clone o projeto

```bash
git clone https://github.com/EduardoHenriGC/bookmarking-social.git
cd bookmarking-social
```

## ⚙️ Configuração do Ambiente

Copie o arquivo `.env.example` para `.env`:

### Unix/Mac
```bash
cp .env.example .env
```

### Windows (PowerShell)
```powershell
copy .env.example .env
```

Gere a chave da aplicação:

```bash
php artisan key:generate
```

Configure o banco de dados no arquivo `.env` e então rode as migrations:

```bash
php artisan migrate
```

## 📦 Instalar dependências

### Backend (PHP / Laravel)
```bash
composer install
```

### Frontend (Vue / Tailwind / PrimeVue)
```bash
npm install
```

## ✅ Tudo pronto!

Agora você pode iniciar o servidor de desenvolvimento com:

```bash
php artisan serve
```

E em outro terminal, rodar o Vite:

```bash
npm run dev
```

---

## ✨ Tecnologias Utilizadas

- **Laravel 12** – Backend robusto com Eloquent ORM
- **Inertia.js 2** – Ponte entre Laravel e Vue
- **Vue.js 3.5** – Framework progressivo JavaScript
- **PrimeVue 4** – Componentes UI ricos e acessíveis
- **Tailwind CSS 4** – Estilização rápida e responsiva

---

## 📁 Estrutura do Projeto

```
├── app/
├── resources/
│   ├── js/
│   │   ├── Pages/
│   │   └── Components/
├── routes/
│   └── web.php
├── public/
├── database/
└── ...
```

---

## 🧪 Contribuições

Pull Requests são bem-vindos! Sinta-se à vontade para sugerir melhorias, reportar bugs ou adicionar novas funcionalidades.

---

## 📝 Licença

Este projeto está sob a licença MIT.
