// Redesigned app screens — Agent Inbox, Tasks, Pipeline, Nurturing, Leads table, Lead Detail

// ===== shared chrome =====
function AppShell({ active, children, title, subtitle, actions }) {
  const nav = [
    { id: 'inbox', label: 'Agent Inbox', icon: 'Inbox' },
    { id: 'tasks', label: 'Agent Tasks', icon: 'List' },
    { id: 'pipeline', label: 'Pipeline', icon: 'Chart' },
    { id: 'nurturing', label: 'Nurturing', icon: 'Mail' },
    { id: 'leads', label: 'All Leads', icon: 'User' },
    { id: 'profile', label: 'Prospect Profile', icon: 'Target' },
  ];
  return (
    <div style={{ display: 'flex', height: '100%', background: 'var(--bg)', color: 'var(--fg)',
                   fontFamily: 'var(--font-sans)', overflow: 'hidden' }}>
      <aside style={{
        width: 224, background: 'var(--bg-elev)',
        borderRight: '1px solid var(--hairline)',
        display: 'flex', flexDirection: 'column', flexShrink: 0,
      }}>
        <div style={{ padding: '20px 18px', borderBottom: '1px solid var(--hairline)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <BrandMark size={20} />
          <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: '-0.015em' }}>LeadScout</span>
          <Pill tone="neutral" style={{ fontSize: 9, marginLeft: 'auto', padding: '2px 6px' }}>v2.0</Pill>
        </div>
        <div style={{ padding: '18px 10px', flex: 1 }}>
          <Meta style={{ padding: '0 10px', display: 'block', marginBottom: 10 }}>WORKSPACE</Meta>
          {nav.map(n => {
            const I = Icons[n.icon];
            const isActive = n.id === active;
            return (
              <div key={n.id} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 10px', borderRadius: 8, marginBottom: 2,
                fontSize: 13, fontWeight: 500,
                background: isActive ? 'var(--accent-soft)' : 'transparent',
                color: isActive ? 'var(--accent-text)' : 'var(--fg-muted)',
              }}>
                <I size={15} />{n.label}
              </div>
            );
          })}
        </div>
        <div style={{ padding: 14, borderTop: '1px solid var(--hairline)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar name="Colton Bradley" size={28} hue={60} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Colton Bradley</div>
            <div style={{ fontSize: 10.5, color: 'var(--fg-subtle)' }}>Pro · 2 seats</div>
          </div>
        </div>
      </aside>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header style={{
          padding: '18px 28px', borderBottom: '1px solid var(--hairline)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <Meta>{subtitle}</Meta>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, letterSpacing: '-0.02em', marginTop: 4, fontWeight: 400 }}>{title}</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>{actions}</div>
        </header>
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
      </main>
    </div>
  );
}

// ===== Agent Inbox (chat) =====
function AgentInboxScreen() {
  const msgs = [
    { who: 'agent', t: "Morning. Overnight I ran your 'Series B fintech RevOps' brief — 41 qualified leads saved, 38 with verified emails. Want me to profile the top 10?" },
    { who: 'user', t: "Yes. And queue a 3-step sequence referencing any recent posts." },
    { who: 'agent', t: "On it. Profiling 10 now. I noticed 3 of them attended Pavilion CRO Summit — worth a custom opening line there. Draft in ~90s." },
  ];
  return (
    <AppShell active="inbox" subtitle="INBOX" title="Agent conversation"
      actions={<><Btn variant="secondary" size="sm">New brief</Btn><Btn variant="accent" size="sm"><Icons.Bot size={14}/>Agent on</Btn></>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--hairline)' }}>
          <div style={{ flex: 1, padding: 28, display: 'flex', flexDirection: 'column', gap: 18, overflow: 'auto' }}>
            <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-subtle)', letterSpacing: '0.12em' }}>
              — TUESDAY · APR 22 —
            </div>
            {msgs.map((m, i) => <Msg key={i} {...m} />)}
            <AgentThinking />
          </div>
          <div style={{ padding: 20, borderTop: '1px solid var(--hairline)' }}>
            <div style={{
              border: '1px solid var(--border)', borderRadius: 12, padding: 14,
              background: 'var(--bg-elev)',
            }}>
              <div style={{ fontSize: 13.5, color: 'var(--fg-muted)' }}>Ask the agent to do something…</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 14, alignItems: 'center' }}>
                <Pill tone="neutral" style={{ fontSize: 10 }}>⌘ Ctrl</Pill>
                <Pill tone="neutral" style={{ fontSize: 10 }}>K for commands</Pill>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                  <Btn variant="ghost" size="sm"><Icons.Link size={14}/></Btn>
                  <Btn variant="accent" size="sm"><Icons.Send size={14}/>Send</Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16, overflow: 'auto' }}>
          <div>
            <Meta style={{ display: 'block', marginBottom: 10 }}>CURRENT BRIEF</Meta>
            <Card pad={14}>
              <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 6 }}>VP RevOps · Series B fintech · US</div>
              <div style={{ fontSize: 11.5, color: 'var(--fg-muted)', lineHeight: 1.5 }}>Weighted for decision-maker rank. Exclude former employees.</div>
            </Card>
          </div>
          <div>
            <Meta style={{ display: 'block', marginBottom: 10 }}>RUN STATUS</Meta>
            <Card pad={14}>
              <RunRow t="Search" s="184 candidates" done />
              <RunRow t="Filter" s="41 qualified" done />
              <RunRow t="Verify emails" s="38 of 41" done />
              <RunRow t="Build profiles" s="7 of 10" active />
              <RunRow t="Draft sequences" s="queued" />
            </Card>
          </div>
          <div>
            <Meta style={{ display: 'block', marginBottom: 10 }}>TOOLS IN USE</Meta>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              <Pill dot tone="accent">Google Search</Pill>
              <Pill dot tone="accent">Maps</Pill>
              <Pill dot tone="neutral">LinkedIn</Pill>
              <Pill dot tone="neutral">Hunter</Pill>
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}

