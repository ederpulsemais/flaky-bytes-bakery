import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Star, Wheat, Heart, Truck, Sparkles, ArrowRight } from "lucide-react";
import heroBread from "@/assets/hero-bread.jpg";
import productPaes from "@/assets/product-paes.jpg";
import productBolos from "@/assets/product-bolos.jpg";
import productSalgados from "@/assets/product-salgados.jpg";
import productCafe from "@/assets/product-cafe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Padaria Farinha & Forno — Pães artesanais, bolos e cafés frescos" },
      { name: "description", content: "Padaria artesanal de bairro: pães frescos, bolos sob encomenda, salgados e café especial. Peça pelo WhatsApp e retire na loja." },
      { property: "og:title", content: "Padaria Farinha & Forno" },
      { property: "og:description", content: "Produção diária, ingredientes selecionados e atendimento personalizado. Encomende pelo WhatsApp." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Padaria%20Farinha%20%26%20Forno.";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Differentials />
      <Products />
      <Promotions />
      <Testimonials />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="flex items-center gap-2 text-[color:var(--cream)]">
          <Wheat className="h-6 w-6" />
          <span className="font-display text-xl font-semibold tracking-tight">Farinha &amp; Forno</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[color:var(--cream)]/85 md:flex">
          <a href="#produtos" className="hover:text-[color:var(--cream)]">Produtos</a>
          <a href="#promocoes" className="hover:text-[color:var(--cream)]">Promoções</a>
          <a href="#depoimentos" className="hover:text-[color:var(--cream)]">Depoimentos</a>
          <a href="#contato" className="hover:text-[color:var(--cream)]">Contato</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[color:var(--cream)] px-5 py-2.5 text-sm font-medium text-[color:var(--cocoa)] transition hover:bg-white sm:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Pedir agora
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroBread}
        alt="Pães artesanais quentes saindo do forno"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--cocoa)]/85 via-[color:var(--cocoa)]/60 to-[color:var(--cocoa)]/95" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-end gap-12 px-6 pb-20 pt-36 md:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:pb-28">
        <div className="text-[color:var(--cream)]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--cream)]/25 bg-[color:var(--cream)]/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-[color:var(--cream)]/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Fornada diária desde 1998
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-balance md:text-7xl lg:text-[5.5rem]">
            O cheiro de <em className="not-italic text-[color:var(--ember)]">pão quentinho</em> a cada manhã do seu bairro.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[color:var(--cream)]/80 md:text-xl">
            Pães artesanais, bolos sob encomenda, salgados crocantes e café especial — feitos com calma, fermento natural e ingredientes selecionados.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--ember)] px-7 py-4 text-base font-semibold text-[color:var(--cocoa)] shadow-[var(--shadow-warm)] transition hover:bg-[color:var(--cream)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir pelo WhatsApp
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#produtos" className="inline-flex items-center gap-2 px-2 py-4 text-sm font-medium text-[color:var(--cream)]/90 underline-offset-4 hover:underline">
              Ver o cardápio
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-[color:var(--cream)]/15 pt-8">
            <Stat value="27" label="anos no bairro" />
            <Stat value="40+" label="receitas artesanais" />
            <Stat value="4.9★" label="avaliação dos clientes" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl text-[color:var(--cream)] md:text-4xl">{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-[color:var(--cream)]/65">{label}</dd>
    </div>
  );
}

