import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Upload, FileText, Hash, Database } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const MemoryIngestor = () => {
  const [textInput, setTextInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleMemoryIngestion = async () => {
    if (!textInput.trim()) {
      toast({
        title: "No content provided",
        description: "Please enter some text to commit to memory.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate the ingestion process
    setTimeout(() => {
      const mockHash = `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`;
      
      toast({
        title: "Memory committed successfully!",
        description: `Your data has been processed and stored. Hash: ${mockHash}`,
      });
      
      setTextInput("");
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <section className="py-20 px-6 bg-surface-elevated/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-neural bg-clip-text text-transparent">
            Feed Your AI Twin's Memory
          </h2>
          <p className="text-muted-foreground text-lg">
            Upload your writings, notes, and thoughts to enhance your AI twin's understanding of you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-surface-elevated/50 backdrop-blur-sm border-border p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-neural-blue" />
                Add Memory Content
              </h3>
              <p className="text-muted-foreground text-sm">
                Paste your text content or upload files to train your AI twin.
              </p>
            </div>

            <Textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Enter your thoughts, notes, writings, or any text that represents you..."
              className="min-h-[200px] bg-surface-interactive border-border resize-none"
              disabled={isProcessing}
            />

            <div className="mt-4 flex gap-2">
              <Button 
                onClick={handleMemoryIngestion}
                disabled={isProcessing || !textInput.trim()}
                className="bg-gradient-neural hover:shadow-neural flex-1"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </div>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Commit to Memory
                  </>
                )}
              </Button>
              
              <Button 
                variant="outline" 
                className="border-neural-purple text-neural-purple hover:bg-neural-purple/10"
                disabled={isProcessing}
              >
                Upload File
              </Button>
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              Character count: {textInput.length} | Estimated tokens: ~{Math.ceil(textInput.length / 4)}
            </div>
          </Card>

          <Card className="bg-surface-elevated/50 backdrop-blur-sm border-border p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-neural-purple" />
              Memory Processing
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-surface-interactive rounded-lg">
                <div className="w-8 h-8 bg-neural-blue/20 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-neural-blue" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Text Chunking</div>
                  <div className="text-xs text-muted-foreground">Split content into optimal segments</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-surface-interactive rounded-lg">
                <div className="w-8 h-8 bg-neural-purple/20 rounded-full flex items-center justify-center">
                  <Database className="h-4 w-4 text-neural-purple" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Vector Embedding</div>
                  <div className="text-xs text-muted-foreground">Convert to neural representations</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-surface-interactive rounded-lg">
                <div className="w-8 h-8 bg-neural-cyan/20 rounded-full flex items-center justify-center">
                  <Hash className="h-4 w-4 text-neural-cyan" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Blockchain Proof</div>
                  <div className="text-xs text-muted-foreground">Generate immutable memory hash</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-subtle rounded-lg border border-neural-glow/30">
              <div className="text-sm font-medium mb-2 text-neural-blue">Your Memory Stats</div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-muted-foreground">Total Memories</div>
                  <div className="font-semibold text-foreground">247</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Vector Dimensions</div>
                  <div className="font-semibold text-foreground">1,536</div>
                </div>
                <div>
                  <div className="text-muted-foreground">On-chain Proofs</div>
                  <div className="font-semibold text-foreground">34</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Learning Score</div>
                  <div className="font-semibold text-neural-purple">87%</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MemoryIngestor;