function Msg({ who, t }) {
  const isAgent = who === 'agent';
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', maxWidth: 640, alignSelf: isAgent ? 'flex-start' : 'flex-end', flexDirection: isAgent ? 'row' : 'row-reverse' }}>
      {isAgent ?
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent-text)', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icons.Bot size={16}/></div>
        : <Avatar name="Colton Bradley" size={30} hue={60} />
      }
      <div style={{
        background: isAgent ? 'var(--bg-elev)' : 'var(--accent-soft)',
        border: '1px solid ' + (isAgent ? 'var(--border)' : 'var(--accent-line)'),
        color: isAgent ? 'var(--fg)' : 'var(--accent-text)',
        padding: '12px 14px', borderRadius: 12,
        fontSize: 14, lineHeight: 1.55,
      }}>{t}</div>
    </div>
  );
}

function AgentThinking() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', maxWidth: 640 }}>
      <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent-text)', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icons.Bot size={16}/></div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)', letterSpacing: '0.05em' }}>
        ∙∙∙ drafting talking points for Rahul Desai
      </div>
    </div>
  );
}

function RunRow({ t, s, done, active }) {
  const dot = done ? 'var(--good)' : active ? 'var(--accent)' : 'var(--fg-subtle)';
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '6px 0', fontSize: 12 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: dot, animation: active ? 'pulse 1.4s ease-in-out infinite' : 'none' }} />
      <span style={{ flex: 1, color: done ? 'var(--fg-muted)' : 'var(--fg)' }}>{t}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-subtle)' }}>{s}</span>
    </div>
  );
}

