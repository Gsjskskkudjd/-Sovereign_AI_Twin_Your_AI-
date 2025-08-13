import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Link, Shield, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const BlockchainStatus = () => {
  const mockWalletAddress = "0x742d...a7b3";
  const mockTwinId = "#2847";
  
  const handleConnectWallet = () => {
    toast({
      title: "Wallet Connection",
      description: "In production, this would connect to MetaMask via SIWE",
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-neural bg-clip-text text-transparent">
            Sovereign Identity & Ownership
          </h2>
          <p className="text-muted-foreground text-lg">
            Your AI twin's identity and memories are cryptographically secured on the blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-surface-elevated/50 backdrop-blur-sm border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-neural-blue/20 rounded-full flex items-center justify-center">
                <Wallet className="h-5 w-5 text-neural-blue" />
              </div>
              <div>
                <h3 className="font-semibold">Wallet Connection</h3>
                <p className="text-sm text-muted-foreground">Ethereum wallet status</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-surface-interactive rounded-lg">
                <span className="text-sm">Address</span>
                <span className="text-sm font-mono text-neural-blue">{mockWalletAddress}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-surface-interactive rounded-lg">
                <span className="text-sm">Network</span>
                <span className="text-sm text-neural-purple">Sepolia Testnet</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-surface-interactive rounded-lg">
                <span className="text-sm">Status</span>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">Connected</span>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleConnectWallet}
              variant="outline" 
              className="w-full mt-4 border-neural-blue text-neural-blue hover:bg-neural-blue/10"
            >
              Reconnect Wallet
            </Button>
          </Card>

          <Card className="bg-surface-elevated/50 backdrop-blur-sm border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-neural-purple/20 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-neural-purple" />
              </div>
              <div>
                <h3 className="font-semibold">AI Twin Registry</h3>
                <p className="text-sm text-muted-foreground">On-chain ownership proof</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-surface-interactive rounded-lg">
                <span className="text-sm">Twin ID</span>
                <span className="text-sm font-mono text-neural-purple">{mockTwinId}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-surface-interactive rounded-lg">
                <span className="text-sm">Registration Date</span>
                <span className="text-sm">March 15, 2024</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-surface-interactive rounded-lg">
                <span className="text-sm">Memory Proofs</span>
                <span className="text-sm text-neural-cyan">34 stored</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full mt-4 border-neural-purple text-neural-purple hover:bg-neural-purple/10"
            >
              <Link className="h-4 w-4 mr-2" />
              View on Etherscan
            </Button>
          </Card>
        </div>

        <Card className="mt-6 bg-gradient-subtle border-neural-glow/30 p-6">
          <h3 className="font-semibold mb-3 text-neural-blue">Recent Memory Proofs</h3>
          <div className="space-y-2">
            {[
              "0x8f4a...9d2c - Personal journal entry about AI ethics",
              "0x3b7e...5a1f - Research notes on blockchain governance", 
              "0x9c2d...8e6b - Creative writing piece about future societies"
            ].map((proof, index) => (
              <div key={index} className="flex items-center gap-3 p-2 text-sm">
                <div className="w-2 h-2 bg-neural-glow rounded-full" />
                <span className="font-mono text-muted-foreground">{proof}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BlockchainStatus;