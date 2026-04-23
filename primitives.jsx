// Landing page — editorial dark, with live agent demo + richer graphics
// Sections: Nav → Hero (live agent) → Profile demo → Visual map → How it works → Features → Sequences → Stats → Social proof → CTA → Footer

const { useState: useSL, useEffect: useEL, useRef: useRL } = React;

function Landing({ brand = 'LeadScout', headline, hue = 240, heroVariant = 'split' }) {
  const h = headline || ['The lead you reach out to,', 'already knows your name.'];
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100%', fontFamily: 'var(--font-sans)' }}>
      <LandingNav brand={brand} />
      <HeroLive h={h} brand={brand} variant={heroVariant} />
      <LogoTicker />
      <ProfileDemo />
      <GlobeMap />
      <HowItWorks />
      <FeatureGrid />
      <StatsBanner />
      <SequencesSection />
      <SocialProof />
      <CTASection brand={brand} />
      <Footer brand={brand} />
    </div>
  );
}

// ---------------- NAV ----------------
function LandingNav({ brand }) {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'color-mix(in oklch, var(--bg) 85%, transparent)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--hairline)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '18px 40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <BrandMark />
          <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.02em' }}>{brand}</span>
          <Pill tone="accent" dot style={{ marginLeft: 10, fontSize: 10 }}>Agent online</Pill>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', fontSize: 13, color: 'var(--fg-muted)' }}>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Product</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>How it works</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Changelog</a>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Btn variant="ghost" size="sm">Sign in</Btn>
          <Btn variant="primary" size="sm">Start free trial <Icons.Arrow size={14} /></Btn>
        </div>
      </div>
    </div>
  );
}

function BrandMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
      <circle cx="12" cy="12" r="7" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.7" />
      <circle cx="12" cy="12" r="3" fill="var(--accent)" />
    </svg>
  );
}

// ---------------- HERO (live agent) ----------------
function HeroLive({ h, brand, variant }) {
  const centered = variant === 'centered';
  return (
    <section style={{
      maxWidth: 1280, margin: '0 auto',
      padding: centered ? '80px 40px 60px' : '72px 40px 60px',
      display: 'grid', gridTemplateColumns: centered ? '1fr' : '1.05fr 1fr',
      gap: 60, alignItems: 'center',
      position: 'relative',
    }}>
      {/* background motif */}
      <GridBackdrop />

      <div style={{ position: 'relative', textAlign: centered ? 'center' : 'left' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24,
                      padding: '6px 12px', border: '1px solid var(--border)', borderRadius: 999 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 1.8s ease-in-out infinite' }} />
          <Meta>v2.0 · PROSPECT PROFILES LIVE</Meta>
        </div>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(44px, 5.6vw, 82px)',
          fontWeight: 400, lineHeight: 0.97, letterSpacing: '-0.03em',
          margin: 0, textWrap: 'balance',
        }}>
          {h[0]}<br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent-text)' }}>{h[1]}</em>
        </h1>
        <p style={{
          fontSize: 18, lineHeight: 1.55, color: 'var(--fg-muted)',
          maxWidth: 520, marginTop: 24, textWrap: 'pretty',
          marginInline: centered ? 'auto' : 0,
        }}>
          Most lead tools stop at a verified email. Ours keeps going — building a living profile of every prospect so your first message sounds like a second.
        </p>
        <div style={{ display: 'flex', gap: 28, marginTop: 36, flexWrap: 'wrap',
                      justifyContent: centered ? 'center' : 'flex-start' }}>
          <StatChip k="2.4M" l="profiles built" />
          <StatChip k="94%" l="reply-worthy" />
          <StatChip k="24/7" l="autonomous" />
        </div>
      </div>

      <LiveAgentBox brand={brand} />
    </section>
  );
}

function GridBackdrop() {
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: -40, pointerEvents: 'none', zIndex: 0,
      background:
        `radial-gradient(circle at 50% 40%, color-mix(in oklch, var(--accent) 10%, transparent) 0%, transparent 60%),` +
        `linear-gradient(to right, var(--hairline) 1px, transparent 1px) 0 0/60px 60px,` +
        `linear-gradient(to bottom, var(--hairline) 1px, transparent 1px) 0 0/60px 60px`,
      maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 85%)',
      opacity: 0.5,
    }} />
  );
}

function StatChip({ k, l }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, lineHeight: 1, letterSpacing: '-0.02em' }}>{k}</div>
      <Meta style={{ marginTop: 8, display: 'block' }}>{l}</Meta>
    </div>
  );
}

