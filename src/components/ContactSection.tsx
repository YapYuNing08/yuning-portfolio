import { useState } from "react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // REPLACE "YOUR_FORM_ID" with your actual Formspree ID (e.g., "xabcd123")
      const response = await fetch("https://formspree.io/f/myknezvr", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSent(true);
        form.reset(); // Clears the form fields after successful send
        setTimeout(() => setSent(false), 3000);
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a network error submitting your form.");
    } finally {
      setLoading(false);
    }
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
              <a className="font-mono text-lg mt-1 hover:text-primary transition-colors block" href="mailto:yapyuning0824@gmail.com">
                yapyuning0824@gmail.com
              </a>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">GitHub</h4>
              <a className="font-mono text-lg mt-1 hover:text-primary transition-colors block" href="https://github.com/YapYuNing08" target="_blank" rel="noreferrer">
                github.com/YapYuNing08
              </a>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">LinkedIn</h4>
              <a className="font-mono text-lg mt-1 hover:text-primary transition-colors block" href="https://www.linkedin.com/in/yap-yu-ning-08n/" target="_blank" rel="noreferrer">
                linkedin.com/in/yap-yu-ning-08n
              </a>
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
                name="name" // REQUIRED BY FORMSPREE
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
                name="email" // REQUIRED BY FORMSPREE
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
                name="message" // REQUIRED BY FORMSPREE
                required
                rows={5}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="Let's build something great..."
              />
            </div>
            <div className="flex items-end gap-4 flex-wrap">
              <button
                type="submit"
                disabled={loading || sent}
                className="bg-primary text-primary-foreground px-8 py-4 text-xl font-serif rounded-lg border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
              </button>

              <div className="flex items-center gap-3">
                <img src="/cat-sad.png" alt="Sad cat" className="w-24 h-24 object-contain" />
                <p className="font-mono text-sm text-muted-foreground max-w-[270px] leading-relaxed">
                  Meow meow meow meow<br />
                  <span className="italic">Translation:</span> "You scrolled all the way down here — don't leave this echoey inbox hanging. Say hi."
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;