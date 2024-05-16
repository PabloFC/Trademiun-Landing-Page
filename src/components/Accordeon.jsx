import { Accordion } from "flowbite-react";

const Accordeon = () => {
  return (
    <section>
      <h2 className="text-center text-3xl font-bold mb-20">
        Preguntas Frecuentes
      </h2>

      <Accordion collapseAll className="py-12 border-0 shadow-xl">
        <Accordion.Panel>
          <Accordion.Title className="text-lg text-primario font-bold">
            ¿Qué es Trademiun?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-lg text-primario">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis corporis recusandae laboriosam voluptas fugit,
              dignissimos optio ullam quibusdam et ipsa illum cumque sapiente
              cum aut molestiae magni a dicta aliquam molestias porro doloribus
              unde officiis nisi similique. Maxime, harum enim!
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="text-lg text-primario font-bold">
            ¿Cómo opera la pasarela de pagos?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-lg text-primario">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              quisquam non distinctio nemo quam, nisi, aliquid atque eaque
              similique consequuntur sed. Minus neque dolorem soluta facilis
              quos adipisci incidunt assumenda pariatur, obcaecati corrupti
              facere ipsum iste nostrum cumque, quas similique!
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="text-lg text-primario font-bold">
            ¿Cómo puedo confirmar si una operación se ha realizado
            correctamente?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-lg text-primario">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              eligendi. Ea, quia laudantium quos, eligendi molestiae iste
              dolores placeat perferendis temporibus ratione quis voluptates eum
              corporis officiis quidem et neque accusantium, soluta dolorem
              alias nobis vitae adipisci. Voluptatibus, similique molestias.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="text-lg text-primario font-bold">
            ¿Qué opciones existen para realizar devoluciones?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-lg text-primario">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              eligendi. Ea, quia laudantium quos, eligendi molestiae iste
              dolores placeat perferendis temporibus ratione quis voluptates eum
              corporis officiis quidem et neque accusantium, soluta dolorem
              alias nobis vitae adipisci. Voluptatibus, similique molestias.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="text-lg text-primario font-bold">
            ¿Cuál es la manera de ponerse en contacto con la pasarela de pagos?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-lg text-primario">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              eligendi. Ea, quia laudantium quos, eligendi molestiae iste
              dolores placeat perferendis temporibus ratione quis voluptates eum
              corporis officiis quidem et neque accusantium, soluta dolorem
              alias nobis vitae adipisci. Voluptatibus, similique molestias.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </section>
  );
};

export default Accordeon;
