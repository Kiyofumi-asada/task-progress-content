## client

```
cd client
```

### local start

```
nvm use
npm i
npm run start
```

http://localhost:3000

### if local electron start

```
npm run start-dev
```

http://localhost:3000

### electron application distribution

```
npm run build-local
```

dist > mac > Task Progress Contents.app

## server

```
cd server
```

### initial local setup

1.create .env

```
DATABASE_URL="mysql://root:password@localhost:3306/task_progress_content"
```

2.create mysql databases

```
mysql> create database task_progress_content;
```

3.schema map

```
nvm use
npm i
npx prisma migrate deploy
```

### local start

```
npm run start
```

http://localhost:8080

### prisma(orm)

- when updating the schema

```
npx prisma migrate dev --name 〇〇
```

- if you only want to map the schema

```
npx prisma migrate deploy
```