// ===== Agent Tasks =====
function AgentTasksScreen() {
  const tasks = [
    { name: 'Series B fintech · RevOps leaders', status: 'running', prog: 68, leads: 29, eta: '4m' },
    { name: 'Local plumbers · Pacific Northwest', status: 'running', prog: 21, leads: 8, eta: '22m' },
    { name: 'CTOs · post-Series A dev tools', status: 'done', prog: 100, leads: 47, eta: '—' },
    { name: 'Directors of Sales · IL + WI · SaaS', status: 'done', prog: 100, leads: 63, eta: '—' },
    { name: 'Heads of Partnerships · fintech', status: 'queued', prog: 0, leads: 0, eta: 'pending' },
  ];
  return (
    <AppShell active="tasks" subtitle="TASKS · ALWAYS ON" title="Agent tasks"
      actions={<><Btn variant="secondary" size="sm">Filter</Btn><Btn variant="accent" size="sm"><Icons.Plus size={14}/>New task</Btn></>}>
      <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          <StatCard k="2" l="running" tone="accent" />
          <StatCard k="147" l="leads today" />
          <StatCard k="94%" l="email verified" tone="good" />
          <StatCard k="4.2s" l="avg profile" />
        </div>
        <Card pad={0}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>All tasks</div>
            <Meta>5 TOTAL</Meta>
          </div>
          {tasks.map((t, i) => <TaskRow key={i} {...t} last={i === tasks.length - 1} />)}
        </Card>
      </div>
    </AppShell>
  );
}

function StatCard({ k, l, tone }) {
  const col = tone === 'accent' ? 'var(--accent-text)' : tone === 'good' ? 'oklch(0.82 0.14 150)' : 'var(--fg)';
  return (
    <Card pad={18}>
      <Meta>{l}</Meta>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 36, letterSpacing: '-0.025em', marginTop: 6, color: col, lineHeight: 1 }}>{k}</div>
    </Card>
  );
}

function TaskRow({ name, status, prog, leads, eta, last }) {
  const tones = { running: 'accent', done: 'good', queued: 'neutral' };
  return (
    <div style={{ padding: '16px 20px', borderBottom: last ? 'none' : '1px solid var(--hairline)',
                  display: 'grid', gridTemplateColumns: '1.4fr 120px 1fr 100px 80px 100px', alignItems: 'center', gap: 20 }}>
      <div>
        <div style={{ fontSize: 13.5, fontWeight: 500 }}>{name}</div>
        <Meta style={{ display: 'block', marginTop: 4 }}>TASK · #{(1000 + Math.floor(Math.random()*999)).toString()}</Meta>
      </div>
      <Pill tone={tones[status]} dot>{status}</Pill>
      <div>
        <div style={{ height: 4, background: 'var(--hairline)', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{ width: `${prog}%`, height: '100%', background: status === 'done' ? 'var(--good)' : 'var(--accent)' }} />
        </div>
        <Meta style={{ display: 'block', marginTop: 6 }}>{prog}%</Meta>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18 }}>{leads}</div>
        <Meta>leads</Meta>
      </div>
      <div>
        <Meta>ETA</Meta>
        <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--fg-muted)' }}>{eta}</div>
      </div>
      <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
        <Btn variant="ghost" size="sm">{status === 'running' ? <Icons.Pause size={13}/> : <Icons.Play size={13}/>}</Btn>
        <Btn variant="ghost" size="sm"><Icons.ArrowUpRight size={13}/></Btn>
      </div>
    </div>
  );
}

