import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI twin. I'm learning from your data to become more like you. What would you like to talk about?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = [
        "Based on what I've learned from your writings, I think you might find this perspective interesting...",
        "That reminds me of something you mentioned in your notes about creativity and innovation.",
        "From your personal data, I can see you have a unique approach to problem-solving. Here's what I suggest...",
        "I've analyzed your thought patterns, and I believe this aligns with your core values and interests.",
        "Your past insights suggest you'd appreciate this nuanced view on the topic..."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: randomResponse,
        isUser: false,
        timestamp: new Date()
      }]);
      
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    simulateAIResponse(inputValue);
    toast({
      title: "Message sent",
      description: "Your AI twin is processing your message...",
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-neural bg-clip-text text-transparent">
            Chat with Your AI Twin
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience personalized AI responses based on your unique data and thought patterns.
          </p>
        </div>

        <Card className="bg-surface-elevated/50 backdrop-blur-sm border-border p-6">
          <div className="h-96 overflow-y-auto mb-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.isUser ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.isUser 
                    ? 'bg-neural-blue/20 text-neural-blue' 
                    : 'bg-neural-purple/20 text-neural-purple'
                }`}>
                  {message.isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg px-4 py-2 ${
                  message.isUser
                    ? 'bg-neural-blue/10 text-foreground ml-auto'
                    : 'bg-surface-interactive text-foreground'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neural-purple/20 text-neural-purple flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-surface-interactive rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-neural-purple rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-neural-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-neural-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask your AI twin anything..."
              className="flex-1 bg-surface-interactive border-border"
              disabled={isTyping}
            />
            <Button 
              type="submit" 
              size="icon"
              className="bg-gradient-neural hover:shadow-neural"
              disabled={isTyping || !inputValue.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ChatInterface;