# comp(Я)artim
Evitem desplaçaments, evitem contagis!

See it in: https://ixorx.github.io/comprartim


## Install the project

Recommended use yarn but you can use npm. For development you should use yarn.

```
> yarn install
```

## Set up the project in order to work locally
You need to download the entry files from gh-pages branch:
```
> git worktree add dist gh-pages
```

Execute the following in the command line:
```
> echo "FIREBASE_API_KEY=<API_KEY> firebase" > .env
```


## Build
##### DEV:

You can build dev bundle for test local environment.

```
> yarn start
```

##### PRO:

You can build the bundle for production environment.

```
> yarn pro
```
