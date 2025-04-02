import React, { useState, useEffect } from "react";
import cvData from "../data/cv.json";

const Cv = () => {
  const [cv, setCv] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load contact data
    setCv(cvData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">Cargando...</div>
    );
  }

  return (
    <section id="cv" className="to-muted">
        <div>
            </div><div class="px-4 sm:px-0">
            <h3 class="text-base/7 font-semibold text-gray-900">Hitos Académicos</h3>
            <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">soy autodidacta de corazón, pero estos son mis estudios formales</p>
        </div>
        <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm/6 font-medium text-gray-900">2013</dt>
                <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Título Diseño Industrial</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm/6 font-medium text-gray-900">2014</dt>
                <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Curso "Herramientas para el diseño y gestión de proyectos" (PUC)</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm/6 font-medium text-gray-900">2015</dt>
                <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Diploma Emprendimiento y Administración de empresas (UChile) </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm/6 font-medium text-gray-900">2024</dt>
                <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Curso becado por Becas Capital Humano "desarrollo de aplicaciones Front - End" (Adalid) </dd>
            </div>

            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm/6 font-medium text-gray-900">2025....</dt>
                <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Curso ... </dd>
            </div>

            </dl>
        </div>
    </section>
  );
};

export default Cv;