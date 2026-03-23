import { useState } from "react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-5xl md:text-6xl font-medium mb-4 tracking-tight">
            <span className="italic">Get in Touch</span>
          </h2>
          <p className="font-serif text-xl text-muted-foreground mb-12 max-w-[500px]">
            Got an idea? A bug to squash? Or just wanna talk tech? I'm in. My inbox is always open.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">Email</h4>
              <p className="font-mono text-lg mt-1">yapyuning0824@gmail.com</p>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">GitHub</h4>
              <p className="font-mono text-lg mt-1">github.com/YapYuNing08</p>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">LinkedIn</h4>
              <p className="font-mono text-lg mt-1">linkedin.com/in/yap-yu-ning-08n</p>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="uppercase tracking-widest text-xs font-semibold text-muted-foreground block mb-2">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="Ada Lovelace"
              />
            </div>
            <div>
              <label className="uppercase tracking-widest text-xs font-semibold text-muted-foreground block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="ada@example.com"
              />
            </div>
            <div>
              <label className="uppercase tracking-widest text-xs font-semibold text-muted-foreground block mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="Let's build something great..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 text-xl font-serif rounded-lg border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-200 cursor-pointer"
            >
              {sent ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
