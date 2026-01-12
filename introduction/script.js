// Spring Boot Interactive Demo - JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initFeaturesGrid();
    initReasonsContainer();
    initComparisonViews();
    initSetupContent();
    initScrollAnimations();
    initNavigation();
    initStatsCounter();
});

// Smooth scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Typing effect for hero code
function initTypingEffect() {
    const codeElement = document.querySelector('.typing-effect');
    const code = `@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(
            Application.class, args
        );
    }
}

// That's all you need! 🚀`;

    let i = 0;
    function type() {
        if (i < code.length) {
            codeElement.textContent += code.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    setTimeout(type, 1000);
}

// Features grid for "What is Spring Boot" section
function initFeaturesGrid() {
    const features = [
        { icon: '⚡', title: 'Auto-Configuration', desc: 'Automatically configures your app based on dependencies. No more XML!', tag: 'Core Feature' },
        { icon: '🖥️', title: 'Embedded Server', desc: 'Run with embedded Tomcat, Jetty, or Undertow. No external server needed!', tag: 'Deployment' },
        { icon: '📦', title: 'Starter Dependencies', desc: 'Pre-configured dependency sets. One starter gets you everything!', tag: 'Dependencies' },
        { icon: '⚙️', title: 'Production Ready', desc: 'Built-in health checks, metrics, and externalized configuration.', tag: 'Production' }
    ];

    const grid = document.getElementById('features-grid');
    features.forEach((f, i) => {
        grid.innerHTML += `
            <div class="explanation-card" style="animation: fadeInUp 0.5s ease ${i * 0.1}s both">
                <div class="card-icon">${f.icon}</div>
                <h3>${f.title}</h3>
                <p>${f.desc}</p>
                <div class="card-tag">${f.tag}</div>
            </div>`;
    });
}

// Reasons for "Why Learn Spring Boot" section
function initReasonsContainer() {
    const reasons = [
        { num: '01', title: '🚀 Industry Standard', desc: 'Spring Boot is the de facto standard for Java enterprise apps. Used by Netflix, Amazon, Google.', extra: '<div class="company-logos"><span class="company-logo">Netflix</span><span class="company-logo">Amazon</span><span class="company-logo">Google</span></div>', featured: true },
        { num: '02', title: '💰 High Demand & Salary', desc: 'Spring Boot developers are among the highest-paid. Average: $120K+/year in US.', extra: '' },
        { num: '03', title: '⚡ Rapid Development', desc: 'Build production-ready apps in minutes, not hours. Focus on features!', extra: '' },
        { num: '04', title: '🔧 Microservices Ready', desc: 'Perfect for microservices with Spring Cloud integration.', extra: '' },
        { num: '05', title: '📚 Rich Ecosystem', desc: 'Spring Security, Spring Data, Spring Cloud, and more.', extra: '<div class="ecosystem-tags"><span class="eco-tag">Security</span><span class="eco-tag">Data</span><span class="eco-tag">Cloud</span><span class="eco-tag">Batch</span></div>' },
        { num: '06', title: '🌐 Cloud Native', desc: 'First-class Docker, Kubernetes, and cloud platform support.', extra: '<div class="cloud-icons"><span class="cloud-icon">☁️ AWS</span><span class="cloud-icon">☁️ Azure</span><span class="cloud-icon">☁️ GCP</span></div>' }
    ];

    const container = document.getElementById('reasons-container');
    reasons.forEach(r => {
        container.innerHTML += `
            <div class="reason-card ${r.featured ? 'featured' : ''}">
                <div class="reason-number">${r.num}</div>
                <div class="reason-content">
                    <h3>${r.title}</h3>
                    <p>${r.desc}</p>
                    ${r.extra}
                </div>
            </div>`;
    });
}

// Comparison views
function initComparisonViews() {
    const content = document.getElementById('comparison-content');
    
    const visualHTML = `
        <div class="comparison-view" id="visual-view">
            <div class="vs-container">
                <div class="framework-box spring">
                    <div class="framework-header"><h3>Spring Framework</h3><span class="framework-badge">Traditional</span></div>
                    <div class="framework-features">
                        <div class="feature negative"><span class="icon">⚙️</span><span>Manual Configuration</span></div>
                        <div class="feature negative"><span class="icon">📝</span><span>XML or Java Config Required</span></div>
                        <div class="feature negative"><span class="icon">🖥️</span><span>External Server Needed</span></div>
                        <div class="feature negative"><span class="icon">📦</span><span>Manual Dependencies</span></div>
                        <div class="feature negative"><span class="icon">⏱️</span><span>Longer Setup Time</span></div>
                        <div class="feature positive"><span class="icon">🎯</span><span>Full Control</span></div>
                    </div>
                </div>
                <div class="vs-badge"><span>VS</span></div>
                <div class="framework-box spring-boot">
                    <div class="framework-header"><h3>Spring Boot</h3><span class="framework-badge recommended">Recommended</span></div>
                    <div class="framework-features">
                        <div class="feature positive"><span class="icon">✨</span><span>Auto-Configuration</span></div>
                        <div class="feature positive"><span class="icon">🚫</span><span>No XML Required</span></div>
                        <div class="feature positive"><span class="icon">🔌</span><span>Embedded Server</span></div>
                        <div class="feature positive"><span class="icon">📦</span><span>Starter Dependencies</span></div>
                        <div class="feature positive"><span class="icon">⚡</span><span>Rapid Development</span></div>
                        <div class="feature positive"><span class="icon">🏭</span><span>Production Ready</span></div>
                    </div>
                </div>
            </div>
        </div>`;

    const codeHTML = `
        <div class="comparison-view" id="code-view" style="display:none">
            <div class="code-comparison-container">
                <div class="code-panel">
                    <div class="code-panel-header"><span class="panel-title">Spring Framework</span><span class="lines-count">~50+ lines of config</span></div>
                    <div class="code-window small">
                        <div class="window-header"><div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="window-title">web.xml</span></div>
                        <div class="code-content"><pre><code><span class="tag">&lt;web-app&gt;</span>
  <span class="tag">&lt;servlet&gt;</span>
    <span class="tag">&lt;servlet-name&gt;</span>dispatcher<span class="tag">&lt;/servlet-name&gt;</span>
    <span class="tag">&lt;servlet-class&gt;</span>
      DispatcherServlet
    <span class="tag">&lt;/servlet-class&gt;</span>
  <span class="tag">&lt;/servlet&gt;</span>
  <span class="comment">&lt;!-- More config... --&gt;</span>
<span class="tag">&lt;/web-app&gt;</span></code></pre></div>
                    </div>
                    <div class="plus-more">+ spring-config.xml, context.xml...</div>
                </div>
                <div class="comparison-arrow"><svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                <div class="code-panel">
                    <div class="code-panel-header success"><span class="panel-title">Spring Boot</span><span class="lines-count">Just 1 annotation!</span></div>
                    <div class="code-window small">
                        <div class="window-header"><div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div><span class="window-title">Application.java</span></div>
                        <div class="code-content"><pre><code><span class="annotation">@SpringBootApplication</span>
<span class="keyword">public class</span> <span class="class-name">Application</span> {
    <span class="keyword">public static void</span> <span class="method">main</span>(String[] args) {
        SpringApplication.<span class="method">run</span>(
            Application.<span class="keyword">class</span>, args);
    }
}
<span class="comment">// That's it! 🎉</span></code></pre></div>
                    </div>
                    <div class="success-badge">✓ Production Ready</div>
                </div>
            </div>
        </div>`;

    const tableHTML = `
        <div class="comparison-view" id="table-view" style="display:none">
            <div class="comparison-table-wrapper">
                <table class="comparison-table">
                    <thead><tr><th>Feature</th><th>Spring Framework</th><th>Spring Boot</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Configuration</strong></td><td><span class="table-badge negative">Manual (XML/Java)</span></td><td><span class="table-badge positive">Auto-configured</span></td></tr>
                        <tr><td><strong>Server</strong></td><td><span class="table-badge negative">External Required</span></td><td><span class="table-badge positive">Embedded</span></td></tr>
                        <tr><td><strong>Dependencies</strong></td><td><span class="table-badge negative">Manual management</span></td><td><span class="table-badge positive">Starter POMs</span></td></tr>
                        <tr><td><strong>Setup Time</strong></td><td><span class="table-badge negative">Hours</span></td><td><span class="table-badge positive">Minutes</span></td></tr>
                        <tr><td><strong>Deployment</strong></td><td><span class="table-badge negative">WAR to server</span></td><td><span class="table-badge positive">JAR (java -jar)</span></td></tr>
                        <tr><td><strong>Monitoring</strong></td><td><span class="table-badge negative">Requires setup</span></td><td><span class="table-badge positive">Actuator built-in</span></td></tr>
                        <tr><td><strong>Learning Curve</strong></td><td><span class="table-badge negative">Steep</span></td><td><span class="table-badge positive">Gentle</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>`;

    content.innerHTML = visualHTML + codeHTML + tableHTML;

    // Toggle functionality
    document.querySelectorAll('.comparison-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.comparison-toggle').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const target = btn.dataset.target;
            document.querySelectorAll('.comparison-view').forEach(v => v.style.display = 'none');
            document.getElementById(target + '-view').style.display = 'block';
        });
    });
}

