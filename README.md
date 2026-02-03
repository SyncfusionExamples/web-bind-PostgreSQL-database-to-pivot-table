# Bind PostgreSQL database to a Pivot Table

A quick start project for connecting a PostgreSQL database to a Syncfusion Pivot Table. This repository includes a Web API Controller ([MyWebService](./MyWebService/)) for retrieving data from a PostgreSQL database, as well as quick start samples in the [TypeScript](./Typescript/), [JavaScript](./Javascript/), [Angular](./Angular/), [React](./React/), [VUE](./VUE/), ASP.NET [Core](./Core/), [Blazor](./Blazor/) and [MVC](./MVC/) platforms that display the retrieved data in a Syncfusion Pivot Table.

---

## 📚 Table of Contents

- [🔎 Project Overview](#-project-overview)
- [🚀 Quick Start](#-quick-start)
- [✨ Key Features](#-key-features)
- [🛠️ Supported Technologies & Requirements](#️-supported-platforms--dependencies)
- [⚙️ Installation & Setup (quick)](#-installation-setup)
- [🧩 Quick Code Samples](#-quick-code-samples)
- [🏗️ Project Structure](#-project-structure)
- [❓ Troubleshooting & FAQ](troubleshooting--faq)
- [🧪 Testing & CI](#-testing--ci)
- [🤝 Contributing](#-contributing)
- [📜 License & Support](#-license--support)

---

## 🔎 Project Overview
This project demonstrates the end-to-end flow: PostgreSQL → .NET Web API → Syncfusion PivotView. It helps developers build BI-style pivot reports using relational data served as JSON.

Use cases: dashboards, ad-hoc reporting, analytics prototypes.

---

## 🚀 Quick Start

Prerequisites
- .NET 6 SDK (or later)
- PostgreSQL server with sample table (e.g., sales_table)
- Node.js (for front-end samples)

Run the Web API (`MyWebService`)

```bash
cd MyWebService
dotnet restore
dotnet run
# API runs on the configured port (see Properties/launchSettings.json)
```

Run a front-end sample (choose one):

TypeScript
```bash
cd Typescript/pivot-table
npm install
npm start
```

Angular
```bash
cd Angular/pivot-table
npm install
npm start
```

React
```bash
cd React/pivot-table
npm install
npm start
```

Vue
```bash
cd VUE/pivot-table
npm install
npm run dev
```

First success: Open the front-end sample URL (e.g., http://localhost:3000 or http://localhost:4200) and confirm the PivotView loads rows from the running Web API.

---

## ✨ Key Features
- Server-side endpoint exposing PostgreSQL query results as JSON
- Client examples across JS/TS/Angular/React/Vue and server-side (.NET Core/Blazor/MVC)
- Appsettings sample for secure DB connection
- Minimal, copy-paste-ready PivotView initialization
- CORS and sample fetch usage (recommended)

Benefits: fast prototyping, multi-framework reference, reusable server + client patterns.

---

## 🛠️ Supported Technologies & Requirements
- .NET SDK 6.0+ (project files: MyWebService/*.csproj)
- PostgreSQL 11+
- Npgsql ADO.NET provider (or EF Core provider) — recommended Npgsql 7.x (align with .NET SDK)
- Node.js 20+ for client samples
- Syncfusion EJ2 PivotView packages (npm / NuGet) — ensure license compliance
- Modern browsers (Chrome, Edge, Firefox, Safari)

Suggested dependency examples:
- Npgsql >= 7.0.0
- Microsoft.AspNetCore.App (as in project file)
- @syncfusion/ej2-pivotview ^20.1.0 (match client samples)

---

## ⚙️ Installation & Setup (quick)
Prerequisites:
- PostgreSQL server with sample table (e.g., sales_table)
- .NET SDK 6.0+
- Node.js 14+
- Syncfusion packages (trial or licensed)

1. Clone
```bash
git clone https://github.com/SyncfusionExamples/web-bind-PostgreSQL-database-to-pivot-table.git
cd web-bind-PostgreSQL-database-to-pivot-table
```

2. Configure DB (MyWebService/Controllers/PivotController.cs)
```csharp
private dynamic GetPostgreSQLResult()
{
    NpgsqlConnection connection = new NpgsqlConnection("<Enter your valid connection string here>");
}
```

3. Run Web API
```bash
cd MyWebService
dotnet restore
dotnet build
dotnet run
# API: http://localhost:xxxx/...
```

4. Run a client (TypeScript example)
```bash
cd ../Typescript
npm install
npm start
# open the served app in browser
```

Tips:
- Enable CORS in Startup/Program to allow local client origins.
- Use environment variables for production DB credentials.

---

## 🧩 Quick Code Samples

1) SQL example (sample table)
```sql
CREATE TABLE sales_table (
  id serial PRIMARY KEY,
  category text,
  subcategory text,
  region text,
  sales numeric
);
```

2) Minimal .NET Web API controller (Npgsql)
```csharp
// Controllers/PivotDataController.cs
using Microsoft.AspNetCore.Mvc;
using Npgsql;
using System.Data;

[ApiController]
[Route("[controller]")]
public class PivotController : ControllerBase
{
    [HttpGet(Name = "GetPostgreSQLResult")]
    public object Get()
    {
        return JsonConvert.SerializeObject(GetPostgreSQLResult());
    }

    private dynamic GetPostgreSQLResult()
    {
        NpgsqlConnection connection = new NpgsqlConnection("<Enter your valid connection string here>");
        connection.Open();
        NpgsqlCommand command = new NpgsqlCommand("SELECT * FROM apxtimestamp", connection);
        NpgsqlDataAdapter dataAdapter = new NpgsqlDataAdapter(command);
        DataTable dataTable = new DataTable();
        dataAdapter.Fill(dataTable);
        connection.Close();
        return dataTable;
    }
}
```

4) Vanilla JS — fetch + PivotView init
```html
<div id="PivotView"></div>
<script src="https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js"></script>
<script>
var pivotObj = new ej.pivotview.PivotView({
  dataSourceSettings: {
    url: 'https://localhost:xxxx/...',
  },
  showFieldList: true,
  width: '100%',
  height: 350,
});
pivotObj.appendTo('#PivotView');
</script>
```

5) TypeScript snippet (TS client)
```ts
import { PivotView } from '@syncfusion/ej2-pivotview';
let pivotTableObj: PivotView = new PivotView({
dataSourceSettings: {
  url: 'https://localhost:44378/Pivot',
},
showFieldList: true,
width: '100%',
height: 350,
});
pivotTableObj.appendTo('#PivotView');
```

---

## 🏗️ Project Structure
- MyWebService/ — .NET Web API (controllers, models, appsettings.json)
- Typescript/ — TypeScript client demo
- Javascript/ — Plain JS demo
- Angular/, React/, VUE/ — framework demos
- Core/, Blazor/, MVC/ — ASP.NET examples
- LICENSE, README.md — repo metadata

---

## ❓ Troubleshooting & FAQ
- Empty response: check DB connection string and table data.
- CORS blocked: enable CORS in Program.cs with allowed origins.
- Field mismatch: ensure JSON keys match PivotView field names (case-sensitive depending on client).
- Syncfusion errors: confirm package versions & license activation.

---

## 🧪 Testing & CI

- Add GitHub Actions to build the Web API and optionally run front-end builds per sample. Suggested jobs:
	- `dotnet restore` / `dotnet build` / `dotnet test`
	- `npm ci` / `npm run build` for front-end samples

---

## 🤝 Contributing

Contributions welcome. Suggested workflow:
1. Fork and create a branch `feature/<desc>`
2. Run the Web API locally and test sample clients
3. Open a PR with description, screenshots, and testing steps

## 📜 License & Support

This is a **commercial product** subject to the Syncfusion End User License Agreement (EULA).

**Free Community License** is available for qualifying users/organizations:  
- Annual gross revenue < $1 million USD  
- 5 or fewer total developers  
- 10 or fewer total employees  

The community license allows free use in both internal and commercial applications under these conditions.  
No registration or approval is required — just comply with the terms.

**Paid Licenses** are required for:  
- Larger organizations  
- Teams exceeding the community license limits  
- Priority support, custom patches, or on-premise deployment options  

Purchase options and pricing: https://www.syncfusion.com/sales/products  
30-day free trial (full features, no credit card required): https://www.syncfusion.com/downloads/essential-js2  
Community License details & FAQ: https://www.syncfusion.com/products/communitylicense  
Full EULA: https://www.syncfusion.com/eula/es/

© 2026 Syncfusion, Inc. All Rights Reserved.
