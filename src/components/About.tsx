'use client';

export default function About() {
  const capabilities = [
    {
      num: '01',
      title: 'Artificial Intelligence & Machine Learning',
      technologies: 'PyTorch, Scikit-learn, Python, OpenCV, NumPy, Pandas, Vector Embeddings, Regression Models',
      context: 'Model development, deep learning architectures, feature engineering, and edge inference.',
    },
    {
      num: '02',
      title: 'Systems & Backend Architecture',
      technologies: 'Node.js, Express, FastAPI, MongoDB, PostgreSQL, RESTful APIs, JWT Authorization',
      context: 'High-throughput event loops, ACID document schemas, and asynchronous microservices.',
    },
    {
      num: '03',
      title: 'Interfaces & Full-Stack Development',
      technologies: 'TypeScript, JavaScript, React, Next.js (App Router), Tailwind CSS, Semantic HTML5',
      context: 'Type-safe component composition, clean editorial typography, and responsive systems.',
    },
    {
      num: '04',
      title: 'Embedded Hardware & Infrastructure',
      technologies: 'ESP32 Microcontrollers, Sensor Calibration, Docker, Linux / Bash, Git Version Control',
      context: 'Physical computing, optical spectrometry sensor telemetry, and containerized deployment.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
        {/* Section Lead-in */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
              02 // PROFILE & CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-100 uppercase mt-2">
              About
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500">
            DISCIPLINE: CODE &bull; SYSTEMS &bull; VISION
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Large Typographic Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-4xl font-normal text-neutral-100 leading-snug tracking-tight">
              I build software, experiment with intelligent systems, and work across machine learning, full-stack architecture, and creative technology.
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed max-w-xl font-normal">
              I&apos;m an Information Technology candidate specializing in Artificial Intelligence and Machine Learning at Alliance University in Bengaluru. My work connects rigorous algorithmic foundations with deployable, real-world software—from offline embedded TinyML firmware to deterministic financial recovery state machines.
            </p>
            <p className="text-base text-neutral-400 leading-relaxed max-w-xl font-normal">
              Outside code, photography and visual composition are an essential part of how I think. In both domains, the goal is identical: eliminating noise until only what is deliberate, structural, and necessary remains.
            </p>
          </div>

          {/* Academic & Geographic Telemetry */}
          <div className="lg:col-span-5 p-6 border border-neutral-800 bg-[#111113] space-y-6 font-mono text-xs">
            <div className="text-neutral-400 uppercase tracking-wider pb-2 border-b border-neutral-800">
              IDENTITY SPECIFICATIONS
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-1 border-b border-neutral-800/60">
                <span className="text-neutral-500">PROGRAM</span>
                <span className="text-neutral-200 text-right">BCA (AI & ML)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800/60">
                <span className="text-neutral-500">INSTITUTION</span>
                <span className="text-neutral-200 text-right">Alliance University, Bengaluru</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800/60">
                <span className="text-neutral-500">TIMELINE</span>
                <span className="text-neutral-200 text-right">2023 &mdash; 2026</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800/60">
                <span className="text-neutral-500">LEADERSHIP</span>
                <span className="text-neutral-200 text-right">President, ISACA Student Group</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500">LOCATION</span>
                <span className="text-neutral-200 text-right">Bengaluru, India (UTC+05:30)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Capabilities List */}
        <div className="space-y-8 pt-12 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              ENGINEERING CAPABILITIES // CORE DOMAINS
            </h3>
            <span className="text-xs font-mono text-neutral-600">
              TYPOGRAPHY &bull; VERIFIED STACK
            </span>
          </div>

          <div className="divide-y divide-neutral-800 border-t border-b border-neutral-800">
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group hover:bg-neutral-900/20 transition-colors"
              >
                {/* Number & Domain Title */}
                <div className="lg:col-span-5 flex items-baseline gap-4">
                  <span className="text-xl font-mono text-neutral-500 font-medium">
                    {cap.num}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 uppercase group-hover:text-neutral-300 transition-colors">
                    {cap.title}
                  </h4>
                </div>

                {/* Description & Specific Technologies */}
                <div className="lg:col-span-7 space-y-2">
                  <p className="text-xs font-mono text-neutral-400">
                    {cap.context}
                  </p>
                  <p className="text-xs font-mono text-neutral-300 leading-relaxed">
                    <span className="text-neutral-500 mr-2">TECH:</span>
                    {cap.technologies}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
