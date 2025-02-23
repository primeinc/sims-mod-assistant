# Sims 4 Mod Assistant [![Build Status](https://travis-ci.org/EgorBlagov/sims-mod-assistant.svg?branch=master)](https://travis-ci.org/EgorBlagov/sims-mod-assistant) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Small electron app intended to help Sims players and content makers to find and move duplicates and possible conflicts among mods.

# Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Video tutorial](#video-tutorial)
- [CLI](#cli)
- [Development Setup](#development-setup)
- [Localization](#localization)
- [Support](#support)
- [Contributing](#contributing)
- [Known Issues and Limitations](#known-issues-and-limitations)
- [License](#license)

# Features

-   Finds exact duplicates (copy-paste files with different names)
-   Parses mod contents and looks for probable conflicts for:
    -   Catalog/Definition
    -   Skintone
    -   CAS
    -   Sliders
-   Groups conflicting files into lists
-   Shows visual relationship between conflicting files
-   Supports quick open of specific mod in Sims4Studio
-   Supports filtering, batch selection and moving selected mods to other directory

![Main view](/assets/screenshot-1.png?raw=true)
![Graph viewer](/assets/screenshot-2.png?raw=true)

# Usage

Download application from Releases page and start.

## Video tutorial

[![Sims Mod Assistant Tutorial](https://img.youtube.com/vi/m-VSYq3zcdg/0.jpg)](https://youtu.be/m-VSYq3zcdg "Sims Mod Assistant Tutorial")

# CLI

```bash
# build
npm run build

# start
npm run start

# dev
npm run dev

# unit tests
npm run test

# lint
npm run lint
```

# Development Setup

To set up the development environment, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/EgorBlagov/sims-mod-assistant.git
cd sims-mod-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Start the development server:
```bash
npm run dev
```

5. Run unit tests:
```bash
npm run test
```

6. Lint the code:
```bash
npm run lint
```

## Note on Dev

I was not able to make **Electron** and **Parcel** best friends, so on `npm run dev` there are several reloads of electron app

# Localization

If you want to contribute, you should do:

-   check available localizations at `/common/l10n/`
-   make a new one using an existing one as sample
-   add enum entry to `/common/l10n/index.ts`

Or you can just translate and submit an issue, I'll add new one.

# Support

-   [PayPal](https://www.paypal.com/paypalme/emblagov)
-   [Qiwi](https://qiwi.com/n/STRAL577)

# Contributing

To contribute to this project, please follow these guidelines:

- Follow the existing code style and conventions used in the repository. This includes using `prettier` for code formatting and `tslint` for linting TypeScript code. You can run `npm run lint` to automatically format and lint your code.
- Add comments to explain the purpose and functionality of classes, functions, interfaces, and types. For example, add comments at the beginning of each class and function in `common/errors.ts` and `common/event-emitter.ts` to explain their purpose and functionality.
- Add comments to explain the purpose of modules and files. For example, add comments at the beginning of each module and file in the `server/dbpf` directory to explain their purpose and functionality.
- Write descriptive commit messages to provide context and reasoning for changes made to the codebase.
- Ensure that all dependencies in the `package.json` file are up to date. Review and update the versions of dependencies listed in the `package.json` file to their latest stable versions. Remove any unused dependencies and run `npm audit` to identify and fix any security vulnerabilities.
- Add unit tests for the components in the `ui/components` directory to ensure they work as expected and to catch any potential bugs early.
- Improve the `.gitignore` file to exclude any unnecessary files or directories that are not relevant to the project.
- Add a `CONTRIBUTING.md` file to provide guidelines for contributing to the project, including coding standards, pull request guidelines, and issue reporting.
- Ensure that the `README.md` file is up to date and includes detailed documentation, examples of usage, and explanations of the different features.
- Implement continuous integration and continuous deployment (CI/CD) pipelines to automate the testing and deployment process, ensuring that the code is always in a deployable state. This can be done using GitHub Actions.
- Add unit tests for the components in the `ui/components` directory to ensure they work as expected and to catch any potential bugs early.
- Add more detailed documentation in the `README.md` file, including examples of usage and explanations of the different features.
- Add more descriptive commit messages to provide context and reasoning for changes made to the codebase.

# Known Issues and Limitations

- The application may have performance issues when handling a large number of mods.
- Some conflicts may not be detected due to the limitations of the conflict detection algorithm.
- The application may not work correctly with certain mod formats or file structures.
- The user interface may have some usability issues that need to be addressed.

# License

ISC © [Egor Blagov](https://github.com/EgorBlagov)
