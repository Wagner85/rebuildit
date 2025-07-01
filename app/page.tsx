'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-blue-400">
                        Rebuild<span className="text-white">IT</span>
                    </Link>
                    
                    <div className="hidden md:flex space-x-8">
                        <a href="#services" className="hover:text-blue-400 transition-colors">Serviços</a>
                        <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a>
                        <a href="https://automation.aimentory.com.br/form/ed448c19-60a8-446e-b5de-096c6cef742b" className="hover:text-blue-400 transition-colors">Contato</a>
                    </div>

                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <div className="w-full h-0.5 bg-white"></div>
                            <div className="w-full h-0.5 bg-white"></div>
                            <div className="w-full h-0.5 bg-white"></div>
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-t border-slate-700">
                        <div className="container mx-auto px-6 py-4 space-y-4">
                            <a href="#services" className="block hover:text-blue-400 transition-colors">Serviços</a>
                            <a href="#about" className="block hover:text-blue-400 transition-colors">Sobre</a>
                            <a href="https://automation.aimentory.com.br/form/ed448c19-60a8-446e-b5de-096c6cef742b" className="block hover:text-blue-400 transition-colors">Contato</a>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Transforme sua
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Infraestrutura</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                        Consultoria especializada em infraestrutura cloud e auditoria de conformidades para empresas que buscam excelência tecnológica
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://automation.aimentory.com.br/form/ed448c19-60a8-446e-b5de-096c6cef742b" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                            Solicitar Consultoria
                        </a>
                        <a href="#services" className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg text-lg font-semibold transition-all">
                            Conhecer Serviços
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-slate-800/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Nossos <span className="text-blue-400">Serviços</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Cloud Infrastructure */}
                        <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all">
                            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Infraestrutura Cloud</h3>
                            <p className="text-slate-300 mb-6">
                                Migração, otimização e gestão de infraestrutura em nuvem. 
                                Especialistas em AWS, Azure e Google Cloud Platform.
                            </p>
                            <ul className="space-y-2 text-slate-400">
                                <li>• Migração para nuvem</li>
                                <li>• Otimização de custos</li>
                                <li>• Arquitetura escalável</li>
                                <li>• Monitoramento 24/7</li>
                            </ul>
                        </div>

                        {/* Compliance Scanning */}
                        <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all">
                            <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Scan de Conformidades</h3>
                            <p className="text-slate-300 mb-6">
                                Auditoria completa de segurança e conformidade. 
                                Identificação de vulnerabilidades e adequação às normas.
                            </p>
                            <ul className="space-y-2 text-slate-400">
                                <li>• Auditoria de segurança</li>
                                <li>• Conformidade LGPD</li>
                                <li>• Relatórios detalhados</li>
                                <li>• Plano de correções</li>
                            </ul>
                        </div>

                        {/* AI Automation */}
                        <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all">
                            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Automação com IA</h3>
                            <p className="text-slate-300 mb-6">
                                Implementação de soluções de automação inteligente e IA para otimizar processos e reduzir custos.
                            </p>
                            <ul className="space-y-2 text-slate-400">
                                <li>• Otimização de processos</li>
                                <li>• Redução de custos</li>
                                <li>• Implementação de IA</li>
                                <li>• Integração de sistemas</li>
                            </ul>
                        </div>

                        {/* Observability */}
                        <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all">
                            <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-8a7 7 0 1114 0H3z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Observabilidade</h3>
                            <p className="text-slate-300 mb-6">
                                Monitoramento proativo, análise de logs e métricas para garantir a saúde e performance de seus sistemas.
                            </p>
                            <ul className="space-y-2 text-slate-400">
                                <li>• Monitoramento de infraestrutura</li>
                                <li>• Análise de logs e métricas</li>
                                <li>• Dashboards personalizados</li>
                                <li>• Alertas e notificações</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Por que escolher a <span className="text-blue-400">Rebuild IT</span>?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold">10+</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Anos de Experiência</h3>
                            <p className="text-slate-400">Década de expertise em infraestrutura e segurança</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold">24/7</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Suporte Contínuo</h3>
                            <p className="text-slate-400">Monitoramento e suporte técnico ininterrupto</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold">100%</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Satisfação Garantida</h3>
                            <p className="text-slate-400">Compromisso total com resultados excepcionais</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-slate-800/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Sobre a <span className="text-blue-400">Rebuild IT</span>
                    </h2>
                    <div className="max-w-4xl mx-auto text-center text-slate-300 text-lg">
                        <p className="mb-4">
                            A Rebuild IT é uma consultoria especializada em infraestrutura cloud e auditoria de conformidades, dedicada a ajudar empresas a otimizar suas operações e garantir a segurança de seus dados. Com uma equipe de especialistas altamente qualificados e anos de experiência no mercado, oferecemos soluções personalizadas que impulsionam a inovação e a eficiência.
                        </p>
                        <p>
                            Nosso compromisso é com a excelência tecnológica e a satisfação total de nossos clientes. Acreditamos que uma infraestrutura robusta e em conformidade é a base para o sucesso no ambiente digital atual.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Pronto para transformar sua infraestrutura?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Entre em contato conosco e descubra como podemos ajudar sua empresa
                    </p>
                    <a href="https://automation.aimentory.com.br/form/ed448c19-60a8-446e-b5de-096c6cef742b" className="px-10 py-4 bg-white text-blue-600 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
                        Falar com Especialista
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-2xl font-bold text-blue-400 mb-4">
                                Rebuild<span className="text-white">IT</span>
                            </div>
                            <p className="text-slate-400">
                                Consultoria especializada em infraestrutura cloud e conformidades
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Contato</h4>
                            <div className="space-y-2 text-slate-400">
                                <p>contato@rebuildit.com.br</p>
                                <p>Rio de Janeiro, RJ</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Serviços</h4>
                            <div className="space-y-2 text-slate-400">
                                <p>Infraestrutura Cloud</p>
                                <p>Scan de Conformidades</p>
                                <p>Automação com IA</p>
                                <p>Observabilidade</p>
                                <p>Consultoria Técnica</p>
                                <p>Suporte 24/7</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
                        <p>&copy; 2024 Rebuild IT. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
