'use client';

export default function Experience() {
  const leadership = [
    {
      num: '01',
      role: 'President — Student Chapter',
      organization: 'ISACA Student Group, Alliance University',
      period: '2024 — Present',
      focus: 'IT Audit, Cybersecurity Governance & Student Mentorship',
      summary:
        'Directing the university student body for the premier global association of IT governance, security, and enterprise risk professionals. Organizing technical workshops on vulnerability assessments, network defense fundamentals, and cloud compliance standards.',
    },
    {
      num: '02',
      role: 'Class Representative — AI & ML Cohort',
      organization: 'Department of Computer Science, Alliance University',
      period: '2023 — Present',
      focus: 'Academic Governance & Cohort Leadership',
      summary:
        'Representing the dedicated Bachelor of Computer Applications (AI & ML) cohort before the faculty council. Channeling student feedback on curriculum pacing, laboratory compute access, and organizing peer study groups for deep learning coursework.',
    },
    {
      num: '03',
      role: 'Embedded AI Researcher & Systems Lead',
      organization: 'EdgeCrop Zero Initiative',
      period: '2024 — Present',
      focus: 'TinyML Transpilation & Microcontroller Irrigation Engine',
      summary:
        'Architecting offline intelligent irrigation systems running directly on ESP32-WROOM-32 hardware. Trained constrained classification models in Scikit-learn, transpiled decision trees into bare-metal C headers, and constructed asynchronous telemetry ingestion APIs using FastAPI and SQLite.',
    },
  ];

  return (
    <section id="leadership" className="py-24 md:py-32 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
          <div className="space-y-3">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
              03 // LEADERSHIP & EXPERIENCE
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-100 uppercase">
              Leadership
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500">
            ORGANIZATIONAL IMPACT &bull; GOVERNANCE &bull; RESEARCH
          </div>
        </div>

        {/* Editorial Timeline List */}
        <div className="divide-y divide-neutral-800 border-t border-b border-neutral-800">
          {leadership.map((item) => (
            <div
              key={item.num}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-neutral-900/20 transition-colors"
            >
              {/* Left Column: Number, Role, Organization & Period */}
              <div className="lg:col-span-5 space-y-2">
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <span className="text-neutral-400 font-bold">{item.num}</span>
                  <span>/</span>
                  <span className="text-neutral-400">{item.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 tracking-tight uppercase">
                  {item.role}
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  {item.organization}
                </p>
              </div>

              {/* Right Column: Mandate & Narrative Summary */}
              <div className="lg:col-span-7 space-y-2">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider pb-1">
                  MANDATE: {item.focus}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
