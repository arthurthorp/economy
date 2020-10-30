/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

import { createDocumentRegistry } from 'typescript';
import Aside from '../components/Aside';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

import api from '../services/api';

import MapaImg from '../assets/img/cenario-atual/mapa.jpg';

interface Country {
  country: string;
  value: number;
  background: string;
  borderColor: string;
}

interface CountriesInterface {
  countries: Country[];
}

const Scenario: React.FC = () => {
  const canvasRef   = useRef<HTMLCanvasElement | null>(null);
  const canvasPizza = useRef<HTMLCanvasElement | null>(null);
  const canvasLine  = useRef<HTMLCanvasElement | null>(null);

  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const PizzaCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const LineCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    async function getJSON(): Promise<object> {
      const response = await api.get('api.json');
      return response;
    }
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      api.get('api.json').then(response => {
        const { countries }: CountriesInterface = response.data.bar_chart;

        const barChart = new Chart(ctx!, {
          type: 'bar',
          data: {
            labels: countries.map((value, i) => {
              return value.country;
            }),
            datasets: [
              {
                label: 'Desenvolvimento econômico',
                data: countries.map((value, i) => {
                  return value.value;
                }),
                backgroundColor: countries.map((value, i) => {
                  return value.background;
                }),
                borderColor: countries.map((value, i) => {
                  return value.borderColor;
                }),
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });

        const pizzaChart = 1;
      });
    }

    if(PizzaCtxRef){

    }
  }, []);

  return (
    <>
      <Aside page="cenario" />

      <main id="scenario">
        <section className="container">
          <img src={MapaImg} alt="Mapa do planeta Terra" />
        </section>
        <Breadcrumb page="Cenário atual" />
        <section className="container">
          <h1>Cenário atual</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at ex tortor. Etiam luctus nisl ac risus hendrerit luctus. Fusce nec
            ultricies dui, sed vulputate est. Maecenas tincidunt ultrices tortor
            vel malesuada. Aliquam erat volutpat. In quis dui eget tortor ornare
            eleifend. Phasellus sed libero ex. Aliquam mattis mauris vitae urna
            sagittis, sit amet rutrum neque aliquam. Nam vel iaculis est. Donec
            faucibus felis in ex dapibus, vel fermentum nisi convallis. Cras
            feugiat, massa porttitor finibus euismod, sapien sapien vehicula
            eros, sed posuere erat turpis dapibus dui. Nunc et mauris ut arcu
            tristique tristique non id lectus. Proin sit amet lorem et dolor
            venenatis sagittis non eget metus. Integer eget ipsum urna.
          </p>

          <canvas ref={canvasRef}/>

          <div className="box-chart">
            <canvas ref={canvasPizza} />
            <canvas ref={canvasLine} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Scenario;
