# 🚚 Logistics Web Portal – Backend (NestJS)

This is the **backend API** for the Logistics Web Portal, built using **NestJS**. It provides a RESTful interface for managing shipment data and supports integration with the Angular frontend.

👉 **Frontend Repository**: [logistics-web-portal-frontend](https://github.com/doha-eid/WebPortal)

---

## ⚙️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) (Node.js + TypeScript)
- **Database**: PostgreSQL / MongoDB / In-Memory (based on configuration)
- **ORM**: TypeORM / Prisma (depending on implementation)
- **API Style**: REST
- **Tools**: Swagger for API Docs, Class-validator for DTO validation

---

## 📁 Project Structure
src/
├── app.module.ts
├── main.ts
├── shipments/
│ ├── shipments.module.ts
│ ├── shipments.controller.ts
│ ├── shipments.service.ts
│ ├── dto/
│ └── entities/
└── common/

## 🚀 Getting Started

### 1. Clone the repository ```bash
git clone https://github.com/doha-eid/logistics-web-portal-frontend.git
cd logistics-web-portal-frontend

### 2. Install dependencies
npm install
### 3. Run the App
npm run start:dev

