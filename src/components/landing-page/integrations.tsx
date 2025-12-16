export function IntegrationsSection() {
  const integrations = [
    { name: "Slack", icon: "https://cdn.simpleicons.org/slack/white" },
    { name: "Discord", icon: "https://cdn.simpleicons.org/discord/white" },
    { name: "PagerDuty", icon: "https://cdn.simpleicons.org/pagerduty/white" },
    { name: "Datadog", icon: "https://cdn.simpleicons.org/datadog/white" },
    { name: "Telegram", icon: "https://cdn.simpleicons.org/telegram/white" },
    { name: "Microsoft Teams", icon: "https://cdn.simpleicons.org/microsoftteams/white" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
    { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab/white" },
  ];

  return (
    <section className="py-12 bg-background relative overflow-hidden">
      {/* Space Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-background/0 to-background/0" />

      <div className="max-w-5xl mx-auto px-6 lg:px-0 mb-8 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Seamlessly integrates with your favorite tools
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 min-w-full px-8">
          {integrations.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <span className="text-xl font-bold text-foreground">{item.name}</span>
            </div>
          ))}
          {integrations.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <span className="text-xl font-bold text-foreground">{item.name}</span>
            </div>
          ))}
           {integrations.map((item, idx) => (
            <div key={`dup2-${idx}`} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <span className="text-xl font-bold text-foreground">{item.name}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
