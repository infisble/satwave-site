# рџђі Docker Deployment Guide

Complete guide for running SatWave website in Docker containers.

---

## рџ“‹ Prerequisites

**Required Software:**
- **Docker Desktop** (Windows/Mac) or **Docker Engine** (Linux)
  - Download: https://www.docker.com/get-started
  - Version: 20.10+ recommended
- **Docker Compose** (included with Docker Desktop)

**System Requirements:**
- 2GB RAM minimum
- 10GB free disk space
- Port 3000 available

---

## рџљЂ Quick Start

### Build and Run with Docker Compose
```bash
docker-compose up --build -d
```

### Access the Application
Open your browser to: **http://localhost:3000**

The command will:
1. вњ… Build the Docker image
2. вњ… Start the container in detached mode
3. вњ… Set up health checks
4. вњ… Enable auto-restart

---

## рџ› пёЏ Manual Docker Commands

### Build and Start (Development)
```bash
# Build the image and start container
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop container
docker-compose down
```

### Production Build
```bash
# Build optimized production image
docker build -t satwave-site:latest .

# Run production container
docker run -d \
  --name satwave-production \
  -p 3000:3000 \
  --restart unless-stopped \
  satwave-site:latest
```

---

## рџ“‚ Docker Files Explained

### Dockerfile
Multi-stage build for optimal image size:
- **Stage 1 (deps)**: Install dependencies
- **Stage 2 (builder)**: Build Next.js application
- **Stage 3 (runner)**: Minimal runtime image

**Features:**
- Alpine Linux (small base image)
- Non-root user for security
- Standalone output mode
- Production optimized

### docker-compose.yml
Orchestration configuration:
- Service: `satwave-site`
- Port mapping: `3000:3000`
- Health checks enabled
- Auto-restart policy

### .dockerignore
Excludes unnecessary files from build:
- `node_modules`
- `.next` build cache
- Development files
- Git files

---

## рџ”§ Configuration

### Environment Variables

Create `.env.local` file (optional):
```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
```

Pass to Docker:
```yaml
# docker-compose.yml
environment:
  - NODE_ENV=production
  - CUSTOM_VAR=value
```

### Change Port

Edit `docker-compose.yml`:
```yaml
ports:
  - "8080:3000"  # External:Internal
```

---

## рџ“Љ Container Management

### View Logs
```bash
# Follow logs
docker-compose logs -f

# Last 100 lines
docker-compose logs --tail=100

# Specific service
docker logs satwave-website
```

### Restart Container
```bash
# Graceful restart
docker-compose restart

# Force restart
docker-compose down && docker-compose up -d
```

### Stop and Remove
```bash
# Stop containers
docker-compose stop

# Remove containers
docker-compose down

# Remove images too
docker-compose down --rmi all
```

### Shell Access
```bash
# Execute shell in container
docker exec -it satwave-website sh

# Run commands
docker exec satwave-website ls -la
```

---

## рџЏҐ Health Checks

Container includes automated health monitoring:
- **Check**: HTTP GET to http://localhost:3000
- **Interval**: Every 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3 attempts
- **Start Period**: 40 seconds

View health status:
```bash
docker ps
docker inspect satwave-website | grep -A 10 Health
```

---

## рџђћ Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
netstat -ano | findstr :3000  # Windows
lsof -i :3000                  # Linux/Mac

# Use different port
# Edit docker-compose.yml: "8080:3000"
```

### Build Fails
```bash
# Clean build
docker-compose down
docker system prune -a
docker-compose build --no-cache
docker-compose up -d
```

### Container Won't Start
```bash
# Check logs
docker-compose logs

# Verify Docker is running
docker version
docker ps

# Check disk space
docker system df
```

### Slow Build
```bash
# Use BuildKit (faster builds)
# Windows PowerShell:
$env:DOCKER_BUILDKIT=1
docker-compose build

# Linux/Mac:
DOCKER_BUILDKIT=1 docker-compose build
```

---

## рџ”ђ Security Best Practices

**вњ… Implemented:**
- Non-root user (`nextjs:nodejs`)
- Minimal Alpine base image
- No unnecessary packages
- Security headers in Next.js
- Standalone output (no dev dependencies)

**Additional Recommendations:**
```dockerfile
# Scan for vulnerabilities
docker scan satwave-site:latest

# Update base images regularly
docker pull node:20-alpine
docker-compose build --pull
```

---

## рџ“€ Performance Optimization

### Image Size
Current optimizations:
- Multi-stage build: ~150MB final image
- Alpine Linux base
- Standalone output
- No dev dependencies

### Build Speed
```bash
# Enable BuildKit
export DOCKER_BUILDKIT=1

# Layer caching
docker-compose build

# Parallel builds
docker-compose build --parallel
```

### Runtime Performance
```yaml
# docker-compose.yml - Add resource limits
services:
  satwave-site:
    deploy:
      resources:
        limits:
          cpus: '2.0'
          memory: 1G
        reservations:
          cpus: '0.5'
          memory: 512M
```

---

## рџЊђ Production Deployment

### Cloud Platforms

**Docker Hub:**
```bash
# Tag image
docker tag satwave-site:latest username/satwave-site:latest

# Push to Docker Hub
docker push username/satwave-site:latest
```

**AWS ECS / Azure / GCP:**
```bash
# Build for platform
docker buildx build \
  --platform linux/amd64 \
  -t satwave-site:latest .
```

**Kubernetes:**
```yaml
# kubernetes/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: satwave-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: SatWave
  template:
    metadata:
      labels:
        app: SatWave
    spec:
      containers:
      - name: SatWave
        image: satwave-site:latest
        ports:
        - containerPort: 3000
```

---

## рџ“љ Useful Commands Reference

```bash
# Build
docker-compose build                 # Build images
docker-compose build --no-cache      # Clean build

# Start/Stop
docker-compose up -d                 # Start detached
docker-compose down                  # Stop and remove
docker-compose restart               # Restart services

# Logs
docker-compose logs -f               # Follow logs
docker-compose logs --tail=50        # Last 50 lines

# Status
docker-compose ps                    # List containers
docker stats satwave-website          # Resource usage

# Cleanup
docker-compose down --rmi all        # Remove all
docker system prune -a               # Clean everything
docker volume prune                  # Remove volumes
```

---

## вњ… Checklist

**Before Deployment:**
- [ ] Docker installed and running
- [ ] Port 3000 available
- [ ] Environment variables configured
- [ ] .dockerignore file present
- [ ] Health checks tested

**After Deployment:**
- [ ] Container running: `docker ps`
- [ ] Health check passing
- [ ] Website accessible: http://localhost:3000
- [ ] Logs showing no errors
- [ ] Resource usage acceptable

---

## рџЋЇ Summary

**Quick Commands:**
```bash
# Build and start
docker-compose up --build -d

# Stop
docker-compose down

# View logs
docker-compose logs -f

# Rebuild from scratch
docker-compose down && docker system prune -f && docker-compose up --build -d
```

**Access:**
- Website: http://localhost:3000
- Container: `docker exec -it satwave-website sh`

**Status:**
вњ… Production-ready
вњ… Optimized for performance
вњ… Secure by default
вњ… Easy to deploy

---

**Need Help?**
- Docker Docs: https://docs.docker.com
- Next.js Docker: https://nextjs.org/docs/deployment
- Issue Tracker: [Project Issues]
