# Projects I've worked on

Most recent first

## Timelapso 

### Goal

Build a GUI to control Canon cameras over WiFi, with an embedded LLM chatbot interface for agentic interaction.

### Features

- 🤖 Operate the camera using an LLM agent capable of interpreting and executing natural language commands
- 🔧 View and adjust shooting settings via form inputs  
- 📺 View a live video stream from the camera  
- 📸 Take photos remotely  
- ⬇️ Auto-download photos as they're captured  
- 🎯 Set autofocus position by clicking or describing a point in the frame

<iframe width="560" height="315" src="https://www.youtube.com/embed/OiTpYCwAw8A?si=NM_bmKWl_Cag-VwN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Tech Stack:
- Electron
- React
- Tailwind CSS
- LangChain
- AI Providers: OpenAI, Anthropic, Gemini, llama
- TypeScript


## Canon MCP Server

### Goal

Control Canon cameras via HTTP requests and agentic workflows.

### Features 

- 🌐 Expose Canon's CCAPI functionality through a native JavaScript client  
- 🛠️ Provide an MCP server for interacting with Canon's CCAPI over a structured API layer  
- 🤖 Enable integration with agentic workflows for autonomous or scripted camera control

<iframe width="560" height="315" src="https://www.youtube.com/embed/5TUBidJqbEg?si=VccusZa99nZNlQYS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Tech Stack:

- TypeScript
- Bash
- MCP Server

##  Local Faro

Search local images using natural language queries via **Vision Transformer** embeddings from **SigLIP-2**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/b1OnnrUsJ6o?si=jGeHjnHeLNcFf5W4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Features

- 🗂️ Index local image files  
- 🧠 Embed images using **SigLIP-2**, a transformer-based image encoder  
- 🖼️ GUI for natural language search and visual result display  
- 🔁 Reverse image search: input an internet image URL to find similar local images


### Tech Stack

- Electron, TypeScript
- Python, FastAPI
- Transformers: SigLIP-2, CLIP


## ExplainDev Browser Extension

Content WIP

## ExplainDev VS Code Extension

Content WIP

## ExplainDev Code Snippets

Create code tutorials with the help of AI

<iframe width="560" height="315" src="https://www.youtube.com/embed/LcKhSe0iVyA?si=1p33k5R8eNj3n2mj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://github.com/ExplainDev/tutorial-maker">View project repo</a>

### Features

- 💥 Add code blocks and text elements
- 🤖 Explain code with AI
- 🖼️ Download tutorial as an png image
- ↔️ Resize, position and change color of elements
- 🌈 Custom background using plain CSS directives
- 🪄 Code Syntax Highlighting


### Tech Stack

- React, TypeScript
- Cloud: Azure Web App
- GenAI: OpenAI Codex + fine-tuned GPT models.

## Kommandr

Find, save, and share terminal commands—collaboratively.

**This project won 2nd place at a hackathon sponsored by Facebook. I was awarded a $10,000 check.** [View project details](https://devpost.com/software/kommandr-u1xcqg)

![Happy Image](happy.jpeg)


<iframe width="560" height="315" src="https://www.youtube.com/embed/TWnx7LMQmI0?si=9XAjtiUhsE5-kMJ-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Features

- 🔍 Search commands by intent, not syntax
- 💾 Save frequently used commands to the cloud
- 👥 Share commands and collections with teams
- 🧠 Smart organization into private/public collections
- 🛠️ Fork, remix, and annotate shared commands
- 🖥️ Access commands from browser or terminal
- 🔐 Self-hostable for teams with sensitive data
- 🌍 Fully open-source and customizable

### Tech Stack

- Frontend: React.js (ES6), SCSS
- Backend: Express.js, GraphQL
- Database: SQLite
- Auth & APIs: Facebook Login API, GitHub
- Cloud Hosting: AWS (2 compute nodes)
- Language: JavaScript (ES6)
