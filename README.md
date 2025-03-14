 `Settings` > `Actions` > `General` 

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

`«Workflow permissions»` 

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)


## Деплой

 гілку `gh-pages`, 

```json
"build": "vite build --base=/<REPO>/",
```

Далі необхідно зайти в налаштування з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)
