
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Clock, MessageCircle, ArrowDown } from "lucide-react";

const Index = () => {
  const scrollToAction = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header com destaques */}
      <header className="bg-gradient-to-r from-green-600 to-green-500 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-sm">
            <div className="flex items-center justify-center gap-1">
              <Check size={16} />
              <span>Frete Grátis</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Clock size={16} />
              <span>Entrega 24h</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span>💰</span>
              <span>Pague na Entrega</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span>📅</span>
              <span>Escolha o Dia</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span>💳</span>
              <span>Pix/Cartão</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span>🏪</span>
              <span>Loja OnExpres</span>
            </div>
          </div>
        </div>
      </header>

      {/* Seção VSL */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-base">
            OFERTA LIMITADA - FRETE GRÁTIS
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Aspirador de Pó Portátil
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
            Compacto, Potente e Silencioso
          </h2>
          <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
            R$ 97,00
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Pagamento apenas na entrega • Frete grátis para todo Brasil
          </p>
          
          <h3 className="text-3xl font-bold mb-8">Veja como funciona:</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-2 mb-8">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://drive.google.com/file/d/1Sb5zd2LFdyMUQ0aMw8CuvAi13tAFKLSt/preview"
                  title="Aspirador de Pó Portátil - Demonstração"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-xl font-bold"
                onClick={scrollToAction}
              >
                🚀 Quero Agendar Minha Entrega Agora por R$97,00
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full md:w-auto border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
                onClick={scrollToAction}
              >
                📦 Agendar com Frete Grátis e Pagamento na Entrega
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação do Produto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Por que escolher nosso aspirador?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Compacto e Portátil</h4>
                    <p className="text-gray-600">Perfeito para levar anywhere e usar em qualquer lugar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Ideal para Sofá e Carro</h4>
                    <p className="text-gray-600">Alcança cantos difíceis e remove pelos de animais</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Silencioso com Filtro Lavável</h4>
                    <p className="text-gray-600">Não incomoda e é econômico para manter</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/7ad4f4ce-8f87-403d-b3bd-3908433da82c.png" 
                alt="Aspirador de Pó Portátil - Pague somente na entrega, receba em até 24h"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Rápidos */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Vantagens Exclusivas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <CardContent className="p-2">
                <Clock className="mx-auto mb-2 text-blue-600" size={32} />
                <h4 className="font-semibold text-sm">Entrega 24h</h4>
              </CardContent>
            </Card>
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <CardContent className="p-2">
                <div className="text-3xl mb-2">🚚</div>
                <h4 className="font-semibold text-sm">Frete Grátis</h4>
              </CardContent>
            </Card>
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <CardContent className="p-2">
                <div className="text-3xl mb-2">📅</div>
                <h4 className="font-semibold text-sm">Agendar Entrega</h4>
              </CardContent>
            </Card>
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <CardContent className="p-2">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold text-sm">Pagar na Entrega</h4>
              </CardContent>
            </Card>
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <CardContent className="p-2">
                <div className="text-3xl mb-2">✅</div>
                <h4 className="font-semibold text-sm">Garantia 7 dias</h4>
              </CardContent>
            </Card>
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <CardContent className="p-2">
                <MessageCircle className="mx-auto mb-2 text-green-600" size={32} />
                <h4 className="font-semibold text-sm">Suporte WhatsApp</h4>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-green-600">
              📱 WhatsApp: (17) 99607-3511
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                city: "São Paulo - SP",
                text: "Produto excelente! Chegou rapidinho e funciona perfeitamente. Recomendo!",
                stars: "⭐⭐⭐⭐⭐"
              },
              {
                name: "João Santos",
                city: "Rio de Janeiro - RJ", 
                text: "Muito prático para o carro. Pagamento na entrega me deu muita segurança.",
                stars: "⭐⭐⭐⭐⭐"
              },
              {
                name: "Ana Costa",
                city: "Belo Horizonte - MG",
                text: "Silencioso e potente. Perfeito para pelos do meu gato no sofá!",
                stars: "⭐⭐⭐⭐⭐"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.city}</p>
                  </div>
                  <p className="text-gray-700 text-center mb-3">"{testimonial.text}"</p>
                  <div className="text-center">{testimonial.stars}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA com Urgência */}
      <section id="cta-section" className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">Não Perca Esta Oportunidade!</h3>
          <p className="text-xl mb-2">⚠️ Restam poucas unidades com frete grátis e pagamento na entrega</p>
          <p className="text-lg mb-8 opacity-90">Promoção válida apenas hoje!</p>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 text-xl"
            >
              🚀 Quero Agendar Agora — Só R$97,00
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full border-white text-white hover:bg-white hover:text-green-600 py-6 text-lg"
            >
              📅 Escolher o Dia da Entrega
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full border-white text-white hover:bg-white hover:text-green-600 py-6 text-lg"
            >
              💰 Pagar Só Quando Chegar
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">
              📱 Dúvidas? Chama no WhatsApp: (17) 99607-3511
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Posso escolher o dia da entrega?",
                answer: "Sim! Após a compra, você pode agendar o dia e horário que preferir para receber seu produto."
              },
              {
                question: "Como funciona o pagamento na entrega?",
                answer: "Você só paga quando o produto chegar na sua casa. Aceitamos dinheiro, Pix, cartão de crédito e débito."
              },
              {
                question: "É confiável comprar aqui?",
                answer: "Somos a Loja OnExpres, com milhares de clientes satisfeitos. Oferecemos garantia e suporte via WhatsApp."
              },
              {
                question: "Tem garantia?",
                answer: "Sim! Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro."
              },
              {
                question: "Quais formas de pagamento aceitam?",
                answer: "Aceitamos Pix, cartão de crédito, cartão de débito e dinheiro. Tudo na comodidade da sua casa."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Loja OnExpres</h4>
              <p className="text-gray-300 mb-4">
                Sua loja de confiança para produtos de qualidade com entrega rápida e segura.
              </p>
              <div className="flex items-center gap-2 text-green-400">
                <MessageCircle size={20} />
                <span>WhatsApp: (17) 99607-3511</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📱 WhatsApp: (17) 99607-3511</li>
                <li>⏰ Segunda à Sábado: 8h às 18h</li>
                <li>📧 Resposta em até 2 horas</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Importantes</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white">Política de Entrega</a></li>
                <li><a href="#" className="hover:text-white">Política de Troca e Devolução</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Loja OnExpres. Todos os direitos reservados.</p>
            <p className="mt-2">CNPJ: XX.XXX.XXX/XXXX-XX</p>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg"
          onClick={() => window.open('https://wa.me/5517996073511', '_blank')}
        >
          <MessageCircle size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
