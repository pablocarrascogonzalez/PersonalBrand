import React from 'react';

const getAiCommand = (lang) => {
    const isEn = lang === 'en';
    return {
        description: isEn 
            ? 'AI applied to development, management, and strategic criteria' 
            : 'IA aplicada a programación, gestión y criterio de uso',
        output: (
            <div className="output-section">
                <div className="skills-category">
                    <strong>{isEn ? '[AI Applied to Software & Systems]' : '[IA aplicada a programación y sistemas]'}</strong>
                    <span>{isEn ? 'Python development acceleration (scripts, automation pipelines, REST API consumption)' : 'Apoyo en desarrollo en Python (scripts, automatizaciones, consumo de APIs)'}</span>
                    <span>{isEn ? 'Code generation and validation for Odoo (business logic, models, integrations)' : 'Generación y validación de código para Odoo (lógica, modelos, integraciones)'}</span>
                    <span>{isEn ? 'Error diagnostics, code refactoring, and quality improvements' : 'Análisis de errores, refactorización y mejora de código existente'}</span>
                    <span>{isEn ? 'Clear, maintainable technical documentation' : 'Documentación técnica clara y mantenible'}</span>
                </div>

                <div className="terminal-note" style={{ marginTop: '12px' }}>
                    {isEn 
                        ? 'AI accelerates execution, but final decisions and accountability are strictly human.' 
                        : 'La IA acelera mi trabajo, pero la decisión final y la responsabilidad son siempre humanas.'}
                </div>

                <br />

                <div className="skills-category">
                    <strong>{isEn ? '[AI Applied to Management & Operations]' : '[IA aplicada a gestión y trabajo diario]'}</strong>
                    <span>{isEn ? 'Complex information synthesis for strategic decision-making' : 'Síntesis de información compleja para toma de decisiones'}</span>
                    <span>{isEn ? 'Drafting comprehensive functional and technical specifications' : 'Apoyo en redacción de documentación funcional y técnica'}</span>
                    <span>{isEn ? 'Executive presentation synthesis and training curriculum preparation' : 'Preparación de presentaciones ejecutivas y materiales de formación'}</span>
                    <span>{isEn ? 'Process workflow mapping and operational efficiency proposals' : 'Análisis de procesos y propuestas de mejora operativa'}</span>
                    <span>{isEn ? 'Task prioritization, backlog refinement, and roadmap planning' : 'Organización de tareas, priorización y planificación'}</span>
                </div>

                <br />

                <div className="skills-category">
                    <strong>{isEn ? '[My Principles & Philosophy]' : '[Cómo la uso (mi criterio)]'}</strong>
                    <span>{isEn ? 'As a co-pilot, never a replacement' : 'Como copiloto, no como sustituto'}</span>
                    <span>{isEn ? 'To gain velocity without losing architectural control' : 'Para ganar velocidad sin perder control'}</span>
                    <span>{isEn ? 'To remove friction, not add gratuitous complexity' : 'Para reducir fricción, no para añadir complejidad'}</span>
                    <span>{isEn ? 'Always backed by human review and rigorous validation' : 'Siempre con revisión y validación propia'}</span>
                </div>
            </div>
        )
    };
};

