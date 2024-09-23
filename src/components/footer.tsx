// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Padaria Sanfra. Todos os direitos
          reservados.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            Termos de Serviço
          </a>
          <a href="#" className="hover:text-gray-400">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-gray-400">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