// ===== Pipeline (kanban) =====
function PipelineScreen() {
  const cols = [
    { t: 'Lead', n: 124, hue: 240 },
    { t: 'Contacted', n: 48, hue: 200 },
    { t: 'Qualified', n: 21, hue: 160 },
    { t: 'Proposal', n: 9, hue: 50 },
    { t: 'Won', n: 4, hue: 140 },
  ];
  const leads = {
    Lead: [
      { n: 'Maya Chen', c: 'Northfield Labs', r: 'VP RevOps', s: 9 },
      { n: 'Rahul Desai', c: 'Candlepath', r: 'Dir of Sales', s: 8 },
      { n: 'Liv Sørensen', c: 'Meridian', r: 'Head of GTM', s: 9 },
    ],
    Contacted: [
      { n: 'Priya Shah', c: 'Fieldwork', r: 'RevOps Lead', s: 8 },
      { n: 'Anthony Romano', c: 'Polyhedra', r: 'VP Sales', s: 7 },
    ],
    Qualified: [
      { n: 'Niamh Doyle', c: 'Aster·co', r: 'Founder', s: 9 },
    ],
    Proposal: [
      { n: 'Jordan Wei', c: 'Candlepath', r: 'CEO', s: 10 },
    ],
    Won: [
      { n: 'Sam Kato', c: 'Lumen', r: 'CRO', s: 10 },
    ],
  };
  return (
    <AppShell active="pipeline" subtitle="PIPELINE · 206 LEADS" title="Deal flow"
      actions={<><Btn variant="secondary" size="sm"><Icons.Filter size={14}/>Filter</Btn><Btn variant="secondary" size="sm">Board</Btn></>}>
      <div style={{ padding: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {cols.map(col => (
            <div key={col.t} style={{ background: 'var(--bg-elev)', borderRadius: 14, border: '1px solid var(--hairline)', padding: 14, minHeight: 480 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: `oklch(0.7 0.14 ${col.hue})` }} />
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{col.t}</span>
                </div>
                <Meta>{col.n}</Meta>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(leads[col.t] || []).map((l, i) => <PipelineCard key={i} {...l} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

function PipelineCard({ n, c, r, s }) {
  return (
    <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 10, padding: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <Avatar name={n} size={26} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 12.5, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{n}</div>
          <div style={{ fontSize: 10.5, color: 'var(--fg-subtle)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Meta>{c}</Meta>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'var(--accent-text)' }}>{s}</span>
      </div>
    </div>
  );
}

// ===== Nurturing =====
function NurturingScreen() {
  const seqs = [
    { name: 'Series B warm intro · 3-touch', leads: 41, active: 29, reply: 22, open: 64 },
    { name: 'Founder-led post-demo · 5-touch', leads: 18, active: 11, reply: 33, open: 81 },
    { name: 'Re-engage · went cold', leads: 62, active: 8, reply: 9, open: 41 },
  ];
  return (
    <AppShell active="nurturing" subtitle="SEQUENCES" title="Nurturing"
      actions={<><Btn variant="secondary" size="sm">Templates</Btn><Btn variant="accent" size="sm"><Icons.Plus size={14}/>New sequence</Btn></>}>
      <div style={{ padding: 28, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {seqs.map((s, i) => <SeqCard key={i} {...s} primary={i === 0} />)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Card pad={0}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--hairline)' }}>
              <Meta>LIVE · DRAFTING</Meta>
              <div style={{ fontSize: 15, fontWeight: 500, marginTop: 6 }}>Step 1 · opening email</div>
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', marginBottom: 8 }}>To: rahul@candlepath.com</div>
              <div style={{ fontSize: 13.5, fontWeight: 500, marginBottom: 14 }}>Subject: Your Pavilion talk — one question</div>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--fg)' }}>
                Rahul,<br/><br/>
                I watched your "death of the dialing quota" talk at Pavilion twice. Particularly the bit about SDR tooling treating leads as rows instead of people — it's the exact problem we built LeadScout to solve.<br/><br/>
                <span style={{ background: 'var(--accent-soft)', padding: '2px 4px', borderRadius: 3 }}>One question: are you re-evaluating tooling before the post-Series-B hires land, or after?</span><br/><br/>
                — C
              </div>
              <div style={{ marginTop: 18, display: 'flex', gap: 8 }}>
                <Btn variant="accent" size="sm"><Icons.Check size={14}/>Approve &amp; send</Btn>
                <Btn variant="secondary" size="sm">Regenerate</Btn>
                <Btn variant="ghost" size="sm">Edit</Btn>
              </div>
            </div>
          </Card>
          <Card pad={16}>
            <Meta>PERSONALIZATION USED</Meta>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
              <Pill tone="accent" dot>Pavilion talk reference</Pill>
              <Pill tone="accent" dot>Series B news</Pill>
              <Pill tone="accent" dot>Personal-tone signal</Pill>
              <Pill tone="neutral">Verified email</Pill>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function SeqCard({ name, leads, active, reply, open, primary }) {
  return (
    <Card style={{ borderColor: primary ? 'var(--accent-line)' : 'var(--border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em' }}>{name}</div>
          <Meta style={{ marginTop: 6, display: 'block' }}>{leads} LEADS · {active} ACTIVE</Meta>
        </div>
        <Pill tone={primary ? 'accent' : 'neutral'} dot>{primary ? 'Running' : 'Paused'}</Pill>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 18 }}>
        <StatInline l="OPEN" v={`${open}%`} />
        <StatInline l="REPLY" v={`${reply}%`} tone="good" />
        <StatInline l="MEETINGS" v={Math.round(reply * 0.3) + ''} />
      </div>
    </Card>
  );
}

function StatInline({ l, v, tone }) {
  const col = tone === 'good' ? 'oklch(0.82 0.14 150)' : 'var(--fg)';
  return (
    <div>
      <Meta>{l}</Meta>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: col, lineHeight: 1, marginTop: 4 }}>{v}</div>
    </div>
  );
}

// ===== Leads Table =====
function LeadsTableScreen() {
  const rows = [
    { n: 'Maya Chen', c: 'Northfield Labs', r: 'VP Revenue Ops', dm: 'High', rel: 9, email: 'maya@northfield.co', v: true, s: 'Lead' },
    { n: 'Rahul Desai', c: 'Candlepath', r: 'Director of Sales', dm: 'High', rel: 8, email: 'rahul@candlepath.com', v: true, s: 'Lead' },
    { n: 'Liv Sørensen', c: 'Meridian', r: 'Head of GTM', dm: 'High', rel: 9, email: 'liv@meridian.is', v: true, s: 'Contacted' },
    { n: 'Priya Shah', c: 'Fieldwork', r: 'RevOps Lead', dm: 'Medium', rel: 8, email: 'priya.shah@fieldwork.co', v: true, s: 'Contacted' },
    { n: 'Anthony Romano', c: 'Polyhedra', r: 'VP Sales', dm: 'High', rel: 7, email: 'aromano@polyhedra.ai', v: false, s: 'Lead' },
    { n: 'Niamh Doyle', c: 'Aster·co', r: 'Founder', dm: 'High', rel: 9, email: 'niamh@aster.co', v: true, s: 'Qualified' },
    { n: 'Jordan Wei', c: 'Candlepath', r: 'CEO', dm: 'High', rel: 10, email: 'jordan@candlepath.com', v: true, s: 'Proposal' },
    { n: 'Sam Kato', c: 'Lumen', r: 'CRO', dm: 'High', rel: 10, email: 'sam@lumen.app', v: true, s: 'Won' },
  ];
  const statusTone = { Lead: 'neutral', Contacted: 'accent', Qualified: 'good', Proposal: 'warn', Won: 'good' };
  return (
    <AppShell active="leads" subtitle="ALL LEADS · 206" title="Leads"
      actions={<><Btn variant="secondary" size="sm"><Icons.Filter size={14}/>Filter</Btn><Btn variant="secondary" size="sm">Export</Btn><Btn variant="accent" size="sm"><Icons.Plus size={14}/>Add</Btn></>}>
      <div style={{ padding: 28 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <Pill tone="accent" dot>All 206</Pill>
          <Pill tone="neutral">High intent 48</Pill>
          <Pill tone="neutral">Verified email 184</Pill>
          <Pill tone="neutral">Added today 41</Pill>
        </div>
        <Card pad={0} style={{ overflow: 'hidden' }}>
          <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--hairline)',
                        display: 'grid', gridTemplateColumns: '2fr 1.4fr 1fr 0.9fr 1.4fr 0.9fr 60px', gap: 16 }}>
            {['Lead', 'Title · Company', 'Decision maker', 'Relevance', 'Email', 'Status', ''].map(h => <Meta key={h}>{h}</Meta>)}
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{
              padding: '14px 20px', borderBottom: i < rows.length - 1 ? '1px solid var(--hairline)' : 'none',
              display: 'grid', gridTemplateColumns: '2fr 1.4fr 1fr 0.9fr 1.4fr 0.9fr 60px', gap: 16, alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Avatar name={r.n} size={30} />
                <div style={{ fontSize: 13.5, fontWeight: 500 }}>{r.n}</div>
              </div>
              <div>
                <div style={{ fontSize: 12.5 }}>{r.r}</div>
                <div style={{ fontSize: 11, color: 'var(--fg-subtle)', marginTop: 2 }}>{r.c}</div>
              </div>
              <Pill tone={r.dm === 'High' ? 'accent' : 'neutral'} dot style={{ fontSize: 10 }}>{r.dm}</Pill>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 40, height: 3, background: 'var(--hairline)', borderRadius: 999 }}>
                  <div style={{ width: `${r.rel * 10}%`, height: '100%', background: 'var(--accent)', borderRadius: 999 }} />
                </div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 14 }}>{r.rel}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                {r.v
                  ? <Icons.Verified size={13} stroke="oklch(0.82 0.14 150)" />
                  : <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--fg-subtle)' }} />}
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.email}</span>
              </div>
              <Pill tone={statusTone[r.s]} style={{ fontSize: 10 }}>{r.s}</Pill>
              <div style={{ textAlign: 'right' }}><Btn variant="ghost" size="sm"><Icons.ArrowUpRight size={13}/></Btn></div>
            </div>
          ))}
        </Card>
      </div>
    </AppShell>
  );
}

// ===== Prospect Profile (flagship screen) =====
function ProspectProfileScreen() {
  return (
    <AppShell active="profile" subtitle="LEAD · MAYA CHEN" title="Prospect profile"
      actions={<><Btn variant="secondary" size="sm"><Icons.Copy size={14}/>Copy brief</Btn><Btn variant="accent" size="sm"><Icons.Send size={14}/>Start sequence</Btn></>}>
      <div style={{ padding: 28, display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Header card */}
          <Card pad={0} style={{ overflow: 'hidden' }}>
            <div style={{ padding: 24, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <Avatar name="Maya Chen" size={76} hue={280} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, letterSpacing: '-0.02em', fontWeight: 400 }}>Maya Chen</div>
                  <Pill tone="good" dot>High intent</Pill>
                  <Pill tone="accent" dot>Decision maker</Pill>
                </div>
                <div style={{ fontSize: 14, color: 'var(--fg-muted)', marginTop: 4 }}>VP Revenue Operations · Northfield Labs · Seattle, WA</div>
                <div style={{ display: 'flex', gap: 14, marginTop: 16 }}>
                  <IconLink icon="Mail" label="maya@northfield.co" verified />
                  <IconLink icon="Linkedin" label="linkedin.com/in/mayachen" />
                  <IconLink icon="Globe" label="northfield.co" />
                </div>
              </div>
              <div>
                <ScoreDial label="Relevance" value={9} />
              </div>
            </div>
            <div style={{
              padding: '18px 24px', background: 'var(--bg)',
              borderTop: '1px solid var(--hairline)',
              display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12,
            }}>
              <MiniMetric l="Profile built" v="2.1s ago" />
              <MiniMetric l="Last active" v="2h ago" />
              <MiniMetric l="Recent moves" v="1 (spring '25)" />
              <MiniMetric l="Network size" v="8.2k" />
              <MiniMetric l="Talks given" v="12" />
            </div>
          </Card>

          {/* Dossier — tabs */}
          <Card pad={0}>
            <div style={{ padding: '14px 24px', borderBottom: '1px solid var(--hairline)', display: 'flex', gap: 24 }}>
              {['Activity', 'Company', 'Personality', 'Talking points'].map((t, i) => (
                <div key={t} style={{
                  fontSize: 13, fontWeight: 500,
                  paddingBottom: 12, marginBottom: -14,
                  borderBottom: '2px solid ' + (i === 0 ? 'var(--accent)' : 'transparent'),
                  color: i === 0 ? 'var(--fg)' : 'var(--fg-muted)',
                }}>{t}</div>
              ))}
            </div>
            <div style={{ padding: 24, display: 'grid', gap: 14 }}>
              <ActivityItem date="Apr 20" kind="Post" title="On the pre-IPO RevOps stack" body="A good RevOps team is 60% curiosity, 30% SQL, 10% willingness to delete things. We just rebuilt ours and shipped 40% of the old toolchain." tags={['toolchain', 'team']} />
              <ActivityItem date="Apr 14" kind="Talk" title="SaaStr — 'RevOps without the spreadsheet tax'" body="35-min keynote on consolidating analytics. Referenced replacing legacy Salesforce add-ons." tags={['keynote']} />
              <ActivityItem date="Apr 08" kind="Comment" title="Replied to Jordan Wei's post about SDR tooling" body="Agreed. The ROI math on per-seat lead platforms has been upside-down since GPT-4." tags={['signal']} />
              <ActivityItem date="Apr 02" kind="News" title="Northfield Labs raised $18M Series A+" body="Led by Index Ventures. Announced plan to 2× GTM headcount." tags={['funding']} />
            </div>
          </Card>
        </div>

        {/* Right rail */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card>
            <Meta style={{ display: 'block', marginBottom: 12 }}>WHY SHE'S A FIT</Meta>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--fg)' }}>
              Leads RevOps at a newly-funded SaaS. Publicly venting about legacy tools; recently consolidated her stack. High intent, high access, short decision cycle.
            </div>
          </Card>

          <Card>
            <Meta style={{ display: 'block', marginBottom: 12 }}>PERSONALITY READ</Meta>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <PTrait l="Direct" v={0.9} />
              <PTrait l="Analytical" v={0.85} />
              <PTrait l="Warm tone in public" v={0.55} />
              <PTrait l="Responds to numbers" v={0.8} />
            </div>
            <div style={{ marginTop: 14, fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              Prefers concise, numbers-first openers. Avoid sycophancy. Gets annoyed by fake urgency.
            </div>
          </Card>

          <Card>
            <Meta style={{ display: 'block', marginBottom: 12 }}>AI TALKING POINTS</Meta>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <TP n="1" t='Reference her "delete things" post — we position as consolidation, not another tool.' />
              <TP n="2" t="Bring the SaaStr talk up specifically — mention the slide on Salesforce add-ons." />
              <TP n="3" t="Offer a 40-min consolidation audit, with numbers. No demo on first call." />
            </div>
            <Btn variant="outline" size="sm" style={{ marginTop: 14, width: '100%', justifyContent: 'center' }}>Regenerate <Icons.Spark size={13}/></Btn>
          </Card>

          <Card>
            <Meta style={{ display: 'block', marginBottom: 12 }}>BEST TIME TO REACH</Meta>
            <WeekHeat />
          </Card>
        </aside>
      </div>
    </AppShell>
  );
}

function IconLink({ icon, label, verified }) {
  const I = Icons[icon];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: 'var(--fg-muted)',
                  padding: '6px 10px', border: '1px solid var(--hairline)', borderRadius: 999 }}>
      <I size={13} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5 }}>{label}</span>
      {verified && <Icons.Verified size={12} stroke="oklch(0.82 0.14 150)" />}
    </div>
  );
}

