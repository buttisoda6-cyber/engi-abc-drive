import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { engineeringTerms } from "@/data/engineeringTerms";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const EngineeringDictionary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const currentTerm = engineeringTerms[currentIndex];

  const navigate = (direction: 'next' | 'prev') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % engineeringTerms.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + engineeringTerms.length) % engineeringTerms.length);
      }
      setIsTransitioning(false);
    }, 200);
  };

  const jumpToLetter = (letter: string) => {
    const index = engineeringTerms.findIndex(term => term.letter === letter);
    if (index !== -1 && index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 200);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        navigate('next');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigate('prev');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTransitioning]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="w-full max-w-4xl mb-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Engineer's Alphabet
          </h1>
          <p className="text-muted-foreground text-lg">
            Prime Movers & Hybrid Vehicles Dictionary
          </p>
        </div>

        {/* Quick Navigation Dropdown */}
        <div className="flex justify-center mb-8">
          <Select value={currentTerm.letter} onValueChange={jumpToLetter}>
            <SelectTrigger className="tech-button w-32">
              <SelectValue placeholder="Jump to..." />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {engineeringTerms.map((term) => (
                <SelectItem 
                  key={term.letter} 
                  value={term.letter}
                  className="hover:bg-secondary cursor-pointer"
                >
                  {term.letter} - {term.term}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl engineering-card p-8 md:p-12">
        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          
          {/* Letter Display */}
          <div className="text-center mb-8">
            <div className="letter-display animate-glow-pulse">
              {currentTerm.letter}
            </div>
          </div>

          {/* Term and Image Container */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Term Information */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {currentTerm.term}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentTerm.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-glow rounded-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src={currentTerm.image || "/placeholder.svg"}
                  alt={currentTerm.term}
                  className="term-image relative z-10 animate-float"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-6">
        <button
          onClick={() => navigate('prev')}
          className="navigation-button"
          disabled={isTransitioning}
          aria-label="Previous term"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        <div className="text-sm text-muted-foreground">
          {currentIndex + 1} / {engineeringTerms.length}
        </div>

        <button
          onClick={() => navigate('next')}
          className="navigation-button"
          disabled={isTransitioning}
          aria-label="Next term"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center text-sm text-muted-foreground">
        Use arrow keys, spacebar, or buttons to navigate
      </div>
    </div>
  );
};

export default EngineeringDictionary;