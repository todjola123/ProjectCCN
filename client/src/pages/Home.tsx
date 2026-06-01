import { useState } from "react";
import { 
  Leaf, 
  Flame, 
  Trash2, 
  TreePine, 
  ChevronDown, 
  Heart, 
  Menu, 
  X, 
  ArrowRight, 
  Droplets, 
  Sun, 
  Globe,
  Instagram,
  Twitter,
  Facebook
} from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [pledgeForm, setPledgeForm] = useState({
    name: "",
    email: "",
    pledge: "plastic"
  });

  const accordionItems = [
    {
      title: "Reduce & Reuse",
      icon: <Trash2 className="w-5 h-5 text-accent" />,
      content: "Cut down on single-use items. Bring reusable bags, coffee cups, and water bottles wherever you go. Buy in bulk to reduce packaging waste, and choose products made from recycled materials."
    },
    {
      title: "Conserve Water",
      icon: <Droplets className="w-5 h-5 text-accent" />,
      content: "Fix leaks immediately, install low-flow showerheads, and turn off the tap while brushing your teeth. Collect rainwater for garden plants and run washing machines only with full loads."
    },
    {
      title: "Switch to Renewable Energy",
      icon: <Sun className="w-5 h-5 text-accent" />,
      content: "Support solar, wind, or geothermal power providers. Unplug appliances when not in use to eliminate 'vampire' energy draw, and upgrade to energy-efficient LED light bulbs."
    }
  ];

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgeForm.name || !pledgeForm.email) {
      toast.error("Please fill in all fields to make your pledge.");
      return;
    }
    toast.success(`Thank you, ${pledgeForm.name}! Let's save the planet together.`);
    setPledgeForm({ name: "", email: "", pledge: "plastic" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40 smooth-transition">
        <div className="container py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center smooth-transition group-hover:rotate-12">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary font-serif">EcoPulse</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-accent link-underline smooth-transition">Home</a>
            <a href="#threats" className="text-sm font-medium hover:text-accent link-underline smooth-transition">Threats</a>
            <a href="#solutions" className="text-sm font-medium hover:text-accent link-underline smooth-transition">Solutions</a>
            <a href="#take-action" className="text-sm font-medium hover:text-accent link-underline smooth-transition">Take Action</a>
            <a href="#take-action" className="px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 shadow-md hover:shadow-lg active:scale-95 smooth-transition">
              Join the Movement
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary text-primary smooth-transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/80 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2 border-b border-border/40 hover:text-accent smooth-transition"
            >
              Home
            </a>
            <a 
              href="#threats" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2 border-b border-border/40 hover:text-accent smooth-transition"
            >
              Threats
            </a>
            <a 
              href="#solutions" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2 border-b border-border/40 hover:text-accent smooth-transition"
            >
              Solutions
            </a>
            <a 
              href="#take-action" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2 border-b border-border/40 hover:text-accent smooth-transition"
            >
              Take Action
            </a>
            <a 
              href="#take-action"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center px-5 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 smooth-transition"
            >
              Join the Movement
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
          {/* Background Image with Darker Overlay for Text Contrast */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663720484468/MXZ6ZNW5xdw4XAGcQ3LokF/hero-bg-ghnVn6WkGBaGfgj9udVVuw.webp" 
              alt="Beautiful pristine environment with clean river and mountains" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent md:to-primary/20" />
          </div>

          <div className="container relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 lg:col-span-7 text-primary-foreground">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-xs font-semibold uppercase tracking-wider mb-6 animate-in fade-in duration-700">
                <Leaf className="w-3.5 h-3.5" /> EcoPulse Initiative
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                Our Planet, <br />
                <span className="text-accent italic font-normal">Our Responsibility.</span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/90 font-light mb-8 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                The earth does not belong to us; we belong to the earth. Join EcoPulse in defending natural ecosystems, countering plastic pollution, and creating a sustainable tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                <a 
                  href="#take-action" 
                  className="px-8 py-4 rounded-full bg-accent text-accent-foreground text-center font-medium hover:bg-accent/90 shadow-lg hover:shadow-xl active:scale-95 smooth-transition flex items-center justify-center gap-2"
                >
                  Join the Movement <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#threats" 
                  className="px-8 py-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-center font-medium hover:bg-primary-foreground/20 backdrop-blur-sm smooth-transition"
                >
                  Explore the Threats
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Threats Section */}
        <section id="threats" className="py-24 bg-secondary/30 relative">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">The Crisis</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">The Core Threats</h2>
              <p className="text-muted-foreground font-light">
                Human activities have pushed our planet to its limits. Understanding these core threats is the first crucial step toward taking meaningful action.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {/* Threat 1: Climate Change */}
              <div className="bg-card rounded-2xl p-8 border border-border/40 hover:border-accent/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 smooth-transition flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 smooth-transition group-hover:scale-110">
                    <Flame className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Climate Change</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                    Rising greenhouse gas emissions trap heat in the atmosphere, leading to extreme weather events, melting glaciers, and rapidly rising sea levels worldwide.
                  </p>
                </div>
                <a href="https://climate.nasa.gov/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 smooth-transition">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Threat 2: Plastic Pollution */}
              <div className="bg-card rounded-2xl p-8 border border-border/40 hover:border-accent/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 smooth-transition flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 smooth-transition group-hover:scale-110">
                    <Trash2 className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Plastic Pollution</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                    Over 380 million tons of plastic are produced annually, with millions of tons ending up in oceans, destroying marine life and entering the global food chain.
                  </p>
                </div>
                <a href="https://www.unep.org/plastic-pollution" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 smooth-transition">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Threat 3: Deforestation */}
              <div className="bg-card rounded-2xl p-8 border border-border/40 hover:border-accent/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 smooth-transition flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 smooth-transition group-hover:scale-110">
                    <TreePine className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Deforestation</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                    Farming, logging, and expansion destroy vast forest areas, removing crucial carbon sinks and threatening 80% of terrestrial biodiversity.
                  </p>
                </div>
                <a href="https://www.worldwildlife.org/threats/deforestation-and-forest-degradation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 smooth-transition">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Graphic Illustration Row */}
            <div className="mt-16 bg-card rounded-3xl overflow-hidden border border-border/40 shadow-lg grid md:grid-cols-12 items-center">
              <div className="md:col-span-5 h-64 md:h-full min-h-[300px]">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663720484468/MXZ6ZNW5xdw4XAGcQ3LokF/threats-illustration-K8xrxcpEcWkgHirT3sTiCi.webp" 
                  alt="Environmental contrast illustration of clean and polluted world" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-7 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-primary mb-4">The Point of No Return</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Scientists warn that we are approaching critical tipping points. Failing to act now risks permanent changes to our climate, food supplies, and natural habitats. The choice is ours to make.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-destructive" />
                    </div>
                    <span className="text-sm font-medium text-primary">1.5°C Warming Limit</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-sm font-medium text-primary">11M Tons Ocean Plastic/Yr</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">10M Hectares Deforested/Yr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Solutions Section */}
        <section id="solutions" className="py-24 relative overflow-hidden">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-6 lg:col-span-5 order-2 md:order-1">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">The Path Forward</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-6">Daily Solutions</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  Big changes start with small habits. Explore the essential practices you can adopt today to reduce your environmental footprint and lead an eco-conscious life.
                </p>

                {/* Interactive Accordion */}
                <div className="space-y-4">
                  {accordionItems.map((item, index) => {
                    const isOpen = activeAccordion === index;
                    return (
                      <div 
                        key={index} 
                        className={`border rounded-2xl smooth-transition overflow-hidden ${
                          isOpen ? "border-primary/30 bg-secondary/20 shadow-sm" : "border-border/60 bg-card hover:border-primary/20"
                        }`}
                      >
                        <button
                          onClick={() => setActiveAccordion(isOpen ? null : index)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                        >
                          <div className="flex items-center gap-3">
                            {item.icon}
                            <span className="font-semibold text-primary">{item.title}</span>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-primary/60 smooth-transition ${
                              isOpen ? "transform rotate-180" : ""
                            }`} 
                          />
                        </button>
                        
                        <div 
                          className={`smooth-transition overflow-hidden ${
                            isOpen ? "max-h-48 border-t border-border/40" : "max-h-0"
                          }`}
                        >
                          <div className="p-6 text-sm text-muted-foreground font-light leading-relaxed">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="md:col-span-6 lg:col-span-7 order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Decorative background blob */}
                  <div className="absolute -inset-4 bg-accent/10 rounded-full blur-2xl z-0 organic-shape" />
                  <div className="relative z-10 rounded-3xl overflow-hidden border border-border/40 shadow-xl">
                    <img 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663720484468/MXZ6ZNW5xdw4XAGcQ3LokF/solutions-illustration-ccAX5pkCCz9ZDre5ggpge4.webp" 
                      alt="Eco solutions concept illustration with plant and clean energy" 
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pledge Form (Take Action) Section */}
        <section id="take-action" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Decorative background circles */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-foreground/10 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Heart className="w-3.5 h-3.5 text-accent" /> Join Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-6">
                  Make Your Pledge <br />
                  <span className="text-accent italic font-normal">For the Future.</span>
                </h2>
                <p className="text-primary-foreground/80 font-light text-lg leading-relaxed mb-8 max-w-lg">
                  Real environmental progress relies on collective action. Join thousands of citizens worldwide by making a concrete pledge to adopt sustainable daily habits.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-1">Global Community</h4>
                      <p className="text-sm text-primary-foreground/70 font-light">Connect with eco-conscious individuals and share sustainable practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <Leaf className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-1">Direct Impact</h4>
                      <p className="text-sm text-primary-foreground/70 font-light">Every pledge helps prevent waste, reduce emissions, and conserve resources.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-card text-foreground rounded-3xl p-8 sm:p-10 shadow-2xl border border-border/20">
                  <h3 className="text-2xl font-bold text-primary mb-6">The Eco-Pledge</h3>
                  
                  <form onSubmit={handlePledgeSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        value={pledgeForm.name}
                        onChange={(e) => setPledgeForm({ ...pledgeForm, name: e.target.value })}
                        placeholder="Jane Doe" 
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm smooth-transition"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        value={pledgeForm.email}
                        onChange={(e) => setPledgeForm({ ...pledgeForm, email: e.target.value })}
                        placeholder="jane@example.com" 
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm smooth-transition"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="pledge" className="block text-sm font-semibold text-primary mb-2">Select Your Pledge</label>
                      <select 
                        id="pledge"
                        value={pledgeForm.pledge}
                        onChange={(e) => setPledgeForm({ ...pledgeForm, pledge: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm smooth-transition"
                      >
                        <option value="plastic">I pledge to eliminate single-use plastics.</option>
                        <option value="water">I pledge to reduce my daily water waste.</option>
                        <option value="energy">I pledge to switch off unused electronics.</option>
                        <option value="diet">I pledge to eat more plant-based meals.</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 shadow-lg hover:shadow-xl active:scale-98 smooth-transition"
                    >
                      Submit Pledge
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="bg-primary-foreground border-t border-border/60 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold tracking-tight text-primary font-serif">EcoPulse</span>
              </a>
              <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm">
                Empowering communities to make sustainable choices, protect biodiversity, and restore natural ecosystems for a thriving future.
              </p>
            </div>

            <div className="md:col-span-3">
              <h5 className="font-semibold text-primary text-sm mb-4">Quick Links</h5>
              <ul className="space-y-2.5">
                <li><a href="#home" className="text-sm text-muted-foreground hover:text-accent smooth-transition">Home</a></li>
                <li><a href="#threats" className="text-sm text-muted-foreground hover:text-accent smooth-transition">Threats</a></li>
                <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-accent smooth-transition">Solutions</a></li>
                <li><a href="#take-action" className="text-sm text-muted-foreground hover:text-accent smooth-transition">Take Action</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h5 className="font-semibold text-primary text-sm mb-4">Follow the Movement</h5>
              <div className="flex items-center gap-4 mb-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground smooth-transition" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground smooth-transition" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground smooth-transition" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground font-light">
                Receive monthly eco-tips and updates on global conservation efforts.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground font-light">
              &copy; {new Date().getFullYear()} EcoPulse. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-accent smooth-transition">Privacy Policy</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-accent smooth-transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