function ScoreDial({ label, value }) {
  const r = 30, c = 2 * Math.PI * r;
  const off = c - (value / 10) * c;
  return (
    <div style={{ position: 'relative', width: 76, height: 76, display: 'grid', placeItems: 'center' }}>
      <svg width="76" height="76" viewBox="0 0 76 76" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="38" cy="38" r={r} fill="none" stroke="var(--hairline)" strokeWidth="4" />
        <circle cx="38" cy="38" r={r} fill="none" stroke="var(--accent)" strokeWidth="4" strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" />
      </svg>
      <div style={{ position: 'absolute', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1 }}>{value}</div>
        <Meta style={{ fontSize: 9 }}>{label}</Meta>
      </div>
    </div>
  );
}

function MiniMetric({ l, v }) {
  return (
    <div>
      <Meta>{l}</Meta>
      <div style={{ fontSize: 13, fontWeight: 500, marginTop: 4 }}>{v}</div>
    </div>
  );
}

function ActivityItem({ date, kind, title, body, tags }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 14 }}>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)' }}>{date}</div>
        <Pill tone="neutral" style={{ fontSize: 9.5, marginTop: 6 }}>{kind}</Pill>
      </div>
      <div style={{ paddingBottom: 14, borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{body}</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          {tags.map(t => <Pill key={t} tone="neutral" style={{ fontSize: 9.5 }}>#{t}</Pill>)}
        </div>
      </div>
    </div>
  );
}

function PTrait({ l, v }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 12 }}>{l}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-subtle)' }}>{Math.round(v * 100)}</span>
      </div>
      <div style={{ height: 3, background: 'var(--hairline)', borderRadius: 999 }}>
        <div style={{ width: `${v * 100}%`, height: '100%', background: 'var(--accent)' }} />
      </div>
    </div>
  );
}

