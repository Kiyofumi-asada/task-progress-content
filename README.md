## client

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

### prisma(orm)

- schema を作成・更新した場合

```
npx prisma migrate dev --name 〇〇
```

→migration ファイルが作成される

- migration ファイルから table を作成する場合

```
npx prisma migrate deploy
```
