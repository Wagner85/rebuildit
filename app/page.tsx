'use client';

import { useState } from 'react';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
            {/* Header */}
            <header className="relative z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-400">
                        Rebuild<span className="text-white">IT</span>
                    </div>
                    
                    <div className="hidden md:flex space-x-8">
                        <a href="#services" className="hover:text-blue-400 transition-colors">Serviços</a>
                        <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a>
                        <a href="#contact" className="hover:text-blue-400 transition-colors">Contato</a>
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
                            <a href="#contact" className="block hover:text-blue-400 transition-colors">Contato</a>
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
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                            Solicitar Consultoria
                        </button>
                        <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg text-lg font-semibold transition-all">
                            Conhecer Serviços
                        </button>
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Pronto para transformar sua infraestrutura?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Entre em contato conosco e descubra como podemos ajudar sua empresa
                    </p>
                    <button className="px-10 py-4 bg-white text-blue-600 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
                        Falar com Especialista
                    </button>
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
                                <p>(11) 9999-9999</p>
                                <p>São Paulo, SP</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Serviços</h4>
                            <div className="space-y-2 text-slate-400">
                                <p>Infraestrutura Cloud</p>
                                <p>Scan de Conformidades</p>
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