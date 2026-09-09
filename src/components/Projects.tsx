'use client';

import { ArrowUpRight, GitBranch } from 'lucide-react';

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
          <div className="space-y-3">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
              01 {'//'} SELECTED WORK
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-100 uppercase">
              Featured Systems
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400 max-w-sm md:text-right">
            Three curated engineering systems emphasizing state-machine determinism, embedded TinyML edge inference, and transactional full-stack architecture.
          </div>
        </div>

        {/* Projects Stream */}
        <div className="space-y-28">
          {/* =========================================================================
              PROJECT 01: SENTRY (Hero Project #1)
             ========================================================================= */}
          <article className="space-y-8 pt-4">
            {/* Project Header Bar */}
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-neutral-800/80 text-xs font-mono">
              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-bold text-neutral-100">
                  01
                </span>
                <span className="text-neutral-400 uppercase tracking-wider">
                  PAYMENT RECOVERY / FINTECH / SYSTEMS
                </span>
              </div>
              <div className="flex items-center gap-4 text-neutral-500">
                <span>2024 &mdash; 2025</span>
                <span>&bull;</span>
                <span className="text-neutral-300">POLICY ENGINE SPEC: BOUNDED STATE MACHINE</span>
              </div>
            </div>

            {/* Main Asymmetrical Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Narrative & Technical Depth */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-100 uppercase">
                    Sentry
                  </h3>
                  <p className="text-sm font-mono text-neutral-400 mt-2">
                    Event-Driven Payment Recovery & Telemetry Engine
                  </p>
                </div>

                <p className="text-base text-neutral-300 leading-relaxed font-normal">
                  An event-driven payment recovery and telemetry platform engineered to intercept, diagnose, and recover failed financial transactions at scale. Built around a bounded state-machine policy engine that governs recovery sweeps with strict retry ceilings to prevent cascading charge duplicates.
                </p>

                {/* Constraint & Solution Pair */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                  <div className="p-4 border border-neutral-800 bg-neutral-900/40 space-y-1.5">
                    <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                      CORE CONSTRAINT
                    </span>
                    <p className="text-neutral-300 font-sans text-xs leading-relaxed">
                      Naive retry scripts risk runaway payment loops, customer fatigue, and unclassified billing lockouts during intermittent gateway downtime.
                    </p>
                  </div>

                  <div className="p-4 border border-neutral-800 bg-neutral-900/40 space-y-1.5">
                    <span className="text-neutral-300 uppercase tracking-wider block text-[10px]">
                      ENGINEERED SOLUTION
                    </span>
                    <p className="text-neutral-300 font-sans text-xs leading-relaxed">
                      Bounded state machine categorizing failure modes, strictly capping retry limits (MAX_RETRIES = 3), and queuing jittered asynchronous sweeps.
                    </p>
                  </div>
                </div>

                {/* Key Engineering Concepts */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                    KEY ARCHITECTURAL CONCEPTS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>Bounded state-machine engine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>Failure classification taxonomy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>MAX_RETRIES = 3 enforcement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>HMAC-SHA256 webhook validation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>Async recovery background sweep</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>Audit logging & telemetry export</span>
                    </div>
                  </div>
                </div>

                {/* Action Link & Technologies */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://github.com/VisheshGurnani/Sentry-AI-Revenue-Recovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 bg-neutral-900 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-all uppercase tracking-wider font-mono text-xs"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Inspect Sentry Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: State-Machine Telemetry Blueprint */}
              <div className="lg:col-span-6 p-6 sm:p-8 border border-neutral-800 bg-[#111113] space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono text-neutral-500">
                  <span>STATE-MACHINE TELEMETRY BLUEPRINT</span>
                  <span className="text-neutral-400">FASTAPI / SQLITE</span>
                </div>

                {/* Visual Pipeline Schematic */}
                <div className="space-y-4 font-mono text-xs">
                  {/* Step 1 */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">01 {'//'} INGESTION LAYER</span>
                      <span className="text-neutral-500">HMAC-SHA256</span>
                    </div>
                    <p className="text-neutral-300 font-sans text-xs">
                      Webhooks received via signed payload, verified against secret digests, and persisted into SQLite ledger with raw payload snapshots.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">02 {'//'} CLASSIFICATION ENGINE</span>
                      <span className="text-neutral-500">TRIAGE</span>
                    </div>
                    <p className="text-neutral-300 font-sans text-xs">
                      Categorizes error payloads into soft declines (e.g. transient gateway timeout, network drop) vs hard fatal declines (invalid token, stolen card).
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">03 {'//'} BOUNDED STATE MACHINE</span>
                      <span className="text-neutral-300">MAX_RETRIES = 3</span>
                    </div>
                    <div className="bg-neutral-900 p-2.5 border border-neutral-800 text-[11px] text-neutral-400 space-y-1">
                      <div className="text-neutral-300">INITIAL_FAILED &rarr; SCHEDULED_RETRY(attempt=1..3)</div>
                      <div className="text-neutral-500">↳ backoff = min(base_delay * 2^attempt + jitter, max_delay)</div>
                      <div className="text-neutral-400">↳ SUCCESS &rarr; RECOVERED | ATTEMPT &gt; 3 &rarr; TERMINAL_ABANDONED</div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">04 {'//'} CONTROL CENTER UI</span>
                      <span className="text-neutral-500">REACT + VITE</span>
                    </div>
                    <p className="text-neutral-300 font-sans text-xs">
                      Single-page operational console providing real-time recovery status inspection, manual override triggers, and audit telemetry downloads.
                    </p>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-neutral-800 space-y-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                    STACK & RUNTIMES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'FastAPI', 'React', 'Vite', 'Tailwind CSS', 'SQLAlchemy', 'SQLite'].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Divider */}
          <hr className="border-neutral-800" />

          {/* =========================================================================
              PROJECT 02: EDGECROP ZERO (Hero Project #2)
             ========================================================================= */}
          <article className="space-y-8 pt-4">
            {/* Project Header Bar */}
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-neutral-800/80 text-xs font-mono">
              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-bold text-neutral-100">
                  02
                </span>
                <span className="text-neutral-400 uppercase tracking-wider">
                  EDGE AI / IOT / EMBEDDED SYSTEMS
                </span>
              </div>
              <div className="flex items-center gap-4 text-neutral-500">
                <span>2024 &mdash; 2025</span>
                <span>&bull;</span>
                <span className="text-neutral-300">TINYML TRANSPILATION &bull; ESP32-WROOM-32</span>
              </div>
            </div>

            {/* Asymmetrical Grid (Swapped Column Orientation for Rhythmic Balance) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Embedded Hardware & Transpilation Architecture */}
              <div className="lg:col-span-6 lg:order-2 space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-100 uppercase">
                    EdgeCrop Zero
                  </h3>
                  <p className="text-sm font-mono text-neutral-400 mt-2">
                    Autonomous Offline Smart Irrigation via TinyML Transpilation
                  </p>
                </div>

                <p className="text-base text-neutral-300 leading-relaxed font-normal">
                  An autonomous offline smart irrigation engine powered by Edge AI (TinyML). A constrained DecisionTreeClassifier is trained on synthetic agronomic soil data and transpiled directly into an optimized C header for bare-metal execution on an ESP32 microcontroller, evaluating soil moisture and NPK readings locally with zero internet dependency.
                </p>

                {/* Constraint & Solution Pair */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                  <div className="p-4 border border-neutral-800 bg-neutral-900/40 space-y-1.5">
                    <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                      CORE CONSTRAINT
                    </span>
                    <p className="text-neutral-300 font-sans text-xs leading-relaxed">
                      Remote rural agricultural plots lack consistent broadband connectivity, rendering cloud-dependent IoT irrigation systems prone to silence or failure.
                    </p>
                  </div>

                  <div className="p-4 border border-neutral-800 bg-neutral-900/40 space-y-1.5">
                    <span className="text-neutral-300 uppercase tracking-wider block text-[10px]">
                      ENGINEERED SOLUTION
                    </span>
                    <p className="text-neutral-300 font-sans text-xs leading-relaxed">
                      Transpiles tree logic into pure static C branch conditions running natively in SRAM on an ESP32, actuating irrigation relays locally.
                    </p>
                  </div>
                </div>

                {/* Key Engineering Concepts */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                    KEY ARCHITECTURAL CONCEPTS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>Edge ML / TinyML on MCU</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>DecisionTreeClassifier tree pruning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>C header code transpilation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>ESP32-WROOM-32 bare-metal run</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>Capacitive soil moisture & NPK sensing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400" />
                      <span>FastAPI + SQLite telemetry sink</span>
                    </div>
                  </div>
                </div>

                {/* Action Link & Technologies */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://github.com/VisheshGurnani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 bg-neutral-900 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-all uppercase tracking-wider font-mono text-xs"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Inspect EdgeCrop Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Hardware & Transpilation Schematic */}
              <div className="lg:col-span-6 lg:order-1 p-6 sm:p-8 border border-neutral-800 bg-[#111113] space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono text-neutral-500">
                  <span>TINYML TRANSPILATION & TELEMETRY SINK</span>
                  <span className="text-neutral-400">ESP32 + FASTAPI</span>
                </div>

                {/* Visual Pipeline Schematic */}
                <div className="space-y-4 font-mono text-xs">
                  {/* Step 1: Model Training */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">01 {'//'} OFFLINE MODEL TRAINING</span>
                      <span className="text-neutral-500">SCIKIT-LEARN</span>
                    </div>
                    <p className="text-neutral-300 font-sans text-xs">
                      Trained a constrained <code className="text-neutral-300 font-mono">DecisionTreeClassifier(max_depth=4)</code> on synthetic soil datasets to avoid overfitting on limited microcontroller memory.
                    </p>
                  </div>

                  {/* Step 2: C Header Transpilation */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">02 {'//'} AST TRANSPILATION TO C</span>
                      <span className="text-neutral-500">ZERO RUNTIME DEPS</span>
                    </div>
                    <div className="bg-neutral-900 p-2.5 border border-neutral-800 text-[11px] text-neutral-400 space-y-1">
                      <div className="text-neutral-300">{'// model.h (transpiled output)'}</div>
                      <div className="text-neutral-400">int predict_irrigation(float moisture, float n, float p, float k) &#123;</div>
                      <div className="text-neutral-500 pl-3">if (moisture &lt;= 32.5f) return (n &lt; 40.0f) ? 1 : 0;</div>
                      <div className="text-neutral-500 pl-3">return 0; {'// valve off'}</div>
                      <div className="text-neutral-400">&#125;</div>
                    </div>
                  </div>

                  {/* Step 3: Hardware In-Situ Execution */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">03 {'//'} BARE-METAL EXECUTION</span>
                      <span className="text-neutral-300">ESP32-WROOM-32</span>
                    </div>
                    <p className="text-neutral-300 font-sans text-xs">
                      Runs the compiled inference logic directly in MCU cycles upon periodic timer interrupts, actuating the relay valve pins instantaneously without internet packets.
                    </p>
                  </div>

                  {/* Step 4: Asynchronous Telemetry Sink */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">04 {'//'} TELEMETRY INGESTION SINK</span>
                      <span className="text-neutral-500">FASTAPI + SQLITE</span>
                    </div>
                    <p className="text-neutral-300 font-sans text-xs">
                      When Wi-Fi or mesh connectivity becomes opportunistically available, logs are batched and dispatched to a FastAPI REST service backed by Pydantic models.
                    </p>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-neutral-800 space-y-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                    STACK & RUNTIMES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['ESP32-WROOM-32', 'TinyML', 'C / C++', 'Python', 'Scikit-learn', 'FastAPI', 'Pydantic', 'SQLAlchemy', 'SQLite'].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Divider */}
          <hr className="border-neutral-800" />

          {/* =========================================================================
              PROJECT 03: ARCHON
             ========================================================================= */}
          <article className="space-y-8 pt-4">
            {/* Project Header Bar */}
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-neutral-800/80 text-xs font-mono">
              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-bold text-neutral-100">
                  03
                </span>
                <span className="text-neutral-400 uppercase tracking-wider">
                  FULL-STACK DEVELOPMENT / UNIVERSITY SYSTEMS
                </span>
              </div>
              <div className="flex items-center gap-4 text-neutral-500">
                <span>03/2026 &mdash; 04/2026</span>
                <span>&bull;</span>
                <span className="text-neutral-300">THREE-TIER ARCHITECTURE &bull; CUSTOM RBAC</span>
              </div>
            </div>

            {/* Main Asymmetrical Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Narrative & Technical Depth */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-100 uppercase">
                    Archon
                  </h3>
                  <p className="text-sm font-mono text-neutral-400 mt-2">
                    University Portal Management System
                  </p>
                  <div className="flex items-center gap-3 pt-2 text-xs font-mono text-neutral-500">
                    <span className="text-neutral-300 font-semibold uppercase tracking-wider">CORE DEVELOPER</span>
                    <span>&bull;</span>
                    <span>03/2026 &mdash; 04/2026</span>
                  </div>
                </div>

                <p className="text-base text-neutral-300 leading-relaxed font-normal">
                  A full-stack university portal built around a three-tier architecture, with secure authentication, role-based access control, scalable MongoDB schemas, and dedicated dashboards for Students, Faculty, and Administrators.
                </p>

                {/* Constraint & Solution Pair */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                  <div className="p-4 border border-neutral-800 bg-neutral-900/40 space-y-1.5">
                    <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                      CORE CONSTRAINT
                    </span>
                    <p className="text-neutral-300 font-sans text-xs leading-relaxed">
                      Managing sensitive university records across multiple user roles requires strict separation of permissions, secure authentication, and controlled access to academic data.
                    </p>
                  </div>

                  <div className="p-4 border border-neutral-800 bg-neutral-900/40 space-y-1.5">
                    <span className="text-neutral-300 uppercase tracking-wider block text-[10px]">
                      ENGINEERED SOLUTION
                    </span>
                    <p className="text-neutral-300 font-sans text-xs leading-relaxed">
                      A three-tier Node.js/Express architecture with custom RBAC middleware, server-side sessions, scalable MongoDB schemas, and dedicated dashboards for Students, Faculty, and Administrators.
                    </p>
                  </div>
                </div>

                {/* Key Architectural Concepts */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                    KEY ARCHITECTURAL CONCEPTS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400 flex-shrink-0" />
                      <span>Three-tier application architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400 flex-shrink-0" />
                      <span>bcrypt password hashing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400 flex-shrink-0" />
                      <span>Server-side session management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400 flex-shrink-0" />
                      <span>Express middleware RBAC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400 flex-shrink-0" />
                      <span>Mongoose schema design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400 flex-shrink-0" />
                      <span>Activity logging &amp; auditing</span>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://github.com/VisheshGurnani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 bg-neutral-900 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-all uppercase tracking-wider font-mono text-xs"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Inspect Archon Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: University Portal Architecture Blueprint */}
              <div className="lg:col-span-6 p-6 sm:p-8 border border-neutral-800 bg-[#111113] space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono text-neutral-500">
                  <span>UNIVERSITY PORTAL ARCHITECTURE</span>
                  <span className="text-neutral-400">EXPRESS / MONGODB</span>
                </div>

                {/* Visual Pipeline Schematic */}
                <div className="space-y-4 font-mono text-xs">
                  {/* Step 1 */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">01 {'//'} PRESENTATION LAYER</span>
                      <span className="text-neutral-500">HTML5 / CSS3 / VANILLA JAVASCRIPT</span>
                    </div>
                    <p className="text-neutral-300 font-sans text-xs">
                      Responsive frontend providing role-specific interfaces for Students, Faculty, and Administrators.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">02 {'//'} APPLICATION LAYER</span>
                      <span className="text-neutral-500">NODE.JS / EXPRESS.JS</span>
                    </div>
                    <p className="text-neutral-300 font-sans text-xs">
                      Server-side business logic, authentication, session management, and middleware-based authorization.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">03 {'//'} ROLE-BASED ACCESS CONTROL</span>
                      <span className="text-neutral-300 font-semibold">RBAC</span>
                    </div>
                    <div className="bg-neutral-900 p-2.5 border border-neutral-800 text-[11px] text-neutral-400 space-y-1">
                      <div className="text-neutral-300">STUDENT &rarr; STUDENT DASHBOARD</div>
                      <div className="text-neutral-300">FACULTY &rarr; FACULTY DASHBOARD</div>
                      <div className="text-neutral-300">ADMIN &rarr; ADMIN DASHBOARD</div>
                    </div>
                    <p className="text-neutral-300 font-sans text-xs">
                      Express middleware enforces differentiated permissions based on authenticated user roles.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400 font-bold">04 {'//'} DATA &amp; AUDIT LAYER</span>
                      <span className="text-neutral-500">MONGODB / MONGOOSE</span>
                    </div>
                    <p className="text-neutral-300 font-sans text-xs">
                      Structured schemas manage user profiles, academic records, department-specific grades, and authorization data.
                    </p>
                    <p className="text-neutral-400 font-sans text-xs">
                      Activity logging records critical events including grade modifications and account creation.
                    </p>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-neutral-800 space-y-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                    STACK &amp; RUNTIMES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'HTML5', 'CSS3', 'JavaScript'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