// ---------------- LIVE AGENT BOX ----------------
function LiveAgentBox({ brand }) {
  const prompts = [
    'VP RevOps · Series B fintech · US',
    'Founders · dev tools · post-Seed',
    'Heads of Sales · SaaS · 200–500 employees',
  ];
  const [input, setInput] = useSL('');
  const [stage, setStage] = useSL('idle'); // idle | running | results | signup
  const [log, setLog] = useSL([]);
  const [leads, setLeads] = useSL([]);
  const [email, setEmail] = useSL('');
  const timerRef = useRL([]);

  const clearTimers = () => { timerRef.current.forEach(t => clearTimeout(t)); timerRef.current = []; };

  const run = (prompt) => {
    clearTimers();
    const q = prompt ?? input;
    if (!q.trim()) return;
    setInput(q);
    setStage('running');
    setLog([]);
    setLeads([]);
    const steps = [
      { t: 80, line: `→ Parsing brief: "${q}"` },
      { t: 380, line: '→ Querying linkedin.com, crunchbase, maps…' },
      { t: 900, line: '→ 184 candidates found · filtering by seniority' },
      { t: 1400, line: '→ 41 qualified · building profiles in parallel' },
      { t: 2100, line: '→ Verifying emails against company patterns' },
      { t: 2700, line: '✓ 41 profiles ready · 38 verified · 6.2s total', color: 'var(--good)' },
    ];
    steps.forEach(s => {
      const id = setTimeout(() => setLog(l => [...l, { line: s.line, color: s.color }]), s.t);
      timerRef.current.push(id);
    });
    const results = [
      { n: 'Maya Chen', r: 'VP Revenue Ops', c: 'Northfield Labs', rel: 9, dm: 'High' },
      { n: 'Rahul Desai', r: 'Director of Sales', c: 'Candlepath', rel: 8, dm: 'High' },
      { n: 'Liv Sørensen', r: 'Head of GTM', c: 'Meridian', rel: 9, dm: 'High' },
      { n: 'Priya Shah', r: 'RevOps Lead', c: 'Fieldwork', rel: 8, dm: 'Medium' },
    ];
    results.forEach((r, i) => {
      const id = setTimeout(() => setLeads(prev => [...prev, r]), 1600 + i * 350);
      timerRef.current.push(id);
    });
    const id = setTimeout(() => setStage('results'), 3100);
    timerRef.current.push(id);
  };

  const tryIt = () => setStage('signup');

  useEL(() => () => clearTimers(), []);

  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <Rings size={520} style={{ position: 'absolute', right: -80, top: -60, opacity: 0.4, pointerEvents: 'none' }} />

      <div style={{
        position: 'relative',
        background: 'var(--bg-elev)', border: '1px solid var(--border)',
        borderRadius: 18, overflow: 'hidden',
        boxShadow: '0 40px 100px -40px rgba(0,0,0,0.7), 0 0 0 1px color-mix(in oklch, var(--accent) 15%, transparent)',
      }}>
        {/* window chrome */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '14px 18px', borderBottom: '1px solid var(--hairline)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--accent-soft)',
                          color: 'var(--accent-text)', display: 'grid', placeItems: 'center' }}>
              <Icons.Bot size={15} />
            </div>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 500 }}>Agent · live demo</div>
              <Meta>TRY IT · NO SIGN-UP</Meta>
            </div>
          </div>
          <Pill tone={stage === 'running' ? 'warn' : 'good'} dot style={{ fontSize: 10 }}>
            {stage === 'running' ? 'thinking…' : 'ready'}
          </Pill>
        </div>

        {/* body */}
        {stage === 'signup' ? (
          <SignupInline email={email} setEmail={setEmail} onBack={() => setStage('results')} />
        ) : (
          <>
            {/* input */}
            <div style={{ padding: '18px 18px 12px' }}>
              <Meta style={{ display: 'block', marginBottom: 8 }}>DESCRIBE YOUR IDEAL CUSTOMER</Meta>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'var(--bg)', border: '1px solid var(--border-strong)',
                borderRadius: 10, padding: '10px 12px',
              }}>
                <Icons.Target size={14} stroke="var(--accent-text)" />
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && run()}
                  placeholder="e.g. VP RevOps at Series B fintech in the US"
                  style={{
                    flex: 1, background: 'transparent', border: 'none', outline: 'none',
                    color: 'var(--fg)', fontSize: 14, fontFamily: 'inherit',
                  }}
                />
                <Btn variant="accent" size="sm" onClick={() => run()} disabled={stage === 'running'}>
                  <Icons.Spark size={13} /> Run
                </Btn>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
                {prompts.map(p => (
                  <button key={p} onClick={() => run(p)}
                    style={{ background: 'transparent', border: '1px solid var(--hairline)',
                             color: 'var(--fg-muted)', padding: '5px 10px', borderRadius: 999,
                             fontFamily: 'var(--font-mono)', fontSize: 10.5, cursor: 'pointer',
                             letterSpacing: '0.02em' }}>{p}</button>
                ))}
              </div>
            </div>

            {/* log */}
            <div style={{
              padding: '14px 18px', margin: '0 18px', borderRadius: 10,
              background: 'var(--bg)', border: '1px solid var(--hairline)',
              fontFamily: 'var(--font-mono)', fontSize: 11.5, lineHeight: 1.9,
              minHeight: 130, maxHeight: 160, overflow: 'hidden',
            }}>
              {log.length === 0 && (
                <div style={{ color: 'var(--fg-subtle)' }}>$ waiting for brief…</div>
              )}
              {log.map((l, i) => (
                <div key={i} style={{ color: l.color || 'var(--fg-muted)' }}>{l.line}</div>
              ))}
              {stage === 'running' && (
                <div style={{ color: 'var(--accent-text)' }}>
                  <span style={{ animation: 'pulse 1s ease-in-out infinite' }}>∙∙∙</span>
                </div>
              )}
            </div>

            {/* results */}
            <div style={{ padding: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Meta>RESULTS · {leads.length} OF 41</Meta>
                {stage === 'results' && <Meta style={{ color: 'var(--good)' }}>✓ READY TO EXPORT</Meta>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {leads.length === 0 && stage !== 'running' && (
                  <div style={{ padding: '14px 0', color: 'var(--fg-subtle)', fontSize: 12.5, textAlign: 'center' }}>
                    Press Run — no sign-up required.
                  </div>
                )}
                {leads.map((r, i) => (
                  <MiniLeadRow key={i} {...r} blurred={i >= 2} />
                ))}
              </div>
              {stage === 'results' && (
                <div style={{
                  marginTop: 14, padding: 14,
                  background: 'var(--accent-soft)', border: '1px solid var(--accent-line)',
                  borderRadius: 10, display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <Icons.Shield size={18} stroke="var(--accent-text)" />
                  <div style={{ flex: 1, fontSize: 12.5, color: 'var(--fg)', lineHeight: 1.5 }}>
                    <strong style={{ color: 'var(--accent-text)' }}>37 more leads hidden.</strong> Sign up to unlock full profiles, verified emails, and sequences.
                  </div>
                  <Btn variant="accent" size="sm" onClick={tryIt}>Sign up free <Icons.Arrow size={13} /></Btn>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* floating signal chips */}
      <FloatChip style={{ top: -14, right: 24 }} color="var(--good)" label="Profile built · 2.1s" />
      <FloatChip style={{ bottom: -14, left: 20 }} color="var(--accent)" label="41 new leads added" />
    </div>
  );
}

function MiniLeadRow({ n, r, c, rel, dm, blurred }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '28px 1fr auto auto', gap: 10, alignItems: 'center',
      padding: '8px 10px', background: 'var(--bg)', border: '1px solid var(--hairline)', borderRadius: 8,
      filter: blurred ? 'blur(4px)' : 'none', opacity: blurred ? 0.5 : 1,
      transition: 'filter 0.4s ease',
    }}>
      <Avatar name={n} size={24} />
      <div>
        <div style={{ fontSize: 12.5, fontWeight: 500 }}>{n}</div>
        <div style={{ fontSize: 10.5, color: 'var(--fg-subtle)' }}>{r} · {c}</div>
      </div>
      <Pill tone={dm === 'High' ? 'accent' : 'neutral'} style={{ fontSize: 9.5 }} dot>{dm}</Pill>
      <span style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--accent-text)' }}>{rel}</span>
    </div>
  );
}