function Differentials() {
  const items = [
    { icon: Wheat, title: "Produção diária", desc: "Massas longas, fermento natural e fornadas que começam às 4h da manhã." },
    { icon: Heart, title: "Ingredientes selecionados", desc: "Farinhas especiais, manteiga francesa e produtores locais de confiança." },
    { icon: Sparkles, title: "Atendimento de bairro", desc: "Conhecemos você pelo nome — e a sua receita preferida também." },
    { icon: Truck, title: "Entrega local", desc: "Encomendas entregues fresquinhas na sua porta dentro do bairro." },
  ];
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="max-w-2xl text-balance text-4xl leading-tight md:text-5xl">
            Por que somos a padaria preferida da vizinhança.
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Quatro princípios simples que cabem em todas as nossas fornadas, há quase três décadas.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8">
              <Icon className="h-7 w-7 text-[color:var(--crust)]" />
              <h3 className="mt-6 text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    { img: productPaes, title: "Pães Artesanais", desc: "Sourdough, italiano, integral e o nosso clássico francês — assados o dia todo.", tag: "Frescos a cada 2h" },
    { img: productBolos, title: "Bolos & Doces", desc: "Confeitaria fina, bolos para festas e tortas sob encomenda com 24h de antecedência.", tag: "Sob encomenda" },
    { img: productSalgados, title: "Salgados", desc: "Coxinha, pão de queijo, empada e a esfiha que virou tradição da rua.", tag: "Quentinhos" },
    { img: productCafe, title: "Café & Bebidas", desc: "Café especial em grãos torrados na semana, cappuccino aveludado e chocolates quentes.", tag: "Espaço café" },
  ];
  return (
    <section id="produtos" className="bg-[color:var(--cocoa)] py-24 text-[color:var(--cream)] md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ember)]">Cardápio</span>
            <h2 className="mt-3 max-w-2xl text-4xl leading-tight md:text-6xl">Tudo o que sai do nosso forno hoje.</h2>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-sm text-[color:var(--cream)]/80 underline underline-offset-4 hover:text-[color:var(--cream)]">
            Pedir cardápio completo →
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl bg-[color:var(--cream)]/5 ring-1 ring-[color:var(--cream)]/10 ${i % 3 === 0 ? "md:row-span-2" : ""}`}
            >
              <div className={`relative ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-[16/10]"} overflow-hidden`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--cocoa)] via-[color:var(--cocoa)]/30 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-[color:var(--cream)]/95 px-3 py-1 text-xs font-medium text-[color:var(--cocoa)]">
                  {p.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-3xl text-[color:var(--cream)] md:text-4xl">{p.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-[color:var(--cream)]/80">{p.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promotions() {
  const promos = [
    { day: "Seg a Sex", title: "Café da manhã completo", desc: "Pão na chapa, café e suco natural", price: "R$ 25,00" },
    { day: "Quartas", title: "Dúzia de pão francês", desc: "Leve 12, pague 10 até as 18h", price: "R$ 12,00" },
    { day: "Sábados", title: "Bolo do dia", desc: "Fatia generosa com café espresso", price: "R$ 16,00" },
  ];
  return (
    <section id="promocoes" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl text-balance text-4xl leading-tight md:text-5xl">Promoções da semana</h2>
          <p className="text-sm text-muted-foreground">Disponíveis na loja e por encomenda · Atualizadas toda segunda</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {promos.map((p) => (
            <div key={p.title} className="group rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[color:var(--crust)]">
              <span className="inline-block rounded-full bg-[color:var(--ember)]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--crust)]">
                {p.day}
              </span>
              <h3 className="mt-5 text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-8 flex items-end justify-between border-t border-border pt-5">
                <span className="font-display text-3xl text-[color:var(--cocoa)]">{p.price}</span>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--crust)] hover:underline">
                  Reservar <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Marina Costa", text: "O pão sourdough deles virou ritual no meu sábado. Casca crocante, miolo perfeito.", role: "Cliente há 3 anos" },
    { name: "Rafael Souza", text: "Encomendei o bolo de aniversário do meu filho — chegou lindo e impecável. Atendimento maravilhoso.", role: "Cliente há 2 anos" },
    { name: "Dona Cecília", text: "Cresci comprando aqui. Hoje meus netos também. Pão fresco, gente boa e preço justo.", role: "Cliente há 25 anos" },
  ];
  return (
    <section id="depoimentos" className="bg-[color:var(--secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--crust)]">Depoimentos</span>
            <h2 className="mt-3 text-4xl leading-tight md:text-5xl">Quem prova, volta sempre.</h2>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[color:var(--ember)] text-[color:var(--ember)]" />
                ))}
              </div>
              <span className="font-display text-2xl">4.9</span>
              <span className="text-sm text-muted-foreground">· 320+ avaliações</span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {reviews.map((r, idx) => (
              <figure key={r.name} className={`rounded-3xl bg-background p-8 shadow-[var(--shadow-soft)] ${idx === 0 ? "sm:translate-y-6" : ""}`}>
                <blockquote className="font-display text-xl leading-snug text-[color:var(--cocoa)]">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="contato" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--crust)]">Visite a loja</span>
            <h2 className="mt-3 text-4xl leading-tight md:text-5xl text-balance">
              Estamos a um quarteirão do cheirinho de pão quentinho.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Passe para um café, retire sua encomenda ou peça pelo WhatsApp. Atendemos toda a vizinhança com carinho.
            </p>

            <ul className="mt-10 space-y-6">
              <Info icon={MapPin} title="Endereço" lines={["Rua das Fornadas, 245", "Vila do Forno · São Paulo, SP"]} />
              <Info
                icon={Clock}
                title="Horários"
                lines={["Seg a Sex · 06:00 – 20:00", "Sáb · 06:00 – 18:00", "Dom · 07:00 – 13:00"]}
              />
              <Info icon={Phone} title="Telefone & WhatsApp" lines={["(11) 99999-9999"]} />
            </ul>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[color:var(--cocoa)] px-7 py-4 text-base font-semibold text-[color:var(--cream)] shadow-[var(--shadow-warm)] transition hover:bg-[color:var(--crust)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Localização da padaria"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6700%2C-23.5650%2C-46.6500%2C-23.5450&amp;layer=mapnik"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return (
    <li className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[color:var(--ember)]/15 text-[color:var(--crust)]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        {lines.map((l) => (
          <div key={l} className="font-medium text-[color:var(--cocoa)]">{l}</div>
        ))}
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--cocoa)] py-12 text-[color:var(--cream)]/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row md:px-10">
        <div className="flex items-center gap-2">
          <Wheat className="h-5 w-5" />
          <span className="font-display text-lg text-[color:var(--cream)]">Farinha &amp; Forno</span>
        </div>
        <p>© {new Date().getFullYear()} Padaria Farinha &amp; Forno · Feito com fermento natural.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-warm)] transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
