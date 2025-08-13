import NeuralBackground from "@/components/NeuralBackground";
import HeroSection from "@/components/HeroSection";
import ChatInterface from "@/components/ChatInterface";
import MemoryIngestor from "@/components/MemoryIngestor";
import BlockchainStatus from "@/components/BlockchainStatus";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NeuralBackground />
      <HeroSection />
      <ChatInterface />
      <MemoryIngestor />
      <BlockchainStatus />
    </div>
  );
};

export default Index;