function FloatChip({ style, color, label }) {
  return (
    <div style={{
      position: 'absolute', zIndex: 3,
      background: 'var(--bg-elev)', border: '1px solid var(--border)',
      padding: '6px 12px', borderRadius: 999,
      display: 'flex', alignItems: 'center', gap: 8,
      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)',
      ...style,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
      <Meta style={{ color: 'var(--fg)' }}>{label}</Meta>
    </div>
  );
}

function SignupInline({ email, setEmail, onBack }) {
  const [sent, setSent] = useSL(false);
  return (
    <div style={{ padding: 28, textAlign: 'center' }}>
      <div style={{ width: 56, height: 56, borderRadius: 14, margin: '0 auto 18px',
                    background: 'var(--accent-soft)', color: 'var(--accent-text)',
                    display: 'grid', placeItems: 'center' }}>
        <Icons.Verified size={24} />
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, letterSpacing: '-0.02em', fontWeight: 400 }}>
        {sent ? 'Check your inbox.' : 'Unlock your 41 leads.'}
      </div>
      <div style={{ fontSize: 13.5, color: 'var(--fg-muted)', marginTop: 8, lineHeight: 1.55, maxWidth: 360, marginInline: 'auto' }}>
        {sent ? "We just sent a magic link. Your results are waiting on the other side."
              : 'Free 14 days. No card. Your demo results carry over.'}
      </div>
      {!sent && (
        <>
          <div style={{
            marginTop: 18, display: 'flex', alignItems: 'center', gap: 8,
            background: 'var(--bg)', border: '1px solid var(--border-strong)',
            borderRadius: 10, padding: '8px 10px', maxWidth: 380, marginInline: 'auto',
          }}>
            <Icons.Mail size={14} stroke="var(--fg-muted)" />
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com"
              style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none',
                       color: 'var(--fg)', fontSize: 13.5, fontFamily: 'inherit' }} />
            <Btn variant="accent" size="sm" onClick={() => setSent(true)}>Send link <Icons.Arrow size={13} /></Btn>
          </div>
          <div style={{ marginTop: 14, display: 'flex', justifyContent: 'center', gap: 12, fontSize: 11.5, color: 'var(--fg-subtle)' }}>
            <span>SOC 2</span> · <span>GDPR</span> · <span>SSO</span>
          </div>
        </>
      )}
      <div style={{ marginTop: 20 }}>
        <Btn variant="ghost" size="sm" onClick={onBack}>← back to demo</Btn>
      </div>
    </div>
  );
}

