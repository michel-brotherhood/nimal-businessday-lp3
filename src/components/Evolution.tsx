import nissanLogo from "@/assets/nissan-logo-new.png";
import ambevLogo from "@/assets/ambev-logo.png";
import nissan1 from "@/assets/nissan-1.jpeg";
import nissan2 from "@/assets/nissan-2.jpeg";
import nissan3 from "@/assets/nissan-3.jpeg";
import nissan4 from "@/assets/nissan-4.jpeg";
import nissan5 from "@/assets/nissan-5.jpeg";
import nissan6 from "@/assets/nissan-6.jpeg";
import ambev1 from "@/assets/ambev-1.jpeg";
import ambev2 from "@/assets/ambev-2.jpeg";
import ambev3 from "@/assets/ambev-3.jpeg";
import ambev4 from "@/assets/ambev-4.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Evolution = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-0 sm:py-2 lg:py-4 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* IOT and RFID Introduction */}
        <div 
          ref={contentRef}
          className={`max-w-5xl mx-auto mb-0 sm:mb-2 transition-all duration-1000 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">O que é RFID?</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              RFID ou Identificação por radiofrequência é um aparelho de identificação automática através de 
              sinais de rádio que recuperam e armazenam dados remotos através de etiquetas RFID.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Esta etiqueta é um transponder, um pequeno objeto que é colocado em embalagens ou produtos, 
              que contém chips de silício e antenas que permitem captar os sinais de rádio enviados pela 
              base transmissora.
            </p>
            
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Internet das Coisas (IOT)</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              A Internet das Coisas (IoT) revoluciona a forma como interagimos com dispositivos e sistemas, 
              permitindo a conexão inteligente entre objetos físicos e o mundo digital. Através de sensores, 
              conectividade e análise de dados em tempo real, a IoT possibilita automação, monitoramento 
              remoto e tomada de decisões baseadas em dados, transformando operações e aumentando a 
              eficiência em diversos setores industriais.
            </p>
          </div>
        </div>

        {/* Cases Nissan */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center mb-8">
              <img 
                src={nissanLogo} 
                alt="Nissan" 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cases
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[nissan1, nissan2, nissan3, nissan4, nissan5, nissan6].map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="bg-background/50 rounded-lg overflow-hidden border border-border transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                      <img 
                        src={image} 
                        alt={`Case Nissan ${index + 1}`} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-2">
                    <img 
                      src={image} 
                      alt={`Case Nissan ${index + 1}`} 
                      className="w-full h-full object-contain"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>

        {/* Cases Ambev */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center mb-8">
              <img 
                src={ambevLogo} 
                alt="Ambev" 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cases
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[ambev1, ambev2, ambev3, ambev4].map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="bg-background/50 rounded-lg overflow-hidden border border-border transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                      <img 
                        src={image} 
                        alt={`Case Ambev ${index + 1}`} 
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-2">
                    <img 
                      src={image} 
                      alt={`Case Ambev ${index + 1}`} 
                      className="w-full h-full object-contain"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
