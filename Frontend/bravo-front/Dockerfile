#frontend Dockerfile

FROM node:22-alpine

WORKDIR /app

# package.json, package-lock.json 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# Vite 실행 파일에 실행 권한 부여
RUN chmod +x ./node_modules/.bin/vite

# 소스 코드 복사 (필요한 파일들이 .dockerignore에 누락되지 않았는지 확인)
COPY . .

# 기존 빌드 캐시 삭제 (옵션)
RUN rm -rf node_modules/.vite

EXPOSE 5174

CMD ["npm", "run", "dev", "--", "--host"]