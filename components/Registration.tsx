import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';
import { RegistrationModal } from './RegistrationModal';

export const Registration: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<'day1' | 'day1-2'>('day1-2');

  const handleOpenModal = (ticketType: 'day1' | 'day1-2') => {
    setSelectedTicket(ticketType);
    setIsModalOpen(true);
  };

  return (
    <section id="inscricao" className="py-20 relative overflow-hidden bg-brand-dark">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 to-brand-dark"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-brand-neon/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-brand-neon/30 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-[0_0_50px_rgba(0,209,255,0.1)]">

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Adquira sua <span className="text-brand-neon drop-shadow-[0_0_10px_rgba(0,209,255,0.5)]">Experiência</span>
          </h2>



          {/* Ticket Options Grid */}
          <div className="flex justify-center mb-10">

            {/* Day 1 Only Option */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-brand-neon/50 transition-all duration-300 group max-w-md w-full">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full mb-3">
                  DIA 01
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Palestra + Autógrafos</h3>
                <p className="text-gray-400 text-sm mb-4">Experiência noturna exclusiva</p>
              </div>

              <ul className="space-y-3 mb-6 text-left">
                <li className="flex items-start gap-2 text-gray-300 text-sm">
                  <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                  <span>Palestra com Diego e Fred</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm">
                  <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                  <span>Sessão de Autógrafos</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm">
                  <CheckCircle2 size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                  <span>Networking exclusivo</span>
                </li>
              </ul>

              <div className="mb-6">
                <p className="text-3xl font-bold text-white mb-2">R$ 99,00</p>
                <p className="text-brand-neon font-bold text-sm">
                  ASSOCIADOS CREDINOR TEM DESCONTO! <br /> PROCURE SEU GERENTE
                </p>
              </div>


              <Button
                onClick={() => handleOpenModal('day1')}
                variant="outline"
                className="w-full group-hover:shadow-[0_0_20px_rgba(0,209,255,0.3)]"
              >
                GARANTIR DIA 01
              </Button>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            *Vagas limitadas por cidade. Garanta agora!
          </p>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ticketType={selectedTicket}
      />
    </section>
  );
};