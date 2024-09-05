# Lapor Folka

This repository contains end-to-end tests for https://lapor.folkatech.com/ using Playwright. Playwright is a powerful tool for automating browsers, enabling you to write tests that simulate real user interactions with your application.

## Installation

To get started with this project, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/eznxxy/lapor-folka.git
cd lapor-folka
pnpm install
```

## Running Tests

To execute the tests, use the following command:

```bash
pnpm exec playwright test
```

## Running Specific Tests

You can run a specific test or set of tests by providing a path or name:

```bash
pnpm exec playwright test login
```

## Running Tests with Different Browsers

Playwright supports multiple browsers. You can run tests in a specific browser as follows:

```bash
pnpm exec playwright test --project=chromium
pnpm exec playwright test --project=firefox
```

## Running Tests with @tag

Playwright allows you to filter tests by their title or other properties using the -g (grep) option in the command line:

```bash
pnpm exec playwright test -g '@pass'
pnpm exec playwright test -g '@fail'
```
