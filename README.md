🧠 Sovereign AI Twin
Your AI, Your Data, Your Identity.
A full-stack decentralized application (dApp) that allows you to create a hyper-personalized AI agent that learns from your own data. This project uses blockchain to ensure you have provable ownership and sovereign control over your AI twin's identity and memory.

✨ About The Project
Project Synapse is a tool for augmented self-reflection. It moves beyond simple chatbots by creating a "digital twin" of your mind. By ingesting your personal writings, notes, and journals, it learns your unique communication style, knowledge, and values.

You can then interact with this twin to:

Get Advice: Analyze complex decisions through a lens that reflects your own thinking process.

Brainstorm Ideas: Generate creative concepts that are tailored to your specific tastes and past work.

Draft Communications: Autopilot difficult emails or messages in your own authentic voice.

The core innovation is the integration of blockchain to solve a critical problem of the AI era: data ownership. With Synapse, you don't just use your AI twin; you own it, provably and securely, on a public blockchain.

🚀 Key Features
Decentralized Identity: Secure, password-less login using your Ethereum wallet via Sign-In with Ethereum (SIWE).

AI Memory Ingestion: Upload text data to be processed, converted into vector embeddings, and stored in a secure vector database.

On-Chain Ownership: A smart contract registers your wallet as the sole owner of your AI twin's identity.

Immutable Memory Log: A cryptographic hash of new data is stored on-chain, creating a permanent, verifiable audit trail of your twin's cognitive development.

Retrieval-Augmented Generation (RAG): The AI retrieves your most relevant "memories" before answering a query, enabling it to think and respond in a style that reflects your own data.

Conversational Interface: A sleek, modern chat interface for conversing with your AI twin.

🛠️ Technology Stack
Framework: Next.js (App Router)

Frontend: React, TypeScript, Tailwind CSS

Blockchain:

Smart Contract: Solidity

Development Environment: Hardhat

Frontend Connectivity: Wagmi, Viem, Ethers.js

AI & Data:

AI Model: Google Gemini API (Text Generation & Embeddings)

Vector Database: Pinecone

Decentralized Storage: IPFS (via Pinata)

🏁 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js & npm (or yarn/pnpm)

An Ethereum wallet (e.g., MetaMask)

API keys for:

Google AI (Gemini)

Pinecone

Pinata

An RPC Provider like Alchemy or Infura

Installation & Setup
Clone the repository:

git clone https://github.com/Gsjskskkudjd/sovereign-ai-twin.git
cd sovereign-ai-twin

Install dependencies:

npm install

Set up environment variables:

Copy the .env.example file to a new file named .env.

Fill in your API keys and your wallet's private key for deployment.

cp .env.example .env

Compile the smart contract:

npx hardhat compile

Deploy the smart contract to a test network:

Make sure your wallet has some Sepolia test ETH from a faucet.

npx hardhat run scripts/deploy.ts --network sepolia

Copy the deployed contract address and save it for your frontend configuration.

Run the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result.

📖 Usage
Connect Your Wallet: Use the "Connect Wallet" button to sign in.

Add Memories: Navigate to the "Add Memory" tab. Paste text from your notes or journals and click "Commit to Memory" to ingest the data into your twin's knowledge base.

Converse: Switch to the "Chat" tab. Ask your twin questions, pose scenarios, or ask for advice. The AI will use your ingested memories to formulate a response in your own style.

⚖️ License
Distributed under the MIT License. See LICENSE.txt for more information.
