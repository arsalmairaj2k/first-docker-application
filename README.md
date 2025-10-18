# Full-Stack Hello World Application

<img width="825" height="666" alt="image" src="https://github.com/user-attachments/assets/919389a9-b150-424d-9ab6-dd334be418bb" />


This is a complete full-stack application with:
- **Backend**: Node.js with Express.js API server
- **Frontend**: React.js with modern UI and responsive design
- **Containerization**: Docker with Docker Compose orchestration
- **Production Ready**: Multi-stage builds, security best practices, and health monitoring

## 🚀 Features

- **Interactive Frontend**: Beautiful React UI with gradient design and real-time backend communication
- **RESTful Backend**: Express.js API with CORS, health checks, and multiple endpoints
- **Docker Orchestration**: Automated service management with Docker Compose
- **Production Setup**: Nginx reverse proxy, optimized builds, and security configurations

## 📁 Project Structure
```
.
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── .dockerignore
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── .dockerignore
├── docker-compose.yml
└── README.md
```

## 🛠️ Prerequisites

- Docker Engine (v20.10+)
- Docker Compose (v2.0+)
- Ubuntu/Linux system (tested on Ubuntu)

## 🚀 Quick Start

1. **Clone/Navigate to the project directory**
   ```bash
   cd /path/to/App.eg.
   ```

2. **Build and run the application**
   ```bash
   sudo docker compose up --build
   ```
   
   **Note**: Use `sudo docker compose` (with space) not `docker-compose` (with hyphen)

3. **Access the application**
   - **Frontend**: http://localhost:3000
   - **Backend API**: http://localhost:5000
   - **API Health Check**: http://localhost:5000/api/health

## 🔧 API Endpoints

### Backend (Port 5000)
- `GET /` - Basic hello message
- `GET /api/hello` - Hello World API response
- `GET /api/health` - Health check endpoint

## 🐳 Docker Commands

```bash
# Build and start all services
sudo docker compose up --build

# Run in background (detached mode)
sudo docker compose up -d --build

# Stop all services
sudo docker compose down

# View logs
sudo docker compose logs -f

# View logs for specific service
sudo docker compose logs -f backend
sudo docker compose logs -f frontend

# Rebuild specific service
sudo docker compose up --build backend
```

## 🔍 Troubleshooting

### Docker Permission Issues
If you get permission denied errors:
```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Restart your session or run:
newgrp docker

# Or use sudo temporarily:
sudo docker compose up --build
```

### Frontend Not Loading
- Check if both containers are running: `sudo docker compose ps`
- Verify nginx configuration: `sudo docker compose logs frontend`
- Ensure port 3000 is not in use by another application

### Backend Connection Issues
- Test backend directly: http://localhost:5000/api/hello
- Check backend logs: `sudo docker compose logs backend`
- Verify network connectivity between containers

## 🏗️ Development

- **Frontend**: React.js with modern hooks and axios for API calls
- **Backend**: Express.js with CORS enabled for cross-origin requests
- **Containerization**: Multi-stage Docker builds for optimization
- **Networking**: Custom Docker network for service communication

## 📦 Technologies Used

- **Frontend**: React 18, Axios, CSS3 with gradients
- **Backend**: Node.js 18, Express.js, CORS middleware
- **Containerization**: Docker, Docker Compose, Nginx
- **Development**: Hot reloading, health checks, production optimizations
