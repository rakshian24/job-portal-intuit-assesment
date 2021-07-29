# Job Portal Application

### **Users can create their profile and apply for the jobs posted by admin**

## Version - 1

### `Features Supported`

1. Two Roles - Admin and User.
2. Added form validation for profile.
3. User is able to create profile and add his github projects.
4. Supported dark and light theming.
5. Fully Responsive.

## Version - 2

### `Added husky and lint-staged for formatting code the code before commiting and pushing it to github`

**Steps for formatting the code using husky pre-commit hook**

1. Install the below dev dependencies

   `npm install husky@1.3.1 lint-staged@8.1.5 prettier@1.16.4 --save-dev`

2. Create a file ".prettierrc" in the root dir of the project and the contents of this file should be like below

```
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "eslint.autoFixOnSave": false,
  "arrowParens": "always"
}
```

3. Place the below code snippet in your package.json file

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,json,scss,less,css,md}": [
      "prettier --write",
      "git add"
    ]
  }
```

3. Now, when we commit our code, the husky with the help of lint-staged will run first to format our code and then commit it.
