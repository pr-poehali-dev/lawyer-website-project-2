import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const services = [
    {
      title: "Наследственные и иные семейные споры",
      icon: "Users",
      description: "Профессиональная помощь в разрешении споров о наследстве и семейных конфликтов",
    },
    {
      title: "Взыскание долгов",
      icon: "FileText",
      description: "Эффективное взыскание задолженности в досудебном и судебном порядке",
    },
    {
      title: "Споры, возникшие в результате ДТП",
      icon: "Car",
      description: "Защита интересов пострадавших и виновников дорожно-транспортных происшествий",
    },
    {
      title: "Защита прав потребителей",
      icon: "ShieldCheck",
      description: "Помощь в отстаивании прав при покупке товаров и получении услуг",
    },
  ];

  const priceList = [
    { service: "Устная консультация", price: "2 000 руб." },
    {
      service: "Устная консультация, требующая изучения и анализа документов",
      price: "5 000 руб.",
    },
    { service: "Составление претензий, жалоб, заявлений", price: "от 5 000 руб." },
    {
      service:
        "Написание искового заявления, апелляционной, кассационной жалобы, другие документы, предусмотренные ГПК и АПК РФ",
      price: "от 15 000 руб.",
    },
    {
      service:
        "Составление заявления об установлении факта имеющего юридическое значение, иных заявлений рассматриваемых судами общей юрисдикции в порядке особого производства",
      price: "10 000 руб.",
    },
    { service: "Составление договоров", price: "от 25 000 руб." },
    {
      service: "Ведение несложного гражданского дела (суд первой инстанции)",
      price: "40 000 руб.",
    },
    {
      service:
        "Ведение несложного гражданского дела (суд апелляционной, кассационной инстанции)",
      price: "20 000 руб.",
    },
    {
      service: "Ведение сложного гражданского дела (суд первой инстанции)",
      price: "70 000 руб.",
    },
    {
      service:
        "Ведение сложного гражданского дела (суд апелляционной, кассационной инстанции)",
      price: "35 000 руб.",
    },
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Профессиональный подход к делу. Удалось выиграть сложный спор о наследстве. Рекомендую!",
      rating: 5,
    },
    {
      name: "Михаил Сидоров",
      text: "Отличный специалист! Помог взыскать долг быстро и эффективно. Все вопросы решались оперативно.",
      rating: 5,
    },
    {
      name: "Елена Иванова",
      text: "Благодарна за помощь в споре по ДТП. Компетентный юрист, всегда на связи. Очень довольна результатом.",
      rating: 5,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scale" size={32} className="text-accent" />
            <h1 className="text-2xl font-bold text-primary">Юридические услуги</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">
              Услуги
            </a>
            <a href="#prices" className="text-foreground hover:text-accent transition-colors">
              Цены
            </a>
            <a href="#reviews" className="text-foreground hover:text-accent transition-colors">
              Отзывы
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Контакты
            </a>
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
            <a href="https://t.me/lawyerEKT" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" size={16} className="mr-2" />
              Написать в Telegram
            </a>
          </Button>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Профессиональная юридическая помощь
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Защита ваших прав и интересов в любых правовых ситуациях. Опыт, надежность,
              результат.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold"
              >
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">7+ лет опыта</h3>
              <p className="text-muted-foreground">Успешная практика в различных отраслях права</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Icon name="Users" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">500+ клиентов</h3>
              <p className="text-muted-foreground">Довольны результатами нашей работы</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">95% выигранных дел</h3>
              <p className="text-muted-foreground">Высокий процент успешных исходов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">
              Специализируемся на следующих направлениях
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-border hover:border-accent/50"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} size={24} className="text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Стоимость услуг</h2>
            <p className="text-muted-foreground text-lg">Прозрачные цены для физических лиц</p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {priceList.map((item, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-[1fr,auto] gap-4 p-6 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="text-foreground">{item.service}</div>
                    <div className="font-semibold text-accent text-lg">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">Что говорят о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-white/90 text-lg">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Ваше имя
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Опишите вашу ситуацию..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="border-border"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
                    size="lg"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-8 text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Icon name="Mail" size={20} />
                <span>lawyerekt@mail.ru</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Icon name="MapPin" size={20} />
                <span>г. Севастополь</span>
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                <a href="https://t.me/lawyerEKT" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Scale" size={24} className="text-accent" />
              <span className="font-semibold">Юридические услуги</span>
            </div>
            <div className="text-center text-white/80 text-sm">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;