// ---------------- LOGO TICKER ----------------
function LogoTicker() {
  const logos = ['NORTHFIELD', 'candlepath', 'MERIDIAN', 'Aster·co', 'FIELDWORK', 'Polyhedra', 'LUMEN', 'kestrel.ai'];
  return (
    <section style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)',
                      padding: '24px 0', background: 'var(--bg-elev)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px',
                    display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40, alignItems: 'center' }}>
        <Meta>TRUSTED BY SALES TEAMS AT</Meta>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${logos.length}, 1fr)`, gap: 24, alignItems: 'center', opacity: 0.55 }}>
          {logos.map((n, i) => (
            <div key={i} style={{
              fontFamily: i % 2 ? 'var(--font-serif)' : 'var(--font-sans)',
              fontSize: 16, textAlign: 'center',
              fontStyle: i === 3 || i === 7 ? 'italic' : 'normal',
              fontWeight: i % 2 ? 400 : 600,
              letterSpacing: i % 2 ? '-0.01em' : '0.15em',
              color: 'var(--fg-muted)',
            }}>{n}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- PROFILE DEMO ----------------
function ProfileDemo() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '100px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <Meta>THE DIFFERENCE</Meta>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 56, lineHeight: 1.02,
                       letterSpacing: '-0.025em', margin: '18px 0 24px', fontWeight: 400 }}>
            We don't stop at<br /><em style={{ fontStyle: 'italic', color: 'var(--accent-text)' }}>verified.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--fg-muted)', maxWidth: 480 }}>
            A name and an email is table stakes. Our agent reads between the lines — the talks they gave, the posts they wrote, the company news that brought them into frame — and hands you a dossier you'd be embarrassed <em>not</em> to have read.
          </p>
          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <DiffRow icon="Activity" title="Recent activity" sub="Posts, comments, conference talks, podcast appearances." />
            <DiffRow icon="Building" title="Company context" sub="Funding rounds, hiring waves, product launches, exec moves." />
            <DiffRow icon="Chat" title="Personality signals" sub="Their tone, hobbies, what they joke about on LinkedIn." />
            <DiffRow icon="Spark" title="Talking points" sub="Three specific hooks for your first message — written for you." />
          </div>
        </div>
        <ProspectProfilePanel />
      </div>
    </section>
  );
}

function DiffRow({ icon, title, sub }) {
  const I = Icons[icon];
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border)',
                    display: 'grid', placeItems: 'center', color: 'var(--accent-text)', background: 'var(--bg-elev)' }}>
        <I size={15} />
      </div>
      <div>
        <div style={{ fontSize: 14.5, fontWeight: 500, letterSpacing: '-0.01em' }}>{title}</div>
        <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 3, lineHeight: 1.5 }}>{sub}</div>
      </div>
    </div>
  );
}

function ProspectProfilePanel() {
  return (
    <Card pad={0} style={{ overflow: 'hidden' }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--hairline)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Avatar name="Rahul Desai" size={44} hue={200} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 500 }}>Rahul Desai</div>
            <div style={{ fontSize: 12.5, color: 'var(--fg-muted)' }}>Director of Sales · Candlepath</div>
          </div>
        </div>
        <Pill tone="accent" dot>Decision maker</Pill>
      </div>
      <div style={{ padding: 24, display: 'grid', gap: 20 }}>
        <div>
          <Meta style={{ display: 'block', marginBottom: 10 }}>RECENT ACTIVITY · LAST 14 DAYS</Meta>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ActivityRow date="Apr 18" kind="Post" text="Hot take: most SDRs are stuck because their tooling treats leads as rows, not people." />
            <ActivityRow date="Apr 11" kind="Talk" text="Spoke at Pavilion CRO Summit — 'The death of the dialing quota.'" />
            <ActivityRow date="Apr 03" kind="News" text="Candlepath announced $28M Series B led by Redpoint." />
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 18 }}>
          <Meta style={{ display: 'block', marginBottom: 10 }}>AI-DRAFTED TALKING POINTS</Meta>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <TalkingPoint n="1" t="Congratulate on Series B — reference Redpoint connection if relevant." />
            <TalkingPoint n="2" t="Echo his SDR-tooling critique; position us as 'rows-to-people.'" />
            <TalkingPoint n="3" t="Ask about Pavilion talk recording — genuine, not sycophantic." />
          </div>
        </div>
      </div>
    </Card>
  );
}

function ActivityRow({ date, kind, text }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '56px 64px 1fr', gap: 12, alignItems: 'baseline' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)' }}>{date}</span>
      <Pill tone="neutral" style={{ fontSize: 10 }}>{kind}</Pill>
      <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--fg)' }}>{text}</span>
    </div>
  );
}

function TalkingPoint({ n, t }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 12px',
                  background: 'var(--bg)', border: '1px solid var(--hairline)', borderRadius: 8 }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--accent-text)', lineHeight: 1, marginTop: 2 }}>{n}</span>
      <span style={{ fontSize: 13, lineHeight: 1.5 }}>{t}</span>
    </div>
  );
}

// ---------------- GLOBE / DATA MAP ----------------
function GlobeMap() {
  // Dots scattered on a world-ish shape using polar coords around center
  const dots = React.useMemo(() => {
    const arr = [];
    const rnd = (s) => { let x = Math.sin(s) * 10000; return x - Math.floor(x); };
    for (let i = 0; i < 120; i++) {
      const r = 120 + rnd(i * 1.1) * 40;
      const a = rnd(i * 2.7) * Math.PI * 2;
      arr.push({ x: 200 + Math.cos(a) * r * rnd(i+7), y: 160 + Math.sin(a) * r * 0.6 * rnd(i+13), s: rnd(i+3) * 2 + 0.5 });
    }
    return arr;
  }, []);
  const highlights = [
    { x: 120, y: 120, label: 'San Francisco · 412' },
    { x: 205, y: 100, label: 'NYC · 291' },
    { x: 260, y: 150, label: 'London · 184' },
    { x: 290, y: 175, label: 'Berlin · 96' },
    { x: 330, y: 200, label: 'Tokyo · 73' },
  ];
  return (
    <section style={{ background: 'var(--bg-elev)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)',
                      padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', display: 'grid',
                    gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'center' }}>
        <div>
          <Meta>ALWAYS ON · EVERYWHERE</Meta>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 48, lineHeight: 1.05,
                       letterSpacing: '-0.025em', margin: '16px 0 20px', fontWeight: 400 }}>
            The web is big.<br /><em style={{ color: 'var(--accent-text)' }}>Your agent is bigger.</em>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.6, maxWidth: 420 }}>
            Every minute your agent is searching, scraping, and scoring — across 70+ countries and every major professional network. You sleep; the pipeline grows.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginTop: 28, maxWidth: 440 }}>
            <MiniStat k="1,284" l="leads this week" />
            <MiniStat k="73" l="countries covered" />
            <MiniStat k="6.2s" l="avg profile build" />
            <MiniStat k="99.3%" l="uptime" />
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <svg viewBox="0 0 400 300" width="100%" style={{ maxHeight: 360 }}>
            <defs>
              <radialGradient id="globeGrad">
                <stop offset="0%" stopColor="var(--accent-soft)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="160" r="130" fill="url(#globeGrad)" opacity="0.5" />
            {/* latitude lines */}
            {[-40, -20, 0, 20, 40].map((l, i) => (
              <ellipse key={i} cx="200" cy={160 + l} rx={Math.sqrt(130*130 - l*l) || 0} ry="8" fill="none" stroke="var(--border)" strokeWidth="0.5" />
            ))}
            {/* longitude */}
            {[0, 30, 60, 90, 120, 150].map((a, i) => (
              <ellipse key={i} cx="200" cy="160" rx={Math.abs(Math.cos(a*Math.PI/180)) * 130} ry="130" fill="none" stroke="var(--border)" strokeWidth="0.5" />
            ))}
            {/* outline */}
            <circle cx="200" cy="160" r="130" fill="none" stroke="var(--border-strong)" strokeWidth="0.8" />
            {/* dots */}
            {dots.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={d.s} fill="var(--fg-muted)" opacity="0.4" />
            ))}
            {/* highlighted cities with pulse */}
            {highlights.map((h, i) => (
              <g key={i}>
                <circle cx={h.x} cy={h.y} r="8" fill="var(--accent)" opacity="0.15">
                  <animate attributeName="r" values="4;14;4" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                </circle>
                <circle cx={h.x} cy={h.y} r="3" fill="var(--accent)" />
                <text x={h.x + 8} y={h.y + 3} fill="var(--fg)" fontSize="8" fontFamily="var(--font-mono)">{h.label}</text>
              </g>
            ))}
            {/* scanning arc */}
            <g>
              <path d="M 200 30 A 130 130 0 0 1 330 160" fill="none" stroke="var(--accent)" strokeWidth="1.2" opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" from="0 200 160" to="360 200 160" dur="8s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ k, l }) {
  return (
    <div style={{ padding: '14px 16px', background: 'var(--bg)', border: '1px solid var(--hairline)', borderRadius: 10 }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, letterSpacing: '-0.02em', color: 'var(--fg)' }}>{k}</div>
      <Meta style={{ display: 'block', marginTop: 2 }}>{l}</Meta>
    </div>
  );
}

// ---------------- HOW IT WORKS ----------------
function HowItWorks() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '100px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
        <div>
          <Meta>HOW IT WORKS</Meta>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 48, lineHeight: 1.05,
                       letterSpacing: '-0.025em', margin: '16px 0 0', fontWeight: 400, maxWidth: 640 }}>
            Four moves. <em style={{ color: 'var(--accent-text)' }}>The last one matters.</em>
          </h2>
        </div>
        <div style={{ color: 'var(--fg-muted)', fontSize: 14, maxWidth: 280, textAlign: 'right' }}>
          From the first prompt to a warm, ready-to-send message.
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--border)' }}>
        <Step n="01" t="Brief the agent" s="Describe your ICP in a sentence — industry, title, geography. No templates." icon="Chat" />
        <Step n="02" t="Autonomous search" s="Crawls the web, Maps, and public sources 24/7. Ranks every candidate." icon="Search" />
        <Step n="03" t="Profile, not just record" s="Recent activity, company moves, personality signals, talking points." icon="Activity" />
        <Step n="04" t="Warm outreach" s="Multi-step sequences that read like a human wrote them." icon="Send" highlight />
      </div>
    </section>
  );
}

function Step({ n, t, s, icon, highlight }) {
  const I = Icons[icon];
  return (
    <div style={{
      padding: '32px 28px 32px 28px',
      borderRight: '1px solid var(--border)',
      background: highlight ? 'var(--accent-soft)' : 'transparent',
      position: 'relative',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 44, lineHeight: 1,
                      letterSpacing: '-0.02em',
                      color: highlight ? 'var(--accent-text)' : 'var(--fg-subtle)' }}>{n}</div>
        <div style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border)',
                      background: 'var(--bg-elev)', color: highlight ? 'var(--accent-text)' : 'var(--fg-muted)',
                      display: 'grid', placeItems: 'center' }}><I size={14} /></div>
      </div>
      <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: '-0.015em', marginBottom: 8 }}>{t}</div>
      <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-muted)' }}>{s}</div>
    </div>
  );
}

// ---------------- FEATURE GRID ----------------
function FeatureGrid() {
  const items = [
    { icon: 'Bot', t: 'Autonomous agent', s: "Describe your ICP; the agent runs searches, scrapes sources, and saves leads — without you babysitting the loop.", big: true },
    { icon: 'Target', t: 'Decision-maker ranking', s: "Every lead tagged High / Medium / Low with reasoning, so you don't waste the first message on a gatekeeper." },
    { icon: 'Chart', t: 'Industry relevance, 1–10', s: 'Score each lead against your product strategy. Weight the factors that matter most.' },
    { icon: 'Verified', t: 'Verified emails', s: 'Pattern-matched and cross-referenced against known company formats before they ever hit your inbox.' },
    { icon: 'Flow', t: 'Multi-step sequences', s: "Build cadences where each email references the prospect's profile — not a mail-merge field." },
    { icon: 'Activity', t: 'Living profiles', s: 'Profiles update as the web does. New post, new funding, new role — the record follows.' },
  ];
  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ marginBottom: 48 }}>
          <Meta>THE STACK</Meta>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 48, lineHeight: 1.05,
                       letterSpacing: '-0.025em', margin: '16px 0 0', fontWeight: 400, maxWidth: 680 }}>
            Everything you needed, plus <em style={{ color: 'var(--accent-text)' }}>the part you didn't know was missing.</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 16 }}>
          {items.map((it, i) => <FeatureCard key={i} {...it} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, t, s, big }) {
  const I = Icons[icon];
  return (
    <div style={{
      background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 14,
      padding: 28,
      gridColumn: big ? 'span 1' : undefined,
      gridRow: big ? 'span 2' : undefined,
      display: 'flex', flexDirection: 'column',
      minHeight: big ? 360 : 170,
    }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-soft)',
                    color: 'var(--accent-text)', display: 'grid', placeItems: 'center' }}>
        <I size={19} />
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: big ? 28 : 20, letterSpacing: '-0.02em',
                    fontWeight: 400, lineHeight: 1.15, marginTop: big ? 24 : 18, marginBottom: 10 }}>{t}</div>
      <div style={{ fontSize: big ? 15 : 13, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{s}</div>
      {big && <div style={{ marginTop: 'auto', paddingTop: 24 }}><MiniAgentTerminal /></div>}
    </div>
  );
}

function MiniAgentTerminal() {
  return (
    <div style={{
      background: 'var(--bg)', border: '1px solid var(--hairline)', borderRadius: 10, padding: 14,
      fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1.8,
    }}>
      <div style={{ color: 'var(--fg-subtle)' }}>$ agent.run("VP RevOps · Series B fintech · US")</div>
      <div style={{ color: 'var(--fg-muted)' }}>→ searching linkedin.com...</div>
      <div style={{ color: 'var(--fg-muted)' }}>→ 184 candidates · filtering by seniority...</div>
      <div style={{ color: 'var(--accent-text)' }}>→ 41 qualified · building profiles</div>
      <div style={{ color: 'var(--good)' }}>✓ 41 leads saved · 38 verified · 6.2s</div>
    </div>
  );
}

// ---------------- STATS BANNER ----------------
function StatsBanner() {
  return (
    <section style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)',
                      padding: '60px 40px', background: 'var(--bg-elev)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
        <BigStat k="3.8×" l="reply rate vs. template" />
        <BigStat k="42%" l="time saved per rep weekly" />
        <BigStat k="$180" l="avg cost per meeting booked" tone="accent" />
        <BigStat k="14d" l="from signup to first win" />
      </div>
    </section>
  );
}

function BigStat({ k, l, tone }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 60, lineHeight: 1, letterSpacing: '-0.03em',
                    color: tone === 'accent' ? 'var(--accent-text)' : 'var(--fg)' }}>{k}</div>
      <Meta style={{ display: 'block', marginTop: 10 }}>{l}</Meta>
    </div>
  );
}

// ---------------- SEQUENCES ----------------
function SequencesSection() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '100px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'center' }}>
        <div>
          <Meta>SEQUENCES</Meta>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 48, lineHeight: 1.05,
                       letterSpacing: '-0.025em', margin: '16px 0 24px', fontWeight: 400 }}>
            Outreach that<br /><em style={{ color: 'var(--accent-text)' }}>earns a reply.</em>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.6, maxWidth: 440 }}>
            Design cadences that reference the prospect's post from last week, not a generic "noticed your role at {'{{company}}'}."
          </p>
          <div style={{ marginTop: 24 }}>
            <Btn variant="outline">See example sequence <Icons.Arrow size={14} /></Btn>
          </div>
        </div>
        <SequenceDiagram />
      </div>
    </section>
  );
}

function SequenceDiagram() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <SeqEmail day="Day 0" subject="Your Pavilion talk — one question"
        body="Rahul — I watched your 'death of the dialing quota' talk twice. Particularly the bit about SDR tooling treating leads as rows..." />
      <SeqEmail day="Day 3" subject="Congrats on the Series B"
        body="Saw the Redpoint announcement. Guessing the hiring plan just got louder — if you're thinking about tooling before the headcount..." dim />
      <SeqEmail day="Day 7" subject="Last note, I promise"
        body="No reply needed. Leaving you with one thing: the 'rows-to-people' benchmark from our last 30 customers..." dim />
    </div>
  );
}

function SeqEmail({ day, subject, body, dim }) {
  return (
    <div style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 12, padding: 18,
                  opacity: dim ? 0.7 : 1, display: 'grid', gridTemplateColumns: '80px 1fr', gap: 16 }}>
      <div><Meta>{day}</Meta></div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{subject}</div>
        <div style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{body}</div>
      </div>
    </div>
  );
}

// ---------------- SOCIAL PROOF ----------------
function SocialProof() {
  return (
    <section style={{ padding: '100px 40px', maxWidth: 1280, margin: '0 auto' }}>
      <Meta style={{ display: 'block', textAlign: 'center', marginBottom: 40 }}>WHAT OPERATORS SAY</Meta>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        <Quote q="We stopped sending first-touch emails cold. The profile dossier basically writes the opening line for you."
               a="Lena Park" r="Head of Sales · Northfield" />
        <Quote q="Replaced two SDR tools and a VA. The agent ran all night and had 120 qualified profiles by standup."
               a="Jordan Wei" r="Founder · Candlepath" big />
        <Quote q="It's the difference between knowing someone's email and knowing something about them."
               a="Priya Shah" r="RevOps · Meridian" />
      </div>
    </section>
  );
}

function Quote({ q, a, r, big }) {
  return (
    <div style={{ padding: 28, border: '1px solid var(--hairline)', borderRadius: 14, background: 'var(--bg-elev)',
                  display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: 'var(--accent-text)', lineHeight: 0.6 }}>"</div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: big ? 22 : 18, lineHeight: 1.4,
                    letterSpacing: '-0.01em', fontWeight: 400, fontStyle: 'italic', flex: 1 }}>{q}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 14, borderTop: '1px solid var(--hairline)' }}>
        <Avatar name={a} size={32} />
        <div>
          <div style={{ fontSize: 13, fontWeight: 500 }}>{a}</div>
          <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>{r}</div>
        </div>
      </div>
    </div>
  );
}

// ---------------- CTA ----------------
function CTASection({ brand }) {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 40px 100px' }}>
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--bg-elev)', border: '1px solid var(--border)',
        borderRadius: 24, padding: '80px 60px', textAlign: 'center',
      }}>
        <Rings size={700} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.4, pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <Meta>READY · NOT WAITING</Meta>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 68px)',
                       lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 400, margin: '16px 0 0' }}>
            Your agent is already running.<br />
            <em style={{ color: 'var(--accent-text)' }}>Give it a brief.</em>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-muted)', marginTop: 24, maxWidth: 520, marginInline: 'auto' }}>
            Free for 14 days. No card. Cancel with a shrug.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
            <Btn variant="primary" size="lg">Start free trial <Icons.Arrow size={16} /></Btn>
            <Btn variant="secondary" size="lg">Book a walkthrough</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- FOOTER ----------------
function Footer({ brand }) {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)', padding: '40px',
                     maxWidth: 1280, margin: '0 auto',
                     display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <BrandMark size={18} />
        <Meta>© 2026 {brand.toUpperCase()}. BUILT FOR SALES TEAMS, NOT DASHBOARDS.</Meta>
      </div>
      <div style={{ display: 'flex', gap: 24, fontSize: 12.5, color: 'var(--fg-muted)' }}>
        <a style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
        <a style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
        <a style={{ color: 'inherit', textDecoration: 'none' }}>Security</a>
        <a style={{ color: 'inherit', textDecoration: 'none' }}>Changelog</a>
      </div>
    </footer>
  );
}

Object.assign(window, { Landing });
