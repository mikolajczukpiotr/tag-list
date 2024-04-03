# React + TypeScript + Vite

## StackOverflow Tag Browser

This project is a user interface for browsing tags provided by the StackOverflow API. It's built with React, TypeScript, and Vite.

## Features

- Paginated table or list of tags along with the number of related posts (count field)
- Configurable number of items per page via a numeric field above the table
- Selection of the sorting field and direction through a UI element of your own choice
- Appropriate states for the data loading stage and errors when fetching
- Uses a ready-made UI component library: MUI
- Storybook prepared to present the components used in the application

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/mikolajczukpiotr/tag-list.git
cd tag-list
```

2. Copy the sample environment file and set your variables:

```bash
cp .env.sample .env
```

3. Install the dependencies:

```bash
npm ci
```

3. Start the application:

```bash
npm start
```

4. To view the components in Storybook:

```bash
npm run storybook
```
