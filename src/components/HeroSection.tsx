import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Shield, Zap } from "lucide-react";
import aiAvatar from "@/assets/ai-avatar.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={aiAvatar} 
              alt="AI Twin Avatar" 
              className="w-24 h-24 animate-pulse-neural"
            />
            <div className="absolute inset-0 bg-gradient-neural opacity-20 rounded-full blur-xl animate-pulse-neural" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent leading-tight">
          Sovereign AI Twin
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Create your decentralized AI companion that learns from your data while ensuring 
          <span className="text-neural-blue font-semibold"> complete ownership</span> and 
          <span className="text-neural-purple font-semibold"> sovereign control</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-neural hover:shadow-neural transition-all duration-300 group">
            Create Your Twin
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-neural-purple text-neural-purple hover:bg-neural-purple/10">
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-surface-elevated/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-surface-interactive/50 transition-all duration-300">
            <Brain className="h-12 w-12 text-neural-blue mb-4 mx-auto animate-float" />
            <h3 className="text-xl font-semibold mb-2">Neural Memory</h3>
            <p className="text-muted-foreground">Your AI twin learns from your writings, notes, and thoughts to become truly personalized.</p>
          </div>

          <div className="bg-surface-elevated/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-surface-interactive/50 transition-all duration-300">
            <Shield className="h-12 w-12 text-neural-purple mb-4 mx-auto animate-float" style={{ animationDelay: '2s' }} />
            <h3 className="text-xl font-semibold mb-2">Blockchain Ownership</h3>
            <p className="text-muted-foreground">Cryptographically proven ownership of your AI twin's identity and memories on-chain.</p>
          </div>

          <div className="bg-surface-elevated/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-surface-interactive/50 transition-all duration-300">
            <Zap className="h-12 w-12 text-neural-cyan mb-4 mx-auto animate-float" style={{ animationDelay: '4s' }} />
            <h3 className="text-xl font-semibold mb-2">Sovereign Control</h3>
            <p className="text-muted-foreground">Complete control over your data with decentralized storage and no central authority.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;