// Setup content
function initSetupContent() {
    const content = document.getElementById('setup-content');
    
    const initializrHTML = `
        <div class="setup-panel" id="initializr-panel">
            <div class="browser-mockup" style="max-width:700px;margin:0 auto;background:rgba(30,30,50,0.9);border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.1)">
                <div class="browser-header" style="display:flex;align-items:center;gap:1rem;padding:1rem;background:rgba(0,0,0,0.3);border-bottom:1px solid rgba(255,255,255,0.1)">
                    <div class="browser-dots" style="display:flex;gap:0.5rem"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                    <div style="background:rgba(0,0,0,0.3);padding:0.5rem 1rem;border-radius:8px;flex:1;text-align:center;color:rgba(255,255,255,0.7)">🔒 start.spring.io</div>
                </div>
                <div style="padding:2rem">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
                        <div><strong style="color:#6DB33F">Project:</strong> Maven ✓</div>
                        <div><strong style="color:#6DB33F">Language:</strong> Java ✓</div>
                        <div><strong style="color:#6DB33F">Spring Boot:</strong> 3.2.0</div>
                        <div><strong style="color:#6DB33F">Packaging:</strong> JAR</div>
                    </div>
                    <div style="margin-top:1.5rem"><strong style="color:#6DB33F">Dependencies:</strong>
                        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem">
                            <span style="background:rgba(109,179,63,0.2);padding:0.5rem 1rem;border-radius:8px;font-size:0.85rem">Spring Web</span>
                            <span style="background:rgba(109,179,63,0.2);padding:0.5rem 1rem;border-radius:8px;font-size:0.85rem">Spring Data JPA</span>
                            <span style="background:rgba(109,179,63,0.2);padding:0.5rem 1rem;border-radius:8px;font-size:0.85rem">H2 Database</span>
                        </div>
                    </div>
                    <button style="width:100%;margin-top:1.5rem;padding:1rem;background:linear-gradient(135deg,#6DB33F,#34D399);border:none;border-radius:12px;color:white;font-weight:600;font-size:1rem;cursor:pointer">⬇️ GENERATE PROJECT</button>
                </div>
            </div>
            <div style="max-width:400px;margin:2rem auto;background:rgba(30,30,50,0.9);border-radius:12px;padding:1.5rem;border:1px solid rgba(255,255,255,0.1)">
                <h4 style="margin-bottom:1rem">📁 Generated Structure</h4>
                <div style="font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:2">
                    📁 demo/<br>
                    ├── 📁 src/main/java/<br>
                    │   └── ☕ DemoApplication.java<br>
                    ├── 📁 src/main/resources/<br>
                    │   └── ⚙️ application.properties<br>
                    └── 📄 pom.xml
                </div>
            </div>
        </div>`;

    const ideHTML = `
        <div class="setup-panel" id="ide-panel" style="display:none">
            <div style="max-width:600px;margin:0 auto;display:grid;gap:1rem">
                ${[
                    ['1', 'Open Your IDE', 'Launch IntelliJ IDEA, Eclipse, or VS Code'],
                    ['2', 'Create New Project', 'Select "Spring Initializr" or "Spring Starter Project"'],
                    ['3', 'Configure Settings', 'Fill in Group, Artifact, and select dependencies'],
                    ['4', 'Start Coding!', 'Run main class → http://localhost:8080']
                ].map(([n, t, d]) => `
                    <div style="display:flex;gap:1.5rem;background:rgba(30,30,50,0.9);padding:1.5rem;border-radius:12px;border:1px solid rgba(255,255,255,0.1)">
                        <div style="width:50px;height:50px;background:linear-gradient(135deg,#6DB33F,#34D399);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.25rem;flex-shrink:0">${n}</div>
                        <div><h4 style="margin-bottom:0.25rem">${t}</h4><p style="color:rgba(255,255,255,0.7);font-size:0.9rem">${d}</p></div>
                    </div>`).join('')}
            </div>
        </div>`;

    const cliHTML = `
        <div class="setup-panel" id="cli-panel" style="display:none">
            <div style="max-width:700px;margin:0 auto;background:rgba(30,30,50,0.9);border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.1)">
                <div style="display:flex;align-items:center;gap:1rem;padding:1rem;background:rgba(0,0,0,0.3);border-bottom:1px solid rgba(255,255,255,0.1)">
                    <div style="display:flex;gap:0.5rem"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                    <span style="color:rgba(255,255,255,0.7)">Terminal</span>
                </div>
                <div style="padding:1.5rem;font-family:'JetBrains Mono',monospace;font-size:0.9rem;line-height:2">
                    <div><span style="color:#6DB33F">$</span> spring init --dependencies=web,data-jpa my-app</div>
                    <div style="color:rgba(255,255,255,0.5)">Project extracted to 'my-app'</div>
                    <br>
                    <div><span style="color:#6DB33F">$</span> cd my-app && ./mvnw spring-boot:run</div>
                    <div style="color:#6DB33F"><pre style="margin:0.5rem 0">
  .   ____          _            
 /\\\\ / ___'_ __ _ _(_)_ __  __ _ 
( ( )\\___ | '_ | '_| | '_ \\/ _\` |
 \\\\/  ___)| |_)| | | | | || (_| |
  '  |____| .__|_| |_|_| |_\\__, |
 =========|_|==============|___/
 :: Spring Boot ::       (v3.2.0)

Started Application in 2.456 seconds 🚀</pre></div>
                </div>
            </div>
        </div>`;

    content.innerHTML = initializrHTML + ideHTML + cliHTML;

    // Method toggle
    document.querySelectorAll('.setup-method').forEach(method => {
        method.addEventListener('click', () => {
            document.querySelectorAll('.setup-method').forEach(m => m.classList.remove('active'));
            method.classList.add('active');
            
            const target = method.dataset.method;
            document.querySelectorAll('.setup-panel').forEach(p => p.style.display = 'none');
            document.getElementById(target + '-panel').style.display = 'block';
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

// Navigation active state
function initNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 150;
            if (scrollY >= top) current = section.getAttribute('id');
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    });
}

// Stats counter animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                stats.forEach(stat => {
                    const target = parseInt(stat.dataset.count);
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current);
                        }
                    }, 30);
                });
            }
        });
    });

    const statsSection = document.querySelector('.definition-stats');
    if (statsSection) observer.observe(statsSection);
}

// Make scrollToSection available globally
window.scrollToSection = scrollToSection;
