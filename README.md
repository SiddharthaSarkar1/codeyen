
# Codeyen - AI-Powered Website Builder

Codeyen is a full-stack application that leverages generative AI to build and modify websites from simple text prompts. It features a robust backend, a reactive frontend with a live visual editor, and a complete user authentication and credit system.

### ✨ Screenshots


![Project Dashboard](demo-images/codeyen_home.png)
![Live Preview and Editor](demo-images/codeyen6.png)
![Projects Page](demo-images/codeyen10.png)
![Community Showcase](demo-images/codeyenc.png)
![Signup Page](demo-images/codeyen10.png)
![Signup Page](demo-images/codeyen2.png)
![Projects Page](demo-images/codeyen10.png)

---

## 🚀 Core Features

- **AI Website Generation**: Create entire websites from a single text prompt.
- **AI-Powered Revisions**: Request changes and iterate on your design using natural language.
- **Live Visual Editor**: Click on any element in the live preview to modify its text, styles (colors, spacing), and classes directly.
- **User Authentication**: Secure user registration and login system powered by `better-auth`.
- **Credit System**: Users have credits that are consumed for AI-powered actions (creation and revision).
- **Stripe Integration**: Seamlessly purchase more credits through Stripe checkout.
- **Project Management**: Manage all your creations in a personal dashboard.
- **Versioning & Rollbacks**: Automatically saves versions of your site, allowing you to roll back to any previous state.
- **Publish & Share**: Publish your final projects to share them with the world.
- **Community Showcase**: View a gallery of websites created and published by other users.
- **Responsive Previews**: Instantly switch between desktop, tablet, and mobile views to test your design.
- **Dockerized Environment**: The entire application is containerized for easy setup and consistent deployment.

---

## 💻 Tech Stack

| Category      | Technology                                                                                             |
|---------------|--------------------------------------------------------------------------------------------------------|
| **Frontend**  | React, TypeScript, Vite, Tailwind CSS, React Router, Sonner (Notifications), `better-auth/react`         |
| **Backend**   | Node.js, Express.js, TypeScript, Prisma (ORM)                                                          |
| **Database**  | PostgreSQL (recommended)                                                                               |
| **AI**        | OpenAI API (`openai/gpt-oss-120b:free` model) for prompt enhancement and code generation.                     |
| **Payments**  | Stripe for credit purchases and webhook integration.                                                   |
| **DevOps**    | Docker, Docker Compose                                                                                 |

---

## ⚙️ Getting Started

Follow these instructions to set up and run the project on your local machine.

### 1. Prerequisites

- [Docker](https://www.docker.com/get-started/) and [Docker Compose](https://docs.docker.com/compose/install/) must be installed.
- [Node.js](https://nodejs.org/) (v18+) and [pnpm](https://pnpm.io/installation) (optional, for local client/server installs).

### 2. Clone the Repository

```bash
git clone https://github.com/SiddharthaSarkar1/codeyen.git
cd codeyen
```

### 3. Environment Variables

You need to create a `.env` file in the `./server` directory. Copy the example below and fill in your own credentials.

`./server/.env`:
```env
# Prisma - Your PostgreSQL connection string
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# OpenAI API Key
OPENAI_API_KEY="your-openai-api-key"

# Authentication - Generate strong secret keys
JWT_SECRET="your-jwt-secret"
JWT_REFRESH_SECRET="your-jwt-refresh-secret"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# CORS - Your frontend URL
TRUSTED_ORIGINS=http://localhost:8080
```

### 4. Database Setup

Before building the containers, you need to apply the database schema.

First, start the database service:
```bash
docker-compose up -d db
```

Then, install server dependencies and run Prisma Migrate:
```bash
cd server
npm install
npx prisma migrate dev --name init
cd ..
```

### 5. Run the Application

Now you can build and run the entire application using Docker Compose.

```bash
docker-compose up --build
```

Once the build is complete, the application will be accessible:
- **Client (Frontend):** [http://localhost:8080](http://localhost:8080)
- **Server (Backend):** Running on port 3000.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request