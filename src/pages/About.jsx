const About = () => {
  return (
    <>
      <main class='container mx-auto px-6 py-12'>
        <section class='flex flex-wrap md:flex-nowrap'>
          <div class='md:w-1/2'>
            <h1 class='text-4xl font-bold mb-2'>About DripBeans</h1>
            <p class='text-sm text-gray-500 mb-6'>Hand-brewed Coffee</p>
            <p class='mb-4'>
              Drip Beans Coffee is an independently-owned, enterprising
              Vietnamese Coffee shop in the centralized commerce area of Little
              Saigon, in Westminster, CA. At Dripbeans Coffee, you can find the
              best Vietnamese iced coffee, for we use coffee beans that are
              imported from the Highlands of Vietnam.
            </p>
            <p class='mb-4'>
              Our coffee is freshly grind & brewed by hands each and every day
              by traditional slow dripped methods, using condensed milk to
              create a perfect balance of sweet, creamy, and bitterness.
            </p>
            <p>
              Drip Beans Coffee also offers a much revered and sought-after
              variety of sweet desserts, such as refreshing shaved-ice plates.
              Each of these desserts are unique to Drip Beans Coffee and
              handcrafted in-house.
            </p>
          </div>
          <div class='md:w-1/2'>
            <img
              src='https://placehold.co/600x400'
              alt='Iced coffee in a clear cup with DRIPBEANS COFFEE branding, placed on a metal surface, representing a product of DaVien Coffee'
              class='rounded-lg shadow-lg'
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
