import { useRef } from "react";

const ScrollSPA = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="scroll-smooth">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-6">
        Task 2
      </h1>

      <nav className="sticky top-0 bg-indigo-600 text-white shadow-lg z-50">
        <div className="flex justify-center gap-8 py-4">
          <button
            onClick={() => homeRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="hover:bg-indigo-700 px-5 py-2 rounded-lg transition"
          >
            Home
          </button>

          <button
            onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="hover:bg-indigo-700 px-5 py-2 rounded-lg transition"
          >
            About
          </button>

          <button
            onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="hover:bg-indigo-700 px-5 py-2 rounded-lg transition"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Home */}
      <section ref={homeRef} className="h-screen bg-blue-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-6">Home</h1>
        <p className="text-xl text-gray-700 max-w-xl ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, iure libero! Facere, dolor tempore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consequuntur unde hic impedit explicabo fugiat officiis ex ipsa ipsam incidunt deleniti a eligendi, possimus repudiandae atque accusantium at placeat corrupti?
          Culpa adipisci doloremque similique, nesciunt sit voluptates, et consequatur ipsam rem vel soluta repellat cumque? Magni atque voluptate blanditiis molestias quod repudiandae inventore dicta iure deleniti quasi nesciunt, quis iusto.
          Error similique sunt a, illum velit numquam aperiam sit quisquam et beatae reiciendis harum modi eius tenetur nobis. Ut, nam nemo! Tenetur vel praesentium aut quas consectetur facilis ipsum dolorum.
          Id, tempora voluptas. Optio, libero! Harum facilis iusto voluptatem! Maiores, molestiae inventore voluptatibus velit labore quisquam. Eligendi maxime quis aliquam minima? Minima exercitationem omnis ipsam sequi voluptas distinctio quasi excepturi.
          Soluta, iure aspernatur pariatur ullam a eos nesciunt aut optio quas illum assumenda velit maiores, dolorum repudiandae consequuntur odio delectus laudantium eveniet at rerum. Aliquam numquam voluptas at accusantium dolores.
        </p>
      </section>

      {/* About */}
      <section ref={aboutRef} className="h-screen bg-green-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-green-700 mb-6">About</h1>
        <p className="text-xl text-gray-700 max-w-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero, eos exercitationem quis distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni voluptatibus inventore quisquam ab, ut pariatur voluptate quod minima. Earum dolorum omnis in, exercitationem tenetur voluptate distinctio totam error eveniet?
          Cumque tempora amet consequuntur perspiciatis corporis natus necessitatibus ipsum iure non eos delectus impedit aliquid tenetur, quidem distinctio quod nihil ut laudantium. Nobis, deleniti corrupti. Doloribus facere dignissimos sint nam.
          Autem commodi deleniti nam sapiente ducimus porro consequuntur doloremque, odio, qui assumenda asperiores vero voluptatibus tempore provident. Eligendi ab enim, rerum provident deserunt, quia, eaque repellat commodi fugit cum quo!
          Adipisci mollitia minus tenetur ab accusantium assumenda odio quos natus veniam maiores facilis ea odit ipsum fugiat vitae voluptas accusamus esse molestias, beatae excepturi commodi! Repudiandae explicabo voluptas corporis! Ea.
          Numquam dolores cum consequuntur sapiente labore facilis nemo delectus blanditiis dolore aspernatur, ea minus asperiores magni deserunt quaerat? Quo aliquam optio delectus suscipit fugiat ea quis nam debitis blanditiis ex?
        </p>
      </section>

      {/* Contact */}
      <section ref={contactRef} className="h-screen bg-pink-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-pink-700 mb-6">Contact</h1>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <p className="text-lg font-semibold">Joel A</p>
          <p className="text-gray-600">joel@gmail.com</p>
          <p className="text-gray-600">+91 9876543210</p>
          <p className="text-gray-600">Chennai, Tamil Nadu</p>
        </div>
      </section>
    </div>
  );
};

export default ScrollSPA;