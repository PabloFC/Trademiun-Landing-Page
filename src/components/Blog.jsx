import articles from "../store/dataBlog.json";
import oro from "../assets/img/blog/oro.png";
import nike from "../assets/img/blog/nike.jpg";
import petroleo from "../assets/img/blog/petroleo.jpg";

const images = {
  oro,
  nike,
  petroleo,
};

const Blog = () => {
  return (
    <section className="py-4" id="blog">
      <h2 className="text-center text-3xl font-bold mb-20">
        Últimos artículos
      </h2>
      <div className="flex flex-col sm:flex-row mx-auto justify-center">
        {articles.articles.map((article) => (
          <div
            key={article.id}
            className="w-full mb-4 basis-1/2 border-2 border-solid rounded-xl"
          >
            <div>
              <img
                src={images[article.image]}
                className="w-full"
                alt={article.altText}
              />
            </div>
            <div className="mb-2 p-8">
              <h3 className="text-primario text-2xl font-bold mt-4 mb-4">
                {article.title}
              </h3>
              <p className="text-xl">{article.description}</p>
            </div>
            <div className="flex justify-end mr-4 py-4">
              <a href={article.link}>
                <button className="bg-secundario px-6 py-2 text-white mt-2 rounded-3xl">
                  Leer más
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
