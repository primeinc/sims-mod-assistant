# Contributing to Sims Mod Assistant

To contribute to this project, please follow these guidelines:

## Code Style and Conventions

- Follow the existing code style and conventions used in the repository. This includes using `prettier` for code formatting and `tslint` for linting TypeScript code. You can run `npm run lint` to automatically format and lint your code.
- Add comments to explain the purpose and functionality of classes, functions, interfaces, and types. For example, add comments at the beginning of each class and function in `common/errors.ts` and `common/event-emitter.ts` to explain their purpose and functionality.
- Add comments to explain the purpose of modules and files. For example, add comments at the beginning of each module and file in the `server/dbpf` directory to explain their purpose and functionality.
- Write descriptive commit messages to provide context and reasoning for changes made to the codebase.

## Dependencies

- Ensure that all dependencies in the `package.json` file are up to date. Review and update the versions of dependencies listed in the `package.json` file to their latest stable versions. Remove any unused dependencies and run `npm audit` to identify and fix any security vulnerabilities.

## Unit Tests

- Add unit tests for the components in the `ui/components` directory to ensure they work as expected and to catch any potential bugs early.

## .gitignore

- Improve the `.gitignore` file to exclude any unnecessary files or directories that are not relevant to the project.

## Continuous Integration and Continuous Deployment (CI/CD)

- Implement continuous integration and continuous deployment (CI/CD) pipelines to automate the testing and deployment process, ensuring that the code is always in a deployable state. This can be done using GitHub Actions.

## Documentation

- Ensure that the `README.md` file is up to date and includes detailed documentation, examples of usage, and explanations of the different features.
- Add more detailed documentation in the `README.md` file, including examples of usage and explanations of the different features.

## Commit Messages

- Add more descriptive commit messages to provide context and reasoning for changes made to the codebase.

## Pull Requests

- When submitting a pull request, ensure that your code follows the guidelines mentioned above. Provide a clear description of the changes made and the reasoning behind them. Include any relevant issue numbers in the pull request description.

## Issue Reporting

- When reporting an issue, provide a clear and detailed description of the problem, including steps to reproduce the issue, expected behavior, and any relevant screenshots or error messages. Include information about your operating system, Node.js version, and any other relevant environment details.

Thank you for contributing to Sims Mod Assistant!
