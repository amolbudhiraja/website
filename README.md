# Personal Website of Amol Budhiraja

Welcome to the repository for my personal website, [amol.budhiraja.com](https://amol.budhiraja.com/). This site is built using Next.js and deployed via Vercel.

## Table of Contents

- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

This is the source code for my personal website, which showcases my work, projects, and professional journey. The site is designed to be clean, responsive, and easy to navigate, providing visitors with a seamless experience across all devices.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** CSS Modules / TailwindCSS (update as per your implementation)
- **Hosting:** [Vercel](https://vercel.com/)
- **Other:** React, JavaScript, and any other libraries or tools you have used.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or Yarn) installed on your machine.

- **Node.js:** Download and install Node.js from [here](https://nodejs.org/).
- **npm:** npm is included with Node.js. Alternatively, you can use Yarn by installing it [here](https://classic.yarnpkg.com/en/docs/install).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amolbudhiraja/website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd website
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Usage

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Adding PDFs

To add and link PDFs to your site:

1. Place the PDF files in the `public` directory.
2. Link to the PDF files in your Next.js pages using standard anchor tags. Example:
   ```jsx
   <a href="/sample.pdf" target="_blank" rel="noopener noreferrer">Download Sample PDF</a>
   ```

## Deployment

The site is automatically deployed on [Vercel](https://vercel.com/). Any changes pushed to the `main` branch of this repository will trigger a new deployment.

### Manual Deployment

To manually deploy the website to Vercel:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
2. Push to the main branch:
   ```bash
   git push origin main
   ```
   
3. The site will be automatically deployed via Vercel.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Amol Budhiraja - abudhiraja \[at\] berkeley \[dot\] edu

Project Link: [https://github.com/amolbudhiraja/website](https://github.com/amolbudhiraja/website)


You can now easily copy and paste this markdown into your README file on GitHub or any other text editor.