function TP({ n, t }) {
  return (
    <div style={{ display: 'flex', gap: 10, padding: 10, background: 'var(--bg)', border: '1px solid var(--hairline)', borderRadius: 8 }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--accent-text)', lineHeight: 1, marginTop: 2 }}>{n}</span>
      <span style={{ fontSize: 12.5, lineHeight: 1.5 }}>{t}</span>
    </div>
  );
}

function WeekHeat() {
  const data = [
    [0,0,1,2,1,0,0],
    [0,1,2,3,3,1,0],
    [0,2,3,3,2,1,0],
    [0,1,2,2,1,0,0],
  ];
  const days = ['M','T','W','T','F','S','S'];
  const rows = ['9a','12p','3p','6p'];
  const color = v => v === 0 ? 'var(--hairline)' : `oklch(0.68 0.15 var(--accent-hue, 240) / ${0.2 + v * 0.22})`;
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '32px repeat(7, 1fr)', gap: 4 }}>
        <div />
        {days.map((d, i) => <div key={i} style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--fg-subtle)' }}>{d}</div>)}
        {data.map((row, ri) => (
          <React.Fragment key={ri}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--fg-subtle)', alignSelf: 'center' }}>{rows[ri]}</div>
            {row.map((v, ci) => <div key={ci} style={{ height: 20, borderRadius: 3, background: v === 0 ? 'var(--hairline)' : `color-mix(in oklch, var(--accent) ${20 + v * 22}%, transparent)` }} />)}
          </React.Fragment>
        ))}
      </div>
      <div style={{ marginTop: 10, fontSize: 11.5, color: 'var(--fg-muted)' }}>Tue/Wed late morning has her responding 2.4× faster.</div>
    </div>
  );
}

Object.assign(window, {
  AgentInboxScreen, AgentTasksScreen, PipelineScreen, NurturingScreen, LeadsTableScreen, ProspectProfileScreen,
});
