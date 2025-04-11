Sure! Here's a complete `README.md` file combining everything you've asked for in a clean, well-structured format:

---

```markdown
# 🧮 Calculator App + RSDoctor Integration

This project demonstrates a simple **Calculator App** built with **Next.js**, along with an integration of **[RSDoctor](https://rsdoctor.dev)** — a powerful diagnostic tool that helps analyze your app’s performance, routing structure, and build configuration.

---

## 🚀 Features

- ✅ A basic Calculator accessible at `/calc`
- 📊 Integrated **RSDoctor** plugin
- ⚡ Built using **Next.js** and **TypeScript**

---

## 🧮 Calculator App

A minimal calculator is available at:

```
http://localhost:3000/calc
```

It supports basic arithmetic operations and is built as a learning component to demonstrate component-based development and routing in Next.js.

---

## 🔍 RSDoctor Plugin Integration

We’ve integrated **RSDoctor** to analyze the build and runtime performance of our app.

### 📦 Installation

Install RSDoctor plugin via npm:

```bash
yarn add @rsdoctor/webpack-plugin -D
```

---

### 🛠️ Integration Steps

Update your `next.config.js` or `next.config.ts` like so:

```ts
import type { NextConfig } from 'next';
import { RsdoctorWebpackPlugin } from '@rsdoctor/webpack-plugin';

const rsDoctorEnabled = process.env.RS_DOCTOR === 'true';


const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    console.log('conf!!' , config)
    if(rsDoctorEnabled){
      if (config.name === 'client') {
        config.plugins.push(
          new RsdoctorWebpackPlugin({
            disableClientServer: true,
          }),
        );
      } else if (config.name === 'server') {
        config.plugins.push(
          new RsdoctorWebpackPlugin({
            disableClientServer: true,
            output: {
              reportDir: './.next/server',
            },
          }),
        );
      }
    }
   
    return config;
  },
};

export default nextConfig;
```

---

## 📊 Generating RSDoctor Report

Once integrated, follow these steps to generate and view the report:

### 1. Run a Production Build with RS_DOCTOR = true

```bash
yarn rs-doctor-build
```

This generates RSDoctor metrics under `.next/rsdoctor`.

### 2. View the Report

Run the CLI command to start the RSDoctor report:

```bash
yarn client:rsd

or

yarn server:rsd

```

This will launch an interactive report in your browser.

---

## ⚙️ Optional Runtime Collection (Client-side)

To collect **runtime metrics** (like route loads, dynamic chunks), enable runtime data collection:

```ts
rsdoctor: {
  enabled: true,
  collectInRuntime: true,
}
```

---

## 📚 References

- [RSDoctor Quick Start Guide](https://rsdoctor.dev/guide/start/quick-start)
- [RSDoctor Plugin Configuration](https://rsdoctor.dev/guide/next-plugin/options)

---

## 🧑‍💻 Author & Contributing

This project is for educational purposes. Feel free to fork it, try new ideas, and contribute.

---

## 📄 License

MIT
```

---

Let me know if you'd like this saved as a file or want to add badges, images, or links to your GitHub repo!