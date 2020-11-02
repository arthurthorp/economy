/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

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

interface CountryBar {
  country: string;
  value: number[];
  background: string;
  borderColor: string;
}

interface CountryLine {
  country: string;
  colorLine: string;
  values: number[];
}

interface CountriesBarInterface {
  countries: CountryBar[];
}

interface CountriesInterface {
  countries: Country[];
}

interface LineCountriesInterface {
  countries: CountryLine[];
}

interface Response {
  bar_chart: CountriesBarInterface;
  pizza_chart: CountriesInterface;
  line_chart: LineCountriesInterface;
}

const Scenario: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasPizza = useRef<HTMLCanvasElement | null>(null);
  const canvasLine = useRef<HTMLCanvasElement | null>(null);

  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const PizzaCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const LineCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    async function LoadCharts(): Promise<void> {
      const { data } = await api.get<Response>('api.json');
      if (canvasRef.current) {
        canvasCtxRef.current = canvasRef.current.getContext('2d');
        const ctx = canvasCtxRef.current;
        const { countries }: CountriesBarInterface = data.bar_chart;

        const barChart = new Chart(ctx!, {
          type: 'bar',
          data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: countries.map(value => {
              return {
                label: value.country,
                backgroundColor: value.background,
                borderColor: value.borderColor,
                borderWidth: 1,
                data: value.value,
              };
            }),
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
      }

      if (canvasPizza.current) {
        PizzaCtxRef.current = canvasPizza.current.getContext('2d');
        const ctxPizza = PizzaCtxRef.current;
        const { countries }: CountriesInterface = data.pizza_chart;

        const PizzaChart = new Chart(ctxPizza!, {
          type: 'pie',
          data: {
            labels: countries.map(value => {
              return value.country;
            }),
            datasets: [
              {
                label: 'Distribuição de empregos dignos',
                data: countries.map(value => {
                  return value.value;
                }),
                backgroundColor: countries.map(value => {
                  return value.background;
                }),
                borderColor: countries.map(value => {
                  return value.borderColor;
                }),
                borderWidth: 1,
              },
            ],
          },
          options: {
            animation: {
              animateScale: true,
            },
          },
        });
      }

      if (canvasLine.current) {
        const { countries }: LineCountriesInterface = data.line_chart;
        LineCtxRef.current = canvasLine.current.getContext('2d');
        const ctxLine = LineCtxRef.current;
        const LineChart = new Chart(ctxLine!, {
          type: 'line',
          data: {
            labels: [
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
            ],
            datasets: countries.map(value => {
              return {
                label: value.country,
                fill: false,
                borderColor: value.colorLine,
                data: value.values,
              };
            }),
          },
          options: {
            animation: {
              animateScale: true,
            },
            maintainAspectRatio: false,
          },
        });
      }
    }

    LoadCharts();
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
        </section>
        <section className="container" id="chart-section">
          <div className="canvas-container">
            <p>Crescimento econômico(%)</p>
            <div className="box-chart">
              <canvas
                ref={canvasRef}
                aria-label="Gráfico em barras representando a distribuição de empregos descentes"
              />
            </div>
          </div>
          <div className="block-charts">
            <div className="canvas-container">
              <p>Distribuição de trabalhos dignos e bem remunerados(%)</p>
              <div className="box-chart">
                <canvas
                  ref={canvasPizza}
                  aria-label="Gráfico circular representando a distribuição de empregos descentes"
                />
              </div>
            </div>
            <div className="canvas-container">
              <p>Taxa de desemprego(%)</p>
              <div className="box-chart">
                <canvas
                  ref={canvasLine}
                  aria-label="Gráfico em linhas representando a taxa de desemprego"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Scenario;