export const getCommands = (lang = 'es', onLanguageChange) => {
    const isEn = lang === 'en';
    const aiCmd = getAiCommand(lang);

    return {
        help: {
            description: isEn ? 'List all available commands' : 'Listar todos los comandos disponibles',
            output: (
                <div className="help-grid">
                    <div className="cmd-item"><span>pablo --about</span> - {isEn ? 'Who am I?' : '¿Quién soy?'}</div>
                    <div className="cmd-item"><span>pablo --impact</span> - {isEn ? 'Key milestones & track record' : 'Hitos profesionales'}</div>
                    <div className="cmd-item"><span>pablo --skills</span> - {isEn ? 'Technical & Leadership skills' : 'Habilidades Técnicas y Soft'}</div>
                    <div className="cmd-item"><span>pablo --ai</span> - {isEn ? 'Applied Artificial Intelligence' : 'Inteligencia Artificial'}</div>
                    <div className="cmd-item"><span>pablo --contact</span> - {isEn ? 'Get in touch' : 'Contacto'}</div>
                    <div className="cmd-item"><span>lang [es|en]</span> - {isEn ? 'Switch language (es/en)' : 'Cambiar idioma (es/en)'}</div>
                    <div className="cmd-item"><span>clear</span> - {isEn ? 'Clear terminal screen' : 'Limpiar terminal'}</div>
                </div>
            )
        },
        'pablo --about': {
            description: isEn ? 'Personal bio and background' : 'Biografía personal',
            output: (
                <div className="output-section">
                    <p>
                        {isEn ? "Hello, I'm " : "Hola, soy "}
                        <strong className="highlight">Pablo Carrasco González</strong>.
                    </p>
                    <p>
                        {isEn 
                            ? 'Project Manager, Head of Digital Transformation and Head of Data Platform at an enterprise group in Seville. I specialize in leading data platform strategy, coordinating multi-disciplinary teams, streamlining operational processes, and rolling out high-impact technology systems (ERPs, automation pipelines).'
                            : 'Project Manager, Responsable de Transformación Digital y Head of Data Platform en un grupo de empresas en Sevilla. Me especializo en coordinar equipos, liderar la plataforma y estrategia de datos, optimizar procesos operativos e implantar tecnologías (ERPs, automatizaciones) que generan impacto real.'}
                    </p>
                    <p>
                        {isEn ? 'I analyze, execute, and deliver measurable results.' : 'Analizo, ejecuto y mido resultados.'}
                    </p>
                </div>
            )
        },
        'pablo --impact': {
            description: isEn ? 'Key achievements and leadership impact' : 'Logros clave',
            output: (
                <div className="output-section">
                    <div className="impact-item">
                        <strong>{isEn ? '➝ Head of Data Platform & Data Ecosystem' : '➝ Head of Data Platform & Ecosistema de Datos'}</strong>
                        <p>
                            {isEn 
                                ? 'Designing and leading the enterprise data platform: source centralization, data governance, and analytical enablement for strategic decision-making.' 
                                : 'Diseño y liderazgo de la plataforma de datos: centralización de fuentes, gobierno y habilitación analítica para la toma de decisiones.'}
                        </p>
                    </div>
                    <div className="impact-item">
                        <strong>{isEn ? '➝ ERP Implementation (Pantoja Grupo Logístico)' : '➝ Implantación ERP (Pantoja Grupo Logístico)'}</strong>
                        <p>
                            {isEn 
                                ? 'Coordinated 5 business divisions (>400 employees). Cross-departmental operational standardization.' 
                                : 'Coordinación de 5 divisiones (>400 empleados). Estandarización de procesos interdepartamentales.'}
                        </p>
                    </div>
                    <div className="impact-item">
                        <strong>{isEn ? '➝ Operational Optimization' : '➝ Optimización Operativa'}</strong>
                        <p>
                            {isEn 
                                ? 'End-to-end workflow digitalization, drastically compressing operational processing cycles.' 
                                : 'Digitalización de flujos de trabajo, reduciendo tiempos de gestión.'}
                        </p>
                    </div>
                    <div className="impact-item">
                        <strong>{isEn ? '➝ Digital Culture & Adoption' : '➝ Desarrollo de Cultura Digital'}</strong>
                        <p>
                            {isEn 
                                ? 'Training, change management, and continuous mentoring for key users to ensure seamless tech adoption.' 
                                : 'Formación y acompañamiento a usuarios clave para asegurar la adopción tecnológica.'}
                        </p>
                    </div>
                </div>
            )
        },
        'pablo --skills': {
            description: isEn ? 'Skills and technological stack' : 'Lista de habilidades',
            output: (
                <div className="output-section">
                    <div className="skills-category">
                        <strong>{isEn ? '[Core Competencies & Leadership]' : '[Habilidades Principales]'}</strong>
                        <span>{isEn ? 'Analytical & Strategic Thinking' : 'Capacidad de análisis'}</span>
                        <span>{isEn ? 'Stress Resilience & Execution Under Pressure' : 'Gestión del estrés'}</span>
                        <span>{isEn ? 'Decision-Making & Judgment' : 'Toma de decisiones'}</span>
                        <span>{isEn ? 'High Autonomy & Ownership' : 'Autonomía'}</span>
                        <span>{isEn ? 'Complex Problem Solving' : 'Resolución de problemas'}</span>
                    </div>
                    <br />
                    <div className="skills-category">
                        <strong>{isEn ? '[Technology & Data Stack]' : '[Stack Tecnológico & Data]'}</strong>
                        <span>Python</span>
                        <span>Data Platforms & SQL</span>
                        <span>Odoo (Functional & Dev)</span>
                        <span>REST APIs & Integrations</span>
                        <span>VS Code</span>
                        <span>Microsoft 365 / Excel (Advanced)</span>
                    </div>
                </div>
            )
        },
        'pablo --ai': aiCmd,
        'pablo --ia': aiCmd,
        'pablo --contact': {
            description: isEn ? 'Contact information' : 'Información de contacto',
            output: (
                <div className="output-section">
                    <p>{isEn ? "Let's connect!" : '¿Hablamos?'}</p>
                    <p> Email: <a href="mailto:pablocgz01@gmail.com">pablocgz01@gmail.com</a></p>
                    <p> LinkedIn: <a href="https://www.linkedin.com/in/pablo-carrasco-gonzalez" target="_blank" rel="noopener noreferrer">linkedin.com/in/pablo-carrasco-gonzalez</a></p>
                </div>
            )
        },
        'lang es': {
            description: 'Cambiar idioma a Español',
            output: (
                <div className="output-section">
                    <p className="highlight">✓ Idioma establecido en Español.</p>
                </div>
            ),
            action: () => onLanguageChange && onLanguageChange('es')
        },
        'lang en': {
            description: 'Switch language to English',
            output: (
                <div className="output-section">
                    <p className="highlight">✓ Language set to English.</p>
                </div>
            ),
            action: () => onLanguageChange && onLanguageChange('en')
        },
        'pablo --en': {
            description: 'Switch to English',
            output: <div className="output-section"><p className="highlight">✓ Language switched to English.</p></div>,
            action: () => onLanguageChange && onLanguageChange('en')
        },
        'pablo --es': {
            description: 'Cambiar a Español',
            output: <div className="output-section"><p className="highlight">✓ Idioma cambiado a español.</p></div>,
            action: () => onLanguageChange && onLanguageChange('es')
        }
    };
};

export const getWelcomeMessage = (lang = 'es') => {
    const isEn = lang === 'en';
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date().toLocaleDateString(isEn ? 'en-US' : 'es-ES', dateOptions);

    return (
        <div className="welcome-message">
            <p className="highlight">
                {isEn ? `Last login: ${formattedDate} on ttys001` : `Último acceso: ${formattedDate} en ttys001`}
            </p>
            <br />
            <p>{isEn ? 'Pablo Carrasco System [Version 1.0.0]' : 'Sistema Pablo Carrasco [Versión 1.0.0]'}</p>
            <p>© {new Date().getFullYear()} Pablo Carrasco. {isEn ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
            <br />
            <p>
                {isEn 
                    ? <>Type <span className="cmd">help</span> to explore available commands or <span className="cmd">lang es</span> to switch back.</>
                    : <>Escribe <span className="cmd">help</span> para ver los comandos disponibles o <span className="cmd">lang en</span> para inglés.</>}
            </p>
        </div>
    );
};

// Default fallback exports for backwards compatibility
export const commands = getCommands('es');
export const welcomeMessage = getWelcomeMessage('es');
